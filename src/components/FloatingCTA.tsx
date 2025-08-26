
import { useEffect, useState } from "react";

interface FloatingCTAProps {
  className?: string;
}

export const FloatingCTA = ({ className = "" }: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCircular, setIsCircular] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Show when user is on first page (hero section)
      if (scrollY <= 150) {
        setIsVisible(true);
        setIsCircular(false);
      } else if (scrollY > 150 && scrollY <= window.innerHeight * 0.8) {
        setIsVisible(true);
        setIsCircular(true);
      } else {
        setIsVisible(false);
        setIsCircular(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // Scroll to next section
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${className} animate-pulse-gentle cursor-pointer z-50 transition-all duration-500`}
      style={{
        background: 'linear-gradient(180deg, rgba(146, 122, 158, 0.8) 0%, rgba(238, 214, 181, 0.8) 70%, rgba(156, 210, 18, 0.8) 100%)',
        borderRadius: isCircular ? '50%' : '50% 50% 0 0',
        width: isCircular ? '120px' : '90%',
        height: isCircular ? '120px' : '25vh',
        maxWidth: isCircular ? '120px' : '400px',
        opacity: 0.8
      }}
      onClick={handleClick}
    >
      <div className="h-full flex flex-col items-center justify-center text-center p-4">
        {/* Simplified Content */}
        <div style={{ color: '#393f2d' }}>
          <p className={`font-satoshi font-bold ${isCircular ? 'text-sm' : 'text-xl'} mb-1`}>
            20% weight loss in 6 months
          </p>
          <p className={`font-satoshi font-semibold ${isCircular ? 'text-xs' : 'text-lg'}`}>
            Start now!
          </p>
        </div>
      </div>
    </div>
  );
};
