'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function DeviceMockup() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Maps coordinates to degrees of rotation
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div 
      className="relative flex items-center justify-center p-4 md:p-8 cursor-grab active:cursor-grabbing select-none"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000
        }}
        className="relative flex items-center justify-center gap-4 sm:gap-8 transition-all duration-200 ease-out"
      >
        {/* iOS Device Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transform: 'translateZ(50px)' }}
          className="relative h-[480px] w-[230px] sm:h-[580px] sm:w-[270px] overflow-hidden rounded-[40px] border-4 border-slate-800 bg-slate-900 shadow-2xl shadow-purple-500/10 shadow-black/80 ring-1 ring-white/10"
        >
          {/* Speaker / Dynamic Island */}
          <div className="absolute top-3 left-1/2 z-30 h-4 w-24 -translate-x-1/2 rounded-full bg-black" />
          
          {/* Screenshot */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/screenshots/ios/1_adventure_map.png"
              alt="CogniStar iOS Map View"
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </div>

          {/* Glare effect */}
          <div className="absolute inset-0 z-20 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </motion.div>

        {/* Android Device Mockup (Shifted Down & Tilted Behind) */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{ transform: 'translateZ(20px) rotateZ(-3deg)' }}
          className="relative hidden sm:block h-[580px] w-[270px] overflow-hidden rounded-[40px] border-4 border-slate-800 bg-slate-900 shadow-2xl shadow-purple-500/5 shadow-black/80 ring-1 ring-white/10 opacity-90 hover:opacity-100 transition-opacity duration-300"
        >
          {/* Camera Punchhole */}
          <div className="absolute top-3.5 left-1/2 z-30 h-3 w-3 -translate-x-1/2 rounded-full bg-black" />

          {/* Screenshot */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/screenshots/android/2_gameplay.png"
              alt="CogniStar Android Gameplay"
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </div>

          {/* Glare effect */}
          <div className="absolute inset-0 z-20 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </motion.div>
      </motion.div>
    </div>
  );
}
