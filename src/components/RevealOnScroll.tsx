import React, { useRef, useState, useEffect } from 'react';

export interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  threshold?: number;
  rootMargin?: string;
  className?: string;
  as?: React.ElementType;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  delay = 0,
  duration = 800,
  direction = 'up',
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  className = '',
  as: Component = 'div',
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If reduced motion is requested or IntersectionObserver not supported, show immediately
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger entrance animation once and unobserve to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  // Compute direction-specific initial transform (subtly reduced on mobile for crisp speed)
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 26px, 0)';
      case 'left':
        return 'translate3d(-20px, 0, 0)';
      case 'right':
        return 'translate3d(20px, 0, 0)';
      case 'none':
        return 'translate3d(0, 0, 0)';
      default:
        return 'translate3d(0, 26px, 0)';
    }
  };

  const dynamicStyles: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transform: isVisible ? 'translate3d(0, 0, 0)' : getInitialTransform(),
  };

  return (
    <Component
      ref={ref as unknown as React.Ref<never>}
      style={dynamicStyles}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Component>
  );
};
