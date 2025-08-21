import { Check } from "lucide-react";
import labTestIcon from "@/assets/lab-test-icon.jpg";
import endocrinologistIcon from "@/assets/endocrinologist-icon.jpg";
import nutritionPlanIcon from "@/assets/nutrition-plan-icon.jpg";

interface Feature {
  id: number;
  image: string;
  title: string;
  bullets: string[];
  trustMarker: {
    text: string;
    variant: "accent" | "neutral";
  };
}

const features: Feature[] = [
  {
    id: 1,
    image: labTestIcon,
    title: "Comprehensive At-Home Test",
    bullets: [
      "Uncover your root cause with 35+ metabolic markers.",
      "Convenient at-home sample collection."
    ],
    trustMarker: {
      text: "NABL Certified Labs",
      variant: "accent"
    }
  },
  {
    id: 2,
    image: endocrinologistIcon,
    title: "Top Endocrinologist Diagnosis",
    bullets: [
      "1:1 video call to understand your lab results.",
      "Get a clear medical path forward for weight loss."
    ],
    trustMarker: {
      text: "100% Confidential",
      variant: "neutral"
    }
  },
  {
    id: 3,
    image: nutritionPlanIcon,
    title: "Actionable Nutrition Plan",
    bullets: [
      "Translate your diagnosis into a practical lifestyle plan.",
      "Includes a 7-day starter meal plan tailored to you."
    ],
    trustMarker: {
      text: "Expert Nutritionist Guidance",
      variant: "accent"
    }
  }
];

export const FeaturesList = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-unna text-3xl lg:text-4xl text-foreground mb-4">
            The First Step to Medically-Guided Weight Loss
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-8 lg:space-y-12">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Image */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-satoshi font-bold text-lg lg:text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  {feature.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="font-satoshi text-foreground text-sm lg:text-base">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Trust Marker */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-satoshi font-medium ${
                  feature.trustMarker.variant === "accent" 
                    ? "bg-accent text-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  <Check className="w-3 h-3" />
                  {feature.trustMarker.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};