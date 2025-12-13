import React from 'react';
import { Flower, User, Heart } from 'lucide-react';
import { TextReveal } from './TextReveal';
import { motion } from 'framer-motion';

export const Mission: React.FC = () => {
  const iconVariant = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15, delay: 0.5 }
    }
  };

  return (
    <section className="w-full px-4 md:px-10 py-24 md:py-32 bg-soothe-bg flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-[3.5rem] leading-[1.3] text-soothe-text/90 flex flex-wrap justify-center items-center gap-x-3 md:gap-x-4">
          
          <TextReveal text="Discover the" delay={0.1} />
          
          <motion.div 
            variants={iconVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-soothe-pink shrink-0 align-middle mx-1"
          >
            <Flower className="w-6 h-6 md:w-8 md:h-8 text-soothe-pinkIcon" strokeWidth={1.5} />
          </motion.div>

          <TextReveal text="transformative" delay={0.3} />
          <div className="w-full hidden md:block"></div> {/* Force break on desktop if needed, or let flex wrap naturally */}
          
          <TextReveal text="power of yoga, whether" delay={0.5} />

          <motion.div 
            variants={iconVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-soothe-orange shrink-0 align-middle mx-1"
          >
            <User className="w-6 h-6 md:w-8 md:h-8 text-soothe-orangeIcon" strokeWidth={1.5} />
          </motion.div>

          <TextReveal text="you're" delay={0.7} />
          
          <div className="w-full hidden md:block"></div>

          <TextReveal text="a beginner" delay={0.8} />

          <motion.div 
            variants={iconVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-soothe-teal shrink-0 align-middle mx-1"
          >
            <Heart className="w-5 h-5 md:w-7 md:h-7 text-soothe-tealIcon" strokeWidth={1.5} />
          </motion.div>

          <TextReveal text="or an advanced" delay={0.9} />
          <div className="w-full hidden md:block"></div>
          <TextReveal text="practitioner" delay={1.1} />

        </h2>
      </div>
    </section>
  );
};
