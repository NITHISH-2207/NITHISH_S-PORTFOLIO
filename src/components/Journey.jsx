import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCpu, FiCode, FiLayers, FiCompass, FiAward } from 'react-icons/fi';

const JOURNEY_MILESTONES = [
  {
    year: '2022 - 2024',
    title: 'Schooling & Early Tech Curiosity',
    subtitle: 'Kongu Vellalar Matric Hr Sec School, Tiruppur',
    description: 'Laid down strong logical foundations with standard schooling. Maintained academic excellence, scoring 90% in 10th Grade and 89% in 12th Grade, while discovering a passion for computation and mathematical structures.',
    icon: <FiBookOpen />,
    side: 'left'
  },
  {
    year: '2024 - 2028',
    title: 'Pursuing B.Tech IT at KEC',
    subtitle: 'Kongu Engineering College, Erode',
    description: 'Admitted to Kongu Engineering College to study B.Tech Information Technology. Immersed in computer systems architecture, algorithms, and logic systems, maintaining a high average CGPA of 8.83.',
    icon: <FiCpu />,
    side: 'right'
  },
  {
    year: 'Late 2024',
    title: 'Logical Coding Foundation',
    subtitle: 'Mastering C & Java Programming',
    description: 'Dived deep into backend logic. Developed a solid understanding of structural coding in C and Object-Oriented Programming (OOP) architectures in Java. Solved programming puzzles to build strong algorithmic foundations.',
    icon: <FiCode />,
    side: 'left'
  },
  {
    year: '2025',
    title: 'Full-Stack Web Architectures',
    subtitle: 'MERN Stack & Database Exploration',
    description: 'Expanded technical skills into modern web architectures. Focused on the MERN stack (MongoDB, Express, React, Node.js), combined with databases like MySQL and Oracle. Explored legacy architectures using PHP and XAMPP.',
    icon: <FiLayers />,
    side: 'right'
  },
  {
    year: '2025 - Present',
    title: 'AI Integrations & Projects',
    subtitle: 'Exploring Autonomous Tech & Machine Learning',
    description: 'Combined full-stack skills with artificial intelligence. Integrated cognitive APIs, LLM calls, and automation scripts into web platforms to build interactive user interfaces and smart services.',
    icon: <FiCompass />,
    side: 'left'
  },
  {
    year: 'Future Pathway',
    title: 'Hackathons & Software Engineering',
    subtitle: 'Building Products for the Real World',
    description: 'Participating in collaborative team challenges, hackathons, and software projects. Focused on crafting highly scalable, professional products optimized for recruiter assessment.',
    icon: <FiAward />,
    side: 'right'
  }
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden px-6 md:px-12 bg-luxury-bgSec">
      <div className="w-full max-w-7xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-luxury-gold mb-3 font-bold"
        >
          Timeline of Growth
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl md:text-4xl font-heading font-bold text-luxury-textPri"
        >
          Academic & Tech <span className="text-luxury-navy">Journey</span>
        </motion.h2>
        <div className="w-16 h-[1px] bg-luxury-gold/40 mx-auto mt-4" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Central Line */}
        <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[1px] -translate-x-1/2 bg-luxury-border hidden md:block" />

        {/* Left Line */}
        <div className="absolute left-6 top-4 bottom-4 w-[1px] bg-luxury-border md:hidden" />

        {/* Timeline Items */}
        <div className="space-y-10 relative">
          {JOURNEY_MILESTONES.map((milestone, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-start md:items-center relative ${
                milestone.side === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              
              {/* Connector Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="w-10 h-10 rounded-full bg-luxury-bg border border-luxury-gold/50 flex items-center justify-center text-luxury-navy shadow-sm"
                >
                  <span className="text-sm">{milestone.icon}</span>
                </motion.div>
              </div>

              {/* Card Container */}
              <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-10">
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    x: milestone.side === 'left' ? -25 : 25 
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="glass-card rounded-xl p-5 border border-luxury-border hover:border-luxury-gold/60 transition-all duration-300 relative group hover:-translate-y-0.5 bg-luxury-card/90 shadow-sm"
                >
                  {/* Date Badge */}
                  <div className="inline-block px-2.5 py-0.5 rounded bg-luxury-bg text-[9px] font-mono text-luxury-textSec uppercase tracking-wider mb-3 font-bold border border-luxury-border">
                    {milestone.year}
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-luxury-textPri group-hover:text-luxury-navy transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-luxury-gold mt-0.5">
                    {milestone.subtitle}
                  </h4>
                  <p className="text-xs md:text-sm text-luxury-textSec mt-3 leading-relaxed font-medium">
                    {milestone.description}
                  </p>
                </motion.div>
              </div>

              {/* Empty Column */}
              <div className="hidden md:block w-1/2" />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
