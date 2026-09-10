import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Video, Camera, Award, ShieldCheck, Upload, CheckCircle2, Sparkles, Sliders } from 'lucide-react';
import { HERO_DATA, SOCIAL_CONNECT_DATA } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  // Parallax mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Original photo handling with storage fallback
  const [currentImgSrc, setCurrentImgSrc] = useState<string>("/images/LAKSAMANA_ANDIKA_ORIGINAL_PHOTO.png");
  const [imgErrorCount, setImgErrorCount] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Interactive parallax tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Image fallback handler
  const handleImageError = () => {
    if (imgErrorCount === 0 && HERO_DATA.heroImageFallback) {
      setImgErrorCount(1);
      setCurrentImgSrc(HERO_DATA.heroImageFallback);
    } else if (imgErrorCount === 1) {
      setImgErrorCount(2);
    }
  };

  // Allow direct file drag & drop of original photo
  const handleFileDrop = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const result = e.target?.result as string;
      if (result) {
        setCurrentImgSrc(result);
        await saveOriginalImage('hero_png', result);
        setImgErrorCount(0);
      }
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileDrop(e.dataTransfer.files[0]);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileDrop(e.target.files[0]);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 lg:py-0 overflow-hidden bg-white"
    >
      {/* Background ambient aesthetic lighting - clean Apple / Framer style */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gray-100/80 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#FF6600]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Subtle modern grid dots pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Sebelah Kiri: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            
            {/* Top Badge: Creative Studio + Authenticity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100/90 border border-gray-200/80 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-pulse"></span>
                <span className="text-xs font-semibold text-gray-800 tracking-wide uppercase">
                  {HERO_DATA.studioName}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Original Camera Asset</span>
              </div>
            </motion.div>

            {/* Main Title: "Creative Visual Storyteller" */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-[#111111] tracking-tight leading-[1.08] mb-6 font-display"
            >
              Creative <br className="hidden sm:inline" />
              <span className="relative inline-block">
                <span className="relative z-10">Visual</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FF6600]/20 -z-0 rounded-sm"></span>
              </span>{" "}
              <span className="text-[#FF6600]">Storyteller</span>
            </motion.h1>

            {/* Tagline & Deskripsi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-3 mb-8 max-w-2xl"
            >
              <p className="text-lg sm:text-xl font-medium text-gray-900 leading-snug">
                "{HERO_DATA.tagline}"
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-body">
                {HERO_DATA.description}
              </p>
            </motion.div>

            {/* Roles Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {HERO_DATA.roles.map((role) => (
                <span
                  key={role}
                  className="px-3.5 py-1.5 rounded-full bg-white text-gray-800 border border-gray-200 text-xs font-semibold shadow-xs hover:border-[#FF6600] transition-colors"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Buttons: "View My Work" & "Let's Collaborate" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Button: View My Work */}
              <a
                id="hero-view-work-btn"
                href="#portfolio"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#111111] text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-[#1f1f1f] shadow-lg hover:shadow-xl cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-[#FF6600] transition-transform group-hover:translate-y-1" />
              </a>

              {/* Button: Let's Collaborate */}
              <a
                id="hero-collaborate-btn"
                href={SOCIAL_CONNECT_DATA.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#FF6600] text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-[#e65c00] shadow-[0_10px_25px_-5px_rgba(255,102,0,0.45)] hover:shadow-[0_15px_35px_rgba(255,102,0,0.6)] cursor-pointer"
              >
                <span>Let's Collaborate</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* Trust highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 pt-6 border-t border-gray-100 flex items-center gap-8 text-xs text-gray-500 font-medium"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Available for New Projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#FF6600]" />
                <span>5+ Years Experience</span>
              </div>
            </motion.div>
          </div>

          {/* Sebelah Kanan: Foto full body asli Laksamana Andika */}
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Hidden file input for photo upload */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={onFileChange} 
              accept="image/*" 
              className="hidden" 
            />

            {/* Ambient Backdrop Geometry with Gradient Background & Blur Light */}
            <div 
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={onDrop}
              className={`relative w-full max-w-md aspect-[3/4] sm:aspect-[4/5] rounded-3xl p-4 flex items-end justify-center overflow-visible transition-all duration-300 ${
                isDragOver ? 'ring-2 ring-[#FF6600] scale-[1.02]' : ''
              }`}
            >
              
              {/* Studio Cyclorama Wall Background (Purely added for the cutout PNG) */}
              <div className="absolute inset-x-1 inset-y-4 bg-gradient-to-b from-stone-50 via-[#f4f2ee] to-[#e7e5e0] rounded-3xl border border-stone-200/90 -z-20 shadow-2xl shadow-stone-900/10 overflow-hidden">
                {/* Subtle cyclorama curved horizon line */}
                <div className="absolute inset-x-0 bottom-16 h-28 bg-gradient-to-b from-transparent to-stone-300/40 pointer-events-none" />
                
                {/* Studio soft overhead light strip */}
                <div className="absolute top-0 inset-x-12 h-1 bg-gradient-to-r from-transparent via-[#FF6600]/40 to-transparent blur-[1px]" />
              </div>
              
              {/* Warm Studio Rim Light (Backlight highlighting subject silhouette) */}
              <div className="absolute inset-0 m-auto w-72 h-72 bg-gradient-to-tr from-[#FF6600]/20 via-amber-200/30 to-orange-100/40 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow" />

              {/* Authenticity Badge (Top Left) */}
              <div className="absolute top-7 left-5 z-30 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-gray-800 tracking-wider uppercase">
                  Foto Asli (Original)
                </span>
              </div>

              {/* Quick Photo Actions (Top Right) */}
              <div className="absolute top-7 right-5 z-30 flex items-center gap-2">
                <button
                  id="hero-sync-modal-btn"
                  type="button"
                  onClick={() => setIsPhotoModalOpen(true)}
                  title="Buka Pengaturan Foto Asli"
                  className="p-2 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-[#FF6600] border border-gray-200 shadow-sm transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 text-[11px] font-medium px-3"
                >
                  <Sliders className="w-3.5 h-3.5 text-[#FF6600]" />
                  <span className="hidden sm:inline">Kelola Foto</span>
                </button>
                <button
                  id="hero-change-photo-btn"
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Upload Foto Asli Picsart PNG"
                  className="p-2 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-[#FF6600] border border-gray-200 shadow-sm transition-all hover:scale-105 cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5 text-[#FF6600]" />
                </button>
              </div>

              {/* Director Card Tag (Bottom Right) */}
              <div className="absolute bottom-6 right-4 z-30 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-gray-200 shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF6600] flex items-center justify-center text-white">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">
                    Creator & Director
                  </p>
                  <p className="text-xs font-bold text-gray-900 leading-tight">
                    Laksamana Andika
                  </p>
                </div>
              </div>

              {/* Studio Backdrop Indicator (Bottom Left) */}
              <div className="absolute bottom-6 left-4 z-30 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-white flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#FF6600]" />
                <span className="text-[10px] font-medium tracking-wide">
                  Studio Backdrop: 5600K Warm
                </span>
              </div>

              {/* Floating Laksamana Andika Photo with Parallax, Soft Shadow, and Slow Zoom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 25 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  rotateY: mousePos.x * 12,
                  rotateX: -mousePos.y * 12,
                  x: mousePos.x * 15,
                }}
                transition={{ 
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8 },
                  y: { duration: 0.8 },
                  rotateY: { type: 'spring', damping: 20, stiffness: 100 },
                  rotateX: { type: 'spring', damping: 20, stiffness: 100 },
                  x: { type: 'spring', damping: 20, stiffness: 100 },
                }}
                style={{ perspective: 1000 }}
                className="relative z-10 w-full h-full flex items-end justify-center"
              >
                {/* Slow zoom container (cinematic breathing effect) */}
                <div className="relative w-full h-[96%] flex items-end justify-center animate-slow-zoom">
                  
                  {/* Shadow Lembut di Lantai (Soft ground contact shadow beneath shoes) */}
                  <div className="absolute -bottom-2 w-3/4 h-8 bg-black/30 blur-xl rounded-full -z-10 transform scale-y-50" />
                  <div className="absolute bottom-0 w-1/2 h-3.5 bg-black/45 blur-sm rounded-full -z-10" />

                  {/* Main Original Photo Image */}
                  <img
                    id="hero-full-body-photo"
                    src={currentImgSrc}
                    alt={HERO_DATA.heroPhotoAlt}
                    onError={handleImageError}
                    referrerPolicy="no-referrer"
                    className="max-h-[580px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] transition-all duration-500 hover:scale-[1.02]"
                  />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 pointer-events-none opacity-60">
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
          Scroll to explore
        </span>
        <div className="w-4 h-7 rounded-full border border-gray-300 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#FF6600] animate-bounce" />
        </div>
      </div>

      {/* Photo Management & Sync Modal */}
      <PhotoSyncModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
      />
    </section>
  );
};
