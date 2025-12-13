import React from 'react';
import { TextReveal } from './TextReveal';

const cards = [
  {
    title: "Yoga helps to lengthen and strengthen muscles, improving flexibility and range of motion. With regular practice, you'll notice greater mobility, fewer aches, and better posture, which can prevent injury and keep your body feeling its best.",
    type: "text"
  },
  {
    title: "Boost overall wellness",
    description: "Yoga supports a healthy heart, improves circulation, and promotes better sleep. It can also lower blood pressure, improve digestion, and boost your immune system.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop",
    type: "image"
  },
  {
    title: "Find peace of mind",
    description: "Reduce stress and anxiety through mindful breathing and movement. Find your center and carry that peace with you throughout your day.",
    image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=400&auto=format&fit=crop",
    type: "image"
  },
  {
    title: "Connect with community",
    description: "Join a supportive group of like-minded individuals. Shared energy in our classes fosters connection, motivation, and a sense of belonging.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop",
    type: "image"
  }
];

export const Transform: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-10 py-24 bg-soothe-bg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Content */}
        <div className="lg:w-[40%] sticky top-24">
          <h2 className="font-serif text-5xl md:text-[4rem] leading-[1.1] text-soothe-text mb-8">
            <TextReveal text="Transform your" /> <br />
            <TextReveal text="body, mind, and life" delay={0.2} />
          </h2>
          <p className="font-sans text-soothe-muted text-[15px] leading-relaxed max-w-sm">
            Whether you're looking to improve your health, reduce stress, or enhance your well-being, yoga offers a wealth of benefits that can positively impact your daily life.
          </p>
        </div>

        {/* Right Cards - Vertical Scroll Loop */}
        <div className="lg:w-[60%] h-[600px] overflow-hidden relative">
          
          {/* Fade Masks */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-soothe-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-soothe-bg to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="animate-scroll-vertical flex flex-col gap-6">
            {/* Double the cards for seamless loop */}
            {[...cards, ...cards].map((card, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm shrink-0">
                {card.type === 'text' ? (
                  <p className="font-sans text-soothe-muted text-[15px] leading-relaxed">
                    {card.title}
                  </p>
                ) : (
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-soothe-text mb-4">{card.title}</h3>
                      <p className="font-sans text-soothe-muted text-[15px] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <div className="w-full md:w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
