import { DoctorProfile } from "./DoctorProfile";

interface QuoteCardProps {
  quote: string;
  className?: string;
}

export const QuoteCard = ({ quote, className = "" }: QuoteCardProps) => {
  return (
    <div className={`medical-card p-6 md:p-8 ${className}`}>
      <blockquote className="font-unna text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-6">
        "{quote}"
      </blockquote>
      <DoctorProfile />
    </div>
  );
};