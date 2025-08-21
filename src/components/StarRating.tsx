
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  totalReviews?: number;
  className?: string;
}

export const StarRating = ({ rating, maxRating = 5, totalReviews, className = "" }: StarRatingProps) => {
  const stars = [];
  
  for (let i = 1; i <= maxRating; i++) {
    if (i <= Math.floor(rating)) {
      // Full star
      stars.push(
        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
      );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      // Partial star
      const percentage = (rating % 1) * 100;
      stars.push(
        <div key={i} className="relative w-4 h-4">
          <Star className="w-4 h-4 text-muted-foreground absolute" />
          <div 
            className="overflow-hidden absolute inset-0" 
            style={{ width: `${percentage}%` }}
          >
            <Star className="w-4 h-4 fill-accent text-accent" />
          </div>
        </div>
      );
    } else {
      // Empty star
      stars.push(
        <Star key={i} className="w-4 h-4 text-muted-foreground" />
      );
    }
  }
  
  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      <div className="flex items-center gap-0.5">
        {stars}
      </div>
      <span className="font-satoshi text-sm text-foreground ml-2">
        {rating}
      </span>
      {totalReviews && (
        <span className="font-satoshi text-xs text-secondary ml-1">
          (based on {totalReviews}+ reviews)
        </span>
      )}
    </div>
  );
};
