import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 500px
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      
      {/* Navigation - Fixed Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-center pointer-events-none">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full px-6 py-3 flex flex-row gap-6 pointer-events-auto shadow-2xl whitespace-nowrap">
          <button 
            onClick={() => scrollToSection('experience')} 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
          >
            Projects
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-cyan-400 transition-colors focus:outline-none shadow-cyan-500/20"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;