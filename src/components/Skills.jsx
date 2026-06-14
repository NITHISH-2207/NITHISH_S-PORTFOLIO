import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiC, SiMysql, SiXampp } from 'react-icons/si';
import { FiServer } from 'react-icons/fi';

const SKILLS_DATA = [
  {
    category: 'Core Programming',
    skills: [
      { name: 'Java', level: 85, icon: <FaJava className="text-luxury-navy" />, desc: 'OOPs, Data Structures, Multithreading, Algorithms' },
      { name: 'C Language', level: 80, icon: <SiC className="text-luxury-navy" />, desc: 'Structural Programming, Memory Management, Pointers' }
    ]
  },
  {
    category: 'Full-Stack Development',
    skills: [
      { name: 'MERN Stack', level: 88, icon: <FaReact className="text-luxury-navy" />, desc: 'MongoDB, Express, React, Node.js REST APIs' },
      { name: 'PHP Development', level: 75, icon: <FaPhp className="text-luxury-navy" />, desc: 'Server-side Scripting, Sessions, Back-end Logic' }
    ]
  },
  {
    category: 'Database Management',
    skills: [
      { name: 'MySQL', level: 82, icon: <SiMysql className="text-luxury-navy" />, desc: 'Relational Schemas, Complex Queries, Joins, Triggers' },
      { name: 'Oracle Database', level: 78, icon: <FaDatabase className="text-luxury-navy" />, desc: 'PL/SQL, Subqueries, Architecture, Transaction Isolation' }
    ]
  },
  {
    category: 'Environments & Platforms',
    skills: [
      { name: 'XAMPP Stack', level: 80, icon: <SiXampp className="text-luxury-navy" />, desc: 'Localhost server testing, Apache, PHPMyAdmin controls' },
      { name: 'Web Server hosting', level: 72, icon: <FiServer className="text-luxury-navy" />, desc: 'API routing, static serving, deployment checks' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden px-6 md:px-12 bg-luxury-bg">
      <div className="w-full max-w-7xl mx-auto mb-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-luxury-gold mb-3 font-bold"
        >
          Specializations
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl md:text-4xl font-heading font-bold text-luxury-textPri"
        >
          Technical <span className="text-luxury-navy">Capabilities</span>
        </motion.h2>
        <div className="w-16 h-[1px] bg-luxury-gold/40 mx-auto mt-4" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 z-10 relative">
        {SKILLS_DATA.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="glass-card rounded-xl p-5 border border-luxury-border bg-luxury-card/90 shadow-sm"
          >
            <h3 className="font-bold text-xs tracking-widest uppercase text-luxury-navy mb-5 border-b border-luxury-border pb-2">
              {cat.category}
            </h3>

            <div className="space-y-5">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    
                    {/* Icon & Name */}
                    <div className="flex items-center gap-3">
                      <div className="text-lg p-2 bg-luxury-bgSec rounded-lg border border-luxury-border flex items-center justify-center text-luxury-textPri">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-luxury-textPri">
                          {skill.name}
                        </h4>
                        <p className="text-[10px] text-luxury-textSec font-medium">
                          {skill.desc}
                        </p>
                      </div>
                    </div>

                    {/* Level */}
                    <div className="text-right">
                      <span className="font-mono text-xs font-bold text-luxury-gold">
                        {skill.level}%
                      </span>
                    </div>

                  </div>

                  {/* Level Slider Bar (Thin slate/blue line) */}
                  <div className="w-full h-[2px] bg-luxury-bgSec rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-luxury-navy"
                    />
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
