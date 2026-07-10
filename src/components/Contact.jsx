import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';
import gautengMap from '../assets/gauteng-map.png';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const key = import.meta.env.VITE_WEB3FORMS_KEY;

    // If no real key, simulate success for demo
    if (!key) {
      setTimeout(() => {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
      return;
    }

    try {
      const data = new FormData();
      data.append('access_key', key);
      data.append('subject', `Portfolio Contact from ${formState.name}`);
      data.append('name', formState.name);
      data.append('email', formState.email);
      data.append('message', formState.message);
      data.append('botcheck', '');

      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();

      if (json.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="pt-16 sm:pt-24 border-t border-white/5 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10 sm:mb-20">
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[0.3em] sm:tracking-[0.8em] uppercase font-mono text-white leading-none">
              Initialize <span className="text-blue-400">Contact</span>
            </h2>
            <div className="text-blue-400 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black opacity-60">Communication Protocol 7.4</div>
          </div>
          <div className="px-4 sm:px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center gap-2 self-start">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold text-blue-400 uppercase tracking-[0.3em]">Link: Ready</span>
          </div>
        </div>

        {/* Main content card */}
        <div className="glass p-6 sm:p-10 rounded-3xl sm:rounded-[40px] relative overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)] mb-16">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">

            {/* Left: Text & Socials */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
                    Let's Build Something <br /><span className="text-blue-400">Extraordinary</span>
                  </h2>
                  <p className="text-white/50 text-sm sm:text-lg max-w-md leading-relaxed">
                    Have a project in mind? Let's work together to bring your digital visions to life with precision and style.
                  </p>
                </div>

                {/* Location Card */}
                <div className="glass p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/5 inline-flex items-center gap-4 sm:gap-6 relative overflow-hidden group self-start">
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                    <img src={gautengMap} alt="Johannesburg Map" className="w-full h-full object-cover scale-150 grayscale" />
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 relative z-10">
                    <Icon name="globe" size={22} />
                  </div>
                  <div className="relative z-10 text-left">
                    <div className="text-[8px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-1">Current Coordinates</div>
                    <div className="text-sm font-bold text-white tracking-tight">Johannesburg, Gauteng</div>
                    <div className="text-[9px] text-white/40 font-medium uppercase tracking-wider">South Africa · SAST (UTC+2)</div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "GitHub",    icon: "github",    link: "https://github.com/raphasha27" },
                  { name: "LinkedIn",  icon: "linkedin",  link: "https://linkedin.com/in/koketso-raphasha" },
                  { name: "Facebook",  icon: "facebook",  link: "https://www.facebook.com/kirovdynamicstechnology" },
                  { name: "Twitter",   icon: "twitter",   link: "https://twitter.com/raphasha27" },
                  { name: "Kaggle",    icon: "kaggle",    link: "https://kaggle.com/Raphasha27" },
                  { name: "Streamlit", icon: "streamlit", link: "https://share.streamlit.io/user/raphasha27" },
                  { name: "WhatsApp",  icon: "whatsapp",  link: "https://wa.me/27781172470" },
                  { name: "Email",     icon: "mail",      link: "mailto:raphashakoketso99@gmail.com" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name} profile`}
                    className="w-11 h-11 sm:w-12 sm:h-12 glass rounded-xl sm:rounded-2xl flex items-center justify-center text-white/70 hover:text-blue-400 hover:border-blue-500/50 transition-all hover:scale-110 active:scale-95 group shadow-lg"
                  >
                    <Icon name={social.icon} size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="flex flex-col gap-6">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full gap-6 py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="w-20 h-20 rounded-full bg-[#00FF9C]/10 border-2 border-[#00FF9C] flex items-center justify-center text-[#00FF9C]"
                    >
                      <Icon name="check" size={36} />
                    </motion.div>
                    <div>
                      <div className="text-xl font-bold text-white mb-2">Transmission Sent! ✓</div>
                      <div className="text-white/50 text-sm">I'll get back to you within 24 hours.</div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 w-full"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 flex flex-col gap-2">
                        <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2">Name</label>
                        <input
                          type="text" name="name" id="name" required
                          value={formState.name} onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-[#000814]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-white/20"
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2">Email</label>
                        <input
                          type="email" name="email" id="email" required
                          value={formState.email} onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full bg-[#000814]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-white/20"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2">Message</label>
                      <textarea
                        name="message" id="message" required rows="5"
                        value={formState.message} onChange={handleChange}
                        placeholder="Tell me about your project..."
                        className="w-full bg-[#000814]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-white/20 resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="text-red-400 text-xs text-center bg-red-400/10 border border-red-400/20 rounded-xl py-3">
                        Something went wrong. Try emailing directly: raphashakoketso99@gmail.com
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 mt-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 text-sm shadow-[0_0_30px_rgba(37,99,235,0.3)] group active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Transmitting...
                        </>
                      ) : (
                        <>Send Message <Icon name="arrowRight" size={18} className="group-hover:translate-x-2 transition-transform" /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* Footer marquee */}
      <div className="overflow-hidden border-t border-white/5 py-4 bg-white/[0.02]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap items-center text-[10px] text-white/30 font-bold uppercase tracking-[0.3em] w-max"
        >
          {Array(3).fill(0).map((_, i) => (
            <Fragment key={i}>
              <div className="flex items-center gap-2 text-blue-400">
                <Icon name="code" size={16} />
                <span>Koketso_Raphasha_Portfolio_Dev</span>
              </div>
              <div className="flex gap-8">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </div>
              <div>© {new Date().getFullYear()} Kirov Dynamics · All Rights Reserved</div>
              <div className="w-2 h-2 rounded-full bg-blue-500/30" />
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
