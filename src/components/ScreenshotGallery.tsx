'use client';

import { useState, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ScreenshotGallery() {
  const locale = useLocale();
  const t = useTranslations('Gallery');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const screens = [
    { id: '1_adventure_map', label: t('s1') },
    { id: '2_gameplay', label: t('s2') },
    { id: '3_categories_map', label: t('s3') },
    { id: '4_badges_trophies', label: t('s4') },
    { id: '5_accessories_shop', label: t('s5') },
    { id: '6_daily_warmup', label: t('s6') },
    { id: '7_parent_dashboard', label: t('s7') },
    { id: '8_premium_paywall', label: t('s8') }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 300;
    const container = scrollContainerRef.current;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative border-t border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-slate-950/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">Visual Showcase</span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            {t('subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Navigation */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Navigation */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Sliding Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {screens.map((screen, idx) => (
              <div
                key={idx}
                className="flex-none snap-center flex flex-col items-center select-none"
              >
                {/* iPhone device wrapper */}
                <div className="relative h-[480px] w-[220px] overflow-hidden rounded-[36px] border-4 border-slate-800 dark:border-slate-900 bg-slate-950 shadow-xl shadow-black/30 dark:shadow-black/75 ring-1 ring-slate-900/5 dark:ring-white/10 transition-transform duration-300 hover:scale-[1.01]">
                  {/* Dynamic Island */}
                  <div className="absolute top-2.5 left-1/2 z-30 h-3 w-16 -translate-x-1/2 rounded-full bg-black" />
                  
                  {/* Screenshot Image */}
                  <div className="absolute inset-0 z-10 bg-slate-950">
                    <Image
                      src={`/screenshots/${locale}/iphone_6_7/${screen.id}.png`}
                      alt={screen.label}
                      fill
                      sizes="220px"
                      className="object-cover pointer-events-none"
                      priority={idx < 3}
                    />
                  </div>
                  
                  {/* Reflection gloss */}
                  <div className="absolute inset-0 z-20 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>

                <span className="mt-4 text-xs font-bold text-slate-700 dark:text-slate-300">
                  {screen.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
