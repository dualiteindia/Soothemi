import React from 'react';
import { TextReveal } from './TextReveal';

export const PassionPurpose: React.FC = () => {
  return (
    <section className="w-full px-4 pt-10 pb-20 bg-soothe-bg flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-[3.5rem] leading-[1.2] text-soothe-text mb-6">
          <TextReveal text="Guided by passion," /> <br className="hidden md:block" />
          <TextReveal text="Driven by purpose" delay={0.2} />
        </h2>
        <p className="font-sans text-soothe-muted text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed text-center">
          Explore our diverse offerings designed to help you find balance, flexibility, and peace of mind.
        </p>
      </div>
    </section>
  );
};
