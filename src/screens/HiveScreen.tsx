import React, { useMemo, useState, useCallback } from 'react';
import { Member } from '../data/mockData';
import { useStore, getParents, getChildren, getSiblings } from '../store/useStore';
import MemberPopup from '../components/MemberPopup';
import { ChevronDown, Plus } from 'lucide-react';
import { usePanZoom } from '../hooks/usePanZoom';
import './HiveScreen.css';

// ── Helpers ──────────────────────────────────────────────────────

/** Relation types that are always "immediate family" */
const IMMEDIATE_RELATIONS = new Set([
  'Father', 'Mother', 'Son', 'Daughter',
  'Brother', 'Sister', 'Husband', 'Wife',
  'Bhaiya', 'Didi',
]);

/** Get immediate family of the current user */
function getImmediateFamily(members: Member[], selfId: string): Member[] {
  const self = members.find(m => m.id === selfId);
  if (!self) return [];

  const result: Member[] = [];
  const added = new Set<string>();

  const add = (m: Member) => {
    if (!added.has(m.id) && m.id !== selfId) {
      added.add(m.id);
      result.push(m);
    }
  };

  // Parents (structural)
  const parents = getParents(members, selfId);
  parents.forEach(add);

  // Siblings (structural)
  const siblings = getSiblings(members, selfId);
  siblings.forEach(add);

  // Spouse (shares children with self)
  if (self.children?.length) {
    for (const m of members) {
      if (m.id === selfId) continue;
      if (m.children?.some(cid => self.children!.includes(cid))) {
        add(m);
      }
    }
  }

  // Children of self (structural)
  const children = getChildren(members, selfId);
  children.forEach(add);

  // Also include members whose relation tag marks them as immediate family
  // (handles cases where the tree links are missing, e.g. Wife/Son without shared children array)
  for (const m of members) {
    if (IMMEDIATE_RELATIONS.has(m.relation)) {
      add(m);
    }
  }

  return result;
}

/** Get the branch relatives for a given member (their connected family
    excluding the user's immediate circle) */
function getBranchRelatives(members: Member[], memberId: string, selfId: string, immediateIds: Set<string>): Member[] {
  const result: Member[] = [];
  const added = new Set<string>();

  const add = (m: Member) => {
    if (!added.has(m.id) && m.id !== memberId && m.id !== selfId && !immediateIds.has(m.id)) {
      added.add(m.id);
      result.push(m);
    }
  };

  // Parents of the member
  getParents(members, memberId).forEach(add);

  // Children of the member
  getChildren(members, memberId).forEach(add);

  // Siblings of the member
  getSiblings(members, memberId).forEach(add);

  // If member is a parent: get their parents (grandparents) and siblings
  const memberParents = getParents(members, memberId);
  memberParents.forEach(p => {
    getParents(members, p.id).forEach(add);
    getSiblings(members, p.id).forEach(add);
  });

  // Children's children (grandchildren through this member)
  const memberChildren = getChildren(members, memberId);
  memberChildren.forEach(c => {
    getChildren(members, c.id).forEach(add);
  });

  return result;
}

/** Orbital positions for N nodes around a center */
function orbitalPositions(
  cx: number, cy: number, 
  count: number, 
  radius: number, 
  startAngle: number = -90
): Array<{ x: number; y: number }> {
  const positions: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < count; i++) {
    const angle = (startAngle + (360 / count) * i) * (Math.PI / 180);
    positions.push({
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    });
  }
  return positions;
}

/** Branch cluster positions (fanned out from a node).
 *  Uses multiple concentric rings when count > ringMax to avoid overlapping. */
function branchPositions(
  sourceX: number, sourceY: number,
  centerX: number, centerY: number,
  count: number,
  baseRadius: number
): Array<{ x: number; y: number }> {
  // Direction away from center
  const dx = sourceX - centerX;
  const dy = sourceY - centerY;
  const baseAngle = Math.atan2(dy, dx) * (180 / Math.PI);

  const ringMax = 6; // max nodes per ring before wrapping
  const positions: Array<{ x: number; y: number }> = [];
  let placed = 0;

  for (let ring = 0; placed < count; ring++) {
    const remaining = count - placed;
    const inThisRing = Math.min(remaining, ringMax);
    const r = baseRadius + ring * 135;
    const spread = Math.min(160, 25 * inThisRing);

    for (let i = 0; i < inThisRing; i++) {
      const angleOffset = inThisRing === 1
        ? 0
        : -spread / 2 + (spread / (inThisRing - 1)) * i;
      const angle = (baseAngle + angleOffset) * (Math.PI / 180);
      positions.push({
        x: sourceX + r * Math.cos(angle),
        y: sourceY + r * Math.sin(angle),
      });
      placed++;
    }
  }
  return positions;
}

// Node sizes for position calculations
const SELF_W = 110, SELF_H = 122;
const NODE_W = 90,  NODE_H = 100;
const BRANCH_W = 66, BRANCH_H = 74;

// ─── Main Component ──────────────────────────────────────────────

export default function HiveScreen() {
  const { currentUser, members } = useStore();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [popupId, setPopupId] = useState<string | null>(null);

  const selfId = currentUser?.id ?? members.find(m => m.relation === 'Self')?.id ?? '';
  const selfMember = members.find(m => m.id === selfId);

  // Immediate family members (the primary ring)
  const immediate = useMemo(
    () => getImmediateFamily(members, selfId),
    [members, selfId]
  );

  const immediateIds = useMemo(
    () => new Set(immediate.map(m => m.id)),
    [immediate]
  );

  // Branch relatives for the currently expanded node
  const branchMembers = useMemo(() => {
    if (!expandedId) return [];
    return getBranchRelatives(members, expandedId, selfId, immediateIds);
  }, [members, expandedId, selfId, immediateIds]);

  // ── Layout calculations ─────────────────────────────────────────
  // Scale orbit radius based on how many immediate family nodes there are
  const nodeCount = immediate.length;
  const ORBIT_R = Math.max(160, 60 * nodeCount / Math.PI);
  const CX = 500, CY = 420;
  const BRANCH_R = 210;

  // Pre-compute branch counts for all immediate members (avoids O(N²) in render loop)
  const branchCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const m of immediate) {
      map.set(m.id, getBranchRelatives(members, m.id, selfId, immediateIds).length);
    }
    return map;
  }, [members, immediate, selfId, immediateIds]);

  const ringPos = useMemo(
    () => orbitalPositions(CX, CY, immediate.length, ORBIT_R),
    [immediate.length, ORBIT_R]
  );

  const expandedIdx = expandedId ? immediate.findIndex(m => m.id === expandedId) : -1;
  const expandedSourcePos = expandedIdx >= 0 ? ringPos[expandedIdx] : null;

  const branchPos = useMemo(() => {
    if (!expandedSourcePos || branchMembers.length === 0) return [];
    return branchPositions(
      expandedSourcePos.x, expandedSourcePos.y,
      CX, CY,
      branchMembers.length,
      BRANCH_R
    );
  }, [expandedSourcePos, branchMembers.length]);

  // ── Pan & Zoom ──────────────────────────────────────────────────
  const { containerProps, transformStyle, isPanning } = usePanZoom({
    minScale: 0.1,
    maxScale: 3,
    initial: { x: 0, y: 0, scale: 0.85 },
  });

  // ── Handlers ────────────────────────────────────────────────────
  const onNodeTap = useCallback((memberId: string) => {
    if (memberId === selfId) return; // Don't expand self
    setExpandedId(prev => prev === memberId ? null : memberId);
  }, [selfId]);

  const onNodeLongPress = useCallback((memberId: string) => {
    setPopupId(memberId);
  }, []);

  const onBranchNodeClick = useCallback((memberId: string) => {
    setPopupId(memberId);
  }, []);

  const closeExpanded = useCallback(() => {
    setExpandedId(null);
  }, []);

  if (!selfMember) return null;

  // ── Render ──────────────────────────────────────────────────────

  return (
    <div className="hive-screen">
      {/* Animated Background */}
      <div className="hive-bg" />
      <div className="hive-dots" />

      {/* Header */}
      <header className="hive-header animate-fiu">
        <div className="hive-header-left">
          <h2>Your <span>Hive</span></h2>
          <p>Tap a family member to explore their branch</p>
        </div>
        <div className="hive-hint">
          ⬡ Tap to expand · Double-click for details
        </div>
      </header>

      {/* Close overlay when branch is expanded */}
      {expandedId && (
        <div className="hive-close-overlay" onClick={closeExpanded} />
      )}

      {/* Canvas — infinite pan & zoom */}
      <div
        className={`hive-canvas${isPanning ? ' dragging' : ''}`}
        {...containerProps}
      >
        <div className="hive-world" style={transformStyle}>
          {/* SVG connection lines */}
          <svg className="hive-svg" overflow="visible">
            {/* Lines from self to immediate family */}
            {immediate.map((m, i) => {
              const pos = ringPos[i];
              if (!pos) return null;
              const isMat = m.branch === 'Maternal';
              return (
                <line
                  key={`line-${m.id}`}
                  className="conn-line"
                  x1={CX}
                  y1={CY}
                  x2={pos.x}
                  y2={pos.y}
                  stroke={isMat ? '#06b6d4' : '#f59e0b'}
                  strokeOpacity="0.35"
                  strokeWidth="1.5"
                />
              );
            })}

            {/* Lines from expanded node to its branch members */}
            {expandedSourcePos && branchMembers.map((m, i) => {
              const bpos = branchPos[i];
              if (!bpos) return null;
              return (
                <line
                  key={`branch-line-${m.id}`}
                  className="branch-line"
                  x1={expandedSourcePos.x}
                  y1={expandedSourcePos.y}
                  x2={bpos.x}
                  y2={bpos.y}
                  stroke="#a78bfa"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                />
              );
            })}
          </svg>

          {/* ── Self node (center) ───────────────────────────────── */}
          <div
            className="hex-node self-node animate-fiu"
            style={{
              left: CX - SELF_W / 2,
              top: CY - SELF_H / 2,
            }}
            onClick={() => setPopupId(selfId)}
          >
            <div className="hex-pulse" />
            <div className="hex-glow self-glow" />
            <div className="hex-border self-border" />
            <div className="hex-shape">
              <img src={selfMember.avatar} alt={selfMember.name} />
            </div>
            <div className="hex-self-badge">You</div>
            <div className="hex-label">
              <span className="hex-name">{selfMember.name}</span>
              <span className="hex-relation">{selfMember.profession}</span>
            </div>
          </div>

          {/* ── Immediate family ring ────────────────────────────── */}
          {immediate.map((member, i) => {
            const pos = ringPos[i];
            if (!pos) return null;

            const isExpanded = expandedId === member.id;
            const isMat = member.branch === 'Maternal';
            const branchType = isMat ? 'maternal' : 'paternal';
            
            // Use pre-computed branch count
            const branchCount = branchCounts.get(member.id) ?? 0;

            return (
              <div
                key={member.id}
                className={`hex-node animate-fiu${member.isDeceased ? ' deceased' : ''}`}
                style={{
                  left: pos.x - NODE_W / 2,
                  top: pos.y - NODE_H / 2,
                  animationDelay: `${0.1 + i * 0.06}s`,
                  zIndex: isExpanded ? 15 : 2,
                }}
                onClick={() => onNodeTap(member.id)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  onNodeLongPress(member.id);
                }}
                onDoubleClick={() => onNodeLongPress(member.id)}
              >
                <div className={`hex-glow ${branchType}`} />
                <div className={`hex-border ${branchType}`} />
                <div className="hex-shape">
                  <img src={member.avatar} alt={member.name} />
                </div>
                
                {branchCount > 0 && (
                  <div className="hex-count">{branchCount}</div>
                )}

                {branchCount > 0 && (
                  <div className={`hex-expand-dot${isExpanded ? ' expanded' : ''}`}>
                    <Plus size={10} />
                  </div>
                )}

                <div className="hex-label">
                  <span className="hex-name">{member.name}</span>
                  <span className="hex-relation">{member.relation}</span>
                </div>
                {member.isDeceased && <div className="hex-deceased-badge">✝ Late</div>}
              </div>
            );
          })}

          {/* ── Expanded branch cluster ──────────────────────────── */}
          {expandedId && expandedSourcePos && branchMembers.length > 0 && (
            <div className="branch-cluster">
              {branchMembers.map((member, i) => {
                const bpos = branchPos[i];
                if (!bpos) return null;

                const isMat = member.branch === 'Maternal';
                const branchType = isMat ? 'maternal' : 'paternal';

                return (
                  <div
                    key={member.id}
                    className={`branch-node${member.isDeceased ? ' deceased' : ''}`}
                    style={{
                      left: bpos.x - BRANCH_W / 2,
                      top: bpos.y - BRANCH_H / 2,
                      animationDelay: `${i * 0.05}s`,
                    }}
                    onClick={() => onBranchNodeClick(member.id)}
                  >
                    <div className={`branch-hex-border ${branchType}`} />
                    <div className="branch-hex-shape">
                      <img src={member.avatar} alt={member.name} />
                    </div>
                    <div className="branch-label">
                      <span className="branch-name">{member.name}</span>
                      <span className="branch-relation">{member.relation}</span>
                    </div>
                    {member.isDeceased && <div className="branch-deceased-badge">✝ Late</div>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Member Popup */}
      {popupId && (
        <MemberPopup
          memberId={popupId}
          onClose={() => setPopupId(null)}
        />
      )}
    </div>
  );
}
