import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Play, Instagram, Flame, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import { VIRAL_CONTENT_DATA } from '../data/portfolioData';

export const ViralSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      id="viral"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#111111] text-white relative overflow-hidden"
    >
      {/* Dark luxury background glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FF6600]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6600]/20 border border-[#FF6600]/40 mb-4"
            >
              <Flame className="w-4 h-4 text-[#FF6600] animate-pulse" />
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider">
                Proven Viral Reach
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display"
            >
              Content That Reached 10K+ Views
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md"
          >
            <TrendingUp className="w-5 h-5 text-[#FF6600]" />
            <div>
              <p className="text-xs text-gray-400">Total Audience Impressions</p>
              <p className="text-base font-bold text-white">600K+ Combined Organic Views</p>
            </div>
          </motion.div>
        </div>

        {/* Viral Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {VIRAL_CONTENT_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="group bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 hover:border-[#FF6600] transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF6600]/20"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-[9/12] w-full overflow-hidden bg-black">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                {/* Top Badge: Platform & Views */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-white border border-white/15">
                    <Instagram className="w-3 h-3 text-pink-500" />
                    <span>{item.platform}</span>
                  </span>

                  <span className="px-3 py-1 rounded-full bg-[#FF6600] text-xs font-extrabold text-white shadow-md shadow-[#FF6600]/40 flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-white" />
                    <span>{item.views}</span>
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-115 group-hover:bg-[#FF6600] group-hover:border-[#FF6600]">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="text-[11px] font-semibold text-[#FF6600] uppercase tracking-wider mb-1">
                    {item.reachHighlight}
                  </p>
                  <h3 className="text-base font-bold text-white font-display line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="p-4 bg-[#181818] border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">
                  Direct Instagram Reel
                </span>

                <a
                  id={`watch-viral-btn-${item.id}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#FF6600] text-white text-xs font-bold transition-all duration-300 group-hover:bg-[#FF6600]"
                >
                  <span>Watch Content</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
