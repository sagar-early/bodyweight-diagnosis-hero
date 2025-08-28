
import { Scale, Shield, User, Zap, Activity, Circle, Flame, Heart, Clock, Target, Microscope } from "lucide-react";

const metabolicConditions = [
  {
    id: 1,
    name: "Inflammation",
    icon: Flame,
  },
  {
    id: 2,
    name: "Pre Diabetic", 
    icon: Target,
  },
  {
    id: 3,
    name: "Thyroid",
    icon: Circle,
  },
  {
    id: 4,
    name: "Lifestyle Disorders",
    icon: User,
  },
  {
    id: 5,
    name: "Stress Hyper Tension",
    icon: Zap,
  },
  {
    id: 6,
    name: "Eating Disorders",
    icon: Heart,
  },
  {
    id: 7,
    name: "Genetics Hereditary",
    icon: Microscope,
  },
  {
    id: 8,
    name: "PCOS PCOD",
    icon: Activity,
  },
  {
    id: 9,
    name: "Fatty Liver",
    icon: Shield,
  },
  {
    id: 10,
    name: "Hypogonadism",
    icon: Scale,
  },
  {
    id: 11,
    name: "Diabetes",
    icon: Clock,
  },
];

export const MovingConditionsStrip = () => {
  return (
    <div className="w-full mb-4">
      {/* Complete section with updated background color */}
      <div 
        className="rounded-lg p-6"
        style={{ backgroundColor: '#434a35' }}
      >
        {/* Headline */}
        <h3 className="font-satoshi text-sm lg:text-base text-white mb-4 text-center">
          Medical Conditions That Could Possibly Be Behind Your Weight Gain
        </h3>

        {/* Moving Strip */}
        <div className="overflow-hidden rounded-lg">
          <div className="flex animate-scroll-faster">
            {/* First set */}
            {metabolicConditions.map((condition) => {
              const IconComponent = condition.icon;
              return (
                <div key={condition.id} className="flex flex-col items-center justify-center mx-6 flex-shrink-0 min-w-[120px]">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-satoshi text-xs text-white whitespace-nowrap text-center leading-tight">
                    {condition.name}
                  </span>
                </div>
              );
            })}
            {/* Duplicate set for seamless loop */}
            {metabolicConditions.map((condition) => {
              const IconComponent = condition.icon;
              return (
                <div key={`duplicate-${condition.id}`} className="flex flex-col items-center justify-center mx-6 flex-shrink-0 min-w-[120px]">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-satoshi text-xs text-white whitespace-nowrap text-center leading-tight">
                    {condition.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
