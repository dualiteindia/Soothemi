import React from 'react';
import { Hero } from '../components/Hero';
import { Mission } from '../components/Mission';
import { Stats } from '../components/Stats';
import { OfferingsHeader } from '../components/OfferingsHeader';
import { Offerings } from '../components/Offerings';
import { Community } from '../components/Community';
import { Trainers } from '../components/Trainers';
import { Transform } from '../components/Transform';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { FooterCTA } from '../components/FooterCTA';
import { SectionReveal } from '../components/SectionReveal';

export const Home: React.FC = () => {
  return (
    <>
      <SectionReveal>
        <Hero />
      </SectionReveal>
      
      <SectionReveal>
        <Mission />
      </SectionReveal>

      <SectionReveal>
        <Stats />
      </SectionReveal>
      
      <SectionReveal>
        <OfferingsHeader />
      </SectionReveal>

      <SectionReveal>
        <Offerings />
      </SectionReveal>
      
      <SectionReveal>
        <Community />
      </SectionReveal>

      <SectionReveal>
        <Trainers />
      </SectionReveal>

      <SectionReveal>
        <Transform />
      </SectionReveal>

      <SectionReveal>
        <Pricing />
      </SectionReveal>

      <SectionReveal>
        <Testimonials />
      </SectionReveal>

      <SectionReveal>
        <FAQ />
      </SectionReveal>

      <SectionReveal>
        <FooterCTA />
      </SectionReveal>
    </>
  );
};
