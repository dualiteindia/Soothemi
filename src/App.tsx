import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { TrainersPage } from './pages/TrainersPage';
import { TrainerProfilePage } from './pages/TrainerProfilePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PlansPage } from './pages/PlansPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { PageTransition } from './components/PageTransition';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-soothe-bg flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full max-w-[1800px] mx-auto">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/trainers" element={<PageTransition><TrainersPage /></PageTransition>} />
            <Route path="/trainers/:id" element={<PageTransition><TrainerProfilePage /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
            <Route path="/blog/:id" element={<PageTransition><BlogPostPage /></PageTransition>} />
            <Route path="/plan" element={<PageTransition><PlansPage /></PageTransition>} />
            <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
