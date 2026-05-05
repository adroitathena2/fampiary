import { getAvatar } from './avatars';

export type Member = {
  id: string;
  name: string;
  relation: string; // e.g. "Cousin", "Mausi"
  city: string;
  phone: string;
  profession: string;
  skills: string[];
  avatar: string;
  branch: string; // e.g. "Maternal", "Paternal"
  generation: number; // 0 = Self/Cousins, 1 = Parents/Aunts/Uncles, 2 = Grandparents, ...
  children?: string[]; // IDs of children
  isLocal?: boolean;
  isAdmin?: boolean;
  isDeceased?: boolean; // Mark member as "Late" (deceased)
  userTags?: Record<string, string[]>;
};

// Bump this version whenever MOCK_MEMBERS structure changes to force localStorage refresh
export const DATA_VERSION = 9;

export const MOCK_MEMBERS: Member[] = [
  // ── Generation 1 — Parents ────────────────────────────────────────────────
  // 3. Father
  { id: '3', name: 'Rajeshwar Sitalaji Dodal', relation: 'Father', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 1, children: ['1', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'], isDeceased: false },
  // 4. Mother
  { id: '4', name: 'Dodal', relation: 'Mother', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 1, children: ['1', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'], isDeceased: false },

  // ── Generation 1 — Paternal Uncles ─────────────────────────────────────────
  // 17. Paternal Uncle 1
  { id: 'pu1', name: 'Rambhau Dodal', relation: 'Paternal Uncle', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 1 },
  // 18. Paternal Uncle 2
  { id: 'pu2', name: 'Jaykumar Dodal', relation: 'Paternal Uncle', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 1 },
  // 19. Paternal Uncle 3
  { id: 'pu3', name: 'Padmakar Dodal', relation: 'Paternal Uncle', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 1 },
  // 20. Paternal Aunt (Aatya)
  { id: 'pa1', name: 'Acham', relation: 'Paternal Aunt (Aatya)', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 1 },

  // ── Generation 1 — Paternal Uncle Wives ────────────────────────────────────
  // 30. Paternal Aunt 1 (wife of Rambhau)
  { id: 'paw1', name: 'Sashikala Rambhau Dodal', relation: 'Paternal Aunt', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 1 },
  // 31. Paternal Aunt 2 (wife of Jaykumar)
  { id: 'paw2', name: 'Jaykumar Dodal', relation: 'Paternal Aunt', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 1 },
  // 32. Paternal Aunt 3 (wife of Padmakar)
  { id: 'paw3', name: 'Kasturi Padmakar Dodal', relation: 'Paternal Aunt', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 1 },

  // ── Generation 0 — Main (Self) ────────────────────────────────────────────
  // 1. Main - Usha Paratwar
  { id: '1', name: 'Usha Paratwar', relation: 'Self', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0, children: ['d1', 'd2', 'd3', 'son1'], isLocal: true, isAdmin: true },
  // 2. Husband
  { id: '2', name: 'Rajendrakumar Paratwar', relation: 'Husband', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0, children: ['d1', 'd2', 'd3', 'son1'] },

  // ── Generation 0 — Siblings of Usha ────────────────────────────────────────
  // 9. Sibling 1
  { id: 's1', name: 'Suman Saktepar', relation: 'Sister', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0 },
  // 10. Sibling 2
  { id: 's2', name: 'Sunanda Kandi', relation: 'Sister', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0 },
  // 11. Sibling 3
  { id: 's3', name: 'Chalanabai Saktepar', relation: 'Sister', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0 },
  // 12. Sibling 4
  { id: 's4', name: 'Shitalchand Dodal', relation: 'Brother', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0, children: ['n1', 'n2', 'nw4', 'nw5'] },
  // 13. Sibling 5
  { id: 's5', name: 'Vishnukumar Dodal', relation: 'Brother', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0, children: ['nw1', 'n3'] },
  // 14. Sibling 6
  { id: 's6', name: 'Vibhavari Acham', relation: 'Sister', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0 },
  // 15. Sibling 7
  { id: 's7', name: 'Suhas Dodal', relation: 'Brother', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0, children: ['nw6', 'nw7'] },
  // 16. Sibling 8
  { id: 's8', name: 'Pratibha Yambal', relation: 'Sister', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0 },

  // ── Generation 0 — Sister-in-laws (wives of brothers) ──────────────────────
  // 33. Sister-in-law 1 (wife of Shitalchand)
  { id: 'sil1', name: 'Varsha Shitalchand Dodal', relation: 'Sister-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0, children: ['n1', 'n2', 'nw4', 'nw5'] },
  // 34. Sister-in-law 2 (wife of Vishnukumar)
  { id: 'sil2', name: 'Shaila Vishnukumar Dodal', relation: 'Sister-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0, children: ['nw1', 'n3'] },
  // 35. Sister-in-law 3 (wife of Suhas)
  { id: 'sil3', name: 'Pooja Suhas Dodal', relation: 'Sister-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0, children: ['nw6', 'nw7'] },

  // ── Generation 0 — Brother-in-laws (husbands of sisters) ───────────────────
  // 44. Brother-in-law 1 (husband of Suman)
  { id: 'bil1', name: 'Rukhoba Saktepar', relation: 'Brother-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0 },
  // 45. Brother-in-law 2 (husband of Sunanda)
  { id: 'bil2', name: 'Nirmal Kandi', relation: 'Brother-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0, children: ['nw8'] },
  // 46. Brother-in-law 3 (husband of Chalanabai)
  { id: 'bil3', name: 'Sadanand Saktepar', relation: 'Brother-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0 },
  // 47. Brother-in-law 4 (husband of Vibhavari)
  { id: 'bil4', name: 'Nemichand Acham', relation: 'Brother-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0 },
  // 48. Brother-in-law 5 (husband of Pratibha)
  { id: 'bil5', name: 'Suresh Yambal', relation: 'Brother-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: 0 },

  // ── Generation -1 — Daughters & Son of Usha ────────────────────────────────
  // 5. Daughter 1
  { id: 'd1', name: 'Bhavna Ambudkar', relation: 'Daughter', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1, children: ['gs1'] },
  // 6. Daughter 2
  { id: 'd2', name: 'Aparna Ambhure', relation: 'Daughter', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1, children: ['gs2'] },
  // 7. Daughter 3
  { id: 'd3', name: 'Sonali Mehta', relation: 'Daughter', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1, children: ['gs3', 'gs4'] },
  // 8. Son
  { id: 'son1', name: 'Kamlesh Paratwar', relation: 'Son', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1, children: ['gs5'] },

  // ── Generation -1 — Sons-in-law ────────────────────────────────────────────
  // 21. Son-in-law 1 (husband of Bhavna)
  { id: 'sil_d1', name: 'Deepak Ambudkar', relation: 'Son-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1, children: ['gs1'] },
  // 23. Son-in-law 2 (husband of Aparna)
  { id: 'sil_d2', name: 'Abhay Ambhure', relation: 'Son-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1, children: ['gs2'] },
  // 25. Son-in-law 3 (husband of Sonali)
  { id: 'sil_d3', name: 'Abhay Mehta', relation: 'Son-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1, children: ['gs3', 'gs4'] },

  // ── Generation -1 — Daughter-in-law ────────────────────────────────────────
  // 28. Daughter-in-law (wife of Kamlesh)
  { id: 'dil1', name: 'Kavita Paratwar', relation: 'Daughter-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1, children: ['gs5'] },

  // ── Generation -1 — Nieces & Nephews (children of siblings) ────────────────
  // 36. Niece 1 (daughter of Shitalchand)
  { id: 'n1', name: 'Madhuri Kale', relation: 'Niece', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1 },
  // 38. Niece 2 (daughter of Shitalchand)
  { id: 'n2', name: 'Swapna Dhobale', relation: 'Niece', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1 },
  // 39. Niece 3 (daughter of Vishnukumar)
  { id: 'n3', name: 'Sampada Jain', relation: 'Niece', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1 },
  // 37. Nephew 1 (son of Vishnukumar)
  { id: 'nw1', name: 'Kailash Vishnukumar Dodal', relation: 'Nephew', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1 },
  // 40. Nephew 2 (son of Shitalchand)
  { id: 'nw4', name: 'Snehal Shitalchand Dodal', relation: 'Nephew', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1 },
  // 41. Nephew 3 (son of Shitalchand)
  { id: 'nw5', name: 'Ankush Shitalchand Dodal', relation: 'Nephew', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1 },
  // 42. Nephew 4 (son of Suhas)
  { id: 'nw6', name: 'Rohan Suhas Dodal', relation: 'Nephew', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1 },
  // 43. Nephew 5 (son of Suhas)
  { id: 'nw7', name: 'Pratik Suhas Dodal', relation: 'Nephew', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1 },

  // ── Generation -1 — Nephew of Sunanda (via Nirmal Kandi) ───────────────────
  // 49. Nephew (son of Nirmal Kandi / Sunanda)
  { id: 'nw8', name: 'Sanjay Nirmal Kandi', relation: 'Nephew', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1, children: [] },

  // ── Generation -1 — Daughter-in-law of Sanjay Kandi ────────────────────────
  // 50. Daughter-in-law (wife of Sanjay Kandi)
  { id: 'dil2', name: 'Sneha Sanjay Kandi', relation: 'Daughter-in-law', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -1 },

  // ── Generation -2 — Grandchildren of Usha ──────────────────────────────────
  // 22. Grandson (son of Bhavna & Deepak)
  { id: 'gs1', name: 'Shravan Deepak Ambudkar', relation: 'Grandson', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -2 },
  // 24. Grandson (son of Aparna & Abhay Ambhure)
  { id: 'gs2', name: 'Arya Ambhure', relation: 'Grandson', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -2 },
  // 26. Grandson (son of Sonali & Abhay Mehta)
  { id: 'gs3', name: 'Shaurya Mehta', relation: 'Grandson', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -2 },
  // 27. Grandson (son of Sonali & Abhay Mehta)
  { id: 'gs4', name: 'Shlok Mehta', relation: 'Grandson', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -2 },
  // 29. Grandson (son of Kamlesh & Kavita)
  { id: 'gs5', name: 'Keyur Paratwar', relation: 'Grandson', city: '', phone: '', profession: '', skills: [], avatar: '', branch: 'Paternal', generation: -2 },
];

// Assign local gender-appropriate avatars to all members
MOCK_MEMBERS.forEach(m => {
  m.avatar = getAvatar(m.id, m.name, m.relation);
});

export type SwarmSignal = {
  id: string;
  memberId: string;
  message: string;
  city: string;
  timestamp: string;
  active: boolean;
};

export const MOCK_SIGNALS: SwarmSignal[] = [];

export const BRANCHES = ['Paternal'];
export const CITIES = Array.from(new Set(MOCK_MEMBERS.map(m => m.city).filter(Boolean)));
export const PROFESSIONS = Array.from(new Set(MOCK_MEMBERS.map(m => m.profession).filter(Boolean)));

export const RELATION_TYPES = [
  'Father', 'Mother', 'Son', 'Daughter',
  'Brother', 'Sister', 'Husband', 'Wife',
  'Grandfather', 'Grandmother', 'Grandson', 'Granddaughter',
  'Uncle', 'Aunt', 'Nephew', 'Niece',
  'Cousin', 'Second Cousin',
  'Father-in-law', 'Mother-in-law', 'Son-in-law', 'Daughter-in-law',
  'Brother-in-law', 'Sister-in-law',
  'Paternal Uncle', 'Paternal Aunt', 'Paternal Aunt (Aatya)',
  // Indian relation names
  'Chacha', 'Chachi', 'Tau', 'Tai',
  'Mama', 'Mami', 'Mausi', 'Mausa',
  'Bua', 'Fufa', 'Nana', 'Nani',
  'Dada', 'Dadi', 'Bhaiya', 'Didi',
  'Jija', 'Bhabhi', 'Sala', 'Sali',
  'Self',
];