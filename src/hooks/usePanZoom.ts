import { useRef, useState, useCallback, useEffect } from 'react';

export interface Transform {
  x: number;
  y: number;
  scale: number;
}

interface UsePanZoomOptions {
  /** Minimum zoom scale (default 0.05) */
  minScale?: number;
  /** Maximum zoom scale (default 2.5) */
  maxScale?: number;
  /** Initial transform */
  initial?: Transform;
}

/**
 * Provides infinite-canvas pan & zoom via CSS transforms.
 *
 * Supports:
 *  - Mouse drag to pan (background only — clicks on children pass through)
 *  - Scroll-wheel to zoom (towards cursor)
 *  - Touch: one-finger drag to pan, two-finger pinch to zoom
 *
 * Returns refs/props to attach to the container, plus the current transform
 * and helpers (setTransform, isPanning flag, clickGuard).
 */
export function usePanZoom(opts: UsePanZoomOptions = {}) {
  const { minScale = 0.05, maxScale = 2.5, initial } = opts;

  const [transform, setTransform] = useState<Transform>(
    initial ?? { x: 0, y: 0, scale: 1 },
  );

  // Keep a synchronous mirror of transform so touch/mouse handlers
  // that run outside React's render cycle can read the latest value.
  const transformRef = useRef(transform);
  transformRef.current = transform;

  const containerRef = useRef<HTMLDivElement>(null);

  // ─── Internal refs ───────────────────────────────────────────
  const panStart = useRef<{ sx: number; sy: number; tx: number; ty: number } | null>(null);
  const [isPanning, setIsPanning] = useState(false);
  const hasDragged = useRef(false);

  // Touch state
  const prevPinchDist = useRef<number | null>(null);
  const prevPinchMid  = useRef<{ x: number; y: number } | null>(null);

  // ─── Clamp helper ────────────────────────────────────────────
  const clampScale = useCallback(
    (s: number) => Math.min(maxScale, Math.max(minScale, s)),
    [minScale, maxScale],
  );

  // ─── Wheel zoom (towards cursor) ────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handler = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const d  = -e.deltaY * 0.001;

      setTransform(t => {
        const ns = clampScale(t.scale + d);
        const k  = ns / t.scale;
        return { scale: ns, x: mx - k * (mx - t.x), y: my - k * (my - t.y) };
      });
    };

    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, [clampScale]);

  // ─── Mouse pan (document-level move/up so we don't steal child clicks) ──
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!panStart.current) return;

      const dx = e.clientX - panStart.current.sx;
      const dy = e.clientY - panStart.current.sy;
      const startTx = panStart.current.tx;
      const startTy = panStart.current.ty;

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        hasDragged.current = true;
      }

      setTransform(() => ({
        scale: transformRef.current.scale,
        x: startTx + dx,
        y: startTy + dy,
      }));
    };

    const onMouseUp = () => {
      if (!panStart.current) return;
      panStart.current = null;
      setIsPanning(false);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      // Only start pan if clicking directly on the canvas background,
      // NOT on a child node. This lets child onClick handlers work normally.
      if (e.target !== e.currentTarget) return;
      if (e.button !== 0) return; // left click only

      panStart.current = {
        sx: e.clientX,
        sy: e.clientY,
        tx: transformRef.current.x,
        ty: transformRef.current.y,
      };
      hasDragged.current = false;
      setIsPanning(true);
    },
    [],
  );

  // ─── Touch: pan + pinch-to-zoom ──────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const dist = (a: Touch, b: Touch) =>
      Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

    const mid = (a: Touch, b: Touch) => ({
      x: (a.clientX + b.clientX) / 2,
      y: (a.clientY + b.clientY) / 2,
    });

    const handleStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const t = e.touches[0];
        // Read transform synchronously from ref
        const cur = transformRef.current;
        panStart.current = {
          sx: t.clientX,
          sy: t.clientY,
          tx: cur.x,
          ty: cur.y,
        };
        hasDragged.current = false;
        setIsPanning(true);
      } else if (e.touches.length === 2) {
        // Cancel any single-finger pan when second finger arrives
        panStart.current = null;
        prevPinchDist.current = dist(e.touches[0], e.touches[1]);
        const rect = el.getBoundingClientRect();
        const m = mid(e.touches[0], e.touches[1]);
        prevPinchMid.current = { x: m.x - rect.left, y: m.y - rect.top };
      }
    };

    const handleMove = (e: TouchEvent) => {
      e.preventDefault(); // prevent browser scroll/zoom

      if (e.touches.length === 1 && panStart.current) {
        const t = e.touches[0];
        const dx = t.clientX - panStart.current.sx;
        const dy = t.clientY - panStart.current.sy;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasDragged.current = true;

        const startTx = panStart.current.tx;
        const startTy = panStart.current.ty;
        setTransform(prev => ({
          ...prev,
          x: startTx + dx,
          y: startTy + dy,
        }));
      } else if (e.touches.length === 2 && prevPinchDist.current !== null && prevPinchMid.current !== null) {
        const d = dist(e.touches[0], e.touches[1]);
        const ratio = d / prevPinchDist.current;
        const rect = el.getBoundingClientRect();
        const m = mid(e.touches[0], e.touches[1]);
        const mx = m.x - rect.left;
        const my = m.y - rect.top;

        // Pan delta from pinch midpoint movement
        const panDx = mx - prevPinchMid.current.x;
        const panDy = my - prevPinchMid.current.y;

        setTransform(t => {
          const ns = clampScale(t.scale * ratio);
          const k  = ns / t.scale;
          return {
            scale: ns,
            x: mx - k * (mx - t.x) + panDx,
            y: my - k * (my - t.y) + panDy,
          };
        });

        prevPinchDist.current = d;
        prevPinchMid.current  = { x: mx, y: my };
        hasDragged.current = true;
      }
    };

    const handleEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) {
        prevPinchDist.current = null;
        prevPinchMid.current  = null;
      }
      if (e.touches.length === 0) {
        panStart.current = null;
        setIsPanning(false);
      }
      // If one finger remains after lifting one, restart single-finger pan
      if (e.touches.length === 1) {
        const t = e.touches[0];
        const cur = transformRef.current;
        panStart.current = {
          sx: t.clientX,
          sy: t.clientY,
          tx: cur.x,
          ty: cur.y,
        };
      }
    };

    el.addEventListener('touchstart',  handleStart, { passive: false });
    el.addEventListener('touchmove',   handleMove,  { passive: false });
    el.addEventListener('touchend',    handleEnd);
    el.addEventListener('touchcancel', handleEnd);

    return () => {
      el.removeEventListener('touchstart',  handleStart);
      el.removeEventListener('touchmove',   handleMove);
      el.removeEventListener('touchend',    handleEnd);
      el.removeEventListener('touchcancel', handleEnd);
    };
  }, [minScale, maxScale, clampScale]);

  // ─── Click guard: prevents click propagation after drag ──────
  const clickGuard = useCallback(
    (e: React.MouseEvent, action: () => void) => {
      if (hasDragged.current) {
        e.stopPropagation();
        e.preventDefault();
        return;
      }
      action();
    },
    [],
  );

  return {
    /** Ref to attach to the panning container */
    containerRef,
    /** Current transform state */
    transform,
    /** Setter for transform */
    setTransform,
    /** Whether the user is currently dragging/panning */
    isPanning,
    /** Guard that eats click events that were actually drags */
    clickGuard,
    /** Event handlers + ref for the container */
    containerProps: {
      ref: containerRef,
      onMouseDown,
    },
    /** CSS transform string for the inner content */
    transformStyle: {
      transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
      transformOrigin: '0 0' as const,
    },
  };
}
