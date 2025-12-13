import React from 'react';
import { ServicesIntro } from '../components/ServicesIntro';
import { OfferingsHeader } from '../components/OfferingsHeader';
import { Offerings } from '../components/Offerings';
import { FAQ } from '../components/FAQ';
import { FooterCTA } from '../components/FooterCTA';
import { SectionReveal } from '../components/SectionReveal';

export const ServicesPage: React.FC = () => {
  return (
    <div className="w-full bg-soothe-bg">
      <SectionReveal>
        <ServicesIntro />
      </SectionReveal>

      <SectionReveal>
        <OfferingsHeader />
      </SectionReveal>

      <SectionReveal>
        <Offerings />
      </SectionReveal>

      <SectionReveal>
        <FAQ />
      </SectionReveal>

      <SectionReveal>
        <FooterCTA />
      </SectionReveal>
    </div>
  );
};
