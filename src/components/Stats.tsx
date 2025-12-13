import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  { value: '1k+', label: 'Happy Students' },
  { value: '10+', label: 'Certified Global Yoga' },
  { value: '4.9', label: 'Star Ratings' },
];

export const Stats: React.FC = () => {
  return (
    <section className="w-full px-6 py-10 bg-soothe-bg">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
        {statsData.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif italic text-4xl md:text-5xl text-soothe-text mb-2">
              {stat.value}
            </span>
            <span className="font-sans text-sm md:text-[15px] text-soothe-muted tracking-wide">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
