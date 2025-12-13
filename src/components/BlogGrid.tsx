import React from 'react';
import { gridBlogs } from '../data/blogs';
import { Button } from './Button';
import { TextReveal } from './TextReveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const BlogGrid: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 py-20 bg-soothe-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-[3.5rem] text-soothe-text mb-4">
            <TextReveal text="The yoga journey" /> <br />
            <TextReveal text="insights and" delay={0.2} /> <span className="italic font-normal">inspiration</span>
          </h2>
          <p className="font-sans text-soothe-muted text-sm md:text-base max-w-xl mx-auto">
            Our blog is designed to support your journey toward a balanced and mindful lifestyle.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {gridBlogs.map((blog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link 
                to={`/blog/${blog.id}`}
                className="group bg-white rounded-[2rem] p-4 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6">
                  <img 
                    src={blog.image} 
                    alt={blog.alt || blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="px-2 pb-4 flex-1 flex flex-col">
                  <span className="font-sans text-xs text-soothe-muted uppercase tracking-wider mb-3">
                    {blog.category}
                  </span>
                  <h3 className="font-serif text-2xl text-soothe-text mb-3 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="font-sans text-soothe-muted text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.description}
                  </p>
                  <span className="font-sans text-sm font-medium text-soothe-text hover:text-soothe-muted transition-colors mt-auto inline-block">
                    Read more
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Centered Button */}
        <div className="flex justify-center">
          <Button className="bg-white hover:bg-white shadow-sm px-8">
            Know more
          </Button>
        </div>
      </div>
    </section>
  );
};
