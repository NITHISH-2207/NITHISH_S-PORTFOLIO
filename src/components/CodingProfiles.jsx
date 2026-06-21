import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiCompass, FiAward, FiExternalLink } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const PROFILE_CARDS = [
  {
    name: 'Builder Profile',
    handle: 'NITHISH-2207',
    url: 'https://github.com/NITHISH-2207',
    icon: <FiGithub className="text-luxury-textPri" />,
    stats: [
      { label: 'Repositories', value: '10+' },
      { label: 'Focus', value: 'Full Stack' },
      { label: 'Activity', value: 'Consistent' }
    ],
    type: 'github',
    highlights: ['10+ Repositories', 'Full Stack Development', 'Project Building', 'Continuous Learning']
  },
  {
    name: 'Problem Solver',
    handle: 'NITHISH__SELVARAJ',
    url: 'https://leetcode.com/u/NITHISH__SELVARAJ/',
    icon: <SiLeetcode className="text-luxury-gold" />,
    stats: [
      { label: 'Solved', value: '250' },
      { label: 'Streak', value: '21 Days' },
      { label: 'Badges', value: '2' }
    ],
    type: 'leetcode',
    breakdown: [
      { label: 'Easy', value: '164' },
      { label: 'Medium', value: '79' },
      { label: 'Hard', value: '7' }
    ]
  },
  {
    name: 'Competitive Programming Journey',
    handle: 'NITHISH_S',
    url: 'https://codolio.com/profile/NITHISH_S',
    icon: <FiCompass className="text-luxury-navy" />,
    stats: [
      { label: 'Rating', value: '944' },
      { label: 'Streak', value: '21 Days' },
      { label: 'Contests', value: '1' }
    ],
    type: 'codolio',
    consistency: [
      { label: 'Active Days', value: '82' },
      { label: 'Submissions', value: '491' },
      { label: 'Total Questions', value: '404' }
    ]
  },
  {
    name: 'Professional Presence',
    handle: 'nithish-s-65a963325',
    url: 'https://www.linkedin.com/in/nithish-s-65a963325/',
    icon: <FiLinkedin className="text-luxury-navy" />,
    stats: [
      { label: 'Professional', value: 'Network' },
      { label: 'Career', value: 'Growth' },
      { label: 'Industry', value: 'Presence' }
    ],
    type: 'linkedin',
    info: ['MERN Stack Developer', 'Open To Internships', 'Kongu Engineering College', '376 Connections']
  }
];

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden px-6 md:px-12 bg-luxury-bg">
      <div className="w-full max-w-7xl mx-auto mb-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-luxury-gold mb-3 font-bold"
        >
          Competitive Coding & Activity
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-2xl md:text-4xl font-heading font-bold text-luxury-textPri"
        >
          Digital <span className="text-luxury-navy">Presence</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-xs md:text-sm text-luxury-textSec max-w-xl mx-auto mt-4 leading-relaxed font-medium"
        >
          A snapshot of my learning journey, coding consistency, project development, and professional growth.
        </motion.p>
        <div className="w-16 h-[1px] bg-luxury-gold/40 mx-auto mt-4" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 z-10 relative">
        {PROFILE_CARDS.map((profile, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="glass-card rounded-xl p-5 border border-luxury-border flex flex-col justify-between overflow-hidden relative group hover:border-luxury-gold/50 hover:-translate-y-0.5 transition-all duration-300 shadow-sm bg-luxury-card/90"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="text-lg p-2 bg-luxury-bg rounded-lg border border-luxury-border flex items-center justify-center">
                    {profile.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-widest uppercase text-luxury-textPri">
                      {profile.name}
                    </h3>
                    <p className="text-[10px] font-mono text-luxury-gold tracking-wider font-semibold">
                      @{profile.handle}
                    </p>
                  </div>
                </div>
                
                {/* Outlink */}
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-luxury-bg border border-luxury-border hover:border-luxury-gold text-luxury-navy hover:text-luxury-textPri transition-colors"
                  aria-label={`Visit ${profile.name}`}
                >
                  <FiExternalLink size={13} />
                </a>
              </div>

              {/* Specific visualizations */}
              {profile.type === 'github' && (
                <div className="mb-5 bg-luxury-bgSec border border-luxury-border rounded-lg p-3 space-y-2">
                  <h4 className="text-[9px] font-mono tracking-widest uppercase text-luxury-textSec/60 font-bold">
                    Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {profile.highlights.map((tag) => (
                      <span key={tag} className="text-[8px] font-bold bg-luxury-navy/5 text-luxury-navy px-2 py-0.5 rounded border border-luxury-border uppercase font-mono tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {profile.type === 'leetcode' && (
                <div className="mb-5 grid grid-cols-12 items-center gap-4 bg-luxury-bgSec border border-luxury-border rounded-lg p-3">
                  {/* Circle progress */}
                  <div className="col-span-4 flex justify-center">
                    <div className="relative w-12 h-12 rounded-full border-2 border-luxury-bg border-t-luxury-gold flex flex-col items-center justify-center">
                      <span className="font-mono text-[9px] font-bold text-luxury-textPri">250+</span>
                      <span className="text-[6px] uppercase tracking-wider text-luxury-textSec font-bold">Solved</span>
                    </div>
                  </div>
                  {/* Breakdown details */}
                  <div className="col-span-8 space-y-1 text-xs">
                    <h4 className="text-[9px] font-mono tracking-widest uppercase text-luxury-textSec/60 font-bold">Task Breakdown</h4>
                    {profile.breakdown.map((item) => (
                      <div key={item.label} className="flex justify-between text-luxury-textSec text-[11px] font-semibold">
                        <span>{item.label}</span>
                        <span className={`font-bold font-mono ${item.label === 'Easy' ? 'text-luxury-gold' : item.label === 'Medium' ? 'text-luxury-navy' : 'text-luxury-textPri'}`}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {profile.type === 'codolio' && (
                <div className="mb-5 bg-luxury-bgSec border border-luxury-border rounded-lg p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-luxury-navy/10 border border-luxury-navy/20 flex items-center justify-center text-luxury-navy shrink-0">
                    <FiAward className="text-base" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[9px] font-mono tracking-widest uppercase text-luxury-textSec/60 font-bold">Consistency & Progress</h4>
                    <div className="grid grid-cols-3 gap-x-2 mt-1.5 text-[9px] font-semibold text-luxury-textSec">
                      {profile.consistency.map((item) => (
                        <div key={item.label} className="flex flex-col">
                          <span className="text-[7px] uppercase text-luxury-textSec/50 truncate">{item.label}</span>
                          <span className="font-mono font-bold text-luxury-navy text-xs mt-0.5">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {profile.type === 'linkedin' && (
                <div className="mb-5 bg-luxury-bgSec border border-luxury-border rounded-lg p-3 space-y-2">
                  <h4 className="text-[9px] font-mono tracking-widest uppercase text-luxury-textSec/60 font-bold">Profile Info</h4>
                  <div className="flex flex-wrap gap-1">
                    {profile.info.map((tag) => (
                      <span key={tag} className="text-[8px] font-bold bg-luxury-gold/10 text-luxury-gold px-2 py-0.5 rounded border border-luxury-gold/20 uppercase font-mono tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Stat Grid */}
              <div className="grid grid-cols-3 gap-2 border-t border-luxury-border pt-4 text-center">
                {profile.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="space-y-0.5">
                    <div className="text-[9px] font-bold text-luxury-textSec/40 tracking-wider uppercase font-mono">
                      {stat.label}
                    </div>
                    <div className="font-bold text-xs md:text-sm text-luxury-textPri">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
