import { useEffect, useState } from "react";

interface FloatingCTAProps {
  className?: string;
}

export const FloatingCTA = ({ className = "" }: FloatingCTAProps) => {
  const [scrollState, setScrollState] = useState<'semicircle' | 'circle' | 'hidden'>('semicircle');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const featuresSection = document.querySelector('[data-section="features"]');
      const featuresTop = featuresSection?.getBoundingClientRect().top || window.innerHeight;

      if (scrollY <= 80) {
        setScrollState('semicircle');
      } else if (featuresTop > 100) {
        // Show circle when scrolling down, before reaching the features section
        setScrollState('circle');
      } else {
        // Hide when the features section is near the top of the viewport
        setScrollState('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const featuresSection = document.querySelector('[data-section="features"]');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (scrollState === 'hidden') return null;

  const isCircle = scrollState === 'circle';

  // --- Style Refactor for Clarity and Correctness ---

  const baseStyles: React.CSSProperties = {
    background: 'linear-gradient(180deg, rgba(146, 122, 158, 0.8) 0%, rgba(238, 214, 181, 0.8) 70%, rgba(156, 210, 18, 0.8) 100%)',
    opacity: 0.8,
    position: 'fixed', // Always fixed when visible!
    transition: 'all 300ms ease-in-out',
  };

  const semicircleStyles: React.CSSProperties = {
    borderRadius: '50% 50% 0 0',
    width: '100%',
    height: '120px', // A fixed height is more reliable than vh
    bottom: '0px',
    left: '0',
    right: '0',
  };

  const circleStyles: React.CSSProperties = {
    borderRadius: '50%',
    width: '180px',
    height: '180px',
    bottom: '5vh', // Positioned 5% from the bottom of the viewport
    left: '50%',
    transform: 'translateX(-50%)', // Horizontally center the circle
  };

  const currentStyles = isCircle ? { ...baseStyles, ...circleStyles } : { ...baseStyles, ...semicircleStyles };

  return (
    <div
      className={`cursor-pointer z-40 ${!isCircle ? 'animate-bounce-slow' : ''} ${className}`}
      style={currentStyles}
      onClick={handleClick}
    >
      <div className="h-full flex flex-col items-center justify-center text-center p-4">
        <div style={{ color: '#393f2d' }}>
          <p className={`font-satoshi font-bold ${isCircle ? 'text-base' : 'text-xl'} mb-1`}>
            20% weight loss in 6 months
          </p>
          <p className={`font-satoshi font-semibold ${isCircle ? 'text-sm' : 'text-lg'}`}>
            Start now!
          </p>
        </div>
      </div>
    </div>
  );
};