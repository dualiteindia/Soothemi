import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TextReveal } from './TextReveal';

const testimonials = [
  {
    text: "Joining these yoga classes has been life-changing. I feel more energized every day, and my flexibility has improved significantly.",
    name: "Sarah, Yoga Enthusiast",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/13747.webp"
  },
  {
    text: "The instructors are incredibly supportive and knowledgeable. I've learned so much about my body and mind through their guidance.",
    name: "Emily, Beginner Yogi",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/24835.webp"
  },
  {
    text: "A wonderful community and a beautiful space. Every class feels like a mini-retreat from the chaos of daily life.",
    name: "Michael, Regular Member",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/2151745708.webp"
  },
  {
    text: "I never thought I'd enjoy yoga this much. It's become the highlight of my week and keeps me grounded.",
    name: "Jessica, Power Yoga Fan",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/2151742562.webp"
  },
  {
    text: "The restorative classes are pure magic. I leave feeling like I'm floating on a cloud. Highly recommend!",
    name: "David, Stress Relief Seeker",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/2151745705.webp"
  }
];

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-24 bg-soothe-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-16 text-center">
        <h2 className="font-serif text-4xl md:text-[3.5rem] text-soothe-text mb-4">
          <TextReveal text="What our members are saying" />
        </h2>
        <p className="font-sans text-soothe-muted text-sm">
          Their stories reflect the growth, healing, and joy that comes from consistent practice in our studio.
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="flex gap-6 overflow-x-auto px-4 md:px-10 pb-10 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((item, index) => (
          <motion.div 
            key={index}
            className="min-w-[300px] md:min-w-[350px] bg-white rounded-[2rem] p-8 flex flex-col gap-6 snap-center shadow-sm"
            whileHover={{ y: -5 }}
          >
            <div className="w-full h-48 rounded-2xl overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <p className="font-serif text-xl text-soothe-text leading-relaxed">
              "{item.text}"
            </p>
            <p className="font-sans text-xs text-soothe-muted uppercase tracking-wider mt-auto">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-8">
        <button 
          name="scroll left" 
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full bg-soothe-pink/50 hover:bg-soothe-pink flex items-center justify-center transition-colors text-soothe-text"
        >
          <ArrowLeft size={20} />
        </button>
        <button 
          name="scroll right" 
          onClick={scrollRight}
          className="w-12 h-12 rounded-full bg-soothe-pink/50 hover:bg-soothe-pink flex items-center justify-center transition-colors text-soothe-text"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};
