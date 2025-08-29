
import { Scale, Shield, User, Zap, Activity, Circle, Flame, Heart, Clock, Target, Microscope } from "lucide-react";

const metabolicConditions = [
  {
    id: 1,
    name: "Inflammation",
    icon: Flame,
    image: "/lovable-uploads/1517c6d6-f02a-41f2-bd48-74d3e0907754.png"
  },
  {
    id: 2,
    name: "Pre Diabetic", 
    icon: Target,
    image: "/lovable-uploads/e06f2991-c443-4398-9a86-54ee76f865c0.png"
  },
  {
    id: 3,
    name: "Thyroid",
    icon: Circle,
    image: "/lovable-uploads/22738bd9-14bc-4d6e-b918-3eb68883e9cd.png"
  },
  {
    id: 4,
    name: "Lifestyle Disorders",
    icon: User,
    image: "/lovable-uploads/2e79c30f-0252-430b-a26b-748a97f763b4.png"
  },
  {
    id: 5,
    name: "Stress Hyper Tension",
    icon: Zap,
    image: "/lovable-uploads/2385edb6-b8b7-4fa8-8c02-773c9ab0fd84.png"
  },
  {
    id: 6,
    name: "Eating Disorders",
    icon: Heart,
    image: "/lovable-uploads/d9cc38c9-750f-4905-9ea1-1a43eac3b3bc.png"
  },
  {
    id: 7,
    name: "Genetics Hereditary",
    icon: Microscope,
    image: "/lovable-uploads/fc7e56fc-4243-43fd-9cfe-f4b52e0c3ad4.png"
  },
  {
    id: 8,
    name: "PCOS PCOD",
    icon: Activity,
    image: "/lovable-uploads/fbc87916-c5e4-40b8-ae44-94cfcf7b5cfd.png"
  },
  {
    id: 9,
    name: "Fatty Liver",
    icon: Shield,
    image: "/lovable-uploads/acf472a3-1575-48bc-88aa-c20c2e6d56b1.png"
  },
  {
    id: 10,
    name: "Hypogonadism",
    icon: Scale,
    image: "/lovable-uploads/19c24eef-4f6d-4cff-bb7d-1089c1cef966.png"
  }
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
            {metabolicConditions.map((condition) => (
              <div key={condition.id} className="flex flex-col items-center justify-center mx-1 flex-shrink-0 min-w-[70px]">
                <div className="w-12 h-12 flex items-center justify-center mb-1 rounded-lg overflow-hidden">
                  <img 
                    src={condition.image} 
                    alt={condition.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="font-satoshi text-xs text-white whitespace-nowrap text-center leading-tight">
                  {condition.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {metabolicConditions.map((condition) => (
              <div key={`duplicate-${condition.id}`} className="flex flex-col items-center justify-center mx-1 flex-shrink-0 min-w-[70px]">
                <div className="w-12 h-12 flex items-center justify-center mb-1 rounded-lg overflow-hidden">
                  <img 
                    src={condition.image} 
                    alt={condition.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="font-satoshi text-xs text-white whitespace-nowrap text-center leading-tight">
                  {condition.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop version - Full width strip with padding for icons only */}
      <div className="hidden lg:block py-4" style={{ backgroundColor: '#798660' }}>
        {/* Headline */}
        <h3 className="font-satoshi text-base text-white mb-4 text-center">
          Medical Conditions That Could Possibly Be Behind Your Weight Gain
        </h3>

        {/* Moving Strip - Full width background with padded content */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-fast px-16">
            {/* First set */}
            {metabolicConditions.map((condition) => (
              <div key={condition.id} className="flex flex-col items-center justify-center mx-3 flex-shrink-0 min-w-[100px]">
                <div className="w-16 h-16 flex items-center justify-center mb-2 rounded-lg overflow-hidden">
                  <img 
                    src={condition.image} 
                    alt={condition.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="font-satoshi text-sm text-white whitespace-nowrap text-center leading-tight">
                  {condition.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {metabolicConditions.map((condition) => (
              <div key={`duplicate-${condition.id}`} className="flex flex-col items-center justify-center mx-3 flex-shrink-0 min-w-[100px]">
                <div className="w-16 h-16 flex items-center justify-center mb-2 rounded-lg overflow-hidden">
                  <img 
                    src={condition.image} 
                    alt={condition.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="font-satoshi text-sm text-white whitespace-nowrap text-center leading-tight">
                  {condition.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
