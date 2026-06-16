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
    title: 'Full-Stack',
    desc: 'MERN Stack Developer',
  },
  {
    emoji: '🧠',
    title: 'Domains',
    desc: 'ML, CV, Web, DBMS',
  },
  {
    emoji: '⚡',
    title: 'Drive',
    desc: 'Hackathons & Problem Solving',
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
            Who I Am
          </motion.h2>

          {/* Body Text */}
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xs md:text-sm text-luxury-textSec leading-relaxed font-medium"
            >
              I'm NITHISH S, an Information Technology undergraduate at Kongu Engineering College with a strong interest in Software Development, Full-Stack Web Development, and Problem Solving.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs md:text-sm text-luxury-textSec leading-relaxed font-medium"
            >
              I enjoy building practical applications using Python, Java, JavaScript, PHP, and modern web technologies. My experience spans Machine Learning, Computer Vision, Database Management, and Web Development — strengthened through coding challenges, hackathons, and hands-on project work.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xs md:text-sm text-luxury-textSec leading-relaxed font-medium"
            >
              I'm passionate about learning new technologies, solving real-world problems, and creating impactful software solutions.
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
