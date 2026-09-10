import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Instagram, ArrowUpRight, Sparkles, Building2 } from 'lucide-react';
import { CLIENTS_DATA } from '../data/portfolioData';

// Custom TikTok icon for Lucide compatibility
const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.37 6.37 0 0 0-.86-.06A6.33 6.33 0 0 0 3 15.69a6.33 6.33 0 0 0 10.82 4.47c1.76-1.76 2.07-4.47 2.07-7.25a8.27 8.27 0 0 0 4.7 1.48v-3.46a4.83 4.83 0 0 1-1-.24z" />
  </svg>
);

export const ClientsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#FBFBFB] relative overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider">
              Trusted Partnerships
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-display mb-4"
          >
            Brands I've Worked With
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-sm sm:text-base leading-relaxed"
          >
            Kolaborasi visual berkesinambungan bersama berbagai brand retail, kuliner, arsitektur, mega festival pemuda, hingga corporate leader.
          </motion.p>
        </div>

        {/* Brands Grid: 9 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENTS_DATA.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="group bg-white rounded-3xl p-7 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-[#FF6600]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                    {client.category}
                  </span>
                  {client.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-orange-50 text-[10px] font-bold text-[#FF6600] border border-orange-200/50">
                      {client.badge}
                    </span>
                  )}
                </div>

                {/* Brand Name */}
                <h3 className="text-xl font-bold text-[#111111] font-display mb-2 group-hover:text-[#FF6600] transition-colors flex items-center justify-between">
                  <span>{client.name}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-orange-100 flex items-center justify-center text-gray-400 group-hover:text-[#FF6600] transition-colors">
                    <Building2 className="w-4 h-4" />
                  </div>
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-body mb-6">
                  {client.description}
                </p>
              </div>

              {/* Action Buttons: Visit Instagram / Visit TikTok */}
              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
                {client.instagramUrl && (
                  <a
                    id={`client-ig-${client.id}`}
                    href={client.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-[#111111] text-gray-800 hover:text-white text-xs font-semibold transition-all duration-200"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-600 group-hover:text-pink-400" />
                    <span>Visit Instagram</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}

                {client.tiktokUrl && (
                  <a
                    id={`client-tiktok-${client.id}`}
                    href={client.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black/5 hover:bg-black text-gray-800 hover:text-white text-xs font-semibold transition-all duration-200"
                  >
                    <TikTokIcon className="w-3.5 h-3.5" />
                    <span>TikTok</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
