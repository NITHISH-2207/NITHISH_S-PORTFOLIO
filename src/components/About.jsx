import React from 'react';
import { motion } from 'framer-motion';

const ABOUT_HIGHLIGHTS = [
  {
    emoji: '🎓',
    title: 'B.Tech IT',
    desc: 'Kongu Engineering College',
  },
  {
    emoji: '💻',
    title: 'Developer',
    desc: 'Web & Software Development',
  },
  {
    emoji: '🧩',
    title: 'Focus',
    desc: 'DSA, Web, Databases',
  },
  {
    emoji: '🚀',
    title: 'Mission',
    desc: 'Turning Curiosity Into Code',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="pt-24 pb-16 relative overflow-hidden px-6 md:px-12 bg-luxury-bg z-10"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Column: Eyebrow label, Heading, Paragraphs */}
        <div className="lg:col-span-7 flex flex-col text-left">

          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-luxury-bgSec border border-luxury-border w-fit mb-5"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold font-bold">
              ABOUT ME
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-2xl md:text-4xl font-heading font-bold text-luxury-textPri mb-6"
          >
            The Story Behind The Code
          </motion.h2>

          {/* Body Text */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm md:text-base text-luxury-textSec leading-8 font-medium"            >
              I'm NITHISH, an Information Technology undergraduate at Kongu Engineering College who enjoys turning ideas into practical software solutions. What started as curiosity about technology gradually became a passion for development and problem solving.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm md:text-base text-luxury-textSec leading-8 font-medium"            >
              My journey has taken me through web development, databases, programming, and data structures. I enjoy building projects, exploring new technologies, and constantly improving through hands-on learning and coding challenges.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm md:text-base text-luxury-textSec leading-8 font-medium"            >
              Today, I'm focused on strengthening my development skills, solving real-world problems, and growing into a software engineer who creates meaningful and impactful digital experiences.
            </motion.p>
          </div>
        </div>

        {/* Right Column: Highlights cards */}
        <div className="lg:col-span-5 flex flex-col gap-4 lg:pl-6 w-full">
          {ABOUT_HIGHLIGHTS.map((highlight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-4 rounded-xl bg-luxury-navy/5 hover:bg-luxury-navy/[0.08] transition-all duration-300 flex items-center gap-4 text-left group"
            >
              <div className="text-2xl select-none flex-shrink-0 bg-luxury-bgSec/40 w-12 h-12 rounded-lg flex items-center justify-center">
                {highlight.emoji}
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-luxury-textPri">
                  {highlight.title}
                </h4>
                <p className="text-xs text-luxury-textSec font-medium mt-0.5">
                  {highlight.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
