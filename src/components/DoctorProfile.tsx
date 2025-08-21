import doctorImage from "@/assets/dr-saptarshi.jpg";

interface DoctorProfileProps {
  className?: string;
  layout?: "horizontal" | "vertical";
}

export const DoctorProfile = ({ className = "", layout = "horizontal" }: DoctorProfileProps) => {
  if (layout === "vertical") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className="w-full h-full">
          <img
            src={doctorImage}
            alt="Dr. Saptarshi Bhattacharya - Chief Medical Officer"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={doctorImage}
          alt="Dr. Saptarshi Bhattacharya"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <div className="font-satoshi font-semibold text-foreground text-sm">
          Dr. Saptarshi Bhattacharya
        </div>
        <div className="font-satoshi text-secondary text-xs">
          Chief Medical Officer, Early
        </div>
      </div>
    </div>
  );
};