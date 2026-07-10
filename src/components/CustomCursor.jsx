import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorTrail = () => {
  const [trail, setTrail] = useState([]);
  const isFine = window.matchMedia('(pointer: fine)').matches;

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    const points = [];
    const TRAIL_LENGTH = 12;

    const onMove = (e) => {
      points.unshift({ x: e.clientX, y: e.clientY, id: Date.now() });
      if (points.length > TRAIL_LENGTH) points.pop();
      setTrail([...points]);
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  if (!isFine) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {trail.map((pt, i) => {
        const scale = 1 - i / trail.length;
        const opacity = (1 - i / trail.length) * 0.5;
        const size = 6 * scale;
        return (
          <div
            key={pt.id}
            style={{
              position: 'fixed',
              left: pt.x - size / 2,
              top: pt.y - size / 2,
              width: size,
              height: size,
              borderRadius: '50%',
              background: i === 0 ? '#00FF9C' : `rgba(0,255,156,${opacity})`,
              boxShadow: i === 0 ? '0 0 8px rgba(0,255,156,0.8)' : 'none',
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </div>
  );
};

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice] = useState(() => !window.matchMedia('(pointer: fine)').matches);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    if (mq.matches) {
      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return <CursorTrail />;

  return (
    <>
      <CursorTrail />
      {/* Precise neon dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          width: isHovering ? 20 : 10,
          height: isHovering ? 20 : 10,
          background: '#00FF9C',
          boxShadow: '0 0 12px rgba(0,255,156,0.8)',
          mixBlendMode: 'screen',
        }}
        animate={{
          x: mousePosition.x - (isHovering ? 10 : 5),
          y: mousePosition.y - (isHovering ? 10 : 5),
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.3 }}
      />

      {/* Lagging outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-[#00FF9C]/40"
        style={{ width: 36, height: 36 }}
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovering ? 1.6 : 1,
          opacity: isHovering ? 0.9 : 0.4,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.8 }}
      />
    </>
  );
};

export default CustomCursor;
