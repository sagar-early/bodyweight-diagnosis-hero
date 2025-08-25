
import { useEffect, useState } from "react";

interface FloatingCTAProps {
  className?: string;
}

export const FloatingCTA = ({ className = "" }: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user is on first page (hero section)
      const heroHeight = window.innerHeight;
      if (window.scrollY <= heroHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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
      className={`fixed bottom-0 left-0 right-0 h-1/4 ${className} animate-pulse-gentle cursor-pointer`}
      style={{
        background: 'linear-gradient(180deg, rgba(146, 122, 158, 0.4) 0%, rgba(238, 214, 181, 0.4) 70%, rgba(156, 210, 18, 0.4) 100%)',
        borderRadius: '50% 50% 0 0',
        opacity: 0.4
      }}
      onClick={handleClick}
    >
      <div className="h-full flex flex-col items-center justify-center text-center p-6">
        {/* Simplified Content */}
        <div style={{ color: '#393f2d' }}>
          <p className="font-satoshi font-bold text-xl mb-2">
            20% weight loss in 6 months
          </p>
          <p className="font-satoshi font-semibold text-lg">
            Start now!
          </p>
        </div>
      </div>
    </div>
  );
};
