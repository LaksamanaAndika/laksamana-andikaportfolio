import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUpRight, Play, Eye, Film } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PortfolioProject, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const categories: ProjectCategory[] = [
    'All',
    'Commercial Video',
    'Social Media Content',
    'Brand Campaign',
    'Event Documentation',
    'Creative Photography',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider">
                Portfolio Showcase
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-display"
            >
              Featured Works
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-md text-sm sm:text-base"
          >
            Koleksi karya pilihan yang mencakup video komersial, kampanye brand, dokumentasi mega festival, dan fotografi editorial.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center gap-2 mb-12 pb-2 overflow-x-auto no-scrollbar"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#111111] text-white shadow-md shadow-black/10 scale-105'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-[#FBFBFB] rounded-3xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-2xl hover:border-[#FF6600]/60 transition-all duration-500 flex flex-col"
              >
                {/* Thumbnail Container with Zoom & Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-900 cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-gray-900 shadow-sm">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white/90">
                      {project.year}
                    </span>
                  </div>

                  {/* Center Hover Action Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 z-10 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-[#FF6600] text-white flex items-center justify-center shadow-xl shadow-[#FF6600]/40">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Bottom Info on Image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <p className="text-xs font-semibold text-orange-300 mb-0.5">
                      {project.client}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display leading-snug line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Meta & Action Footer */}
                <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white grow">
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400 font-medium">Format & Channel</p>
                    <p className="text-xs font-bold text-gray-800">{project.platform}</p>
                  </div>

                  <button
                    id={`view-project-btn-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="group/btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] hover:bg-[#FF6600] text-white text-xs font-bold transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Modal Detail Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
