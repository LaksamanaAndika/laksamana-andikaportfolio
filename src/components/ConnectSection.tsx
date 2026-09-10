import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Instagram, MessageCircle, ArrowUpRight, Copy, Check, Sparkles, Send, PhoneCall } from 'lucide-react';
import { SOCIAL_CONNECT_DATA } from '../data/portfolioData';

// Custom TikTok icon
const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.37 6.37 0 0 0-.86-.06A6.33 6.33 0 0 0 3 15.69a6.33 6.33 0 0 0 10.82 4.47c1.76-1.76 2.07-4.47 2.07-7.25a8.27 8.27 0 0 0 4.7 1.48v-3.46a4.83 4.83 0 0 1-1-.24z" />
  </svg>
);

export const ConnectSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(SOCIAL_CONNECT_DATA.whatsapp.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="connect"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#FBFBFB] relative overflow-hidden border-t border-gray-100"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-display mb-4"
          >
            Let's Connect & Collaborate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-sm sm:text-base leading-relaxed"
          >
            Punya ide kreatif, butuh produksi video komersial, photoshoot konsep, atau ingin menaikkan level social media brand Anda? Hubungi saya langsung.
          </motion.p>
        </div>

        {/* Big Interactive Action Cards: 3 Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          
          {/* 1. WHATSAPP (Primary Featured Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-[#111111] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_40px_rgba(255,102,0,0.25)] transition-all duration-300 hover:-translate-y-2 border border-white/10 hover:border-[#FF6600]"
          >
            <div className="absolute top-4 right-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FF6600] text-[10px] font-bold tracking-wider uppercase text-white shadow-sm">
                Fastest Response
              </span>
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-2">
                WhatsApp
              </h3>
              <p className="text-xl font-bold text-[#FF6600] tracking-wide mb-3">
                {SOCIAL_CONNECT_DATA.whatsapp.number}
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body mb-6">
                {SOCIAL_CONNECT_DATA.whatsapp.description}
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                id="connect-whatsapp-btn"
                href={SOCIAL_CONNECT_DATA.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#FF6600] hover:bg-[#e65c00] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FF6600]/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Open WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyNumber}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-gray-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Number Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gray-400" />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* 2. INSTAGRAM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-2xl border border-gray-200/80 hover:border-[#FF6600] transition-all duration-300 hover:-translate-y-2"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-md">
                <Instagram className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold font-display text-[#111111] mb-2">
                Instagram
              </h3>
              <p className="text-base font-bold text-gray-900 tracking-wide mb-3">
                {SOCIAL_CONNECT_DATA.instagram.handle}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-body mb-6">
                {SOCIAL_CONNECT_DATA.instagram.description}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <a
                id="connect-instagram-btn"
                href={SOCIAL_CONNECT_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#111111] hover:bg-[#FF6600] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
              >
                <span>Follow on Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* 3. TIKTOK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-2xl border border-gray-200/80 hover:border-[#FF6600] transition-all duration-300 hover:-translate-y-2"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-md">
                <TikTokIcon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold font-display text-[#111111] mb-2">
                TikTok
              </h3>
              <p className="text-base font-bold text-gray-900 tracking-wide mb-3">
                {SOCIAL_CONNECT_DATA.tiktok.handle}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-body mb-6">
                {SOCIAL_CONNECT_DATA.tiktok.description}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <a
                id="connect-tiktok-btn"
                href={SOCIAL_CONNECT_DATA.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#111111] hover:bg-[#FF6600] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
              >
                <span>Watch on TikTok</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
