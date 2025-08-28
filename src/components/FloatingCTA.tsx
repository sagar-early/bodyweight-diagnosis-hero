
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
      const featuresTop = featuresSection?.getBoundingClientRect().top || 0;
      
      // Hide when user scrolls very little (80px for more responsive feel)
      if (scrollY <= 80) {
        setScrollState('semicircle');
      } else if (featuresTop > 100) {
        // Show circle when between medical conditions and features section
        setScrollState('circle');
      } else {
        setScrollState('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // Scroll to features section
    const featuresSection = document.querySelector('[data-section="features"]');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (scrollState === 'hidden') return null;

  const isCircle = scrollState === 'circle';

  return (
    <div 
      className={`fixed transition-all duration-300 ease-in-out ${className} cursor-pointer z-40 animate-bounce-slow`}
      style={{
        background: 'linear-gradient(180deg, rgba(146, 122, 158, 0.8) 0%, rgba(238, 214, 181, 0.8) 70%, rgba(156, 210, 18, 0.8) 100%)',
        borderRadius: isCircle ? '50%' : '50% 50% 0 0',
        width: isCircle ? '180px' : '100%',
        height: isCircle ? '180px' : '25vh',
        maxWidth: isCircle ? '180px' : '100%',
        opacity: 0.8,
        bottom: isCircle ? '25vh' : '0px',
        left: isCircle ? '50%' : '0',
        right: isCircle ? 'auto' : '0',
        transform: isCircle ? 'translate(-50%, 0)' : 'none',
        position: 'fixed'
      }}
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
