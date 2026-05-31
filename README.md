# Portfolio - Luxury 3D Experience

[![CI](https://github.com/Raphasha27/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Raphasha27/Portfolio/actions)
[![CodeQL](https://github.com/Raphasha27/Portfolio/actions/workflows/security-scan.yml/badge.svg)](https://github.com/Raphasha27/Portfolio/actions)
[![Docker](https://img.shields.io/badge/docker-ready-blue)](https://docker.com)
[![React](https://img.shields.io/badge/React-19-61DAFB)](https://react.dev)
[![Vercel](https://img.shields.io/badge/deployed-vercel-black)](https://portfolio-iota-eight-90.vercel.app)

Luxury 3D portfolio built with React 19, Three.js, and Framer Motion, featuring neural network visualizations. Showcasing Kirov Dynamics engineering philosophy.

## Features
- **3D Neural Network** - Interactive Three.js visualization
- **Glassmorphic UI** - Modern frosted-glass design system
- **Smooth Animations** - Framer Motion page transitions
- **Responsive** - Mobile-optimized experience
- **Performance** - Vite-optimized builds

## Quick Start
```bash
# Development
npm install
npm run dev

# Production build
npm run build

# Docker
docker compose up -d
```

## Tech Stack
| Technology | Purpose |
|------------|---------|
| React 19 | UI Framework |
| Three.js | 3D Rendering |
| Framer Motion | Animations |
| Vite 7 | Build Tool |
| Docker | Containerization |
| Vercel | Hosting |

## Infrastructure
- **CI/CD**: ESLint + Build + Docker checks
- **Container**: Multi-stage Docker with Nginx
- **Security**: CodeQL weekly scans, Dependabot auto-updates
- **Deployment**: Auto-deployed to Vercel on main push
