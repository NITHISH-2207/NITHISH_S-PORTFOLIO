import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import CodingProfiles from './components/CodingProfiles';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CanvasBackground from './components/CanvasBackground';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync scroll layout update triggers on window resize
    const handleResize = () => {
      lenis.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      lenis.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoading]);

  return (
    <ThemeProvider>
      {isLoading ? (
        <SplashScreen onFinish={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen text-luxury-textPri bg-luxury-bg transition-colors duration-300">

          {/* Performance Optimized Background Elements */}
          <CanvasBackground />

          {/* Core App Layout Sections */}
          <Navbar />

          <main className="w-full relative">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <CodingProfiles />
            <Achievements />
            <Contact />
          </main>

          <Footer />

        </div>
      )}
    </ThemeProvider>
  );
}
