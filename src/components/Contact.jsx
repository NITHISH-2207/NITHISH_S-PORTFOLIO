import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiCopy, FiCheck, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

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
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [fieldErrors, setFieldErrors] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    
    // Reset status and errors
    setStatus('idle');
    const newErrors = { name: '', email: '', message: '' };
    let hasError = false;

    // Basic validation
    if (!formState.name.trim()) {
      newErrors.name = 'Please enter your name.';
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = 'Please enter your email.';
      hasError = true;
    } else if (!emailRegex.test(formState.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
      hasError = true;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Please enter a message.';
      hasError = true;
    }

    if (hasError) {
      setFieldErrors(newErrors);
      return;
    }

    setFieldErrors({ name: '', email: '', message: '' });
    setStatus('sending');

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      {
        name: formState.name,
        email: formState.email,
        message: formState.message
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
    )
    .then(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      // Clear success state after 5 seconds to allow sending another message
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((err) => {
      console.error('EmailJS Send Error:', err);
      setStatus('error');
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden px-6 md:px-12 bg-luxury-bg">
      <div className="w-full max-w-7xl mx-auto mb-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-luxury-gold mb-3 font-bold"
        >
          Get In Touch
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 0.1, duration: 0.6 }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="glass-card rounded-xl p-6 md:p-8 border border-luxury-border relative overflow-hidden shadow-sm bg-luxury-card/90"
          >
            <form onSubmit={handleSend} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5 text-left">
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
                {fieldErrors.name && (
                  <p className="text-red-600 text-[10px] font-mono mt-1 font-semibold">{fieldErrors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5 text-left">
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
                {fieldErrors.email && (
                  <p className="text-red-600 text-[10px] font-mono mt-1 font-semibold">{fieldErrors.email}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5 text-left">
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
                {fieldErrors.message && (
                  <p className="text-red-600 text-[10px] font-mono mt-1 font-semibold">{fieldErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-luxury-navy hover:bg-luxury-gold text-luxury-bg font-bold text-xs tracking-wider uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm"
              >
                {status === 'sending' ? (
                  <div className="w-3.5 h-3.5 border border-t-luxury-bg border-transparent rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <FiCheck className="text-xs font-bold" />
                ) : (
                  <FiSend className="text-xs" />
                )}
                <span>{status === 'success' ? 'Message Transmitted' : status === 'sending' ? 'Sending...' : 'Send Secure Message'}</span>
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-xs font-semibold text-center mt-3 font-mono">
                  Message sent successfully.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-xs font-semibold text-center mt-3 font-mono">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
