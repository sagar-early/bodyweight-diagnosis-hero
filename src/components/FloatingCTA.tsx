
import { ChevronUp } from "lucide-react";

interface FloatingCTAProps {
  className?: string;
}

export const FloatingCTA = ({ className = "" }: FloatingCTAProps) => {
  const handleClick = () => {
    // Smooth scroll to next section
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 h-1/4 ${className}`}
      style={{
        background: 'linear-gradient(180deg, #927A9E 0%, #EED6B5 52%, #9CD212 100%)',
        borderRadius: '50% 50% 0 0',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      <div className="h-full flex flex-col items-center justify-center text-center p-6">
        {/* Success Stats */}
        <div className="mb-4">
          <p className="font-satoshi font-bold text-white text-lg mb-1">
            20% weight loss in 6 months
          </p>
          <p className="font-satoshi text-white/90 text-sm">
            through metabolic insights from this test
          </p>
        </div>

        {/* CTA Text */}
        <div className="text-white">
          <p className="font-satoshi font-semibold text-lg mb-1">
            Start your weight loss journey
          </p>
          <p className="font-satoshi text-sm opacity-90">
            Tap to continue
          </p>
        </div>

        {/* Arrow */}
        <ChevronUp className="w-6 h-6 text-white mt-2 bounce-gentle" />
      </div>
    </div>
  );
};
