import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Flower } from 'lucide-react';
import { motion } from 'framer-motion';
import { getTrainerById } from '../data/trainers';
import { FooterCTA } from '../components/FooterCTA';
import { SectionReveal } from '../components/SectionReveal';
import { Button } from '../components/Button';

export const TrainerProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const trainer = getTrainerById(id || '');

  if (!trainer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-soothe-bg">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-soothe-text mb-4">Trainer Not Found</h2>
          <Button onClick={() => navigate('/trainers')}>Back to Trainers</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-soothe-bg">
      
      {/* SECTION 1: TRAINER HERO */}
      <SectionReveal>
        <section className="w-full px-6 md:px-12 pt-16 pb-24 text-center">
          <div className="max-w-4xl mx-auto mb-16">
            <span className="font-sans text-sm text-soothe-muted uppercase tracking-wider mb-4 block">
              {trainer.specialization}
            </span>
            <h1 className="font-serif text-5xl md:text-[4.5rem] leading-[1.1] text-soothe-text mb-6">
              {trainer.name}
            </h1>
            <p className="font-sans text-soothe-muted text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
              {trainer.bio}
            </p>
            <div className="flex justify-center">
              <Button onClick={() => navigate('/contact')}>Book a consultation</Button>
            </div>
          </div>

          {/* FLOWER OPEN ANIMATION */}
          <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Left Petal - Decorative Blurred Duplicate */}
            <motion.div
              initial={{ rotate: 0, x: 0, opacity: 0 }}
              whileInView={{ rotate: -6, x: '-60%', opacity: 0.8 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="absolute w-[280px] md:w-[350px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-soft z-10 origin-bottom-right"
            >
              <img 
                src={trainer.image} 
                alt="" 
                className="w-full h-full object-cover blur-xl opacity-90 scale-110" 
              />
              <div className="absolute inset-0 bg-soothe-pink/10 mix-blend-overlay" />
            </motion.div>

            {/* Right Petal - Decorative Blurred Duplicate */}
            <motion.div
              initial={{ rotate: 0, x: 0, opacity: 0 }}
              whileInView={{ rotate: 6, x: '60%', opacity: 0.8 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="absolute w-[280px] md:w-[350px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-soft z-10 origin-bottom-left"
            >
              <img 
                src={trainer.image} 
                alt="" 
                className="w-full h-full object-cover blur-xl opacity-90 scale-110" 
              />
              <div className="absolute inset-0 bg-soothe-pink/10 mix-blend-overlay" />
            </motion.div>

            {/* Center Main Image */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-[300px] md:w-[380px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-card z-20"
            >
              <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      {/* SECTION 2: SERVICES OFFERED */}
      <SectionReveal>
        <section className="w-full px-6 md:px-12 py-24 bg-soothe-bg">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-[3.5rem] text-soothe-text mb-4">
                Services offered
              </h2>
              <p className="font-sans text-soothe-muted text-sm md:text-base max-w-2xl mx-auto">
                A passionate instructor for more than a decade, {trainer.name.split(' ')[0]} specializes in {trainer.role}, offering dynamic sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trainer.services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col items-start h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-soothe-btnCircle flex items-center justify-center mb-6">
                    <Flower size={20} className="text-soothe-pinkIcon" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-soothe-text mb-4">{service.title}</h3>
                  <p className="font-sans text-soothe-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* SECTION 3: MOMENTS FROM OUR YOGA JOURNEY */}
      <SectionReveal>
        <section className="w-full px-6 md:px-12 pb-24 bg-soothe-bg">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-[3.5rem] text-soothe-text mb-4">
                Moments from our yoga <span className="italic font-normal">journey</span>
              </h2>
              <p className="font-sans text-soothe-muted text-sm md:text-base">
                We strive to create a welcoming environment where everyone can thrive.
              </p>
            </div>

            {/* Masonry-ish Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
              
              {/* Image 1 */}
              <div className="rounded-[2rem] overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Yoga moment" />
              </div>

              {/* Quote 1 */}
              <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-center shadow-sm">
                <p className="font-serif text-lg text-soothe-text mb-6">"{trainer.quotes[0].text}"</p>
                <div className="mt-auto">
                  <span className="block font-sans text-xs text-soothe-muted font-medium">{trainer.quotes[0].author}</span>
                  <span className="block font-sans text-[10px] text-soothe-muted uppercase tracking-wider">{trainer.quotes[0].role}</span>
                </div>
              </div>

              {/* Image 2 */}
              <div className="rounded-[2rem] overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Yoga moment" />
              </div>

              {/* Quote 2 */}
              <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-center shadow-sm">
                <p className="font-serif text-lg text-soothe-text mb-6">"{trainer.quotes[1].text}"</p>
                <div className="mt-auto">
                  <span className="block font-sans text-xs text-soothe-muted font-medium">{trainer.quotes[1].author}</span>
                  <span className="block font-sans text-[10px] text-soothe-muted uppercase tracking-wider">{trainer.quotes[1].role}</span>
                </div>
              </div>

              {/* Image 3 */}
              <div className="rounded-[2rem] overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Yoga moment" />
              </div>

              {/* Quote 3 */}
              <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-center shadow-sm">
                <p className="font-serif text-lg text-soothe-text mb-6">"{trainer.quotes[2].text}"</p>
                <div className="mt-auto">
                  <span className="block font-sans text-xs text-soothe-muted font-medium">{trainer.quotes[2].author}</span>
                  <span className="block font-sans text-[10px] text-soothe-muted uppercase tracking-wider">{trainer.quotes[2].role}</span>
                </div>
              </div>

            </div>
            
            {/* REMOVED "Know more" button from here as requested */}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <FooterCTA />
      </SectionReveal>
    </div>
  );
};
