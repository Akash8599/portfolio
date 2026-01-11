import React from 'react';
import { PERSONAL_INFO } from '../constants';
import Section from './Section';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-slate-950 pb-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
          Ready to Collaborate?
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
          Currently open to discussing architecture roles, cloud migrations, or challenging backend engineering opportunities.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-cyan-900/20"
          >
            <Mail size={20} />
            Send Email
          </a>
          <a 
            href={`tel:${PERSONAL_INFO.phone}`}
            className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white border border-slate-700 hover:border-slate-500 rounded-xl font-bold transition-all"
          >
            <Phone size={20} />
            {PERSONAL_INFO.phone}
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;