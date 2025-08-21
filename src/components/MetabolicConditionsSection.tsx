
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

export const MetabolicConditionsSection = () => {
  return (
    <div className="w-full mb-8 px-4 lg:px-16">
      {/* Headlines */}
      <div className="text-center mb-8">
        <h1 className="font-unna text-2xl lg:text-4xl text-white mb-4">
          What's Really Behind Your Weight Gain?
        </h1>
        <h3 className="font-satoshi text-lg lg:text-xl text-white/90">
          Your biology is unique. Pinpoint the root cause from common metabolic conditions.
        </h3>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {metabolicConditions.map((condition) => {
          const IconComponent = condition.icon;
          return (
            <div key={condition.id} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-white/20">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <p className="font-satoshi text-sm text-white leading-tight">
                {condition.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
