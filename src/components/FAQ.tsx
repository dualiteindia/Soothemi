import React, { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextReveal } from './TextReveal';
import { useNavigate } from 'react-router-dom';

const faqs = [
  {
    question: "How can I start with your yoga classes?",
    answer: "You can sign up on our platform, choose the right level for you, and access our online or in-person classes."
  },
  {
    question: "Do I need prior yoga experience?",
    answer: "No, we offer beginner-friendly classes and step-by-step guidance so you can start regardless of your experience level."
  },
  {
    question: "What equipment do I need for the classes?",
    answer: "Ideally, you should have a yoga mat, comfortable clothing, and a quiet space. Some advanced classes may require yoga blocks or straps, but we’ll let you know beforehand."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription anytime from your profile. There are no commitments, and you can return whenever you want."
  },
  {
    question: "Do you offer live classes or only pre-recorded sessions?",
    answer: "We provide both options. You can join our live sessions to interact with instructors or access pre-recorded classes at your convenience."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 md:px-10 py-24 bg-soothe-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-[3.5rem] text-center text-soothe-text mb-4">
          <TextReveal text="Frequently asked" /> <span className="italic font-normal">questions</span>
        </h2>
        <p className="font-sans text-soothe-muted text-center text-sm mb-16">
          Got Questions? We've Got Answers!
        </p>

        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1, 
                duration: 0.6, 
                ease: [0.23, 1, 0.32, 1] 
              }}
              onClick={() => toggleFAQ(i)}
              className="group bg-white rounded-[2rem] px-8 py-5 cursor-pointer hover:shadow-md transition-all overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg text-soothe-text/90 pr-4">{item.question}</span>
                <div className={`w-10 h-10 rounded-full bg-soothe-btnCircle flex items-center justify-center transition-transform shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>
                   {openIndex === i ? <Plus size={18} className="text-[#5A4E5D] rotate-45" /> : <ArrowRight size={18} className="text-[#5A4E5D]" />}
                </div>
              </div>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-soothe-muted text-[15px] leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* CTA Row - Bigger */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="bg-white rounded-[2.5rem] px-10 py-6 flex flex-col md:flex-row items-center justify-between mt-8 gap-6 shadow-sm"
          >
            <span className="font-serif text-2xl text-soothe-text/90">Still have questions?</span>
            <button 
              onClick={() => navigate('/contact')}
              className="px-10 py-4 rounded-full bg-soothe-pink text-soothe-text font-medium text-base hover:bg-[#ffcdd9] transition-colors shadow-btn hover:shadow-btn-hover"
            >
              Contact us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
