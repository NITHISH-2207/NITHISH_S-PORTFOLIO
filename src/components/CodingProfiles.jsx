import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiCompass, FiAward, FiExternalLink } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const PROFILE_CARDS = [
  {
    name: 'GitHub Profile',
    handle: 'NITHISH-2207',
    url: 'https://github.com/NITHISH-2207',
    icon: <FiGithub className="text-luxury-textPri" />,
    stats: [
      { label: 'Repositories', value: '10+' },
      { label: 'Total Stars', value: '3+' },
      { label: 'Active Commits', value: '180+' }
    ],
    type: 'github'
  },
  {
    name: 'LeetCode Platform',
    handle: 'NITHISH__SELVARAJ',
    url: 'https://leetcode.com/u/NITHISH__SELVARAJ/',
    icon: <SiLeetcode className="text-luxury-gold" />,
    stats: [
      { label: 'Solved Questions', value: '120+' },
      { label: 'Easy Tasks', value: '50' },
      { label: 'Medium Tasks', value: '70' }
    ],
    type: 'leetcode'
  },
  {
    name: 'Codolio Portfolio',
    handle: 'NITHISH_S',
    url: 'https://codolio.com/profile/NITHISH_S',
    icon: <FiCompass className="text-luxury-navy" />,
    stats: [
      { label: 'Profile Verified', value: 'Gold Tier' },
      { label: 'Coding Credit', value: '780' },
      { label: 'Rank Percentage', value: 'Top 8%' }
    ],
    type: 'codolio'
  },
  {
    name: 'LinkedIn Network',
    handle: 'nithish-s-65a963325',
    url: 'https://www.linkedin.com/in/nithish-s-65a963325/',
    icon: <FiLinkedin className="text-luxury-navy" />,
    stats: [
      { label: 'Connections', value: '450+' },
      { label: 'Endorsements', value: 'Web Dev' },
      { label: 'Post Reach', value: '2.5k+' }
    ],
    type: 'linkedin'
  }
];

const CONTRIBUTION_CELLS = Array.from({ length: 98 }, () => {
  const rand = Math.random();
  if (rand < 0.45) return 0;
  if (rand < 0.75) return 1;
  if (rand < 0.92) return 2;
  return 3;
});

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden px-6 md:px-12 bg-luxury-bg">
      <div className="w-full max-w-7xl mx-auto mb-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-luxury-gold mb-3 font-bold"
        >
          Competitive Coding & Activity
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl md:text-4xl font-heading font-bold text-luxury-textPri"
        >
          Developer <span className="text-luxury-navy">Profiles & Stats</span>
        </motion.h2>
        <div className="w-16 h-[1px] bg-luxury-gold/40 mx-auto mt-4" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 z-10 relative">
        {PROFILE_CARDS.map((profile, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
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
                <div className="mb-5 bg-luxury-bgSec border border-luxury-border rounded-lg p-3">
                  <h4 className="text-[9px] font-mono tracking-widest uppercase text-luxury-textSec/60 mb-2.5 font-bold">
                    Contributions activity
                  </h4>
                  <div className="grid grid-flow-col grid-rows-7 gap-1 w-full justify-start overflow-x-auto pb-1">
                    {CONTRIBUTION_CELLS.map((level, cIdx) => (
                      <div
                        key={cIdx}
                        className={`w-[8px] h-[8px] rounded-sm transition-colors duration-300 ${
                          level === 0 ? 'bg-luxury-bg' :
                          level === 1 ? 'bg-luxury-gold/25' :
                          level === 2 ? 'bg-luxury-navy/45' :
                          'bg-luxury-navy'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-[7px] font-mono text-luxury-textSec/35 uppercase mt-2 tracking-widest font-semibold">
                    <span>Less active</span>
                    <span>More active</span>
                  </div>
                </div>
              )}

              {profile.type === 'leetcode' && (
                <div className="mb-5 grid grid-cols-12 items-center gap-4 bg-luxury-bgSec border border-luxury-border rounded-lg p-3">
                  {/* Circle progress */}
                  <div className="col-span-4 flex justify-center">
                    <div className="relative w-12 h-12 rounded-full border-2 border-luxury-bg border-t-luxury-gold flex items-center justify-center">
                      <span className="font-mono text-[10px] font-bold text-luxury-textPri">65%</span>
                    </div>
                  </div>
                  {/* Breakdown details */}
                  <div className="col-span-8 space-y-1 text-xs">
                    <h4 className="text-[9px] font-mono tracking-widest uppercase text-luxury-textSec/60 font-bold">Task Breakdown</h4>
                    <div className="flex justify-between text-luxury-textSec text-[11px] font-semibold">
                      <span>Easy</span>
                      <span className="font-bold font-mono text-luxury-gold">50 / 120</span>
                    </div>
                    <div className="flex justify-between text-luxury-textSec text-[11px] font-semibold">
                      <span>Medium</span>
                      <span className="font-bold font-mono text-luxury-navy">70 / 180</span>
                    </div>
                  </div>
                </div>
              )}

              {profile.type === 'codolio' && (
                <div className="mb-5 bg-luxury-bgSec border border-luxury-border rounded-lg p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-luxury-navy/10 border border-luxury-navy/20 flex items-center justify-center text-luxury-navy">
                    <FiAward className="text-base" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-luxury-textPri">Developer Verification Badge</h4>
                    <p className="text-[10px] text-luxury-textSec leading-relaxed mt-0.5 font-medium">
                      Verified competencies in structural algorithms, relational designs, and web architecture scripts.
                    </p>
                  </div>
                </div>
              )}

              {profile.type === 'linkedin' && (
                <div className="mb-5 bg-luxury-bgSec border border-luxury-border rounded-lg p-3 space-y-2">
                  <h4 className="text-[9px] font-mono tracking-widest uppercase text-luxury-textSec/60 font-bold">Recruiter Highlights</h4>
                  <div className="flex flex-wrap gap-1">
                    {['Open to Work', 'Kongu IT Core', 'MERN developer', 'Immediate Hire'].map((tag) => (
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
