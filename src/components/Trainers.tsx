import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { TextReveal } from './TextReveal';
import { trainers } from '../data/trainers';
import { Link, useNavigate } from 'react-router-dom';

export const Trainers: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="trainers" className="w-full px-4 md:px-10 py-24 bg-soothe-bg">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="font-serif text-4xl md:text-[3.5rem] leading-[1.2] text-soothe-text mb-6">
          <TextReveal text="Guided by passion," /> <br className="hidden md:block" />
          <TextReveal text="Driven by purpose" delay={0.2} />
        </h2>
        <p className="font-sans text-soothe-muted text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed">
          Explore our diverse offerings designed to help you find balance, flexibility, and peace of mind.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
        {trainers.map((trainer, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ 
              delay: index * 0.1, 
              duration: 0.8, 
              ease: [0.23, 1, 0.32, 1] 
            }}
          >
            <Link 
              to={`/trainers/${trainer.id}`}
              className="group relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-card cursor-pointer block"
            >
              {/* Background Image */}
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Top Right Action Button */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-soothe-pink/90 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm z-20">
                <ArrowRight className="w-4 h-4 text-soothe-text" strokeWidth={1.5} />
              </div>

              {/* Bottom Info Card - Floating */}
              <div className="absolute bottom-3 left-3 right-3 bg-white py-5 px-4 rounded-2xl shadow-sm text-center z-20 transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="font-serif text-xl text-soothe-text mb-1">{trainer.name}</h3>
                <p className="font-sans text-xs text-soothe-muted uppercase tracking-wider">{trainer.role}</p>
              </div>
              
              {/* Gradient Overlay for better contrast at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center">
        <Button 
          className="bg-white hover:bg-white shadow-sm px-8"
          onClick={() => navigate('/trainers')}
        >
          Know more
        </Button>
      </div>
    </section>
  );
};
