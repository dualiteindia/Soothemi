import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      name="Soothemi" 
      onClick={onClick}
      className={`
        group relative flex items-center rounded-full 
        bg-soothe-btnBg text-soothe-text font-medium 
        pl-1.5 pr-6 py-1.5 gap-3
        shadow-btn overflow-hidden isolate
        
        /* Physics & Transitions */
        transition-all duration-[400ms] ease-calm
        
        /* Hover State (Desktop) */
        hover:-translate-y-[2px]
        hover:shadow-btn-hover
        
        /* Active/Tap State (Mobile) */
        active:scale-98
        active:translate-y-0
        active:shadow-btn
        
        ${className}
      `}
    >
      {/* Expanding Circle Background */}
      <div
        className={`
          absolute left-1.5 top-1.5 bottom-1.5
          w-9 h-9 rounded-full bg-soothe-btnCircle 
          transition-all duration-[500ms] ease-calm
          group-hover:w-[calc(100%-12px)] group-hover:bg-soothe-pinkDarker
          -z-10
        `}
      />

      {/* Icon Container (Visual anchor) */}
      <div
        className={`
          w-9 h-9 rounded-full 
          flex items-center justify-center shrink-0
          relative z-10
        `}
      >
        <ArrowRight
          className={`
            w-4 h-4 text-[#5A4E5D]
            transition-transform duration-[400ms] ease-calm
            group-hover:translate-x-[3px]
          `}
          strokeWidth={1.5}
        />
      </div>

      {/* Text */}
      <span className="text-[15px] tracking-wide text-[#2D2D2D] relative z-10 group-hover:text-[#2D2D2D] transition-colors duration-300">
        {children}
      </span>
    </button>
  );
};
