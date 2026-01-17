import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Menu, X, Scan, QrCode, Sun, Moon } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection, onScanClick, isDarkMode, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-xl border-b transition-all duration-500 ${
      isDarkMode ? 'bg-[#020617]/90 border-slate-800' : 'bg-white/90 border-slate-200 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20"
            >
              <Code className="w-6 h-6 text-white" />
            </motion.div>
            <span className={`text-xl font-bold transition-colors ${
              isDarkMode ? 'bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent' : 'text-slate-900'
            }`}>Koketso</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`text-sm font-medium transition-all hover:text-blue-500 ${
                  activeSection === item.toLowerCase() 
                    ? 'text-blue-500 scale-105' 
                    : isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {item}
              </button>
            ))}
            <button
                onClick={onScanClick}
                className="text-sm font-medium text-green-500 hover:text-green-600 flex items-center gap-2 transition-all"
            >
                <QrCode className="w-4 h-4" /> Scan ID
            </button>
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all ${
                isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-indigo-600 hover:bg-slate-200'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all ${
                isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-indigo-600'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen 
                ? <X className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`} /> 
                : <Menu className={`w-6 h-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {['Home', 'About', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => {
                    onScanClick();
                    setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-base font-bold text-green-400 hover:text-green-300 hover:bg-slate-800 rounded-md flex items-center gap-2"
              >
                <Scan className="w-5 h-5" /> Scan Digital ID
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
