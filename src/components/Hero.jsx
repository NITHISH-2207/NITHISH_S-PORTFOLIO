import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiCompass } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import profilePic from '../assets/nithish.png';
const TYPING_ROLES = [
  'B.Tech IT Student',
  'MERN Stack Developer',
  'Problem Solver',
  'Tech Explorer',
  'Future Software Engineer',
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/NITHISH-2207', icon: <FiGithub />, label: 'GitHub' },
  { href: 'https://leetcode.com/u/NITHISH__SELVARAJ/', icon: <SiLeetcode />, label: 'LeetCode' },
  { href: 'https://codolio.com/profile/NITHISH_S', icon: <FiCompass />, label: 'Codolio' },
  { href: 'https://www.linkedin.com/in/nithish-s-65a963325/', icon: <FiLinkedin />, label: 'LinkedIn' }
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const activeRole = TYPING_ROLES[currentRoleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(60);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => activeRole.slice(0, prev.length + 1));
        setTypingSpeed(120);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const scrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-28 pb-16 overflow-hidden px-6 md:px-12"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">

        {/* Left Side: Typography, Social Cards, Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">

          {/* Subtle Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-luxury-bgSec border border-luxury-border w-fit mb-5"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold font-bold">
              Engineering Portfolio
            </span>
          </motion.div>

          {/* Headline Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight leading-tight"
          >
            <span className="luxury-gradient-text">NITHISH S</span>
          </motion.h1>

          {/* Typing Roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-8 mt-2 flex items-center"
          >
            <span className="text-base md:text-lg font-mono text-luxury-mono tracking-wide">
              I am a <span className="text-luxury-gold font-bold typing-cursor pr-1">{currentText}</span>
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl font-heading font-medium text-luxury-textPri mt-5"
          >
            “Turning Curiosity Into Code”
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xs md:text-sm text-luxury-textSec max-w-xl mt-3.5 leading-relaxed font-medium"
          >
            Engineering elegant software solutions and exploring modern web architectures. Pursuing B.Tech Information Technology at Kongu Engineering College. Focused on building high-performance, developer-friendly platforms with clean codes.
          </motion.p>

          {/* Apple/Framer Inspired Rounded Square Glass Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex items-center gap-3.5 mt-6"
          >
            {SOCIAL_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-luxury-card border border-luxury-border flex items-center justify-center text-luxury-textPri shadow-sm hover:shadow hover:border-luxury-navy/40 hover:text-luxury-navy transition-all hover:-translate-y-0.5"
                aria-label={link.label}
              >
                <span className="text-base">{link.icon}</span>
              </a>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            {/* Primary Navy button */}
            <button
              onClick={scrollToJourney}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-luxury-navy hover:bg-luxury-gold text-luxury-bg font-bold text-xs tracking-wider uppercase transition-colors shadow-sm hover:shadow cursor-pointer"
            >
              <span>Explore My Journey</span>
              <FiArrowRight size={13} />
            </button>

            {/* Secondary Glass button */}
            <a
              href="/assests/RESUME.pdf"
              download="Nithish_Selvaraj_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-luxury-card border border-luxury-border hover:border-luxury-navy text-luxury-textPri font-bold text-xs tracking-wider uppercase transition-colors shadow-sm hover:shadow"
            >
              <FiDownload size={13} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Clean Apple/Linear Abstract Glass Composition */}
        {/* Right Side */}
        <div className="lg:col-span-5 flex items-center justify-start pl-8 lg:pl-12">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex items-center justify-center select-none"
          >

            {/* Floating Card — Top Left */}

            {/* Floating Card — Bottom Right */}

            {/* Subtle markers */}


            {/* Center: Profile Photo */}
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Layer 1 — wide soft glow */}
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-xl bg-luxury-navy/30 blur-3xl z-0" />
              {/* Layer 2 — tight sharp glow */}
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-xl bg-luxury-navy/40 blur-lg z-0" />

              {/* Image — bigger, mild corners, no border */}
              <div className="relative w-52 h-64 md:w-60 md:h-72 rounded-xl overflow-hidden z-10">
                <img
                  src={profilePic}
                  alt="Nithish Selvaraj"
                  className="w-full h-full object-cover object-top"
                />
                {/* Strong navy gradient — right and bottom only */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent from-30% via-luxury-navy/30 to-luxury-navy/70 pointer-events-none" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
