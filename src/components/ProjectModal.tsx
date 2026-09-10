import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, Check, Tag, Building2, Layers } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Media Header */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
            <img
              src={project.thumbnail}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#FF6600] text-[11px] font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium">
                  {project.platform}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Meta bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-6 border-b border-gray-100 text-xs">
              <div className="flex items-center gap-2 text-gray-600">
                <Building2 className="w-4 h-4 text-[#FF6600]" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Client</p>
                  <p className="font-semibold text-gray-900">{project.client}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Layers className="w-4 h-4 text-[#FF6600]" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Format</p>
                  <p className="font-semibold text-gray-900">{project.platform}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4 text-[#FF6600]" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Production Year</p>
                  <p className="font-semibold text-gray-900">{project.year}</p>
                </div>
              </div>
            </div>

            {/* Overview / Summary */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Project Overview & Execution
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-body">
                {project.summary}
              </p>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Production Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <Check className="w-4 h-4 text-[#FF6600] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* External link action */}
            <div className="pt-4 flex items-center justify-between">
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#FF6600] hover:bg-[#e65c00] text-white font-bold text-sm shadow-lg shadow-[#FF6600]/25 transition-all hover:scale-[1.02]"
              >
                <span>View Full Showcase on Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
