import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Terminal, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/95 z-10 backdrop-blur-md">
            <div>
              <h2 className="text-2xl font-display font-bold text-white">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-0.5 bg-slate-800 text-cyan-400 rounded border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar relative bg-slate-900">
            {project.image && (
              <div className="w-full h-56 md:h-72 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
              </div>
            )}

            <div className={`p-6 space-y-6 ${project.image ? '-mt-12 relative z-10' : ''}`}>
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Terminal size={18} className="text-cyan-500" />
                  Overview
                </h3>
                <div className="text-slate-300 space-y-4 leading-relaxed">
                  {project.longDescription ? (
                    project.longDescription.map((desc, idx) => (
                      <p key={idx}>{desc}</p>
                    ))
                  ) : (
                    <p>{project.description}</p>
                  )}
                </div>
              </div>

              {project.features && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-violet-500" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-end z-10">
             {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-6 py-2 bg-white text-slate-950 rounded-lg font-bold hover:bg-cyan-50 transition-colors"
                >
                  <ExternalLink size={18} />
                  View Project
                </a>
             )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;