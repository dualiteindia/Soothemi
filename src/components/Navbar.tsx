import React from 'react';
import { Flower } from 'lucide-react';
import { Button } from './Button';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isContactActive = location.pathname === '/contact';

  return (
    <nav className="w-full h-[85px] px-6 md:px-12 flex items-center justify-between bg-soothe-bg relative z-50">
      
      {/* Left Cluster: Badge + Text */}
      <NavLink to="/" className="flex items-center gap-3 z-10 cursor-pointer group">
        <div className="w-9 h-9 rounded-full bg-soothe-pink flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
          <Flower size={18} strokeWidth={1.5} className="text-soothe-pinkIcon" />
        </div>
        <span className="font-serif italic text-2xl text-soothe-text tracking-tight font-medium">
          Soothemi
        </span>
      </NavLink>

      {/* Center Navigation */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 hidden md:flex items-center gap-12">
        <NavLink 
          to="/trainers"
          className={({ isActive }) => 
            `text-[15px] font-sans transition-colors ${
              isActive 
                ? 'text-soothe-text font-medium' 
                : 'text-soothe-muted hover:text-soothe-text'
            }`
          }
        >
          Trainers
        </NavLink>

        <NavLink 
          to="/blog"
          className={({ isActive }) => 
            `text-[15px] font-sans transition-colors ${
              isActive 
                ? 'text-soothe-text font-medium' 
                : 'text-soothe-muted hover:text-soothe-text'
            }`
          }
        >
          Blog
        </NavLink>

        <NavLink 
          to="/plan"
          className={({ isActive }) => 
            `text-[15px] font-sans transition-colors ${
              isActive 
                ? 'text-soothe-text font-medium' 
                : 'text-soothe-muted hover:text-soothe-text'
            }`
          }
        >
          Plan
        </NavLink>

        <NavLink 
          to="/services"
          className={({ isActive }) => 
            `text-[15px] font-sans transition-colors ${
              isActive 
                ? 'text-soothe-text font-medium' 
                : 'text-soothe-muted hover:text-soothe-text'
            }`
          }
        >
          Services
        </NavLink>
      </div>

      {/* Right Action */}
      <div className="flex items-center z-10">
        <Button 
          onClick={() => navigate('/contact')}
          className={isContactActive ? 'text-soothe-text font-semibold' : ''}
        >
          Contact
        </Button>
      </div>
    </nav>
  );
};
