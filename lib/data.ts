import {
  HeartPulse,
  Stethoscope,
  Bone,
  Baby,
  Brain,
  Sparkles,
  Ear,
  Syringe,
  Activity,
  ShieldCheck,
  Clock,
  UserRound,
  type LucideIcon,
} from 'lucide-react';

export type Specialty =
  | 'Cardiology'
  | 'Dermatology'
  | 'Pediatrics'
  | 'Orthopedics'
  | 'Gynecology'
  | 'General Medicine'
  | 'ENT'
  | 'Dental';

export const specialties: { label: Specialty | 'All Specialties'; value: string }[] = [
  { label: 'All Specialties', value: 'all' },
  { label: 'Cardiology', value: 'Cardiology' },
  { label: 'Dermatology', value: 'Dermatology' },
  { label: 'Pediatrics', value: 'Pediatrics' },
  { label: 'Orthopedics', value: 'Orthopedics' },
  { label: 'Gynecology', value: 'Gynecology' },
  { label: 'General Medicine', value: 'General Medicine' },
  { label: 'ENT', value: 'ENT' },
  { label: 'Dental', value: 'Dental' },
];

export type Doctor = {
  id: string;
  name: string;
  specialty: Specialty;
  experience: string;
  experienceYears: number;
  bio: string;
  longBio: string;
  expertise: string[];
  education: string[];
  consultationFee: number;
  consultationType: ('In-person' | 'Online')[];
  availability: { days: string; hours: string };
  rating: number;
  reviews: number;
  initials: string;
  accent: string;
};

export const doctors: Doctor[] = [
  {
    id: 'aarav-mehta',
    name: 'Dr. Aarav Mehta',
    specialty: 'Cardiology',
    experience: '12+ Years Experience',
    experienceYears: 12,
    bio: 'Focused on preventive cardiovascular care and long-term heart health management.',
    longBio:
      'Dr. Aarav Mehta is a fictional cardiology specialist with over 12 years of demonstrated experience in preventive cardiovascular care. His practice centers on early detection, lifestyle-based management and patient education for long-term heart health.',
    expertise: [
      'Preventive Cardiology',
      'Heart Health Consultations',
      'Cardiovascular Risk Assessment',
      'Lifestyle-Based Management',
    ],
    education: [
      'MD — Cardiology (Demo University)',
      'MBBS — Demo Medical Institute',
    ],
    consultationFee: 800,
    consultationType: ['In-person', 'Online'],
    availability: { days: 'Mon – Fri', hours: '10:00 AM – 5:00 PM' },
    rating: 4.9,
    reviews: 214,
    initials: 'AM',
    accent: 'from-rose-500/20 to-rose-500/5',
  },
  {
    id: 'ananya-shah',
    name: 'Dr. Ananya Shah',
    specialty: 'Dermatology',
    experience: '9+ Years Experience',
    experienceYears: 9,
    bio: 'Skin, hair and wellness consultations with a focus on healthy, lasting results.',
    longBio:
      'Dr. Ananya Shah is a fictional dermatology specialist focused on skin, hair and overall wellness. Her approach combines evidence-based consultation with a focus on patient comfort and education.',
    expertise: [
      'Skin & Hair Consultations',
      'Acne & Pigmentation Care',
      'Wellness Dermatology',
      'Personalized Skincare',
    ],
    education: [
      'MD — Dermatology (Demo University)',
      'MBBS — Demo Medical Institute',
    ],
    consultationFee: 700,
    consultationType: ['In-person', 'Online'],
    availability: { days: 'Mon – Sat', hours: '11:00 AM – 6:00 PM' },
    rating: 4.8,
    reviews: 176,
    initials: 'AS',
    accent: 'from-amber-500/20 to-amber-500/5',
  },
  {
    id: 'rohan-patel',
    name: 'Dr. Rohan Patel',
    specialty: 'Orthopedics',
    experience: '14+ Years Experience',
    experienceYears: 14,
    bio: 'Care for bones, joints and mobility with a focus on recovery and prevention.',
    longBio:
      'Dr. Rohan Patel is a fictional orthopedics specialist with over 14 years of demonstrated experience. His practice focuses on mobility, joint health and structured recovery plans.',
    expertise: [
      'Joint & Bone Health',
      'Mobility Assessment',
      'Sports Injury Consultation',
      'Recovery Planning',
    ],
    education: [
      'MS — Orthopedics (Demo University)',
      'MBBS — Demo Medical Institute',
    ],
    consultationFee: 900,
    consultationType: ['In-person'],
    availability: { days: 'Tue – Sat', hours: '9:00 AM – 4:00 PM' },
    rating: 4.9,
    reviews: 198,
    initials: 'RP',
    accent: 'from-sky-500/20 to-sky-500/5',
  },
  {
    id: 'meera-desai',
    name: 'Dr. Meera Desai',
    specialty: 'Pediatrics',
    experience: '10+ Years Experience',
    experienceYears: 10,
    bio: 'Compassionate healthcare for children and families in a welcoming environment.',
    longBio:
      'Dr. Meera Desai is a fictional pediatrics specialist dedicated to child and family healthcare. Her consultations emphasize comfort, clear communication and preventive guidance.',
    expertise: [
      'Child Health Consultations',
      'Growth & Development',
      'Preventive Pediatric Care',
      'Family Guidance',
    ],
    education: [
      'MD — Pediatrics (Demo University)',
      'MBBS — Demo Medical Institute',
    ],
    consultationFee: 600,
    consultationType: ['In-person', 'Online'],
    availability: { days: 'Mon – Fri', hours: '10:00 AM – 5:00 PM' },
    rating: 4.9,
    reviews: 232,
    initials: 'MD',
    accent: 'from-violet-500/20 to-violet-500/5',
  },
  {
    id: 'kavya-shah',
    name: 'Dr. Kavya Shah',
    specialty: 'Gynecology',
    experience: '11+ Years Experience',
    experienceYears: 11,
    bio: 'Specialized women\u2019s health and wellness care with a patient-first approach.',
    longBio:
      'Dr. Kavya Shah is a fictional gynecology specialist focused on women\u2019s health and wellness. Her practice centers on accessible, respectful and personalized care.',
    expertise: [
      'Women\u2019s Health Consultations',
      'Preventive Wellness',
      'Reproductive Health',
      'Personalized Care Plans',
    ],
    education: [
      'MS — Obstetrics & Gynecology (Demo University)',
      'MBBS — Demo Medical Institute',
    ],
    consultationFee: 750,
    consultationType: ['In-person', 'Online'],
    availability: { days: 'Mon – Sat', hours: '10:00 AM – 6:00 PM' },
    rating: 4.8,
    reviews: 187,
    initials: 'KS',
    accent: 'from-pink-500/20 to-pink-500/5',
  },
  {
    id: 'arjun-mehta',
    name: 'Dr. Arjun Mehta',
    specialty: 'General Medicine',
    experience: '8+ Years Experience',
    experienceYears: 8,
    bio: 'Everyday healthcare, preventive care and routine consultations for all ages.',
    longBio:
      'Dr. Arjun Mehta is a fictional general medicine specialist focused on everyday healthcare, preventive care and routine consultations for patients of all ages.',
    expertise: [
      'General Consultations',
      'Preventive Health',
      'Routine Check-ups',
      'Chronic Condition Management',
    ],
    education: [
      'MD — General Medicine (Demo University)',
      'MBBS — Demo Medical Institute',
    ],
    consultationFee: 500,
    consultationType: ['In-person', 'Online'],
    availability: { days: 'Mon – Sun', hours: '9:00 AM – 7:00 PM' },
    rating: 4.7,
    reviews: 154,
    initials: 'AM',
    accent: 'from-emerald-500/20 to-emerald-500/5',
  },
];

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const services: Service[] = [
  {
    id: 'general-medicine',
    name: 'General Medicine',
    description:
      'Everyday healthcare, preventive care and routine consultations for patients of all ages.',
    icon: Stethoscope,
    features: ['Routine consultations', 'Preventive care', 'Health check-ups'],
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    description:
      'Heart health consultations and preventive cardiovascular care for long-term wellness.',
    icon: HeartPulse,
    features: ['Heart health', 'Risk assessment', 'Lifestyle guidance'],
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    description: 'Skin, hair and wellness consultations focused on lasting results.',
    icon: Sparkles,
    features: ['Skin & hair care', 'Wellness dermatology', 'Personalized plans'],
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    description: 'Compassionate healthcare for children and families in a welcoming setting.',
    icon: Baby,
    features: ['Child health', 'Growth monitoring', 'Family guidance'],
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Care focused on bones, joints and mobility for recovery and prevention.',
    icon: Bone,
    features: ['Joint & bone care', 'Mobility assessment', 'Recovery planning'],
  },
  {
    id: 'gynecology',
    name: 'Gynecology',
    description: 'Specialized women\u2019s health and wellness care with a patient-first approach.',
    icon: Activity,
    features: ["Women's health", 'Preventive wellness', 'Personalized care'],
  },
  {
    id: 'ent',
    name: 'ENT',
    description: 'Diagnosis and care for ear, nose and throat concerns for all ages.',
    icon: Ear,
    features: ['ENT consultations', 'Diagnostic assessment', 'Ongoing care'],
  },
  {
    id: 'dental-care',
    name: 'Dental Care',
    description: 'Preventive and general dental care for healthy smiles at every age.',
    icon: Syringe,
    features: ['Preventive dental', 'General check-ups', 'Oral wellness'],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'The booking process was simple and the overall experience felt welcoming.',
    name: 'Priya Shah',
    role: 'Demo Patient',
    initials: 'PS',
  },
  {
    quote:
      'The website made it easy to find the right specialist and understand the available services.',
    name: 'Rahul Mehta',
    role: 'Demo Patient',
    initials: 'RM',
  },
  {
    quote:
      'Clear information and a very clean healthcare experience from start to finish.',
    name: 'Neha Patel',
    role: 'Demo Patient',
    initials: 'NP',
  },
];

export type Article = {
  id: string;
  category: string;
  title: string;
  description: string;
  readingTime: string;
};

export const resourceCategories = [
  'Wellness',
  'Preventive Care',
  'Nutrition',
  'Fitness',
  "Women's Health",
  'Family Health',
];

export const articles: Article[] = [
  {
    id: 'healthier-lifestyle',
    category: 'Wellness',
    title: 'Simple Habits for a Healthier Lifestyle',
    description:
      'Small, consistent daily habits can support long-term wellness. This article shares approachable, general tips.',
    readingTime: '5 min read',
  },
  {
    id: 'routine-health-check',
    category: 'Preventive Care',
    title: 'When Should You Schedule a Routine Health Check?',
    description:
      'A general overview of how routine health checks fit into preventive care, and what to consider.',
    readingTime: '4 min read',
  },
  {
    id: 'understanding-preventive-care',
    category: 'Preventive Care',
    title: 'Understanding Preventive Healthcare',
    description:
      'Learn what preventive healthcare means and why regular check-ups matter for long-term wellbeing.',
    readingTime: '6 min read',
  },
  {
    id: 'heart-health-habits',
    category: 'Fitness',
    title: 'Everyday Habits for Better Heart Health',
    description:
      'General, educational guidance on everyday habits that support cardiovascular wellness.',
    readingTime: '5 min read',
  },
  {
    id: 'healthy-sleep',
    category: 'Wellness',
    title: 'Supporting Healthy Sleep',
    description:
      'A general introduction to sleep hygiene and simple habits that may support better rest.',
    readingTime: '4 min read',
  },
  {
    id: 'balanced-wellness',
    category: 'Nutrition',
    title: 'Building a Balanced Approach to Wellness',
    description:
      'An educational look at balanced nutrition and lifestyle choices for everyday wellbeing.',
    readingTime: '6 min read',
  },
];

export const faqs = [
  {
    question: 'How do I book an appointment?',
    answer:
      'Visit the Appointment Booking page, fill in your details and select your preferred doctor, date and time. This is a demo form, so no real appointment is created.',
  },
  {
    question: 'Can I choose a specific doctor?',
    answer:
      'Yes. You can browse our Doctors directory, filter by specialty and select the specialist you would like to consult.',
  },
  {
    question: 'Do you offer online consultations?',
    answer:
      'Many of our specialists offer both in-person and online consultations. You can select your preferred type on the appointment form.',
  },
  {
    question: 'How can I find the right specialist?',
    answer:
      'Use the search and specialty filter on the Doctors page to narrow down specialists by area of expertise.',
  },
  {
    question: 'Can I cancel or reschedule an appointment?',
    answer:
      'For this demonstration, appointment management is not connected to a real system. In a live setup, you would receive confirmation and rescheduling options.',
  },
  {
    question: 'How should I prepare for my consultation?',
    answer:
      'Bring a list of any current medications, relevant history and questions you would like to ask. For online consultations, ensure a stable internet connection.',
  },
];

export const stats = [
  { value: 25, suffix: '+', label: 'Healthcare Specialists' },
  { value: 40, suffix: 'K+', label: 'Demo Patient Visits' },
  { value: 15, suffix: '+', label: 'Medical Specialties' },
  { value: 4.9, suffix: '/5', label: 'Demo Patient Rating', decimals: 1 },
];

export const whyChooseUs = [
  {
    title: 'Experienced Specialists',
    description:
      'Connect with qualified healthcare professionals across multiple specialties.',
    icon: UserRound,
  },
  {
    title: 'Patient First',
    description:
      'Every interaction is designed around comfort, communication and care.',
    icon: HeartPulse,
  },
  {
    title: 'Modern Facilities',
    description:
      'A comfortable and thoughtfully designed healthcare environment.',
    icon: ShieldCheck,
  },
  {
    title: 'Easy Appointments',
    description:
      'Book appointments through a simple and convenient process.',
    icon: Clock,
  },
];

export const timeline = [
  {
    year: '2010',
    title: 'Concept Founded',
    description: 'CarePoint Health began as a concept for a simpler, more human healthcare experience.',
  },
  {
    year: '2015',
    title: 'Expanded Specialty Services',
    description: 'Added more specialties to offer broader, connected care.',
  },
  {
    year: '2020',
    title: 'Introduced Digital Consultations',
    description: 'Brought online consultations into the patient journey.',
  },
  {
    year: '2026',
    title: 'Modern Patient Experience',
    description: 'A refreshed, patient-first digital experience for today.',
  },
];

export const values = [
  {
    title: 'Compassion',
    description: 'We lead with empathy in every patient interaction.',
    icon: HeartPulse,
  },
  {
    title: 'Integrity',
    description: 'Honest, transparent communication at every step.',
    icon: ShieldCheck,
  },
  {
    title: 'Accessibility',
    description: 'Healthcare information that is clear and easy to reach.',
    icon: UserRound,
  },
  {
    title: 'Patient First',
    description: 'Every decision starts with what is best for the patient.',
    icon: Baby,
  },
  {
    title: 'Continuous Improvement',
    description: 'We keep refining the experience, every day.',
    icon: Brain,
  },
];
