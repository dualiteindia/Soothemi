import React from 'react';
import { Flower } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-soothe-bg pt-20 pb-0 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32 flex flex-col md:flex-row justify-between gap-16">
        
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-soothe-pink flex items-center justify-center shrink-0">
              <Flower size={18} strokeWidth={1.5} className="text-soothe-pinkIcon" />
            </div>
            <span className="font-serif italic text-2xl text-soothe-text tracking-tight font-medium">
              Soothemi
            </span>
          </Link>
        </div>

        {/* Links */}
        <div className="flex gap-16 md:gap-32">
          <div className="flex flex-col gap-4">
            <Link to="/trainers" className="font-sans text-sm text-soothe-muted hover:text-soothe-text transition-colors">
              Trainers
            </Link>
            <Link to="/blog" className="font-sans text-sm text-soothe-muted hover:text-soothe-text transition-colors">
              Blog
            </Link>
            <Link to="/plan" className="font-sans text-sm text-soothe-muted hover:text-soothe-text transition-colors">
              Pricing
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/contact" className="font-sans text-sm text-soothe-muted hover:text-soothe-text transition-colors">
              Contact
            </Link>
            <Link to="/services" className="font-sans text-sm text-soothe-muted hover:text-soothe-text transition-colors">
              Services
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <span className="font-serif text-lg text-soothe-text">Lets Talk</span>
          <p className="font-sans text-sm text-soothe-muted">(814) 413-9191</p>
          <p className="font-sans text-sm text-soothe-muted">hello@soothemi.com</p>
        </div>
      </div>

      {/* Huge Bottom Text */}
      <div className="w-full flex justify-center">
        <Link to="/" className="block">
          <h1 className="font-serif italic text-[18vw] md:text-[22vw] leading-none text-[#E5E2DD] translate-y-[20%] hover:text-[#dcd9d4] transition-colors cursor-pointer">
            Soothemi
          </h1>
        </Link>
      </div>
    </footer>
  );
};
