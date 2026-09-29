export interface DelhiDistrictStats {
  name: string;
  code?: string;
  totalWards: number;
  coveredWards: number;
  coveragePct: number;
  volunteersActive: number;
  color: string;
}

export interface VolunteerMember {
  id: string;
  name: string;
  phone: string;
  district: string;
  ward: string;
  status: 'Active' | 'Covered' | 'Inactive';
  lat: number;
  lng: number;
  lastActive: string;
  lastPing?: string;
}

export const DELHI_DISTRICTS_DATA: Record<string, DelhiDistrictStats> = {
  'New Delhi': {
    name: 'New Delhi',
    totalWards: 25,
    coveredWards: 24,
    coveragePct: 96,
    volunteersActive: 48,
    color: '#10b981',
  },
  'South Delhi': {
    name: 'South Delhi',
    totalWards: 32,
    coveredWards: 26,
    coveragePct: 81,
    volunteersActive: 62,
    color: '#3b82f6',
  },
  'North Delhi': {
    name: 'North Delhi',
    totalWards: 28,
    coveredWards: 21,
    coveragePct: 75,
    volunteersActive: 39,
    color: '#8b5cf6',
  },
  'East Delhi': {
    name: 'East Delhi',
    totalWards: 24,
    coveredWards: 16,
    coveragePct: 67,
    volunteersActive: 34,
    color: '#f59e0b',
  },
  'West Delhi': {
    name: 'West Delhi',
    totalWards: 29,
    coveredWards: 21,
    coveragePct: 72,
    volunteersActive: 44,
    color: '#06b6d4',
  },
  'Central Delhi': {
    name: 'Central Delhi',
    totalWards: 19,
    coveredWards: 17,
    coveragePct: 89,
    volunteersActive: 38,
    color: '#10b981',
  },
  'South West Delhi': {
    name: 'South West Delhi',
    totalWards: 30,
    coveredWards: 18,
    coveragePct: 60,
    volunteersActive: 31,
    color: '#ef4444',
  },
  'North West Delhi': {
    name: 'North West Delhi',
    totalWards: 31,
    coveredWards: 17,
    coveragePct: 55,
    volunteersActive: 29,
    color: '#f97316',
  },
  'Shahdara': {
    name: 'Shahdara',
    totalWards: 22,
    coveredWards: 11,
    coveragePct: 50,
    volunteersActive: 22,
    color: '#ef4444',
  },
  'North East Delhi': {
    name: 'North East Delhi',
    totalWards: 20,
    coveredWards: 9,
    coveragePct: 45,
    volunteersActive: 19,
    color: '#e11d48',
  },
  'South East Delhi': {
    name: 'South East Delhi',
    totalWards: 26,
    coveredWards: 17,
    coveragePct: 65,
    volunteersActive: 35,
    color: '#eab308',
  },
};

export const MOCK_VOLUNTEERS: VolunteerMember[] = [
  {
    id: 'vol-001',
    name: 'Aakash Verma',
    phone: '+91 98101 23456',
    district: 'New Delhi',
    ward: 'Chanakyapuri Ward 14',
    status: 'Active',
    lat: 28.5983,
    lng: 77.1855,
    lastActive: '10 mins ago',
  },
  {
    id: 'vol-002',
    name: 'Priyanka Sharma',
    phone: '+91 98223 44556',
    district: 'South Delhi',
    ward: 'Mehrauli Ward 08',
    status: 'Covered',
    lat: 28.5244,
    lng: 77.1855,
    lastActive: '25 mins ago',
  },
  {
    id: 'vol-003',
    name: 'Vikramaditya Rao',
    phone: '+91 98450 78901',
    district: 'South West Delhi',
    ward: 'Najafgarh Ward 03',
    status: 'Active',
    lat: 28.6090,
    lng: 76.9850,
    lastActive: 'Just now',
  },
  {
    id: 'vol-004',
    name: 'Dr. Sunita Deshmukh',
    phone: '+91 98711 00223',
    district: 'North Delhi',
    ward: 'Alipur Ward 01',
    status: 'Covered',
    lat: 28.7980,
    lng: 77.1350,
    lastActive: '1 hour ago',
  },
  {
    id: 'vol-005',
    name: 'Harpreet Singh',
    phone: '+91 98112 33445',
    district: 'East Delhi',
    ward: 'Shahdara Ward 05',
    status: 'Active',
    lat: 28.6730,
    lng: 77.2910,
    lastActive: '5 mins ago',
  },
  {
    id: 'vol-006',
    name: 'Neha Chawla',
    phone: '+91 98991 55667',
    district: 'Central Delhi',
    ward: 'Karol Bagh Ward 12',
    status: 'Covered',
    lat: 28.6517,
    lng: 77.1906,
    lastActive: '40 mins ago',
  },
  {
    id: 'vol-007',
    name: 'Mohammed Rizwan',
    phone: '+91 98188 77889',
    district: 'North East Delhi',
    ward: 'Seelampur Ward 04',
    status: 'Inactive',
    lat: 28.6692,
    lng: 77.2674,
    lastActive: '3 hours ago',
  },
  {
    id: 'vol-008',
    name: 'Pooja Rawat',
    phone: '+91 98733 88990',
    district: 'South East Delhi',
    ward: 'Kalkaji Ward 19',
    status: 'Active',
    lat: 28.5402,
    lng: 77.2588,
    lastActive: '15 mins ago',
  },
  {
    id: 'vol-009',
    name: 'Rajendra Prasad Yadav',
    phone: '+91 98681 12345',
    district: 'West Delhi',
    ward: 'Janakpuri Ward 16',
    status: 'Covered',
    lat: 28.6219,
    lng: 77.0878,
    lastActive: '30 mins ago',
  },
  {
    id: 'vol-010',
    name: 'Deepak Tyagi',
    phone: '+91 98912 66778',
    district: 'North West Delhi',
    ward: 'Rohini Sector 15',
    status: 'Active',
    lat: 28.7159,
    lng: 77.1126,
    lastActive: '18 mins ago',
  },
];
