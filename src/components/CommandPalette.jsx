import { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

const CommandPalette = ({ open, setOpen }) => {
  const [value, setValue] = useState('');

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setOpen]);

  const runCommand = (command) => {
    setOpen(false);
    command();
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AnimatePresence>
      {open && (
        <Command.Dialog
          open={open}
          onOpenChange={setOpen}
          label="Global Command Menu"
          className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] sm:pt-[20vh] bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[90vw] max-w-[600px] bg-[#000814]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-white/5">
              <Icon name="search" size={18} className="text-white/40 mr-3" />
              <Command.Input 
                autoFocus
                value={value}
                onValueChange={setValue}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-white outline-none placeholder:text-white/30 text-sm sm:text-base font-mono"
              />
              <div className="flex gap-1 ml-2">
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-medium text-white/40 bg-white/5 rounded border border-white/10">ESC</kbd>
              </div>
            </div>

            <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
              <Command.Empty className="py-6 text-center text-sm text-white/40 font-mono">
                No results found.
              </Command.Empty>

              <Command.Group heading="Navigation" className="text-xs text-white/40 font-bold uppercase tracking-wider px-2 py-1.5">
                <Command.Item onSelect={() => runCommand(() => scrollTo('home'))} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 cursor-pointer hover:bg-blue-500/10 hover:text-blue-400 aria-selected:bg-blue-500/10 aria-selected:text-blue-400">
                  <Icon name="terminal" size={16} /> Home
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => scrollTo('projects'))} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 cursor-pointer hover:bg-blue-500/10 hover:text-blue-400 aria-selected:bg-blue-500/10 aria-selected:text-blue-400">
                  <Icon name="folder" size={16} /> Projects
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => scrollTo('skills'))} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 cursor-pointer hover:bg-blue-500/10 hover:text-blue-400 aria-selected:bg-blue-500/10 aria-selected:text-blue-400">
                  <Icon name="cpu" size={16} /> Skills
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => scrollTo('contact'))} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 cursor-pointer hover:bg-blue-500/10 hover:text-blue-400 aria-selected:bg-blue-500/10 aria-selected:text-blue-400">
                  <Icon name="mail" size={16} /> Contact
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Actions" className="text-xs text-white/40 font-bold uppercase tracking-wider px-2 py-1.5 mt-2">
                <Command.Item onSelect={() => runCommand(() => window.open('/Koketso_Raphasha_CV.pdf', '_blank'))} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 cursor-pointer hover:bg-[#00FF9C]/10 hover:text-[#00FF9C] aria-selected:bg-[#00FF9C]/10 aria-selected:text-[#00FF9C]">
                  <Icon name="download" size={16} /> Download Resume
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => window.open('mailto:raphashakoketso99@gmail.com', '_blank'))} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 cursor-pointer hover:bg-red-500/10 hover:text-red-400 aria-selected:bg-red-500/10 aria-selected:text-red-400">
                  <Icon name="mail" size={16} /> Send Email
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => window.open('https://github.com/Raphasha27', '_blank'))} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 cursor-pointer hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white">
                  <Icon name="github" size={16} /> GitHub Profile
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => window.open('https://linkedin.com/in/koketso-raphasha', '_blank'))} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 cursor-pointer hover:bg-blue-600/10 hover:text-blue-400 aria-selected:bg-blue-600/10 aria-selected:text-blue-400">
                  <Icon name="linkedin" size={16} /> LinkedIn Profile
                </Command.Item>
              </Command.Group>
            </Command.List>
            <div className="bg-[#05080c] px-4 py-2 border-t border-white/5 flex items-center justify-between text-[10px] text-white/30 font-mono">
              <div className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 rounded bg-white/5">↑</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white/5">↓</kbd>
                <span>to navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 rounded bg-white/5">↵</kbd>
                <span>to select</span>
              </div>
            </div>
          </motion.div>
        </Command.Dialog>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
