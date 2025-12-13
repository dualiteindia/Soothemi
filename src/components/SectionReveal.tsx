import React from 'react';
import { motion } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.23, 1, 0.32, 1] // Matches the 'calm' bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
