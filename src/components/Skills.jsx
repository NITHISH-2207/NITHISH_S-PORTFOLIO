import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaCode, FaReact, FaServer, FaDatabase, FaGithub, FaBrain, FaTools } from 'react-icons/fa';

const SKILLS_DATA = [
  { name: 'Java Development', icon: <FaJava className="text-luxury-navy" />, desc: 'OOP, Data Structures, Multithreading & Algorithms' },
  { name: 'Web Development', icon: <FaCode className="text-luxury-navy" />, desc: 'HTML5, CSS3, JavaScript — responsive & semantic UI' },
  { name: 'React Development', icon: <FaReact className="text-luxury-navy" />, desc: 'Component architecture, hooks, state management' },
  { name: 'Backend Development', icon: <FaServer className="text-luxury-navy" />, desc: 'Node.js, Express, REST APIs, PHP server-side logic' },
  { name: 'Database Management', icon: <FaDatabase className="text-luxury-navy" />, desc: 'MySQL, Oracle, MongoDB — queries, schemas, optimization' },
  { name: 'Git & GitHub', icon: <FaGithub className="text-luxury-navy" />, desc: 'Version control, branching, collaborative workflows' },
  { name: 'Problem Solving', icon: <FaBrain className="text-luxury-navy" />, desc: 'DSA, competitive coding, logical decomposition' },
  { name: 'Tools & Workflow', icon: <FaTools className="text-luxury-navy" />, desc: 'VS Code, XAMPP, Postman, Linux, dev environment setup' }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check prefers-reduced-motion setting
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motionListener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', motionListener);

    // Setup intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      mediaQuery.removeEventListener('change', motionListener);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-12 relative overflow-hidden px-6 md:px-12 bg-luxury-bg">
      <style>{`
        .skill-tile {
          transition: all 220ms ease;
          border-left: 2px solid #DDD6C4 !important;
        }
        @media (prefers-reduced-motion: no-preference) {
          .skill-tile:hover {
            transform: translateY(-8px) scale(1.015);
            box-shadow: 0 14px 32px rgba(27, 42, 74, 0.14);
            border-left: 3px solid #B8962E !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .skill-tile:hover {
            border-left: 2px solid #B8962E !important;
          }
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto mb-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-luxury-gold mb-3 font-bold"
        >
          My Toolkit
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-2xl md:text-4xl font-heading font-bold text-luxury-textPri"
        >
          Skills & <span className="text-luxury-navy">Expertise</span>
        </motion.h2>
        <div className="w-16 h-[1px] bg-luxury-gold/40 mx-auto mt-4" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 z-10 relative">
        {SKILLS_DATA.map((skill, idx) => {
          const animStyle = prefersReducedMotion
            ? { opacity: 1, transform: 'none' }
            : {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 380ms ease-out, transform 380ms ease-out',
              transitionDelay: isVisible ? `${idx * 55}ms` : '0ms',
            };

          return (
            <div
              key={idx}
              style={animStyle}
              className="w-full"
            >
              <div
                className="skill-tile glass-card rounded-xl py-7 px-6 border border-luxury-border bg-luxury-card/90 shadow-sm flex items-center gap-4 text-left cursor-default w-full h-full"
              >
                {/* Icon */}
                <div className="text-lg p-2.5 bg-luxury-bgSec rounded-lg border border-luxury-border flex items-center justify-center text-luxury-textPri shrink-0 transition-all duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                {/* Title & Desc */}
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-luxury-textPri truncate">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-luxury-textSec font-medium mt-1 leading-relaxed line-clamp-2">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
