import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: 10,
    },
  };

  return (
    <motion.span
      style={{ display: 'inline-block' }} // changed from flex to inline-block to flow naturally
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
