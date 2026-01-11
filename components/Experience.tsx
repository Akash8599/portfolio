import React from 'react';
import { EXPERIENCE } from '../constants';
import Section from './Section';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center text-white">
            Professional Trajectory
          </h2>

          <div className="relative border-l border-slate-800 ml-4 md:ml-12 space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-xl text-cyan-400 font-medium mb-2">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-1 bg-slate-950 text-cyan-500 rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;