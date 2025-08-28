
import doctorImage from "@/assets/dr-saptarshi.jpg";

interface DoctorSpeechBubbleProps {
  quote: string;
  className?: string;
  layout?: "mobile" | "desktop";
}

export const DoctorSpeechBubble = ({ quote, className = "", layout = "mobile" }: DoctorSpeechBubbleProps) => {
  if (layout === "desktop") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        {/* Doctor Image */}
        <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
          <img
            src="/lovable-uploads/73496776-77af-4785-9093-075e1291fea0.png"
            alt="Dr. Saptarshi Bhattacharya - Top Endocrinologist"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Credentials */}
        <div className="text-center mb-6">
          <div className="font-satoshi font-bold text-foreground text-lg">
            Dr. Saptarshi Bhattacharya
          </div>
          <div className="font-satoshi text-sm" style={{ color: '#000000' }}>
            Chief Medical Advisor, EarlyFit
          </div>
          <div className="font-satoshi text-xs text-muted-foreground leading-relaxed">
            <p>DM Endocrinology (AIIMS)</p>
            <p>MD (MAMC) & Apollo Hospital</p>
          </div>
        </div>

        {/* Speech Bubble pointing down from doctor */}
        <div className="relative bg-card rounded-2xl p-6 shadow-lg max-w-md">
          <blockquote className="font-unna text-lg text-foreground leading-relaxed">
            "{quote}"
          </blockquote>
          {/* Bubble tail pointing up to doctor */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-card rotate-45"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-4 ${className}`}>
      {/* Doctor Image */}
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <img
          src="/lovable-uploads/73496776-77af-4785-9093-075e1291fea0.png"
          alt="Dr. Saptarshi Bhattacharya - Top Endocrinologist"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Speech Bubble */}
      <div className="relative bg-card rounded-2xl p-4 flex-1 shadow-lg">
        <blockquote className="font-unna text-lg text-foreground leading-relaxed mb-3">
          "{quote}"
        </blockquote>
        <div className="flex flex-col">
          <div className="font-satoshi font-semibold text-foreground text-sm">
            Dr. Saptarshi Bhattacharya
          </div>
          <div className="font-satoshi text-secondary text-xs">
            Top Endocrinologist, AIIMS
          </div>
        </div>
        {/* Bubble tail pointing to doctor */}
        <div className="absolute top-6 -left-3 w-6 h-6 bg-card rotate-45"></div>
      </div>
    </div>
  );
};
