import React from 'react';
import { SKILLS } from '../constants';
import Section from './Section';

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">
          <span className="border-b-4 border-cyan-500 pb-2">Technical Arsenal</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SKILLS.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-slate-800 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-all duration-300 group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-md border border-slate-700 group-hover:border-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Skills;