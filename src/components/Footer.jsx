import React from 'react';
import { FiGithub, FiLinkedin, FiCompass } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const SOCIAL_LINKS = [
  { href: 'https://github.com/NITHISH-2207', icon: <FiGithub />, label: 'GitHub' },
  { href: 'https://leetcode.com/u/NITHISH__SELVARAJ/', icon: <SiLeetcode />, label: 'LeetCode' },
  { href: 'https://codolio.com/profile/NITHISH_S', icon: <FiCompass />, label: 'Codolio' },
  { href: 'https://www.linkedin.com/in/nithish-s-65a963325/', icon: <FiLinkedin />, label: 'LinkedIn' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full relative border-t border-luxury-border py-10 px-6 md:px-12 bg-luxury-bgSec z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding */}
        <div className="text-center md:text-left space-y-1.5">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center md:justify-start gap-2.5 font-bold text-base text-luxury-textPri group"
          >
            <div className="w-8 h-8 rounded-lg bg-luxury-textPri border border-luxury-border flex items-center justify-center text-xs font-bold text-luxury-gold">
              NS
            </div>
            <span className="tracking-widest uppercase text-luxury-textPri hover:text-luxury-navy transition-colors">
              NITHISH SELVARAJ
            </span>
          </button>
          <p className="text-[10px] text-luxury-textSec/60 tracking-wider font-semibold">
            B.Tech Information Technology • Kongu Engineering College
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-luxury-card border border-luxury-border hover:border-luxury-navy/30 hover:bg-luxury-navy/5 text-luxury-textPri hover:text-luxury-navy flex items-center justify-center transition-all shadow-sm"
              aria-label={link.label}
            >
              <span className="text-sm">{link.icon}</span>
            </a>
          ))}
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right text-[10px] text-luxury-textSec/50 font-mono uppercase tracking-widest space-y-1 font-semibold">
          <span>&copy; {new Date().getFullYear()} NITHISH S. All Rights Reserved.</span>
          <br />
          <span className="text-[8px] text-luxury-gold/60">minimalist modern developer brand identity</span>
        </div>

      </div>
    </footer>
  );
}
