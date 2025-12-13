import React from 'react';
import { Flower, Zap, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const classes = [
  {
    title: 'Beginner Classes',
    description: 'Perfect for those just starting their yoga journey, our beginner classes focus on basic postures, breathing techniques, and alignment. No experience required—just an open mind!',
    icon: Flower,
    iconBg: 'bg-soothe-pink',
    iconColor: 'text-soothe-pinkIcon',
  },
  {
    title: 'Power Yoga',
    description: 'Looking for a more intense workout? Our Power Yoga classes combine strength-building poses and dynamic movements, helping you build muscle, improve stamina, and energize your body.',
    icon: Zap,
    iconBg: 'bg-soothe-orange', 
    iconColor: 'text-soothe-orangeIcon',
  },
  {
    title: 'Restorative Yoga',
    description: 'Unwind with our slow-paced restorative yoga, designed to release tension and promote deep relaxation. These gentle poses help calm the nervous system, making it ideal for stress relief.',
    icon: Moon, 
    iconBg: 'bg-soothe-teal',
    iconColor: 'text-soothe-tealIcon',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.23, 1, 0.32, 1] 
    }
  }
};

export const Offerings: React.FC = () => {
  return (
    <section id="services" className="w-full px-4 md:px-10 pb-24 pt-4 bg-soothe-bg">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {classes.map((item, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-start h-full min-h-[400px] shadow-card transition-transform duration-500 hover:-translate-y-1"
          >
            {/* Icon Badge */}
            <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center mb-8`}>
              <item.icon className={`w-6 h-6 ${item.iconColor}`} strokeWidth={1.5} />
            </div>

            <h3 className="font-serif text-3xl text-soothe-text mb-auto">
              {item.title}
            </h3>

            <p className="font-sans text-soothe-muted text-[15px] leading-relaxed mt-8">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
