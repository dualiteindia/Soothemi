import React from 'react';
import { Flower, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { trainers } from '../data/trainers';
import { Button } from '../components/Button';
import { FooterCTA } from '../components/FooterCTA';
import { SectionReveal } from '../components/SectionReveal';
import { Link } from 'react-router-dom';

export const TrainersPage: React.FC = () => {
  // Use Sarah Johnson (last in array) for the featured image overlay
  const featuredTrainer = trainers[5]; 

  return (
    <div className="w-full bg-soothe-bg">
      {/* SECTION 1: PAGE INTRO + FEATURED TRAINER */}
      <section className="w-full px-6 md:px-12 pt-12 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column */}
          <div className="flex-1 lg:max-w-xl">
            <h1 className="font-serif text-5xl md:text-[4.5rem] leading-[1.1] text-soothe-text mb-8">
              Guide by <span className="italic font-normal">passion</span>, <br />
              Driven by <br />
              <span className="inline-flex items-center gap-4">
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-soothe-pink flex items-center justify-center shrink-0 translate-y-1">
                  <Flower size={20} strokeWidth={1.5} className="text-soothe-pinkIcon" />
                </span>
                <span className="italic font-normal">purpose</span>
              </span>
            </h1>
            
            <p className="font-sans text-soothe-muted text-base leading-relaxed max-w-md mb-12">
              Explore our diverse offerings designed to help you find balance, flexibility, and peace of mind.
            </p>

            <div className="flex gap-16">
              <div className="flex flex-col gap-1">
                <span className="font-serif italic text-4xl text-soothe-text">100+</span>
                <span className="font-sans text-xs text-soothe-muted uppercase tracking-wide">Professional trainers</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-serif italic text-4xl text-soothe-text">99%</span>
                <span className="font-sans text-xs text-soothe-muted uppercase tracking-wide">Trusted trainers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Image Card */}
          <div className="flex-1 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft"
            >
              {/* Main Image: Two women sitting */}
              <img 
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1000&auto=format&fit=crop" 
                alt="Trainers connecting" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Card */}
              <Link to={`/trainers/${featuredTrainer.id}`} className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-4 flex items-center justify-between shadow-lg hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <img src={featuredTrainer.image} alt={featuredTrainer.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-soothe-text leading-tight">{featuredTrainer.name}</h3>
                    <p className="font-sans text-xs text-soothe-muted">{featuredTrainer.role}</p>
                  </div>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-soothe-btnCircle flex items-center justify-center shrink-0">
                  <ArrowRight size={18} className="text-[#5A4E5D]" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRAINERS GRID */}
      <section className="w-full px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-[3.5rem] text-soothe-text mb-4">
              Guided by <span className="italic font-normal">passion</span>, Driven by <span className="italic font-normal">purpose</span>
            </h2>
            <p className="font-sans text-soothe-muted text-sm md:text-base max-w-2xl mx-auto">
              Explore our diverse offerings designed to help you find balance, flexibility, and peace of mind.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {trainers.map((trainer, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link 
                  to={`/trainers/${trainer.id}`}
                  className="group relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-card cursor-pointer block"
                >
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Top Right Button */}
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-soothe-btnCircle flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm z-20">
                    <ArrowRight className="w-4 h-4 text-[#5A4E5D]" strokeWidth={1.5} />
                  </div>

                  {/* Bottom Info Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white py-5 px-4 rounded-2xl shadow-sm text-center z-20 transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="font-serif text-xl text-soothe-text mb-1">{trainer.name}</h3>
                    <p className="font-sans text-xs text-soothe-muted uppercase tracking-wider">{trainer.role}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Centered Button */}
          <div className="flex justify-center">
            <Button className="bg-white hover:bg-white shadow-sm px-8">
              Know more
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA BANNER */}
      <SectionReveal>
        <FooterCTA />
      </SectionReveal>
    </div>
  );
};
