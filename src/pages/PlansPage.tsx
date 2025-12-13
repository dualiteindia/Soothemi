import React from 'react';
import { PricingGrid } from '../components/PricingGrid';
import { FAQ } from '../components/FAQ';
import { FooterCTA } from '../components/FooterCTA';
import { SectionReveal } from '../components/SectionReveal';

export const PlansPage: React.FC = () => {
  return (
    <div className="w-full bg-soothe-bg">
      <SectionReveal>
        <PricingGrid />
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
