// ── Local Avatar imports ──────────────────────────────────────────
// 20 male + 20 female avatars downloaded from pravatar.cc

import male1 from '../assets/avatars/male_1.jpg';
import male2 from '../assets/avatars/male_2.jpg';
import male3 from '../assets/avatars/male_3.jpg';
import male4 from '../assets/avatars/male_4.jpg';
import male5 from '../assets/avatars/male_5.jpg';
import male6 from '../assets/avatars/male_6.jpg';
import male7 from '../assets/avatars/male_7.jpg';
import male8 from '../assets/avatars/male_8.jpg';
import male9 from '../assets/avatars/male_9.jpg';
import male10 from '../assets/avatars/male_10.jpg';
import male11 from '../assets/avatars/male_11.jpg';
import male12 from '../assets/avatars/male_12.jpg';
import male13 from '../assets/avatars/male_13.jpg';
import male14 from '../assets/avatars/male_14.jpg';
import male15 from '../assets/avatars/male_15.jpg';
import male16 from '../assets/avatars/male_16.jpg';
import male17 from '../assets/avatars/male_17.jpg';
import male18 from '../assets/avatars/male_18.jpg';
import male19 from '../assets/avatars/male_19.jpg';
import male20 from '../assets/avatars/male_20.jpg';

import female1 from '../assets/avatars/female_1.jpg';
import female2 from '../assets/avatars/female_2.jpg';
import female3 from '../assets/avatars/female_3.jpg';
import female4 from '../assets/avatars/female_4.jpg';
import female5 from '../assets/avatars/female_5.jpg';
import female6 from '../assets/avatars/female_6.jpg';
import female7 from '../assets/avatars/female_7.jpg';
import female8 from '../assets/avatars/female_8.jpg';
import female9 from '../assets/avatars/female_9.jpg';
import female10 from '../assets/avatars/female_10.jpg';
import female11 from '../assets/avatars/female_11.jpg';
import female12 from '../assets/avatars/female_12.jpg';
import female13 from '../assets/avatars/female_13.jpg';
import female14 from '../assets/avatars/female_14.jpg';
import female15 from '../assets/avatars/female_15.jpg';
import female16 from '../assets/avatars/female_16.jpg';
import female17 from '../assets/avatars/female_17.jpg';
import female18 from '../assets/avatars/female_18.jpg';
import female19 from '../assets/avatars/female_19.jpg';
import female20 from '../assets/avatars/female_20.jpg';

export const MALE_AVATARS: string[] = [
  male1, male2, male3, male4, male5, male6, male7, male8, male9, male10,
  male11, male12, male13, male14, male15, male16, male17, male18, male19, male20,
];

export const FEMALE_AVATARS: string[] = [
  female1, female2, female3, female4, female5, female6, female7, female8, female9, female10,
  female11, female12, female13, female14, female15, female16, female17, female18, female19, female20,
];

// ── Female relation keywords (Indian family terms + English) ─────
const FEMALE_RELATIONS = new Set([
  'mother', 'grandmother', 'great-grandmother', 'daughter', 'sister',
  'wife', 'aunt', 'niece', 'granddaughter',
  'daughter-in-law', 'mother-in-law', 'sister-in-law',
  'chachi', 'tai', 'mami', 'mausi', 'bua', 'nani', 'dadi', 'didi',
  'bhabhi', 'sali',
  'great-aunt', 'second aunt', 'distant aunt',
]);

// ── Common Indian female name endings / patterns ─────────────────
const FEMALE_NAME_SUFFIXES = [
  'ita', 'ini', 'ika', 'ita', 'a', 'i', 'ee', 'devi', 'amma',
  'tha', 'ya', 'sha', 'na', 'la', 'ra', 'ka', 'ma', 'ri', 'ti',
];

// Explicitly female Indian first names (common ones)
const FEMALE_FIRST_NAMES = new Set([
  'sita', 'sunita', 'geeta', 'savitri', 'kamla', 'sharda', 'savita',
  'nisha', 'kriti', 'divya', 'pooja', 'tanvi', 'pushpa', 'lata',
  'ritu', 'ankita', 'meena', 'sarla', 'nandini', 'ishita', 'ananya',
  'kavita', 'neha', 'priya', 'sneha', 'anjali', 'sudha', 'rekha',
  'hema', 'uma', 'lavanya', 'sarita', 'shraddha', 'kiran', 'tanya',
  'rukmini', 'isha', 'sunanda', 'neelam', 'manju', 'prachi',
  'radha', 'padmavathi', 'swapna', 'meenakshi', 'devaki', 'sreelakshmi',
  'hiral', 'diya', 'sulochana', 'lipsa', 'protima', 'priti',
  'vrinda', 'gauri', 'simran', 'harpreet', 'roshni', 'shruti',
  'pallavi', 'mahi', 'tara', 'chandra', 'sonal', 'aditi', 'meera',
  'pinki', 'priyanka', 'naina', 'rhea', 'leela', 'kavya', 'anika',
  'sunaina', 'preethi', 'santosh',
]);

// Explicitly male first names
const MALE_FIRST_NAMES = new Set([
  'ramesh', 'anil', 'rajesh', 'rahul', 'rohan', 'amit', 'vikram',
  'hariram', 'mohan', 'suresh', 'deepak', 'manish', 'arjun', 'jagdish',
  'pramod', 'ramakant', 'hemant', 'dinesh', 'gaurav', 'harsh', 'kabir',
  'vishwanath', 'kunal', 'siddharth', 'rakesh', 'kartik', 'yash',
  'varun', 'aarav', 'vivaan', 'bharat', 'girish', 'sahil', 'tejas',
  'naresh', 'akash', 'ritesh', 'prakash', 'dev', 'neel', 'ishan',
  'santosh', 'alok', 'umesh', 'rohit', 'karan', 'pranav', 'chirag',
  'vinay', 'advaith', 'ashok', 'aryan', 'saurabh', 'pratik',
  'gopal', 'karthik', 'mahaveer', 'raj', 'sumer', 'biswajit', 'anup',
  'bhavesh', 'parth', 'venkat', 'aditya', 'krishnadas', 'nikhil',
  'rajan', 'tarun', 'deepak', 'omkar', 'swaraj', 'manpreet', 'gurpreet',
  'dilip', 'rabindra', 'subhranshu', 'baldev', 'veer', 'mihir',
  'gopinath', 'jitendra', 'kamlesh', 'sanjay', 'hemant',
]);

/**
 * Determine gender from relation keyword and name.
 * Returns 'male' or 'female'.
 */
export function detectGender(name: string, relation: string): 'male' | 'female' {
  const relLower = relation.toLowerCase().trim();

  // Check relation first (most reliable)
  if (FEMALE_RELATIONS.has(relLower)) return 'female';

  // Check specific relation keywords within the string
  const femRelKeywords = [
    'mother', 'grandmother', 'daughter', 'sister', 'wife', 'aunt',
    'niece', 'granddaughter', 'chachi', 'tai', 'mami', 'mausi', 'bua',
    'nani', 'dadi', 'didi', 'bhabhi', 'sali',
  ];
  for (const kw of femRelKeywords) {
    if (relLower.includes(kw)) return 'female';
  }

  const maleRelKeywords = [
    'father', 'grandfather', 'son', 'brother', 'husband', 'uncle',
    'nephew', 'grandson', 'chacha', 'tau', 'mama', 'mausa', 'fufa',
    'nana', 'dada', 'bhaiya', 'jija', 'sala', 'self',
    'father-in-law', 'brother-in-law', 'son-in-law',
  ];
  for (const kw of maleRelKeywords) {
    if (relLower.includes(kw)) return 'male';
  }

  // Check first name
  const firstName = name.split(' ')[0].toLowerCase();
  if (FEMALE_FIRST_NAMES.has(firstName)) return 'female';
  if (MALE_FIRST_NAMES.has(firstName)) return 'male';

  // Fallback: default to male
  return 'male';
}

/**
 * Simple hash of a string to a number. Deterministic.
 */
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/**
 * Get a gender-appropriate avatar for a member.
 * Uses the member ID for deterministic assignment.
 */
export function getAvatar(id: string, name: string, relation: string): string {
  const gender = detectGender(name, relation);
  const pool = gender === 'female' ? FEMALE_AVATARS : MALE_AVATARS;
  const index = simpleHash(id) % pool.length;
  return pool[index];
}

/**
 * Get a random avatar for a new member based on gender.
 * Uses a random index for variety.
 */
export function getRandomAvatar(gender: 'male' | 'female'): string {
  const pool = gender === 'female' ? FEMALE_AVATARS : MALE_AVATARS;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}
