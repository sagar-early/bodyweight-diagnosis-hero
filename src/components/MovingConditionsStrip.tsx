
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
    <div className="w-full mb-4 lg:mb-0">
      {/* Mobile version - Complete section with updated background color */}
      <div className="lg:hidden rounded-lg p-2" style={{ backgroundColor: '#798660' }}>
        {/* Headline */}
        <h3 className="font-satoshi text-sm text-white mb-2 text-center">
          Medical Conditions That Could Possibly Be Behind Your Weight Gain
        </h3>

        {/* Moving Strip */}
        <div className="overflow-hidden rounded-lg">
          <div className="flex animate-scroll-fast">
            {/* First set */}
            {metabolicConditions.map((condition) => {
              const IconComponent = condition.icon;
              return (
                <div key={condition.id} className="flex flex-col items-center justify-center mx-1 flex-shrink-0 min-w-[70px]">
                  <div className="w-6 h-6 flex items-center justify-center mb-1">
                    <IconComponent className="w-5 h-5 text-white" />
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
                <div key={`duplicate-${condition.id}`} className="flex flex-col items-center justify-center mx-1 flex-shrink-0 min-w-[70px]">
                  <div className="w-6 h-6 flex items-center justify-center mb-1">
                    <IconComponent className="w-5 h-5 text-white" />
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

      {/* Desktop version - Full width strip */}
      <div className="hidden lg:block py-4">
        {/* Headline */}
        <h3 className="font-satoshi text-base text-white mb-4 text-center px-16">
          Medical Conditions That Could Possibly Be Behind Your Weight Gain
        </h3>

        {/* Moving Strip - Full width */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-fast">
            {/* First set */}
            {metabolicConditions.map((condition) => {
              const IconComponent = condition.icon;
              return (
                <div key={condition.id} className="flex flex-col items-center justify-center mx-3 flex-shrink-0 min-w-[100px]">
                  <div className="w-8 h-8 flex items-center justify-center mb-2">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-satoshi text-sm text-white whitespace-nowrap text-center leading-tight">
                    {condition.name}
                  </span>
                </div>
              );
            })}
            {/* Duplicate set for seamless loop */}
            {metabolicConditions.map((condition) => {
              const IconComponent = condition.icon;
              return (
                <div key={`duplicate-${condition.id}`} className="flex flex-col items-center justify-center mx-3 flex-shrink-0 min-w-[100px]">
                  <div className="w-8 h-8 flex items-center justify-center mb-2">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-satoshi text-sm text-white whitespace-nowrap text-center leading-tight">
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
