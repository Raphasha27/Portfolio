import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import ParticleBackground from './ThreeScene';
import FloatingShape from './FloatingShape';

export default function Hero() {
  return (
    <section className="hero-container" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBackground />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </div>

      <div className="hero-content" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '4px' }}>
            Innovating through Intelligence
          </h2>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
            Koketso <span className="gradient-text">Raphasha</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '40px', lineHeight: 1.6 }}>
            Software Developer & AI Specialist. Building intelligent systems that bridge the gap between complex data and human intuition.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/Raphasha27" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github size={20} />
              </a>
              <a href="#" className="btn-secondary">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@raphasha.dev" className="btn-secondary">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Side 3D Object for larger screens */}
      <div className="hero-3d-object" style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', width: '400px', height: '400px', zIndex: 1 }}>
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
        @media (max-width: 968px) {
          .hero-3d-object {
            display: none;
          }
          .hero-container {
            text-align: center;
            padding-left: 24px;
            padding-right: 24px;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
