import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Film, Briefcase, Eye, Sparkles, CheckCircle2, Upload, ShieldCheck, Sliders } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';
import { getOriginalImage, saveOriginalImage } from '../utils/imageStore';
import { PhotoSyncModal } from './PhotoSyncModal';

// Animated Number Counter component
const AnimatedCounter: React.FC<{ target: number; suffix: string; duration?: number }> = ({
  target,
  suffix,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration / 25);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  // Original photo handling with storage fallback
  const [currentImgSrc, setCurrentImgSrc] = useState<string>(ABOUT_DATA.aboutPhoto);

  useEffect(() => {
    async function loadSaved() {
      const saved = await getOriginalImage('about_jpg');
      if (saved) {
        setCurrentImgSrc(saved);
      }
    }
    loadSaved();

    const handleUpdate = (e: Event) => {
      const custom = e as CustomEvent<{ key: string; dataUrl: string }>;
      if (custom.detail?.key === 'about_jpg') {
        setCurrentImgSrc(custom.detail.dataUrl);
      }
    };

    window.addEventListener('andika_image_updated', handleUpdate);
    return () => window.removeEventListener('andika_image_updated', handleUpdate);
  }, []);

  const handleFileDrop = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const result = e.target?.result as string;
      if (result) {
        setCurrentImgSrc(result);
        await saveOriginalImage('about_jpg', result);
      }
    };
    reader.readAsDataURL(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileDrop(e.target.files[0]);
    }
  };

  const iconMap: Record<number, React.ReactNode> = {
    0: <Award className="w-5 h-5 text-[#FF6600]" />,
    1: <Film className="w-5 h-5 text-[#FF6600]" />,
    2: <Briefcase className="w-5 h-5 text-[#FF6600]" />,
    3: <Eye className="w-5 h-5 text-[#FF6600]" />,
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#FBFBFB] relative overflow-hidden border-t border-gray-100"
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider">
              {ABOUT_DATA.title}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-display max-w-3xl"
          >
            Menciptakan Karya Visual yang Memikat Mata dan Menggerakkan Aksi
          </motion.h2>
        </div>

        {/* Content Grid: Photo + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Foto Laksamana Andika: Cinematic & Atmospheric Original Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Hidden file input for photo upload */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={onFileChange} 
              accept="image/*" 
              className="hidden" 
            />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200/80 group">
              <img
                id="about-portrait-photo"
                src={currentImgSrc}
                alt={ABOUT_DATA.aboutPhotoAlt || "Laksamana Andika Behind The Creative"}
                onError={() => {
                  if (currentImgSrc !== ABOUT_DATA.aboutPhotoFallback) {
                    setCurrentImgSrc(ABOUT_DATA.aboutPhotoFallback);
                  }
                }}
                referrerPolicy="no-referrer"
                className="w-full aspect-square object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
              
              {/* Authenticity tag top left */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Studio Photo</span>
              </div>

              {/* Quick photo change buttons */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
                <button
                  id="about-sync-modal-btn"
                  type="button"
                  onClick={() => setIsPhotoModalOpen(true)}
                  title="Kelola Foto Asli"
                  className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 text-[11px] font-medium px-2.5"
                >
                  <Sliders className="w-3 h-3 text-[#FF6600]" />
                  <span className="hidden sm:inline">Kelola</span>
                </button>
                <button
                  id="about-change-photo-btn"
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Ganti / Upload Foto Asli Laksamana Andika"
                  className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 text-[11px] font-medium px-2.5"
                >
                  <Upload className="w-3 h-3 text-[#FF6600]" />
                  <span className="hidden sm:inline">Ganti Foto</span>
                </button>
              </div>

              {/* Overlay card details */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FF6600] text-[11px] font-bold tracking-wider uppercase mb-2">
                  Creative Director
                </span>
                <p className="text-xl font-bold font-display">Laksamana Andika</p>
                <p className="text-xs text-gray-200">
                  Sukabumi, West Java • Available for Nationwide & Global Projects
                </p>
              </div>
            </div>

            {/* Decorative Corner Badge */}
            <div className="absolute -top-4 -right-4 hidden sm:flex bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-200 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF6600]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">5+ Years</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Industry Proven</p>
              </div>
            </div>
          </motion.div>

          {/* Deskripsi & Pendekatan Kreatif */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-display leading-tight">
              {ABOUT_DATA.headline}
            </h3>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-body">
              {ABOUT_DATA.content}
            </p>

            <p className="text-base text-gray-600 leading-relaxed font-body">
              {ABOUT_DATA.secondaryText}
            </p>

            {/* Core Values / Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                'Storytelling yang berfokus pada emosi audiens',
                'Pacing editing cepat dengan retensi tinggi',
                'Color grading sinematik standar komersial',
                'Strategi konten terintegrasi pertumbuhan organik',
              ].map((strength, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-gray-200/80">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6600] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    {strength}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* STATISTIK COUNTER - 4 Metric Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {ABOUT_DATA.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="group bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-[#FF6600]/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="w-10 h-10 rounded-2xl bg-orange-50 group-hover:bg-[#FF6600] flex items-center justify-center text-[#FF6600] group-hover:text-white transition-colors duration-300 mb-4">
                {iconMap[idx]}
              </div>

              <div className="text-3xl sm:text-5xl font-extrabold text-[#111111] font-display mb-1 group-hover:text-[#FF6600] transition-colors">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>

              <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                {stat.label}
              </h4>

              {stat.description && (
                <p className="text-xs text-gray-500 font-normal">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </motion.div>

      </div>

      {/* Photo Management & Sync Modal */}
      <PhotoSyncModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
      />
    </section>
  );
};
