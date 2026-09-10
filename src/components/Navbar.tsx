import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import { SOCIAL_CONNECT_DATA } from '../data/portfolioData';
import { PhotoSyncModal } from './PhotoSyncModal';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Featured Works', href: '#portfolio' },
    { name: 'Viral Content', href: '#viral' },
    { name: 'Process', href: '#process' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <>
      <motion.header
        id="main-navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
              scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 border border-black/10'
                : 'bg-white/70 backdrop-blur-sm border border-transparent'
            }`}
          >
            {/* Logo */}
            <a
              id="navbar-logo-link"
              href="#"
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center text-white font-bold text-sm tracking-tighter group-hover:bg-[#FF6600] transition-colors duration-300">
                LA
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm sm:text-base text-[#111111] tracking-tight leading-tight flex items-center gap-1.5">
                  Laksamana Andika
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
                </span>
                <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">
                  Creative Studio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-black/[0.03] px-3 py-1.5 rounded-full border border-black/[0.05]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-medium text-gray-700 hover:text-[#111111] hover:bg-white rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Action */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                id="navbar-photo-sync-btn"
                type="button"
                onClick={() => setIsPhotoModalOpen(true)}
                title="Kelola & Verifikasi Foto Asli Laksamana Andika"
                className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-gray-200 bg-white hover:border-[#FF6600]/40 text-gray-700 hover:text-[#111111] text-xs font-semibold transition-all hover:scale-105 shadow-xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Foto Asli</span>
              </button>

              <a
                id="navbar-whatsapp-cta"
                href={SOCIAL_CONNECT_DATA.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-[#111111] hover:bg-[#FF6600] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-[0_0_20px_rgba(255,102,0,0.35)]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#FF6600] group-hover:text-white transition-colors" />
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-200 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                  Navigation
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#FF6600] font-semibold bg-[#FF6600]/10 px-2 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3" /> Available for Q2 Projects
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-semibold text-[#111111] hover:text-[#FF6600] hover:bg-gray-50 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <button
                  id="mobile-photo-sync-btn"
                  type="button"
                  onClick={() => { setMobileMenuOpen(false); setIsPhotoModalOpen(true); }}
                  className="w-full py-2.5 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verifikasi & Kelola Foto Asli</span>
                </button>
                <a
                  href={SOCIAL_CONNECT_DATA.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 bg-[#FF6600] text-white rounded-2xl font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-[#FF6600]/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PhotoSyncModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
      />
    </>
  );
};
