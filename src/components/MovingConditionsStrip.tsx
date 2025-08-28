
import { Scale, Shield, User, Zap, Activity, Circle } from "lucide-react";

const metabolicConditions = [
  {
    id: 1,
    name: "Hormonal Imbalance",
    icon: Scale,
  },
  {
    id: 2,
    name: "Insulin Resistance", 
    icon: Shield,
  },
  {
    id: 3,
    name: "Slow Metabolism",
    icon: User,
  },
  {
    id: 4,
    name: "PCOS/PCOD",
    icon: Circle,
  },
  {
    id: 5,
    name: "Stress & Cortisol",
    icon: Zap,
  },
  {
    id: 6,
    name: "Thyroid Issues",
    icon: Activity,
  },
];

export const MovingConditionsStrip = () => {
  return (
    <div className="w-full mb-4">
      {/* Complete section with updated background color */}
      <div 
        className="rounded-lg p-4"
        style={{ backgroundColor: '#434a35' }}
      >
        {/* Headline */}
        <h3 className="font-satoshi text-sm lg:text-base text-white mb-3 text-center">
          Medical Conditions That Could Possibly Be Behind Your Weight Gain
        </h3>

        {/* Moving Strip */}
        <div className="overflow-hidden rounded-lg">
          <div className="flex animate-scroll-faster">
            {/* First set */}
            {metabolicConditions.map((condition) => {
              const IconComponent = condition.icon;
              return (
                <div key={condition.id} className="flex items-center gap-2 mx-4 flex-shrink-0">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-satoshi text-xs text-white whitespace-nowrap">
                    {condition.name}
                  </span>
                </div>
              );
            })}
            {/* Duplicate set for seamless loop */}
            {metabolicConditions.map((condition) => {
              const IconComponent = condition.icon;
              return (
                <div key={`duplicate-${condition.id}`} className="flex items-center gap-2 mx-4 flex-shrink-0">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-satoshi text-xs text-white whitespace-nowrap">
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
