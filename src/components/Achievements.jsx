import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBook, FiUsers, FiCheckCircle } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';

// Array for easy future customization by Nithish
const ACHIEVEMENTS_DATA = [
  {
    title: 'Hackathon Participation & Run',
    organization: 'KEC Tech Fest, Erode',
    description: 'Designed and built collaborative prototypes under strict time constraints. Successfully presented a smart agri-tech portal to industry mentors.',
    icon: <FaTrophy className="text-luxury-gold" />,
    tag: 'Innovation'
  },
  {
    title: 'Academic Excellence Honors',
    organization: 'Kongu Engineering College',
    description: 'Ranked in the top tier of B.Tech Information Technology batch with a consistent, verified CGPA of 8.83 over semesters.',
    icon: <FiBook className="text-luxury-navy" />,
    tag: 'Education'
  },
  {
    title: 'Technical Workshops & Training',
    organization: 'Full Stack & Database Symposiums',
    description: 'Completed certifications and practical hands-on labs in Oracle SQL databases, React state models, and NodeJS API routers.',
    icon: <FiCheckCircle className="text-luxury-navy" />,
    tag: 'Certificates'
  },
  {
    title: 'Team Collaboration & Leadership',
    organization: 'Project Development Groups',
    description: 'Served as principal programmer leading a 3-student team to assemble the AgroGuide Crop Advisory portal, managing source check-ins and tasks.',
    icon: <FiUsers className="text-luxury-navy" />,
    tag: 'Leadership'
  }
];

const STATS_COUNTERS = [
  { target: 8.83, label: 'KEC CGPA', suffix: '', decimals: 2 },
  { target: 120, label: 'LeetCode Solved', suffix: '+', decimals: 0 },
  { target: 6, label: 'Tech Projects', suffix: '+', decimals: 0 },
  { target: 4, label: 'Coding Platforms', suffix: '', decimals: 0 }
];

// Interactive Counter Sub-Component
function AnimatedCounter({ target, decimals, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const incrementTime = 25;
    const totalSteps = duration / incrementTime;
    const stepValue = target / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      start += stepValue;
      
      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Number(start.toFixed(decimals)));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, decimals]);

  return (
    <span ref={ref} className="font-mono font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden px-6 md:px-12 bg-luxury-bgSec">
      <div className="w-full max-w-7xl mx-auto mb-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-luxury-gold mb-3 font-bold"
        >
          Key Milestones
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl md:text-4xl font-heading font-bold text-luxury-textPri"
        >
          Awards & <span className="text-luxury-navy">Achievements</span>
        </motion.h2>
        <div className="w-16 h-[1px] bg-luxury-gold/40 mx-auto mt-4" />
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Counter Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STATS_COUNTERS.map((stat, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: sIdx * 0.05, duration: 0.4 }}
              className="glass-card rounded-xl p-5 text-center border border-luxury-border group hover:border-luxury-gold/50 hover:-translate-y-0.5 transition-all duration-300 shadow-sm bg-luxury-card/90"
            >
              <div className="text-2xl md:text-3xl text-luxury-navy font-bold mb-1">
                <AnimatedCounter
                  target={stat.target}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-[9px] text-luxury-textSec font-mono tracking-widest uppercase font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="glass-card rounded-xl p-5 border border-luxury-border hover:border-luxury-navy/40 flex gap-4 transition-all duration-300 group hover:-translate-y-0.5 shadow-sm bg-luxury-card/90"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-luxury-bg border border-luxury-border text-xl flex items-center justify-center shrink-0 text-luxury-navy">
                {item.icon}
              </div>

              {/* Detail */}
              <div className="space-y-1">
                <div className="inline-block text-[8px] font-mono tracking-wider uppercase bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20 px-2 py-0.5 rounded mb-1.5 font-bold">
                  {item.tag}
                </div>
                
                <h3 className="text-sm md:text-base font-bold text-luxury-textPri group-hover:text-luxury-navy transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-[10px] font-mono text-luxury-textSec/50 uppercase tracking-widest font-semibold">
                  {item.organization}
                </p>
                
                <p className="text-xs text-luxury-textSec mt-2 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
