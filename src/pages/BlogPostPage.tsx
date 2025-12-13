import React, { useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getBlogById, getAllBlogs } from '../data/blogs';
import { FooterCTA } from '../components/FooterCTA';
import { SectionReveal } from '../components/SectionReveal';
import { TextReveal } from '../components/TextReveal';
import { motion } from 'framer-motion';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const blogId = parseInt(id || '0');
  const blog = getBlogById(blogId);
  const allBlogs = getAllBlogs();
  
  // Filter out current blog for recommendations
  const recommendedBlogs = allBlogs.filter(b => b.id !== blogId);

  // Scroll handlers for recommended section
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-soothe-bg">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-soothe-text mb-4">Blog Post Not Found</h2>
          <button 
            onClick={() => navigate('/blog')}
            className="text-soothe-muted underline hover:text-soothe-text"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-soothe-bg">
      
      {/* SECTION 1: BLOG HEADER */}
      <SectionReveal>
        <section className="w-full px-6 md:px-12 pt-12 pb-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-[3.5rem] leading-[1.2] text-soothe-text mb-6">
              {blog.title}
            </h1>
            <p className="font-sans text-soothe-muted text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto">
              {blog.description}
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* SECTION 2: HERO IMAGE */}
      <SectionReveal>
        <section className="w-full px-4 md:px-10 pb-20">
          <div className="max-w-7xl mx-auto w-full aspect-[16/7] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-soft">
            <img 
              src={blog.image} 
              alt={blog.alt || blog.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </SectionReveal>

      {/* SECTION 3: BLOG CONTENT BODY */}
      <SectionReveal>
        <section className="w-full px-6 md:px-12 pb-24">
          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            {blog.content?.map((section, index) => (
              <div key={index}>
                <h2 className="font-serif text-2xl md:text-3xl text-soothe-text mb-4">
                  {section.heading}
                </h2>
                <p className="font-sans text-soothe-muted text-[15px] md:text-base leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      {/* SECTION 4: RECOMMENDED ARTICLES */}
      <SectionReveal>
        <section className="w-full px-6 md:px-12 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="mb-10">
              <h2 className="font-serif text-3xl md:text-4xl text-soothe-text mb-2">
                Recommended article for you
              </h2>
              <p className="font-sans text-soothe-muted text-sm">
                Our blog is designed to support your journey toward a balanced and mindful lifestyle.
              </p>
            </div>

            {/* Scrollable Row */}
            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {recommendedBlogs.map((item) => (
                <Link 
                  key={item.id}
                  to={`/blog/${item.id}`}
                  className="min-w-[350px] md:min-w-[400px] group bg-white rounded-[2rem] p-4 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300 flex flex-col snap-center"
                >
                  {/* Image */}
                  <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6">
                    <img 
                      src={item.image} 
                      alt={item.alt || item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-2 pb-4 flex-1 flex flex-col">
                    <span className="font-sans text-xs text-soothe-muted uppercase tracking-wider mb-3">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-2xl text-soothe-text mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-soothe-muted text-sm leading-relaxed mb-6 line-clamp-2">
                      {item.description}
                    </p>
                    <span className="font-sans text-sm font-medium text-soothe-text hover:text-soothe-muted transition-colors mt-auto inline-block">
                      Read more
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-4">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full bg-soothe-btnCircle hover:bg-soothe-pink flex items-center justify-center transition-colors text-soothe-text"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full bg-soothe-btnCircle hover:bg-soothe-pink flex items-center justify-center transition-colors text-soothe-text"
              >
                <ArrowRight size={20} />
              </button>
            </div>

          </div>
        </section>
      </SectionReveal>

      {/* SECTION 5: CTA BANNER */}
      <SectionReveal>
        <FooterCTA />
      </SectionReveal>
    </div>
  );
};
