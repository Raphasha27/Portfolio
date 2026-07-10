import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AdvancedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Track mouse coordinates
    const mouse = { x: null, y: null, radius: 180 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Drifting Cyber Console Logs
    class LogStream {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }
      reset() {
        this.x = Math.random() * (canvas.width - 250) + 50;
        this.y = -20;
        this.text = [
          'SEC_PORT_SCAN: BLOCKED',
          'SYS_LOAD: 8.4% [OPTIMAL]',
          'NET_LATENCY: 14ms',
          'ENCRYPTION_SYNC: SECURE',
          'DB_CLUSTER: REBALANCED',
          'AI_AGENT_MODEL: DETACHED',
          'KERNEL_RUNTIME: ACTIVE',
          'TRAFFIC_LIMIT: 2.4M/s',
          'PORTFOLIO_V3: SHIPPED'
        ][Math.floor(Math.random() * 9)];
        this.vy = Math.random() * 0.3 + 0.15;
        this.opacity = Math.random() * 0.15 + 0.05;
      }
      update() {
        this.y += this.vy;
        if (this.y > canvas.height + 20) {
          this.reset();
        }
      }
      draw() {
        ctx.font = '9px monospace';
        ctx.fillStyle = `rgba(0, 255, 156, ${this.opacity})`;
        ctx.fillText(`> ${this.text}`, this.x, this.y);
      }
    }

    // Particle system
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.4 + 0.2;
        this.hue = Math.random() * 40 + 160; // Cyan-blue spectrum
      }

      update() {
        // Mouse interact physics (repel gently)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 1.5;
            this.y += Math.sin(angle) * force * 1.5;
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 65%, ${this.opacity})`;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 90 }, () => new Particle());
    const logs = Array.from({ length: 6 }, () => new LogStream());
    
    let time = 0;
    function drawConnections() {
      time += 0.05;
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Pulsing connections
            const pulse = Math.sin(time + distance * 0.1) * 0.1 + 0.9;
            const opacity = (1 - distance / 140) * 0.25 * pulse;
            ctx.strokeStyle = `rgba(0, 255, 156, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw logs
      logs.forEach(log => {
        log.update();
        log.draw();
      });

      // Draw connections
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
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
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
