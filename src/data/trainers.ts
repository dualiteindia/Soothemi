export interface TrainerService {
  title: string;
  description: string;
}

export interface TrainerQuote {
  text: string;
  author: string;
  role: string;
}

export interface Trainer {
  id: string; // URL slug
  name: string;
  role: string;
  image: string;
  bio: string;
  specialization: string;
  services: TrainerService[];
  gallery: string[]; // Additional images for the stack
  quotes: TrainerQuote[];
}

const defaultServices: TrainerService[] = [
  {
    title: "Private Yoga Sessions",
    description: "One-on-one sessions focused on personalized instruction and individual goals."
  },
  {
    title: "Group Classes",
    description: "Dynamic group sessions designed to improve flexibility, strength, and mindfulness."
  },
  {
    title: "Workshops and Retreats",
    description: "Immersive workshops and retreats that deepen your practice and enhance your overall wellness."
  }
];

const defaultQuotes: TrainerQuote[] = [
  {
    text: "The energy in every class is incredible. I always leave feeling refreshed and motivated.",
    author: "Mia",
    role: "Lifestyle Influencer"
  },
  {
    text: "I've never felt so connected to my body and mind. Yoga here is truly transformative.",
    author: "Jaky",
    role: "Personal Trainer"
  },
  {
    text: "Joining these yoga classes has been life-changing. I feel more grounded and energized every day.",
    author: "Sarah",
    role: "Yoga Enthusiast"
  }
];

// Helper to generate gallery images (reusing existing assets for demo)
const getGallery = (mainImage: string) => [
  mainImage,
  "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
];

export const trainers: Trainer[] = [
  {
    id: 'lucia-petrova',
    name: 'Lucia Petrova',
    role: 'Hot Yoga & Core Strength',
    specialization: 'Hot Yoga & Core Strength',
    image: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/2150848033.webp',
    bio: 'A passionate instructor for more than a decade, Lucia specializes in Hot Yoga and core-focused training, offering dynamic sessions that build endurance, strength, and mental resilience.',
    services: defaultServices,
    gallery: getGallery('https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/2150848033.webp'),
    quotes: defaultQuotes
  },
  {
    id: 'anya-kowalska',
    name: 'Anya Kowalska',
    role: 'Kundalini & Breathwork',
    specialization: 'Kundalini & Breathwork',
    image: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/40982.webp',
    bio: 'Anya guides students through transformative breathwork and Kundalini practices, helping them unlock inner energy and achieve a state of deep clarity.',
    services: defaultServices,
    gallery: getGallery('https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/40982.webp'),
    quotes: defaultQuotes
  },
  {
    id: 'katarina-lund',
    name: 'Katarina Lund',
    role: 'Yin & Flexibility Training',
    specialization: 'Yin & Flexibility Training',
    image: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/2151084052.webp',
    bio: 'With a gentle approach to flexibility, Katarina’s Yin classes focus on deep connective tissue release and cultivating patience through stillness.',
    services: defaultServices,
    gallery: getGallery('https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/2151084052.webp'),
    quotes: defaultQuotes
  },
  {
    id: 'sofia-rossi',
    name: 'Sofia Rossi',
    role: 'Ashtanga & Meditation',
    specialization: 'Ashtanga & Meditation',
    image: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/36024.webp',
    bio: 'Sofia blends the discipline of Ashtanga with the calm of meditation, creating a balanced practice that challenges the body while quieting the mind.',
    services: defaultServices,
    gallery: getGallery('https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/36024.webp'),
    quotes: defaultQuotes
  },
  {
    id: 'elena-novak',
    name: 'Elena Novak',
    role: 'Hatha & Restorative Yoga',
    specialization: 'Hatha & Restorative Yoga',
    image: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/9614.webp',
    bio: 'Elena’s restorative sessions are a sanctuary for relaxation, using props and gentle poses to help students release stress and find deep rest.',
    services: defaultServices,
    gallery: getGallery('https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/9614.webp'),
    quotes: defaultQuotes
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Vinyasa & Power Yoga',
    specialization: 'Vinyasa & Power Yoga',
    image: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/9100.webp',
    bio: 'Sarah brings high energy and flow to her Vinyasa classes, encouraging students to find their edge and build strength through fluid movement.',
    services: defaultServices,
    gallery: getGallery('https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/9100.webp'),
    quotes: defaultQuotes
  }
];

export const getTrainerById = (id: string) => trainers.find(t => t.id === id);
