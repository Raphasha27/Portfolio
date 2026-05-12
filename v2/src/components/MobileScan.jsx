import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const MobileScan = () => {
  const portfolioUrl = window.location.href;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(portfolioUrl)}&bgcolor=050d12&color=60a5fa`;

  return (
    <div className="flex flex-col items-center gap-6 p-8 glass border border-blue-500/20 max-w-sm mx-auto text-center">
      <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2">
        <Icon name="smartphone" size={32} />
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">View on Mobile</h3>
        <p className="text-text-dim text-sm">Scan this code to experience the autonomous OS on your mobile device.</p>
      </div>

      <div className="relative p-4 bg-white/5 rounded-xl border border-white/10 group">
        <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <img 
          src={qrCodeUrl} 
          alt="Scan to view on mobile" 
          className="w-32 h-32 relative z-10 rounded-lg"
        />
      </div>

      <div className="flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-blue-500/5 px-4 py-2 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
        Ready for Mobile Sync
      </div>
    </div>
  );
};

export default MobileScan;
