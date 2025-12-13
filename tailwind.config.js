/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        soothe: {
          bg: '#F4F2EF',       // Page background
          text: '#2D2D2D',     // Dark text
          muted: '#6B6661',    // Muted gray
          
          // Brand Specifics
          pink: '#FFDCE5',     // Pastel pink
          pinkIcon: '#E08C9C', // Darker pink stroke
          pinkDarker: '#F5C0D0', // Darker pink for hover fill
          
          // New Colors from Section 2
          orange: '#FCDCB5',   // Apricot/Orange for icon bg
          orangeIcon: '#E09F6D', // Darker orange stroke
          teal: '#B5EAD7',     // Mint/Teal for icon bg
          tealIcon: '#6FBCA0',   // Darker teal stroke
          
          // Button
          btnBg: '#FAF9F6',    // Warm off-white base
          btnHover: '#FFFFFF', // Pure white on hover
          btnCircle: '#FCE0EF', 
          
          // Hero Colors
          heroText: '#FFFFFF', 
          heroStart: '#B59F8F', 
          heroEnd: '#A8907E',   
        }
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'btn': '0 4px 12px -2px rgba(0, 0, 0, 0.08)',
        'btn-hover': '0 10px 20px -5px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.03)',
      },
      transitionTimingFunction: {
        'calm': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scroll-vertical': 'scrollVertical 40s linear infinite',
        'scroll-horizontal': 'scrollHorizontal 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollVertical: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        scrollHorizontal: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
