import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

export const StarRating = ({ rating, maxRating = 5, className = "" }: StarRatingProps) => {
  const stars = [];
  
  for (let i = 1; i <= maxRating; i++) {
    if (i <= Math.floor(rating)) {
      // Full star
      stars.push(
        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
      );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      // Half star
      stars.push(
        <div key={i} className="relative w-5 h-5">
          <Star className="w-5 h-5 text-muted-foreground absolute" />
          <div className="overflow-hidden w-1/2">
            <Star className="w-5 h-5 fill-accent text-accent" />
          </div>
        </div>
      );
    } else {
      // Empty star
      stars.push(
        <Star key={i} className="w-5 h-5 text-muted-foreground" />
      );
    }
  }
  
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {stars}
    </div>
  );
};