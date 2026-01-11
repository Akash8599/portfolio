import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import Section from './Section';
import { Award, CheckCircle } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" className="bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3 text-white">
            <Award className="text-yellow-400" />
            <span>Achievements & Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-950/50 border border-slate-800 hover:border-yellow-400/30 transition-colors"
              >
                <div className="text-green-400 flex-shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs text-slate-400">
                    {item.issuer} • {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Achievements;