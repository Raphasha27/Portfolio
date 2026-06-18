import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AdvancedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.hue = Math.random() * 60 + 160; // Blue to cyan range
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Neural network lines
    const particles = Array.from({ length: 80 }, () => new Particle());
    
    function drawConnections() {
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `rgba(0, 255, 156, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections first
      drawConnections();
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Canvas for particles and neural network */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{ opacity: 0.6 }}
      />

      {/* Holographic wave effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 255, 156, 0.03) 50%, transparent 100%)',
          backgroundSize: '100% 200%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%', '0% 0%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Prismatic light beams */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleY: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleY: [1, 1.2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleY: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/20 rotate-45"
          animate={{
            y: [0, -30, 0],
            rotate: [45, 135, 45],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-24 h-24 border border-blue-500/20"
          animate={{
            y: [0, 30, 0],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full border border-green-500/20"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Data stream effect */}
      <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ top: `${20 + i * 20}%` }}
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Glitch overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[3]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 156, 0.05) 50%, transparent 100%)',
          backgroundSize: '200% 100%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 8
        }}
      />
    </>
  );
};

export default AdvancedBackground;
