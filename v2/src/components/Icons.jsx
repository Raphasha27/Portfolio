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
  // Keys = icon names used in code. Values = EXACT FluentUI emoji folder names (with spaces, matching GitHub repo).
  const fluentEmojis = useMemo(() => ({
    // Actions
    mail:        "E-mail",
    phone:       "Telephone receiver",
    thumbsUp:    "Thumbs up",
    heart:       "Red heart",
    star:        "Star",
    share:       "Link",
    check:       "Check mark button",
    close:       "Cross mark",
    menu:        "Hamburger",
    send:        "Rocket",
    chat:        "Speech balloon",
    target:      "Direct hit",
    rocket:      "Rocket",
    zap:         "High voltage",
    activity:    "Chart increasing",
    refreshCw:   "Counterclockwise arrows button",
    scale:       "Balance scale",
    bookOpen:    "Open book",
    layout:      "Artist palette",
    arrowRight:  "Right arrow",
    externalLink:"Link",

    // Tools & Objects
    smartphone:    "Mobile phone",
    user:          "Person",
    signal:        "Satellite antenna",
    shield:        "Shield",
    terminal:      "Keyboard",
    graduationCap: "Graduation cap",
    globe:         "Globe with meridians",
    cloud:         "Cloud",
    database:      "Card file box",
    brain:         "Brain",
    building:      "Office building",
    ticket:        "Ticket",
    bot:           "Robot",
    flagSA:        "Globe with meridians",
    cpu:           "Microchip",
    code:          "Laptop",
    server:        "Desktop computer",
    whop:          "Shopping bag",
    slack:         "Speech balloon",
    palette:       "Artist palette",
    gear:          "Gear",
    cabinet:       "Card file box",
  }), []);

  const techLogos = useMemo(() => ({
    // Tech brand SVGs via Devicon CDN
    react:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    python:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    node:          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    docker:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    postgres:      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    postgresql:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    redis:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    mongodb:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    vercel:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    angular:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    aws:           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
    azure:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    google:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    androidstudio: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
    figma:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    flutter:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    github:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    linkedin:      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    twitter:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
    typescript:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    javascript:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    tailwindcss:   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    nextjs:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    fastapi:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    pytorch:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    tensorflow:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    go:            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    c:             "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    csharp:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    "c#":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    dotnet:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    grafana:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
    prometheus:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
    langchain:     "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png",
    slack:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
    cisco:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cisco/cisco-original.svg",
    coursera:      "https://img.icons8.com/color/48/coursera.png",
    ibm:           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ibm/ibm-original.svg",
  }), []);

  const finalName = name?.toLowerCase();

  // 1 — Tech brand logo (SVG from Devicon / CDN)
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

  // 2 — FluentUI 3D emoji
  const emojiFolder = fluentEmojis[finalName];
  if (emojiFolder) {
    // Encode spaces so the CDN URL is valid
    const fileName = emojiFolder.toLowerCase();
    const encodedFolder = emojiFolder.replace(/ /g, '%20');
    const encodedFile   = fileName.replace(/ /g, '%20');
    const url = `https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/${encodedFolder}/3D/${encodedFile}_3d.png`;
    return <SafeImage src={url} alt={name} size={size} className={className} />;
  }

  // 3 — Ultimate fallback
  return <span style={{ fontSize: size }} className={className}>✨</span>;
};
