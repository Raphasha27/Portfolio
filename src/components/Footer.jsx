import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#000000]/80 backdrop-blur-xl overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-12 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#00FF9C] font-bold">
                <span className="text-sm tracking-tighter">Koketso Raphasha</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed max-w-[200px]">
                Software Engineer building the future from Johannesburg, SA.
              </p>
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#00FF9C]/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
                Available for opportunities
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Quick Nav</div>
              <div className="grid grid-cols-2 gap-1">
                {['home','about','experience','skills','projects','contact'].map(s => (
                  <button
                    key={s}
                    onClick={() => document.getElementById(s)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-left text-xs text-white/50 hover:text-[#00FF9C] transition-colors capitalize py-1 font-mono"
                  >
                    ./{s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Connect</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'GitHub',   href: 'https://github.com/raphasha27',             icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/koketso-raphasha', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                  { label: 'Twitter',  href: 'https://twitter.com/raphasha27',            icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { label: 'Email',    href: 'mailto:raphashakoketso69@gmail.com',        icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40 hover:text-[#00FF9C] hover:border-[#00FF9C]/30 transition-all border border-white/5"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                      <path d={icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-[10px] font-mono text-white/20">
              &copy; {new Date().getFullYear()} <span className="text-[#00FF9C]/60">Koketso Raphasha</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/20">
              <span>Built with</span>
              <span className="text-[#00FF9C]/60">React + Vite + Framer Motion</span>
            </div>
          </div>
        </div>
      </footer>
  )
}
