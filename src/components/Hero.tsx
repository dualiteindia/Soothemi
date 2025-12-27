import React from 'react';
import { Flower } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 md:px-10 pb-10 w-full bg-soothe-bg">
      {/* 
        Hero Container 
        - Added motion.div for scale and blur-in animation
      */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full rounded-4xl overflow-hidden h-[650px] md:h-[750px] flex items-center justify-center shadow-sm bg-[#B59F8F]"
      >
        
        {/* Unified Background Image Asset */}
        <img 
          src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/freepik__retouch__84682.webp" 
          alt="Soothemi wellness scene featuring a calm interior with a ceramic vase on the left and a woman meditating in robes on the right" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Center Zone: Text Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center px-4 -mt-8">
          
          <h1 className="font-serif text-5xl md:text-[5.5rem] leading-[1.1] text-white mb-6 drop-shadow-sm">
            <span className="block font-normal">Find Your Inner Balance</span>
            <span className="flex items-center justify-center gap-5 mt-2">
                <span className="text-4xl md:text-[5rem] font-normal">with</span>
                {/* Icon in text */}
                <span className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-soothe-pink flex items-center justify-center shrink-0 translate-y-2">
                    <Flower size={28} strokeWidth={1.5} className="text-soothe-pinkIcon" />
                </span>
                <span className="italic font-normal font-serif">Soothemi</span>
            </span>
          </h1>

          <p className="text-white/90 font-sans text-[15px] md:text-base mb-12 max-w-[500px] leading-relaxed tracking-wide antialiased font-light">
            Discover the transformative power of yoga, whether you're a beginner or an advanced practitioner.
          </p>

          <Button 
            className="bg-white hover:bg-white text-soothe-text shadow-lg"
            onClick={() => navigate('/contact')}
          >
            Contact
          </Button>
        </div>

      </motion.div>
    </section>
  );
};
