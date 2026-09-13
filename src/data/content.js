export const PHONE_DISPLAY = '74411 11488';
export const PHONE_TEL = 'tel:+917441111488';
export const WHATSAPP_LINK =
  'https://wa.me/917441111488?text=' +
  encodeURIComponent("Hi Physiaura! I'd like to book a home physiotherapy visit in Pune. My concern is: ");
export const EMAIL = 'care@physiaura.in';
export const EMAIL_LINK =
  'mailto:care@physiaura.in?subject=' +
  encodeURIComponent('Home physiotherapy visit — Pune') +
  '&body=' +
  encodeURIComponent("Hi Physiaura team,\n\nI'd like to schedule a home visit.\nName:\nArea in Pune:\nConcern / condition:\nPreferred day/time:\n\nThank you.");
export const INSTAGRAM = 'https://www.instagram.com/physiaura.in';

export const AREAS = [
  'Kothrud',
  'Baner',
  'Bavdhan',
  'Wakad',
  'Hinjawadi',
  'Aundh',
  'Shivajinagar',
  'Deccan',
  'Koregaon Park',
  'Kalyani Nagar',
  'Viman Nagar',
  'Kharadi',
  'Hadapsar',
  'Kondhwa',
  'Katraj',
  'Sinhagad Road',
  'Warje',
  'Karve Nagar',
  'Pimpri-Chinchwad',
  'Wagholi',
];

export const IMAGES = {
  heroMain:
    'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1000&auto=format&fit=crop',
  heroSub:
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500&auto=format&fit=crop',
  firstVisit:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
};

export const CONDITIONS = [
  {
    id: 'neuro',
    emoji: '🧠',
    title: 'Neurological',
    sub: 'Stroke, Parkinson’s, balance & gait',
    image:
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Brain illustration representing stroke and Parkinson’s neurorehabilitation',
    intro:
      'Regaining movement after a stroke or with Parkinson’s is slow, personal work. We come home, where walking, stairs and bathrooms are real — not clinic corridors.',
    tags: ['Stroke / Paralysis', 'Parkinson’s', 'Multiple Sclerosis', 'Balance & gait'],
    points: [
      'Bed mobility, sit-to-stand, walking re-training in your own space',
      'Balance, coordination and fall-prevention drills',
      'Caregiver training — safe transfers, support and home setup',
      'Speech-adjacent routine building with family involvement',
    ],
  },
  {
    id: 'ortho',
    emoji: '🦴',
    title: 'Ortho & Joint Pain',
    sub: 'Back, neck, knee, shoulder, arthritis',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Woman doing gentle yoga stretch for back and joint mobility',
    intro:
      'That nagging cervical pain from laptop hours, the knee that clicks on stairs, frozen shoulder that steals sleep — we assess, treat and teach you to keep it away.',
    tags: ['Back & sciatica', 'Cervical pain', 'Osteoarthritis', 'Frozen shoulder'],
    points: [
      'Hands-on mobilisation + targeted strengthening',
      'Posture correction for WFH, two-wheeler and long commutes',
      'Arthritis management — pain control without over-dependence on meds',
      'Sports & muscle injuries with return-to-play progression',
    ],
  },
  {
    id: 'postop',
    emoji: '🩹',
    title: 'Post-Surgical',
    sub: 'Knee / hip replacement, ACL, fracture',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Patient doing guided strength rehab with dumbbells after surgery',
    intro:
      'The surgery is half the story. How you walk, climb and bend in the first 12 weeks decides the result. We follow your surgeon’s protocol — at home.',
    tags: ['TKR / THR', 'ACL & meniscus', 'Fracture rehab', 'Post-op stiffness'],
    points: [
      'Protocol-based rehab synced with your orthopaedic surgeon',
      'Walker → stick → independent walking progression',
      'Swelling, stiffness and scar management',
      'Stair, toilet and car-transfer practice at your home',
    ],
  },
  {
    id: 'geriatric',
    emoji: '👵',
    title: 'Elderly Care',
    sub: 'Strength, falls, mobility, confidence',
    image:
      'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Caregiver holding elderly hand — gentle geriatric physiotherapy at home',
    intro:
      'For Aai-Baba and grandparents who fear falling. Gentle, respectful sessions that rebuild leg strength, balance and the confidence to step out again.',
    tags: ['Age-related weakness', 'Fall risk', 'Arthritis', 'Parkinson’s mobility'],
    points: [
      'Fall-risk assessment of the actual home — lighting, rugs, bathroom',
      'Chair-based to standing strength progression',
      'Walking-aid selection and correct-use training',
      'Family updates after every session in simple language',
    ],
  },
  {
    id: 'paeds',
    emoji: '🧸',
    title: 'Child Physio',
    sub: 'Milestones, CP, coordination & gait',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Happy child playing outdoors — play-based paediatric physiotherapy',
    intro:
      'Children do best where they feel safe — home. Play-based therapy for delayed milestones, Cerebral Palsy, toe-walking and coordination difficulties.',
    tags: ['Developmental delay', 'Cerebral Palsy', 'Milestones', 'Gait & balance'],
    points: [
      'Play-led sessions — no scary clinic equipment',
      'Parent coaching so progress continues between visits',
      'School-bag, posture and activity guidance',
      'Milestone tracking shared with parents and paediatrician',
    ],
  },
];

export const FAQS = [
  {
    q: 'How does a home visit actually work?',
    a: 'You call or WhatsApp us on 74411 11488. We understand your condition on the phone, fix a slot, and a qualified physiotherapist visits your home with the needed equipment — resistance bands, weights, balance tools, hot/cold therapy. First visit is a detailed assessment (40–50 mins), then a plan is made.',
  },
  {
    q: 'Who will visit — a qualified physio or an assistant?',
    a: 'Always a qualified physiotherapist — BPT minimum, with MPT guidance for complex neuro, paediatric and post-surgical cases. BPT is the 4.5-year physiotherapy degree; MPT is the specialist masters. No assistants sent alone, no 10-patients-at-once setup. Every session is one-to-one.',
  },
  {
    q: 'What should I keep ready at home?',
    a: 'Just a comfortable mat/bedsheet, a chair, and space to walk a few steps. Wear loose, comfortable clothes. If you have X-rays, MRI reports or discharge summaries, keep them handy — a photo on your phone works too.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Honest answer: it depends. Acute back or neck pain often improves in 5–8 sessions; post-knee-replacement rehab usually runs 4–6 weeks; stroke rehab is longer and milestone-based. After the first assessment we give you a clear range — and we revise it as you progress. No lock-in packages pushed.',
  },
  {
    q: 'What are your charges?',
    a: 'We follow simple per-visit pricing based on your area in Pune and the condition — no hidden charges, no forced packages. Call or WhatsApp 74411 11488 and we’ll quote transparently in one message, before you commit.',
  },
  {
    q: 'Which areas in Pune do you serve?',
    a: 'Kothrud, Baner, Wakad, Hinjawadi, Aundh, Shivajinagar, Deccan, Koregaon Park, Kalyani Nagar, Viman Nagar, Kharadi, Hadapsar, Kondhwa, Katraj, Sinhagad Road, Warje and nearby areas. Outside these? Message us anyway — we try to accommodate.',
  },
  {
    q: 'Do I need a referral from my doctor?',
    a: 'Not necessary. You can directly book. If you already have an orthopaedic / neuro prescription or post-surgical protocol, we follow it closely and coordinate with your doctor when needed.',
  },
  {
    q: 'Is home physio as effective as clinic physio?',
    a: 'For most conditions, better — because we rehab you in the environment you actually live in: your stairs, your bathroom height, your bed, your chair. Plus you get full 1-to-1 time. The only cases we redirect to clinics are those needing heavy machines (like traction beds or advanced electrotherapy labs).',
  },
];

export const STORIES = [
  {
    quote:
      'After my father’s stroke, taking him to a clinic daily was impossible. Physiaura’s physio came home in Kothrud, trained even our maid on transfers. In 2 months he walks to the gate with a stick.',
    name: 'Sneha Deshmukh',
    detail: 'Caregiver · Stroke rehab · Kothrud',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    tags: ['Stroke', 'Home rehab'],
  },
  {
    quote:
      'I had frozen shoulder for 6 months — couldn’t even wear a kurta without pain. 8 sessions at home in Baner and I’m sleeping through the night. No rushed 10-minute clinic visits.',
    name: 'Rahul Patil',
    detail: 'Frozen shoulder · Baner · Age 44',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    tags: ['Shoulder', '8 sessions'],
  },
  {
    quote:
      'My TKR surgery scared me more than the pain. The physio coordinated with my surgeon, came home to Wakad, practised stairs with me. I climbed to my 2nd-floor flat in week 5.',
    name: 'Meena Kulkarni',
    detail: 'Knee replacement · Wakad · Age 68',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    tags: ['TKR', 'Post-surgical'],
  },
];
