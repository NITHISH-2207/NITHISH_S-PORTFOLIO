import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'coding-profiles', label: 'Profiles' },
  { id: 'achievements', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Track active sections
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl transition-all duration-300 rounded-xl ${scrolled
        ? 'glass-card py-3 border-luxury-border shadow-sm'
        : 'bg-transparent py-5 border-transparent'
        }`}
    >
      <div className="flex items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-luxury-navy border border-luxury-gold/30 flex items-center justify-center font-bold text-xs text-luxury-bg">
            NS
          </div>
          <span className="font-bold text-sm md:text-base tracking-widest text-luxury-textPri transition-colors uppercase">
            NITHISH S
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3.5 py-1 text-xs font-bold tracking-wider uppercase rounded-md transition-colors ${activeSection === item.id
                ? 'text-luxury-navy bg-luxury-bgSec'
                : 'text-luxury-textSec hover:text-luxury-textPri'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Download Resume Link */}
          <a
            href="/NITHISH_RESUME.pdf"
            download="NITHISH_RESUME.pdf"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-luxury-navy hover:bg-luxury-gold text-luxury-bg font-bold text-xs tracking-wider uppercase transition-all shadow-sm"
          >
            <FiDownload size={13} />
            <span>Resume</span>
          </a>

          {/* Hamburger Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-luxury-border text-luxury-textPri focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[62px] left-0 right-0 glass-card mx-2 p-5 rounded-xl border border-luxury-border shadow-md flex flex-col gap-2 bg-luxury-card/95">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full py-2 px-3 rounded-lg text-left font-bold text-xs tracking-widest uppercase transition-colors ${activeSection === item.id
                ? 'bg-luxury-navy/10 text-luxury-navy border-l-2 border-luxury-navy pl-4'
                : 'text-luxury-textSec hover:bg-luxury-bgSec hover:text-luxury-textPri pl-3'
                }`}
            >
              {item.label}
            </button>
          ))}
          <hr className="border-luxury-border my-1" />
          <a
            href="/assests/NITHISH_RESUME.pdf"
            download="NITHISH_RESUME.pdf"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-luxury-navy hover:bg-luxury-gold text-luxury-bg font-bold text-xs tracking-widest uppercase transition-all"
          >
            <FiDownload size={13} />
            <span>Download Resume</span>
          </a>
        </div>
      )}
    </nav>
  );
}
