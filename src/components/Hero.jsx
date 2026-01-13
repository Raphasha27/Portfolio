import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { QRCodeSVG } from 'qrcode.react';
import ParticleBackground from './ThreeScene';
import FloatingShape from './FloatingShape';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  // Use local IP for functional scanning on the same network during development
  const localIp = "192.168.18.65"; 
  const scanUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? `http://${localIp}:3000` 
    : window.location.href;
  return (
    <section className="hero-container" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBackground />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </div>

      <div className="hero-content" style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', alignItems: 'center', gap: '40px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="profile-pic-container"
        >
          <div className="glass profile-pic-frame">
            <img src={profileImg} alt="Koketso Raphasha" className="profile-img" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '4px' }}>
            Co-founder of Kid of Dynamics
          </h2>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
            Koketso <span className="gradient-text">Raphasha</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '550px', marginBottom: '40px', lineHeight: 1.6 }}>
            Software Developer & AI Specialist. Building intelligent systems that bridge the gap between complex data and human intuition.
          </p>
          
          <div className="btn-group" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              View My Work <ArrowRight size={20} />
            </motion.a>
            <div style={{ display: 'flex', gap: '12px' }}>
              <motion.a href="https://github.com/Raphasha27" target="_blank" rel="noopener noreferrer" className="btn-secondary" whileHover={{ y: -5 }}>
                <Github size={20} />
              </motion.a>
              <motion.a href="#" className="btn-secondary" whileHover={{ y: -5 }}>
                <Linkedin size={20} />
              </motion.a>
              <motion.a href="mailto:raphashakokets69@gmail.com" className="btn-secondary" whileHover={{ y: -5 }}>
                <Mail size={20} />
              </motion.a>
            </div>
            
            <motion.div 
              className="glass hero-qr-frame"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <QRCodeSVG value={scanUrl} size={64} bgColor="transparent" fgColor="#ffffff" />
              <div className="qr-text">
                <strong>Portable View</strong>
                <span>Scan for mobile</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Side 3D Object for larger screens */}
      <div className="hero-3d-object" style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', width: '350px', height: '350px', zIndex: 1 }}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingShape />
        </Canvas>
      </div>

      <style>{`
        .hero-container {
          padding-left: 5%;
        }
        .profile-pic-frame {
          width: 200px;
          height: 200px;
          border-radius: 30px;
          padding: 8px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
        }
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 22px;
        }
        .hero-qr-frame {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 20px;
          width: fit-content;
          margin-top: 24px;
        }
        .qr-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .qr-text strong {
          font-size: 0.8rem;
          color: var(--text-main);
        }
        .qr-text span {
          font-size: 0.7rem;
          color: var(--text-muted);
        }
        @media (max-width: 968px) {
          .hero-3d-object {
            display: none;
          }
          .hero-container {
            text-align: center;
            padding-left: 20px;
            padding-right: 20px;
            height: auto;
            min-height: 100vh;
            padding-top: 120px;
            padding-bottom: 60px;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            max-width: 100%;
          }
          .hero-content > div:last-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-qr-frame {
            margin-left: auto;
            margin-right: auto;
          }
          .btn-group {
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .profile-pic-frame {
            width: 160px;
            height: 160px;
          }
          .hero-qr-frame {
            padding: 8px 16px;
          }
        }
      `}</style>
    </section>
  );
}
