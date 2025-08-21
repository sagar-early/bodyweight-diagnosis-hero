interface ProblemSectionProps {
  className?: string;
}

export const ProblemSection = ({ className = "" }: ProblemSectionProps) => {
  return (
    <div className={`text-center ${className}`}>
      <h4 className="font-satoshi font-semibold text-lg text-foreground mb-3">
        Struggling with weight loss?
      </h4>
      <p className="font-satoshi text-secondary text-sm lg:text-base leading-relaxed">
        Over 90% of people are struggling with their weight and don't know the real cause. 
        Traditional approaches fail because they ignore your unique biology.
      </p>
    </div>
  );
};