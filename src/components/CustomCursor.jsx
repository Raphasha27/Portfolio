import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const sx = useSpring(cursorX, springConfig);
  const sy = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          x: sx,
          y: sy,
        }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.3 : 1,
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
        }}
        style={{
          x: sx,
          y: sy,
          translateX: isHovering ? -40 : -20,
          translateY: isHovering ? -40 : -20,
        }}
      />
      <style>{`
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }
        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          border: 2px solid var(--primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: width 0.3s, height 0.3s, opacity 0.3s;
        }
        @media (max-width: 1024px) {
          .cursor-dot, .cursor-ring { display: none; }
        }
      `}</style>
    </>
  );
}
