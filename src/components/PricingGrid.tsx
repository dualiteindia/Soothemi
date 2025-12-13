import React from 'react';
import { Flower } from 'lucide-react';
import { motion } from 'framer-motion';
import { TextReveal } from './TextReveal';
import { useNavigate } from 'react-router-dom';

export const PricingGrid: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 md:px-10 pt-16 pb-24 bg-soothe-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-[4.5rem] leading-[1.1] text-soothe-text mb-6">
            <TextReveal text="Flexible plans for every" />{' '}
            <span className="inline-flex items-center gap-3 align-middle">
              <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-soothe-pink flex items-center justify-center shrink-0">
                <Flower size={20} strokeWidth={1.5} className="text-soothe-pinkIcon" />
              </span>
              <span className="italic font-normal">yogi</span>
            </span>
          </h1>
          <p className="font-sans text-soothe-muted text-[15px] md:text-base">
            Find the perfect plan for your lifestyle
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Drop-In */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="bg-white rounded-[1.5rem] p-8 flex flex-col items-start shadow-card hover:shadow-soft transition-shadow duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-soothe-pink flex items-center justify-center mb-6">
              <Flower size={18} className="text-soothe-pinkIcon" />
            </div>
            
            <h3 className="font-serif text-xl text-soothe-text mb-6">Drop-In Class</h3>
            
            <div className="font-serif text-4xl md:text-5xl text-soothe-text mb-8">
              $20<span className="text-base font-sans text-soothe-muted italic font-normal ml-1">/classes</span>
            </div>
            
            <p className="font-sans text-soothe-muted text-[14px] leading-relaxed mb-10">
              Ideal for those with unpredictable schedules or who want to try a class before committing to a membership.
            </p>

            <button 
              onClick={() => navigate('/contact')}
              className="w-full py-3.5 rounded-full bg-soothe-pink/50 text-soothe-text font-medium text-sm hover:bg-soothe-pink transition-colors mt-auto"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Card 2: 10-Class Pass */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="bg-white rounded-[1.5rem] p-8 flex flex-col items-start shadow-card hover:shadow-soft transition-shadow duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-soothe-pink flex items-center justify-center mb-6">
              <Flower size={18} className="text-soothe-pinkIcon" />
            </div>
            
            <h3 className="font-serif text-xl text-soothe-text mb-6">10-Class Pass</h3>
            
            <div className="font-serif text-4xl md:text-5xl text-soothe-text mb-8 flex items-baseline gap-2">
              $120 <span className="text-sm font-sans text-soothe-muted font-normal">save $30</span>
            </div>
            
            <p className="font-sans text-soothe-muted text-[14px] leading-relaxed mb-10">
              Ideal for those with unpredictable schedules or who want to try a class before committing to a membership.
            </p>

            <button 
              onClick={() => navigate('/contact')}
              className="w-full py-3.5 rounded-full bg-soothe-pink/50 text-soothe-text font-medium text-sm hover:bg-soothe-pink transition-colors mt-auto"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Card 3: Custom Yoga Plans (Featured) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="bg-[#FCEAF6] rounded-[1.5rem] p-8 flex flex-col items-start shadow-card hover:shadow-soft transition-shadow duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-6">
              <Flower size={18} className="text-soothe-orangeIcon" />
            </div>
            
            <h3 className="font-serif text-xl text-soothe-text mb-6">Custom Yoga Plans</h3>
            
            {/* Spacer to align description with other cards roughly */}
            <div className="mb-8 h-[48px] md:h-[60px]"></div>
            
            <p className="font-sans text-soothe-muted text-[14px] leading-relaxed mb-10">
              Strong foundation or an experienced practitioner aiming to deepen your practice, our custom plans will help you achieve your wellness objectives.
            </p>

            <button 
              onClick={() => navigate('/contact')}
              className="w-full py-3.5 rounded-full bg-white text-soothe-text font-medium text-sm hover:bg-white/80 transition-colors mt-auto shadow-sm"
            >
              Contact Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
