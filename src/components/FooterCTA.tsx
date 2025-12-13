import React from 'react';
import { Flower } from 'lucide-react';
import { Button } from './Button';
import { TextReveal } from './TextReveal';
import { useNavigate } from 'react-router-dom';

export const FooterCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 md:px-10 pb-10 bg-soothe-bg">
      <div className="relative w-full h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format&fit=crop" 
          alt="Start your journey" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="font-serif text-5xl md:text-[5rem] leading-[1.1] text-white mb-8 drop-shadow-md">
            <TextReveal text="Start your journey today" /> <br />
            <span className="flex items-center justify-center gap-4 mt-2">
              <TextReveal text="with" delay={0.3} />
              <span className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-soothe-pink flex items-center justify-center shrink-0">
                <Flower size={28} className="text-soothe-pinkIcon" />
              </span>
              <span className="italic font-normal">Soothemi</span>
            </span>
          </h2>

          <p className="font-sans text-white/90 text-sm md:text-base max-w-md mb-10 drop-shadow-sm">
            Discover the transformative power of yoga, whether you're a beginner or an advanced practitioner.
          </p>

          <Button 
            className="bg-white hover:bg-white text-soothe-text"
            onClick={() => navigate('/contact')}
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
};
