import React from 'react';
import { BlogHero } from '../components/BlogHero';
import { BlogGrid } from '../components/BlogGrid';
import { FooterCTA } from '../components/FooterCTA';
import { SectionReveal } from '../components/SectionReveal';

export const BlogPage: React.FC = () => {
  return (
    <div className="w-full bg-soothe-bg">
      <SectionReveal>
        <BlogHero />
      </SectionReveal>

      <SectionReveal>
        <BlogGrid />
      </SectionReveal>

      <SectionReveal>
        <FooterCTA />
      </SectionReveal>
    </div>
  );
};
