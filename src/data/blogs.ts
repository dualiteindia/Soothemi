export interface BlogSection {
  heading: string;
  text: string;
}

export interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  alt?: string;
  content?: BlogSection[]; // New field for full article content
}

const defaultContent: BlogSection[] = [
  {
    heading: "Stress Relief through Relaxation",
    text: "Restorative poses, such as supported child's pose, legs-up-the-wall, and reclining bound angle, are designed to relax the nervous system and reduce stress, fostering deep relaxation and recovery."
  },
  {
    heading: "Aiding Sleep and Rest",
    text: "Practicing restorative yoga before bed can improve sleep quality by calming the mind and relaxing the body. This makes it an excellent practice for those dealing with insomnia or stress-induced sleep issues."
  },
  {
    heading: "Supporting Physical Healing",
    text: "Gentle, supported poses help the body to release stored tension, promoting healing, especially after intense workouts or physical strain. Props like bolsters and blankets are commonly used to make poses more comfortable."
  },
  {
    heading: "Emotional Healing",
    text: "Restorative yoga allows practitioners to pause, process emotions, and let go of negativity. This practice is highly beneficial for mental well-being, providing a space to nurture self-compassion and introspection."
  }
];

export const heroBlogs: BlogPost[] = [
  {
    id: 101, // Unique IDs to avoid collision with grid
    category: "Mindfulness Practice",
    title: "Mindfulness: Embracing the Present Moment",
    description: "Yoga cultivates mindfulness by encouraging present-moment awareness and fostering a peaceful mental state.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    alt: "Close up of hands in a mudra position during meditation",
    content: defaultContent
  },
  {
    id: 102,
    category: "Vinyasa Basics",
    title: "A Beginner’s Guide to Vinyasa Yoga",
    description: "Vinyasa yoga synchronizes breath with movement, creating a smooth 'flow' that energizes both body and mind.",
    image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=1200&auto=format&fit=crop",
    alt: "Woman performing a vinyasa flow yoga pose on a mat in a bright room",
    content: defaultContent
  },
  {
    id: 103,
    category: "Wellness Tips",
    title: "Finding Balance in Daily Life",
    description: "Simple techniques to bring the calm of your yoga practice into your everyday routine.",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1200&auto=format&fit=crop",
    alt: "Person balancing on one leg in a yoga pose outdoors",
    content: defaultContent
  },
  {
    id: 104,
    category: "Meditation",
    title: "The Art of Stillness",
    description: "Discover how just 5 minutes of daily meditation can transform your mental clarity and reduce stress.",
    image: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1200&auto=format&fit=crop",
    alt: "Peaceful meditation setting with soft lighting",
    content: defaultContent
  }
];

export const gridBlogs: BlogPost[] = [
  {
    id: 1,
    category: "Gentle Yoga",
    title: "Restorative Yoga for Relaxation and Healing",
    description: "Restorative yoga is a gentle practice designed for relaxation, making it ideal for stress relief and emotional healing. This blog explores how restorative yoga supports mental health, improves sleep quality, and nurtures the body through calming poses.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
    alt: "Woman resting in a restorative child's pose",
    content: defaultContent
  },
  {
    id: 2,
    category: "Yoga Fitness",
    title: "Power Yoga for Strength and Endurance",
    description: "Power yoga is a high-energy practice that builds strength, endurance, and cardiovascular health through intense, flowing movements.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1200&auto=format&fit=crop",
    alt: "Two women practicing strong power yoga poses together",
    content: defaultContent
  },
  {
    id: 3,
    category: "Mindfulness Practice",
    title: "Mindfulness: Embracing the Present Moment",
    description: "Yoga cultivates mindfulness by encouraging present-moment awareness and fostering a peaceful mental state.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    alt: "Hands resting gently on knees in a meditative posture",
    content: defaultContent
  },
  {
    id: 4,
    category: "Vinyasa Basics",
    title: "A Beginner’s Guide to Vinyasa Yoga",
    description: "Vinyasa yoga synchronizes breath with movement, creating a smooth 'flow' that energizes both body and mind.",
    image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=1200&auto=format&fit=crop",
    alt: "Woman performing a vinyasa flow yoga pose on a mat in a bright room",
    content: defaultContent
  },
  {
    id: 5,
    category: "Yoga for Core Stability",
    title: "Building Core Strength with Yoga",
    description: "Strengthening your core through yoga enhances balance, stability, and posture, essential for daily life and physical health.",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1200&auto=format&fit=crop",
    alt: "Man holding a plank pose to build core strength",
    content: defaultContent
  },
  {
    id: 6,
    category: "Yoga Sessions",
    title: "5 day challenge trainer series",
    description: "Yoga isn't just about flexibility—it's a holistic practice that offers physical, mental, and emotional benefits.",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1200&auto=format&fit=crop",
    alt: "Group of people participating in an outdoor yoga challenge",
    content: defaultContent
  }
];

// Helper to get all blogs
export const getAllBlogs = () => [...heroBlogs, ...gridBlogs];

// Helper to get a specific blog
export const getBlogById = (id: number) => getAllBlogs().find(blog => blog.id === id);
