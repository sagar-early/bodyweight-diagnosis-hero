import { ChevronUp } from "lucide-react";

interface FloatingCTAProps {
  className?: string;
}

export const FloatingCTA = ({ className = "" }: FloatingCTAProps) => {
  return (
    <div className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 ${className}`}>
      <div className="text-center mb-2">
        <span className="font-satoshi text-sm text-secondary bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
          Click to unlock your path
        </span>
      </div>
      <button className="w-16 h-8 bg-accent rounded-t-full flex items-start justify-center pt-2 bounce-gentle hover:bg-accent/90 transition-colors">
        <ChevronUp className="w-4 h-4 text-accent-foreground" />
      </button>
    </div>
  );
};