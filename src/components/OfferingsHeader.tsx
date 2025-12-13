import React from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export const OfferingsHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 pt-24 pb-8 bg-soothe-bg flex flex-col items-center text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-[3.5rem] leading-[1.2] text-soothe-text mb-6">
          Yoga for every body and <br />
          <span className="italic font-normal">every</span> mind
        </h2>
        
        <p className="font-sans text-soothe-muted text-[15px] md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
          Explore our diverse offerings designed to help you find balance, flexibility, and peace of mind.
        </p>
        
        <div className="flex justify-center">
          <Button 
            className="bg-white hover:bg-white shadow-sm"
            onClick={() => navigate('/services')}
          >
            Know more
          </Button>
        </div>
      </div>
    </section>
  );
};
