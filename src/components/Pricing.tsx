import React from 'react';
import { Button } from './Button';
import { Flower } from 'lucide-react';
import { TextReveal } from './TextReveal';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="plan" className="w-full px-4 md:px-10 py-24 bg-soothe-bg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Content */}
        <div className="lg:w-[35%]">
          <h2 className="font-serif text-5xl md:text-[4rem] leading-[1.1] text-soothe-text mb-8">
            <TextReveal text="Flexible plans" /> <br />
            <TextReveal text="for every yogi" delay={0.2} />
          </h2>
          <p className="font-sans text-soothe-muted text-[15px] leading-relaxed mb-10">
            Find the perfect plan for your lifestyle! Whether you drop in occasionally or practice daily, we have an option for you.
          </p>
          <Button onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>

        {/* Right Cards */}
        <div className="lg:w-[65%] flex flex-col md:flex-row gap-6 w-full">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex-1 bg-white rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-sm relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="w-10 h-10 rounded-full bg-soothe-pink flex items-center justify-center mb-6">
              <Flower size={18} className="text-soothe-pinkIcon" />
            </div>
            
            <h3 className="font-sans text-sm uppercase tracking-widest text-soothe-muted mb-6">Drop-In Class</h3>
            
            <div className="font-serif text-5xl text-soothe-text mb-6">
              $20<span className="text-lg font-sans text-soothe-muted italic font-normal">/class</span>
            </div>
            
            <p className="font-sans text-soothe-muted text-sm leading-relaxed mb-8 px-4">
              Ideal for those with unpredictable schedules or who want to try a class before committing to a membership.
            </p>

            <button 
              name="contact us" 
              onClick={() => navigate('/contact')}
              className="w-full py-4 rounded-full bg-soothe-pink text-soothe-text font-medium text-sm hover:bg-[#ffcdd9] transition-colors mt-auto"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex-1 bg-white rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-sm relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="w-10 h-10 rounded-full bg-soothe-pink flex items-center justify-center mb-6">
              <Flower size={18} className="text-soothe-pinkIcon" />
            </div>
            
            <h3 className="font-sans text-sm uppercase tracking-widest text-soothe-muted mb-6">10-Class Pass</h3>
            
            <div className="font-serif text-5xl text-soothe-text mb-6">
              $120<span className="text-lg font-sans text-soothe-muted italic font-normal">/save $30</span>
            </div>
            
            <p className="font-sans text-soothe-muted text-sm leading-relaxed mb-8 px-4">
              Perfect for regulars who want flexibility and savings. Valid for 3 months from the date of purchase.
            </p>

            <button 
              name="contact us" 
              onClick={() => navigate('/contact')}
              className="w-full py-4 rounded-full bg-soothe-pink text-soothe-text font-medium text-sm hover:bg-[#ffcdd9] transition-colors mt-auto"
            >
              Contact Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
