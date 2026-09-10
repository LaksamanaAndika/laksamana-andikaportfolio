import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider">
              Workflow & Methodology
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-display mb-4"
          >
            My Creative Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-sm sm:text-base leading-relaxed"
          >
            Dari riset mendalam hingga eksekusi frame akhir, alur kerja sistematis untuk memastikan setiap karya memiliki estetika visual tinggi dan dampak bisnis nyata.
          </motion.p>
        </div>

        {/* Timeline Process: 5 Sequential Stages */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-28 left-12 right-12 h-0.5 bg-gray-200 z-0">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
              className="h-full bg-[#FF6600]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const isCurrent = activeStep === index;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 * index }}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group bg-[#FBFBFB] hover:bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-2 ${
                    isCurrent
                      ? 'border-[#FF6600] shadow-xl shadow-orange-500/10 bg-white'
                      : 'border-gray-200/80 shadow-xs'
                  }`}
                >
                  <div>
                    {/* Top Number Indicator */}
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-extrabold text-base transition-all duration-300 ${
                          isCurrent
                            ? 'bg-[#FF6600] text-white shadow-lg shadow-[#FF6600]/30 scale-110'
                            : 'bg-white border border-gray-200 text-gray-800 group-hover:border-[#FF6600] group-hover:text-[#FF6600]'
                        }`}
                      >
                        {step.number}
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        Phase 0{index + 1}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-xl font-bold text-[#111111] font-display mb-1.5 group-hover:text-[#FF6600] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-4">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-body mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Output deliverable tag */}
                  <div className="pt-4 border-t border-gray-200/60">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Deliverable:
                    </p>
                    <div className="flex items-start gap-1.5 text-xs font-semibold text-gray-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6600] shrink-0 mt-0.5" />
                      <span>{step.deliverable}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
