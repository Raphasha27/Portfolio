import React, { useState, useMemo } from 'react';

const SafeImage = ({ src, alt, size, className }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return <span style={{ fontSize: size }} className={className}>✨</span>;
  }

  return (
    <img
      src={src}
      alt={alt}
      style={{ width: size, height: size }}
      className={`inline-block object-contain select-none pointer-events-none ${className}`}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
};

export const Icon = ({ name, size = 16, className = "" }) => {
  // Lucide-style SVG paths for the "Themed" look (Green line icons)
  const themedIcons = useMemo(() => ({
    mail: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
    code: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.09-3.05a3.91 3.91 0 0 0-3.09 0Z"/><path d="M11.5 15.5 17 10"/><path d="m9 13 5.5 5.5"/><path d="M9.59 4.59A11.54 11.54 0 0 0 2 11.89c.33 2.82 2.11 5.39 4.74 6.51a11.54 11.54 0 0 0 7.3-7.59c.33-2.82-.12-5.7-1.3-8.21A11.54 11.54 0 0 0 9.59 4.59Z"/><path d="M13.89 2.05A11.54 11.54 0 0 0 6.59 9.35c-.33 2.82.12 5.7 1.3 8.21a11.54 11.54 0 0 0 5.15 5.14c2.82.33 5.7-.12 8.21-1.3a11.54 11.54 0 0 0 4.59-4.59A11.54 11.54 0 0 0 23.8 8.7c-.33-2.82-2.11-5.39-4.74-6.51a11.54 11.54 0 0 0-5.17-.14Z"/>
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    arrowRight: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
      </svg>
    ),
    layout: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    user: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  }), []);

  // Keys = icon names used in code. Values = EXACT FluentUI emoji folder names (with spaces, matching GitHub repo).
  const fluentEmojis = useMemo(() => ({
    // High-Fidelity Emojis for Stats & Highlights
    thumbsUp:    "Thumbs up",
    heart:       "Red heart",
    star:        "Star",
    zap:         "High voltage",
    rocket:      "Rocket",
    target:      "Direct hit",
    brain:       "Brain",
    bot:         "Robot",
    smartphone:  "Mobile phone",
    terminal:    "Keyboard",
    graduationCap: "Graduation cap",
    building:    "Office building",
    ticket:      "Ticket",
    cloud:       "Cloud",
    database:    "Card file box",
    cabinet:     "Card file box",
    cpu:         "Microchip",
    code:        "Laptop",
    server:      "Desktop computer",
  }), []);

  const techLogos = useMemo(() => ({
    // Tech brand SVGs via Devicon CDN
    react:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    python:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    node:          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    docker:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    postgres:      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    redis:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    mongodb:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    vercel:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    angular:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    aws:           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
    azure:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    google:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    figma:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    flutter:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    typescript:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    javascript:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    tailwindcss:   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    nextjs:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    pytorch:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    tensorflow:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    cisco:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cisco/cisco-original.svg",
    ibm:           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ibm/ibm-original.svg",
  }), []);

  const finalName = name?.toLowerCase();

  // 1 — Priority: Themed Line Icons (for UI components like Cards & Contacts)
  const themedIcon = themedIcons[name] || themedIcons[finalName];
  if (themedIcon) {
    return (
      <div 
        style={{ width: size, height: size }} 
        className={`flex items-center justify-center ${className}`}
      >
        {themedIcon}
      </div>
    );
  }

  // 2 — Tech brand logo (SVG from Devicon / CDN)
  const logoUrl = techLogos[finalName];
  if (logoUrl) {
    return (
      <SafeImage
        src={logoUrl}
        alt={name}
        size={size}
        className={`filter-none ${className}`}
      />
    );
  }

  // 3 — FluentUI 3D emoji (for Stats & Background highlights)
  const emojiFolder = fluentEmojis[finalName];
  if (emojiFolder) {
    const fileName = emojiFolder.toLowerCase();
    const encodedFolder = emojiFolder.replace(/ /g, '%20');
    const encodedFile   = fileName.replace(/ /g, '%20');
    const url = `https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/${encodedFolder}/3D/${encodedFile}_3d.png`;
    return <SafeImage src={url} alt={name} size={size} className={className} />;
  }

  // 4 — Ultimate fallback
  return <span style={{ fontSize: size }} className={className}>✨</span>;
};
