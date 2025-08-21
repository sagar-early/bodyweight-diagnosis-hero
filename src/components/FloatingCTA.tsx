import { ChevronUp, Star } from "lucide-react";

interface FloatingCTAProps {
  className?: string;
}

export const FloatingCTA = ({ className = "" }: FloatingCTAProps) => {
  const handleClick = () => {
    // Smooth scroll to next section (when implemented)
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-primary-soft to-primary ${className}`}>
      <div className="h-full flex flex-col items-center justify-center text-center p-6 cursor-pointer" onClick={handleClick}>
        {/* Success Stats */}
        <div className="bg-accent/90 rounded-2xl p-4 mb-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="font-satoshi font-bold text-primary text-sm">
              20% weight loss in 6 months
            </span>
          </div>
          <p className="font-satoshi text-primary text-xs">
            through metabolic insights from this test
          </p>
        </div>

        {/* CTA Text */}
        <div className="text-primary-foreground">
          <p className="font-satoshi font-semibold text-lg mb-1">
            Start your weight loss journey
          </p>
          <p className="font-satoshi text-sm opacity-90">
            Tap to continue
          </p>
        </div>

        {/* Arrow */}
        <ChevronUp className="w-6 h-6 text-primary-foreground mt-2 bounce-gentle" />
      </div>
    </div>
  );
};