import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/collegeData';
import { SafeImage } from '../components/SafeImage';

const GALLERY_CATS = ['All', 'Campus', 'Academics & Labs', 'Events', 'Sports'] as const;

export function GalleryPage() {
  const [activeCat, setActiveCat] = useState<string>('All');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visibleItems =
    activeCat === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCat);

  const selectedIndex = visibleItems.findIndex((i) => i.id === selectedId);
  const selectedItem = selectedIndex >= 0 ? visibleItems[selectedIndex] : null;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedId(null);
      if (e.key === 'ArrowRight') {
        const next = visibleItems[(selectedIndex + 1) % visibleItems.length];
        if (next) setSelectedId(next.id);
      }
      if (e.key === 'ArrowLeft') {
        const prev = visibleItems[(selectedIndex - 1 + visibleItems.length) % visibleItems.length];
        if (prev) setSelectedId(prev.id);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedItem, selectedIndex, visibleItems]);

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      <section className="bg-gradient-to-br from-[#14402B] to-[#1F5F3F] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#D4A533] uppercase tracking-wider">
            Campus Life &amp; Moments
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mt-2">
            St. Joseph&apos;s Campus Gallery
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#DDF1E4]/90">
            Explore our King Koti academic courtyards, modern laboratories, auditorium events, and
            inter-collegiate athletics.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex overflow-x-auto no-scrollbar sm:inline-flex items-center gap-1 p-1 bg-[#DDF1E4]/70 rounded-xl mb-8 max-w-full">
          {GALLERY_CATS.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCat(cat);
                setSelectedId(null);
              }}
              className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCat === cat
                  ? 'text-[#14402B] font-semibold'
                  : 'text-[#5E6E66] hover:text-[#1E2A24]'
              }`}
            >
              {activeCat === cat && (
                <motion.span
                  layoutId="gallery-cat-tab"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  className="absolute inset-0 bg-[#FFFFFF] rounded-lg shadow-xs"
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              layout
              whileHover={{ y: -4 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedId(item.id)}
              className="group text-left rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 overflow-hidden hover:shadow-md cursor-pointer will-change-transform"
            >
              <div className="h-60 overflow-hidden bg-[#DDF1E4]/40">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-[#1F5F3F]">{item.category}</p>
                <h2 className="font-display font-bold text-base text-[#1E2A24] mt-1">
                  {item.title}
                </h2>
                <p className="text-xs text-[#5E6E66] mt-1 leading-relaxed">{item.caption}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Animated Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-[#14402B]/95 flex items-center justify-center p-4"
          >
            <button
              type="button"
              aria-label="Close gallery viewer"
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => {
                const prev =
                  visibleItems[(selectedIndex - 1 + visibleItems.length) % visibleItems.length];
                if (prev) setSelectedId(prev.id);
              }}
              className="hidden sm:flex w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center mr-4 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl w-full bg-[#1E2A24] rounded-2xl overflow-hidden border border-[#4CAF7A]/25"
            >
              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <SafeImage
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  priority
                  className="w-full max-h-[70vh] object-contain"
                />
              </div>
              <div className="p-5 text-white">
                <p className="text-xs text-[#D4A533] font-medium">{selectedItem.category}</p>
                <h3 className="font-display font-bold text-lg mt-0.5">{selectedItem.title}</h3>
                <p className="text-sm text-[#DDF1E4]/85 mt-1">{selectedItem.caption}</p>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Next photo"
              onClick={() => {
                const next = visibleItems[(selectedIndex + 1) % visibleItems.length];
                if (next) setSelectedId(next.id);
              }}
              className="hidden sm:flex w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center ml-4 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
