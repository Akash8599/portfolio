import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import Section from './Section';
import { ExternalLink, Folder, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { ProjectItem } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <Section id="projects" className="bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center text-white">
          Featured Engineering
        </h2>

        {/* Grid layout: 2 columns centered with max-w-6xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              // Removed parallax Y transform to keep grid items perfectly inline
              // Removed transition-all to prevent conflicts
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-[border-color,box-shadow] duration-300 flex flex-col h-full min-h-[320px]"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-violet-500/10 text-violet-400 rounded-lg group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    <Folder size={28} />
                  </div>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-slate-500 hover:text-white transition-colors cursor-pointer z-10"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="View Project"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-8 leading-relaxed flex-1 text-base line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.slice(0, 5).map((t, idx) => (
                    <span key={idx} className="text-xs uppercase tracking-wider font-bold text-slate-300 px-3 py-1.5 bg-slate-800/50 rounded-md border border-transparent group-hover:border-slate-700 transition-colors">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-500 px-3 py-1.5">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full mt-auto flex items-center justify-between px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-cyan-500/30 transition-all group/btn"
                >
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </Section>
  );
};

export default Projects;