import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const PORTFOLIO_URL = 'https://koketso-raphasha.vercel.app/';

const MobileScan = () => {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(PORTFOLIO_URL)}&bgcolor=0A0A0A&color=00FFCC&margin=10`;

  return (
    <div className="flex flex-col items-center gap-6 p-6 sm:p-8 glass border border-[#00ffcc]/20 w-[calc(100%-2rem)] max-w-sm mx-auto text-center rounded-3xl relative overflow-hidden group">
      {/* Decorative Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00ffcc]/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#00ffcc]/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00ffcc]/10 flex items-center justify-center text-[#00ffcc] mb-2 relative z-10">
        <Icon name="smartphone" size={32} />
      </div>
      
      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 uppercase tracking-tight">Scan My Portfolio</h3>
        <p className="text-text-dim text-xs sm:text-sm max-w-[240px] mx-auto">Point your camera here to open my live portfolio instantly on your phone.</p>
      </div>

      {/* QR Code — links to the live Vercel portfolio */}
      <a
        href={PORTFOLIO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-3 sm:p-4 bg-[#0A0A0A] rounded-2xl border border-[#00ffcc]/30 group/qr transition-all duration-500 hover:border-[#00ffcc]/60 hover:shadow-[0_0_30px_rgba(0,255,204,0.2)] relative z-10 block"
      >
        <img 
          src={qrCodeUrl} 
          alt="Scan to open Koketso Raphasha's portfolio" 
          className="w-36 h-36 sm:w-40 sm:h-40 relative z-10 rounded-lg"
        />
      </a>

      <div className="flex flex-col items-center gap-3 w-full relative z-10">
        <div className="flex items-center gap-2 text-[10px] font-bold text-[#00ffcc] uppercase tracking-widest bg-[#00ffcc]/5 px-4 py-2 rounded-full border border-[#00ffcc]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] animate-pulse"></span>
          Live — Scan to Connect
        </div>
        <p className="text-[9px] text-white/30 font-mono break-all px-2">{PORTFOLIO_URL}</p>
      </div>
    </div>
  );
};

export default MobileScan;
