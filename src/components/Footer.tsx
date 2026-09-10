import React from 'react';
import { ArrowUp, Instagram, MessageCircle, Heart } from 'lucide-react';
import { SOCIAL_CONNECT_DATA } from '../data/portfolioData';

// Custom TikTok icon
const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.37 6.37 0 0 0-.86-.06A6.33 6.33 0 0 0 3 15.69a6.33 6.33 0 0 0 10.82 4.47c1.76-1.76 2.07-4.47 2.07-7.25a8.27 8.27 0 0 0 4.7 1.48v-3.46a4.83 4.83 0 0 1-1-.24z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-16 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#FF6600] flex items-center justify-center text-white font-bold text-base">
                LA
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-white">
                Laksamana Andika Creative Studio
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-lg font-body leading-relaxed">
              Visual Storytelling | Video Production | Photography | Social Media
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              id="footer-ig"
              href={SOCIAL_CONNECT_DATA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6600] flex items-center justify-center text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              id="footer-tiktok"
              href={SOCIAL_CONNECT_DATA.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6600] flex items-center justify-center text-white transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>

            <a
              id="footer-whatsapp"
              href={SOCIAL_CONNECT_DATA.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6600] flex items-center justify-center text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white text-gray-200 hover:text-[#111111] text-xs font-bold transition-all duration-300 ml-2 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Laksamana Andika Creative Studio. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Crafted for high-impact visual storytelling</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
