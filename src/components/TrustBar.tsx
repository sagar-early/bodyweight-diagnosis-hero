import { StarRating } from "./StarRating";

interface TrustBarProps {
  className?: string;
}

export const TrustBar = ({ className = "" }: TrustBarProps) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <StarRating rating={4.8} />
      <span className="text-secondary font-satoshi text-sm md:text-base">
        4.8/5 based on 200+ reviews
      </span>
    </div>
  );
};