// ── Local Avatar imports ──────────────────────────────────────────
// Using 2 generic avatars: male.jpg and female.jpg

import maleAvatar from '../assets/male.jpg';
import femaleAvatar from '../assets/female.jpg';

export const MALE_AVATARS: string[] = [maleAvatar];
export const FEMALE_AVATARS: string[] = [femaleAvatar];

// ── Female relation keywords (Indian family terms + English) ─────
const FEMALE_RELATIONS = new Set([
  'mother', 'grandmother', 'great-grandmother', 'daughter', 'sister',
  'wife', 'aunt', 'niece', 'granddaughter',
  'daughter-in-law', 'mother-in-law', 'sister-in-law',
  'chachi', 'tai', 'mami', 'mausi', 'bua', 'nani', 'dadi', 'didi',
  'bhabhi', 'sali',
  'great-aunt', 'second aunt', 'distant aunt',
  'paternal aunt', 'paternal aunt (aatya)',
]);

// Explicitly female Indian first names (common ones)
const FEMALE_FIRST_NAMES = new Set([
  'usha', 'bhavna', 'aparna', 'sonali', 'kavita', 'suman', 'sunanda',
  'chalanabai', 'vibhavari', 'pratibha', 'sashikala', 'kasturi',
  'varsha', 'shaila', 'pooja', 'madhuri', 'swapna', 'sampada', 'sneha',
  'acham', 'dodal',
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
  'rajendrakumar', 'rajeshwar', 'kamlesh', 'deepak', 'abhay', 'shravan',
  'arya', 'shaurya', 'shlok', 'keyur', 'rambhau', 'jaykumar', 'padmakar',
  'shitalchand', 'vishnukumar', 'suhas', 'rukhoba', 'nirmal', 'sadanand',
  'nemichand', 'suresh', 'sanjay', 'kailash', 'snehal', 'ankush', 'rohan',
  'pratik',
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
  'rajan', 'tarun', 'omkar', 'swaraj', 'manpreet', 'gurpreet',
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
    'daughter-in-law', 'daughter in law',
    'sister-in-law', 'sister in law',
  ];
  for (const kw of femRelKeywords) {
    if (relLower.includes(kw)) return 'female';
  }

  const maleRelKeywords = [
    'father', 'grandfather', 'son', 'brother', 'husband', 'uncle',
    'nephew', 'grandson', 'chacha', 'tau', 'mama', 'mausa', 'fufa',
    'nana', 'dada', 'bhaiya', 'jija', 'sala', 'self',
    'father-in-law', 'brother-in-law', 'son-in-law',
    'son in law', 'brother in law',
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
