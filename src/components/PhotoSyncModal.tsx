import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Image as ImageIcon, CheckCircle2, Upload, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { HERO_DATA, ABOUT_DATA } from '../data/portfolioData';
import { saveOriginalImage, getOriginalImage } from '../utils/imageStore';

interface PhotoSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoSyncModal: React.FC<PhotoSyncModalProps> = ({ isOpen, onClose }) => {
  const [heroImg, setHeroImg] = useState<string>(HERO_DATA.heroImage);
  const [aboutImg, setAboutImg] = useState<string>(ABOUT_DATA.aboutPhoto);
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [aboutSuccess, setAboutSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    async function loadCurrent() {
      const savedHero = await getOriginalImage('hero_png');
      if (savedHero) setHeroImg(savedHero);
      const savedAbout = await getOriginalImage('about_jpg');
      if (savedAbout) setAboutImg(savedAbout);
    }
    loadCurrent();
  }, [isOpen]);

  const handleHeroFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setHeroImg(dataUrl);
        await saveOriginalImage('hero_png', dataUrl);
        setHeroSuccess(true);
        setTimeout(() => setHeroSuccess(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAboutFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setAboutImg(dataUrl);
        await saveOriginalImage('about_jpg', dataUrl);
        setAboutSuccess(true);
        setTimeout(() => setAboutSuccess(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-stone-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 font-display">
                    Pengaturan Foto Asli Laksamana Andika
                  </h3>
                  <p className="text-xs text-gray-500">
                    Otentisitas 100% • Tanpa AI generation • Hanya penambahan background studio pada PNG
                  </p>
                </div>
              </div>
              <button
                id="modal-close-btn"
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Notice Banner */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-start gap-3 text-xs text-amber-900">
                <Sparkles className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Foto Asli Langsung Digunakan</p>
                  <p className="text-amber-800 mt-0.5 leading-relaxed">
                    Sistem mempertahankan identitas, wajah, pakaian, dan proporsi asli Anda tanpa modifikasi AI. Untuk foto cut-out PNG, layout studio menambahkan pencahayaan dan background hangat otomatis di website.
                  </p>
                </div>
              </div>

              {/* Slot 1: Hero Section (Picsart Cutout PNG) */}
              <div className="p-4 sm:p-5 rounded-2xl border border-gray-200 bg-white shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#FF6600] text-[10px] font-bold uppercase tracking-wider">
                        Slot 1: Hero Profile (PNG)
                      </span>
                      {heroSuccess && (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Tersimpan!
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-gray-900 mt-1">
                      Picsart_26-03-26_14-19-15-911.png
                    </p>
                    <p className="text-xs text-gray-500">
                      Foto berdiri full-body format PNG transparan dengan background studio & bayangan lantai
                    </p>
                  </div>

                  <label className="cursor-pointer px-4 py-2 rounded-xl bg-[#111111] hover:bg-black text-white text-xs font-semibold flex items-center gap-2 transition-all hover:scale-105 shrink-0 shadow-sm">
                    <Upload className="w-3.5 h-3.5 text-[#FF6600]" />
                    <span>Pilih Foto PNG</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleHeroFile(e.target.files[0])}
                    />
                  </label>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-16 h-20 rounded-lg overflow-hidden bg-stone-200 flex items-center justify-center relative shrink-0">
                    <img
                      src={heroImg}
                      alt="Hero preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-xs text-gray-600">
                    <p className="font-medium text-gray-800">Status Aset Hero:</p>
                    <p className="text-gray-500 mt-0.5 text-[11px]">
                      {heroImg.startsWith('data:') ? 'Menggunakan foto upload lokal (Tersimpan aman)' : 'Menggunakan file referensi sistem'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Slot 2: About Section (DJI JPEG) */}
              <div className="p-4 sm:p-5 rounded-2xl border border-gray-200 bg-white shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                        Slot 2: About / Behind Creative (JPEG)
                      </span>
                      {aboutSuccess && (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Tersimpan!
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-gray-900 mt-1">
                      DJI_20260903135105_0677_D.jpg.jpeg
                    </p>
                    <p className="text-xs text-gray-500">
                      Foto original Laksamana Andika di studio cafe dengan pencahayaan hangat sinematik
                    </p>
                  </div>

                  <label className="cursor-pointer px-4 py-2 rounded-xl bg-[#111111] hover:bg-black text-white text-xs font-semibold flex items-center gap-2 transition-all hover:scale-105 shrink-0 shadow-sm">
                    <Upload className="w-3.5 h-3.5 text-[#FF6600]" />
                    <span>Pilih Foto JPEG</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleAboutFile(e.target.files[0])}
                    />
                  </label>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-stone-200 flex items-center justify-center relative shrink-0">
                    <img
                      src={aboutImg}
                      alt="About preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-xs text-gray-600">
                    <p className="font-medium text-gray-800">Status Aset About:</p>
                    <p className="text-gray-500 mt-0.5 text-[11px]">
                      {aboutImg.startsWith('data:') ? 'Menggunakan foto upload lokal (Tersimpan aman)' : 'Menggunakan file referensi sistem'}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-gray-100 bg-stone-50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Semua foto langsung diterapkan otomatis ke seluruh halaman</span>
              </div>
              <button
                id="modal-done-btn"
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#FF6600] hover:bg-[#e65c00] text-white text-xs font-bold transition-all hover:scale-105 shadow-md"
              >
                Selesai & Tutup
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
