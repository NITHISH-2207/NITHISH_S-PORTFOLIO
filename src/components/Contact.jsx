import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiCopy, FiCheck, FiSend } from 'react-icons/fi';

const CONTACT_DETAILS = [
  {
    label: 'Professional Email',
    value: 'nithishs2203@gmail.com',
    icon: <FiMail />,
    copyValue: 'nithish2203@gmail.com',
    link: 'mailto:nithish2203@gmail.com'
  },
  {
    label: 'Phone Number',
    value: '+91 9092132572',
    icon: <FiPhone />,
    copyValue: '+919092132572',
    link: 'tel:+919092132572'
  },
  {
    label: 'GitHub Developer Profile',
    value: 'github.com/NITHISH-2207',
    icon: <FiGithub />,
    copyValue: 'https://github.com/NITHISH-2207',
    link: 'https://github.com/NITHISH-2207'
  },
  {
    label: 'LinkedIn Connection',
    value: 'linkedin.com/in/nithish-s-65a963325',
    icon: <FiLinkedin />,
    copyValue: 'https://www.linkedin.com/in/nithish-s-65a963325/',
    link: 'https://www.linkedin.com/in/nithish-s-65a963325/'
  }
];

export default function Contact() {
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSending(true);

    // Mock send delay
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);

      // Reset form
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSentSuccess(false), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden px-6 md:px-12 bg-luxury-bg">
      <div className="w-full max-w-7xl mx-auto mb-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-luxury-gold mb-3 font-bold"
        >
          Get In Touch
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl md:text-4xl font-heading font-bold text-luxury-textPri"
        >
          Secure Connection <span className="text-luxury-navy">Line</span>
        </motion.h2>
        <div className="w-16 h-[1px] bg-luxury-gold/40 mx-auto mt-4" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 relative">

        {/* Left: Credentials list */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
          <div>
            <h3 className="text-lg font-heading font-bold text-luxury-textPri">
              Let's build something extraordinary
            </h3>
            <p className="text-xs md:text-sm text-luxury-textSec mt-2 leading-relaxed font-medium">
              Available for internship offers, project collaborations, or structural engineering queries. Copy credentials directly or fill out the console.
            </p>
          </div>

          <div className="space-y-3.5">
            {CONTACT_DETAILS.map((detail, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="glass-card rounded-xl p-4 border border-luxury-border flex items-center justify-between group hover:border-luxury-gold/50 transition-all duration-300 shadow-sm bg-luxury-card/90"
              >
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <a
                    href={detail.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-luxury-bg border border-luxury-border text-luxury-navy flex items-center justify-center hover:bg-luxury-navy hover:text-luxury-bg transition-colors"
                  >
                    {detail.icon}
                  </a>
                  <div>
                    <h4 className="text-[9px] font-mono tracking-widest uppercase text-luxury-textSec">
                      {detail.label}
                    </h4>
                    <a
                      href={detail.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-luxury-textPri hover:text-luxury-navy transition-colors break-all"
                    >
                      {detail.value}
                    </a>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(detail.copyValue, idx)}
                  className="p-2 rounded-lg bg-luxury-bg border border-luxury-border hover:border-luxury-gold/30 text-luxury-navy transition-colors"
                  aria-label={`Copy ${detail.label}`}
                >
                  {copiedIdx === idx ? <FiCheck className="text-green-600" /> : <FiCopy size={12} />}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass-card rounded-xl p-6 md:p-8 border border-luxury-border relative overflow-hidden shadow-sm bg-luxury-card/90"
          >
            <form onSubmit={handleSend} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-mono tracking-wider uppercase text-luxury-textSec">
                  Your Identifier Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Recruit Agent"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-luxury-bg border border-luxury-border text-xs text-luxury-textPri focus:outline-none focus:border-luxury-navy/40 transition-colors font-medium placeholder-luxury-textSec/30"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-mono tracking-wider uppercase text-luxury-textSec">
                  Your Target Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. agent@corporation.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-luxury-bg border border-luxury-border text-xs text-luxury-textPri focus:outline-none focus:border-luxury-navy/40 transition-colors font-medium placeholder-luxury-textSec/30"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-mono tracking-wider uppercase text-luxury-textSec">
                  Transmitted Payload (Message)
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Initiate proposal transcript here..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-luxury-bg border border-luxury-border text-xs text-luxury-textPri focus:outline-none focus:border-luxury-navy/40 transition-colors font-medium placeholder-luxury-textSec/30 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending || sentSuccess}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-luxury-navy hover:bg-luxury-gold text-luxury-bg font-bold text-xs tracking-wider uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm"
              >
                {isSending ? (
                  <div className="w-3.5 h-3.5 border border-t-luxury-bg border-transparent rounded-full animate-spin" />
                ) : sentSuccess ? (
                  <FiCheck className="text-xs font-bold" />
                ) : (
                  <FiSend className="text-xs" />
                )}
                <span>{sentSuccess ? 'Message Transmitted' : isSending ? 'Transmitting...' : 'Send Secure Message'}</span>
              </button>
            </form>

            {/* Success screen overlay */}
            <AnimatePresence>
              {sentSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-luxury-bg/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="w-12 h-12 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold mb-3 text-lg">
                    <FiCheck />
                  </div>
                  <h3 className="text-base font-heading font-bold text-luxury-textPri">
                    Transmission Acknowledged
                  </h3>
                  <p className="text-xs text-luxury-textSec max-w-xs mt-2 leading-relaxed">
                    Thank you. Your message package has been successfully mock-transmitted. Nithish will receive the telemetry soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
