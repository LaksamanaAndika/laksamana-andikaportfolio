import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Film, Video, Camera, Share2, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { SERVICES_DATA, SOCIAL_CONNECT_DATA } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Film':
        return <Film className="w-6 h-6" />;
      case 'Video':
        return <Video className="w-6 h-6" />;
      case 'Camera':
        return <Camera className="w-6 h-6" />;
      case 'Share2':
        return <Share2 className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider">
                Services & Capabilities
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-display"
            >
              Solusi Kreatif Menyeluruh
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-md text-sm sm:text-base"
          >
            Layanan produksi visual terpadu mulai dari konsep kreatif, eksekusi kamera di lapangan, pascaproduksi berstandar tinggi, hingga optimasi distribusi digital.
          </motion.p>
        </div>

        {/* 4 Cards Grid - Hover naik 10px, shadow muncul, orange border accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="group relative bg-[#FBFBFB] hover:bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 hover:border-[#FF6600] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-[#FF6600]/10 flex flex-col justify-between"
            >
              {/* Top Row: Icon + Index */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-[#FF6600] border border-gray-200 group-hover:border-[#FF6600] flex items-center justify-center text-[#111111] group-hover:text-white transition-all duration-300 shadow-sm">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-2xl font-extrabold text-gray-300 group-hover:text-[#FF6600]/40 font-display transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-[#111111] font-display mb-2 group-hover:text-[#FF6600] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                  {service.subtitle}
                </p>

                {/* Core Description as requested */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 font-body">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-gray-200/60">
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Key Deliverables:
                  </p>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <div className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center text-[#FF6600] shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags and CTA */}
              <div className="pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-gray-100 group-hover:bg-orange-50 text-[11px] font-semibold text-gray-700 group-hover:text-[#FF6600] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={SOCIAL_CONNECT_DATA.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] group-hover:text-[#FF6600] transition-colors shrink-0"
                >
                  <span>Inquire Service</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
