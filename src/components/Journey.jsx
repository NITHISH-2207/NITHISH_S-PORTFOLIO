import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCpu, FiCode, FiLayers, FiCompass, FiAward } from 'react-icons/fi';

const JOURNEY_MILESTONES = [
  {
    year: '2021 – 2024',
    title: 'Schooling & Early Curiosity',
    subtitle: 'Kongu Vellalar Matric Hr. Sec. School, Tiruppur',
    description: 'Built a strong academic foundation while developing curiosity about technology and problem solving. This period shaped my interest in computers, logical thinking, and continuous learning.',
    icon: <FiBookOpen />,
    side: 'left'
  },
  {
    year: '2024',
    title: 'Beginning the Engineering Journey',
    subtitle: 'Kongu Engineering College, Erode',
    description: 'Started my B.Tech in Information Technology and stepped into the world of programming, databases, and software development. Learned the fundamentals that would become the base of my technical growth.',
    icon: <FiCpu />,
    side: 'right'
  },
  {
    year: 'Late 2024 – 2025',
    title: 'Discovering Programming & DSA',
    subtitle: 'Java • Problem Solving • Logic Building',
    description: 'Explored programming through Java and began solving coding problems. Developed confidence in algorithms, data structures, debugging, and analytical thinking through consistent practice.',
    icon: <FiCode />,
    side: 'left'
  },
  {
    year: '2025-2026',
    title: 'Exploring Web Development',
    subtitle: 'Frontend • Backend • Databases',
    description: 'Moved beyond coding problems and started building applications. Learned HTML, CSS, JavaScript, PHP, MySQL, and REST APIs while understanding how complete software systems are designed and developed.',
    icon: <FiLayers />,
    side: 'right'
  },
  {
    year: '2026 – Present',
    title: 'Building Real Projects',
    subtitle: 'Academic & Personal Development',
    description: 'Worked on projects ranging from agriculture advisory systems to AI-based applications. Focused on turning ideas into working products while improving software design, teamwork, and implementation skills.',
    icon: <FiCompass />,
    side: 'left'
  },
  {
    year: 'Present & Beyond',
    title: 'Growing as a Software Engineer',
    subtitle: 'Projects • Hackathons • Continuous Learning',
    description: 'Actively participating in hackathons, strengthening problem-solving skills, and exploring modern technologies. Continuously learning and building toward a career in software engineering and full-stack development.',
    icon: <FiAward />,
    side: 'right'
  }
];

export default function Journey() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const listener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <section id="journey" className="py-24 relative overflow-hidden px-6 md:px-12 bg-luxury-bgSec">
      <div className="w-full max-w-7xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-luxury-gold mb-3 font-bold"
        >
          Timeline of Growth
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-2xl md:text-4xl font-heading font-bold text-luxury-textPri"
        >
          Engineering <span className="text-luxury-navy">Journey</span>
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
              className={`flex flex-col md:flex-row items-start md:items-center relative ${milestone.side === 'right' ? 'md:flex-row-reverse' : ''
                }`}
            >

              {/* Connector Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  className="w-10 h-10 rounded-full bg-luxury-bg border border-luxury-gold/50 flex items-center justify-center text-luxury-navy shadow-sm"
                >
                  <span className="text-sm">{milestone.icon}</span>
                </motion.div>
              </div>

              {/* Card Container */}
              <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-10">
                <motion.div
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: milestone.side === 'left' ? -20 : 20 }
                  }
                  whileInView={
                    prefersReducedMotion
                      ? { opacity: 1, x: 0 }
                      : { opacity: 1, x: 0 }
                  }
                  viewport={{ once: false, amount: 0.25 }}
                  transition={
                    prefersReducedMotion
                      ? {}
                      : { duration: 0.6, delay: idx * 0.08 }
                  }
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
