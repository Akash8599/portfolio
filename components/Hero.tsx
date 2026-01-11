import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import CodeBackground from './CodeBackground';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      
      {/* 3D Code Background Animation */}
      <div className="absolute inset-0 opacity-40">
        <CodeBackground />
      </div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/90 z-0 pointer-events-none" />

      {/* Abstract Color Glows (Subtler now) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-violet-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-white drop-shadow-2xl">Akash</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 drop-shadow-lg">
            Kamble
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-slate-100 mb-10 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {PERSONAL_INFO.tagline}. 
          <br className="hidden md:block" />
          <span className="text-slate-300 font-light">
            Leveraging 4+ years of expertise in scalable distributed systems and legacy modernization.
          </span>
        </motion.p>

        <motion.div 
          className="flex flex-col items-center justify-center gap-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="px-6 md:px-8 py-3.5 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer whitespace-nowrap text-sm md:text-base flex items-center gap-2"
            >
              Contact Me
            </button>
          </div>
          
          <div className="flex flex-row gap-3 flex-shrink-0 mt-4">
             <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-all cursor-pointer hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              aria-label="LinkedIn"
             >
                <Linkedin size={20} />
             </a>
             <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-all cursor-pointer hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              aria-label="GitHub"
             >
                <Github size={20} />
             </a>
             <a 
              href={PERSONAL_INFO.leetcode} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-all cursor-pointer hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              aria-label="LeetCode"
             >
                <Code2 size={20} />
             </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </div>
  );
};

export default Hero;