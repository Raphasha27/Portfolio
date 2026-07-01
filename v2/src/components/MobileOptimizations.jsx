import { useEffect, useState } from 'react';

// Mobile-specific optimizations and utilities
export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setIsMobile(width < 768);
      setViewport({ width, height });
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  return { isMobile, viewport };
};

// Touch gesture utilities for mobile interactions
export const useTouchGestures = (onSwipeLeft, onSwipeRight) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};

// Performance optimization for mobile
export const mobilePerformanceConfig = {
  // Reduced animation complexity for mobile
  reducedMotion: {
    duration: 0.3,
    ease: "easeOut"
  },
  
  // Smaller image sizes for mobile
  imageOptimization: {
    mobile: { width: 400, quality: 80 },
    desktop: { width: 800, quality: 90 }
  },
  
  // Touch-friendly sizing
  touchTargets: {
    minSize: 44, // iOS HIG recommendation
    spacing: 8
  }
};

// Accessibility improvements for mobile
export const a11yConfig = {
  // Screen reader optimizations
  announcements: {
    navigation: "Navigation menu opened",
    loading: "Content is loading",
    error: "An error occurred"
  },
  
  // Focus management for mobile
  focusManagement: {
    trapFocus: true,
    returnFocus: true
  }
};

export default {
  useMobileDetection,
  useTouchGestures,
  mobilePerformanceConfig,
  a11yConfig
};