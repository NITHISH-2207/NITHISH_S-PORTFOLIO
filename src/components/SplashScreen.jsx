import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onFinish }) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // 2.2 seconds maximum duration
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {!loadingComplete && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-luxury-bg"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
          }}
        >
          {/* Subtle Lighting behind logo (gold + navy blurs) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[rgba(184,150,46,0.06)] blur-[60px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[rgba(21,40,73,0.04)] blur-[40px] pointer-events-none" />
 
          {/* Floating Minimalist Bubbles (Theme Colors) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[rgba(184,150,46,0.08)]"
                style={{
                  width: `${Math.random() * 16 + 6}px`,
                  height: `${Math.random() * 16 + 6}px`,
                  left: `${Math.random() * 100}%`,
                  bottom: `-30px`,
                }}
                animate={{
                  y: [0, -window.innerHeight - 60],
                  x: [0, Math.random() * 40 - 20],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 5,
                  ease: 'linear',
                  repeat: Infinity,
                  delay: Math.random() * 1.0,
                }}
              />
            ))}
          </div>
 
          {/* Monogram logo */}
          <div className="relative flex flex-col items-center select-none animate-float">
            {/* Elegant outer ring */}
            <motion.div 
              className="absolute -inset-4 rounded-full border border-luxury-gold/25"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1.02, opacity: 0.5 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            />
            
            <motion.div
              className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-luxury-navy"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              NS
            </motion.div>
            
            <motion.div
              className="mt-2 text-[9px] tracking-[0.4em] uppercase text-luxury-textSec font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Nithish Selvaraj
            </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
