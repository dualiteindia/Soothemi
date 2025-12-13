import React from 'react';
import { Flower } from 'lucide-react';
import { TextReveal } from './TextReveal';
import { motion } from 'framer-motion';

export const ServicesIntro: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 pt-16 pb-24 bg-soothe-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-[4.5rem] leading-[1.1] text-soothe-text mb-6">
            <TextReveal text="Explore our range of yoga" /> <br />
            <span className="inline-flex items-center gap-3 align-middle">
              <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-soothe-pink flex items-center justify-center shrink-0">
                <Flower size={20} strokeWidth={1.5} className="text-soothe-pinkIcon" />
              </span>
              <span className="italic font-normal">offerings</span>
            </span>{' '}
            <TextReveal text="tailored for you" delay={0.2} />
          </h1>
          <p className="font-sans text-soothe-muted text-[15px] md:text-base">
            Find the perfect plan for your lifestyle!
          </p>
        </div>

        {/* Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Image - Larger */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft"
          >
            <img 
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1200&auto=format&fit=crop" 
              alt="Woman seated in calm meditation pose" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column - Image + Text */}
          <div className="flex flex-col gap-8 lg:pt-12">
            
            {/* Right Image - Smaller */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="w-full aspect-[16/10] rounded-[2rem] overflow-hidden shadow-soft"
            >
              <img 
                src="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop" 
                alt="Woman in yoga pose" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Description Text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="font-sans text-soothe-muted text-[15px] leading-relaxed max-w-md"
            >
              Whether you’re looking to deepen your practice, enhance your wellness journey, or simply find a peaceful space, we have a variety of services designed just for you. Explore our offerings below and find the perfect fit for your yoga journey.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
};
