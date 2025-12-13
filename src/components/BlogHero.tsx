import React from 'react';
import { Flower } from 'lucide-react';
import { heroBlogs } from '../data/blogs';
import { TextReveal } from './TextReveal';
import { Link } from 'react-router-dom';

export const BlogHero: React.FC = () => {
  // Duplicate blogs to create seamless loop
  const loopBlogs = [...heroBlogs, ...heroBlogs, ...heroBlogs];

  return (
    <section className="w-full pt-16 pb-20 bg-soothe-bg overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <h1 className="font-serif text-5xl md:text-[4.5rem] leading-[1.1] text-soothe-text mb-6">
          <TextReveal text="Your yoga path" /> <br />
          <TextReveal text="stories tips and" delay={0.2} />{' '}
          <span className="inline-flex items-center gap-3 align-middle">
            <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-soothe-pink flex items-center justify-center shrink-0">
              <Flower size={20} strokeWidth={1.5} className="text-soothe-pinkIcon" />
            </span>
            <span className="italic font-normal">wellness</span>
          </span>
        </h1>
        
        <p className="font-sans text-soothe-muted text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed">
          Welcome to the Soothemi Yoga Blog, where we share expert advice, wellness tips, and inspirational stories to help you enhance your practice both on and off the mat.
        </p>
      </div>

      {/* Moving Cards Strip */}
      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 h-full w-[25%] bg-gradient-to-r from-soothe-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-[25%] bg-gradient-to-l from-soothe-bg to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="flex gap-8 animate-scroll-horizontal w-max px-8">
          {loopBlogs.map((blog, index) => (
            <Link 
              to={`/blog/${blog.id}`}
              key={`${blog.id}-${index}`}
              className="w-[450px] md:w-[550px] bg-white rounded-[1.5rem] p-4 flex items-center gap-6 shadow-soft shrink-0 hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shrink-0">
                <img 
                  src={blog.image} 
                  alt={blog.alt || blog.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 py-2 pr-2">
                <span className="font-sans text-xs text-soothe-muted uppercase tracking-wider mb-2 block">
                  {blog.category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-soothe-text mb-3 leading-tight">
                  {blog.title}
                </h3>
                <p className="font-sans text-soothe-muted text-xs md:text-sm line-clamp-2 mb-4">
                  {blog.description}
                </p>
                <span className="font-sans text-sm font-medium text-soothe-text hover:text-soothe-muted transition-colors">
                  Read more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
