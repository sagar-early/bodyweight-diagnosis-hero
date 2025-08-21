
import { Check } from "lucide-react";
import { StarRating } from "./StarRating";

interface Feature {
  id: number;
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

const FeatureBanner = ({ featureId }: { featureId: number }) => {
  const bannerImages = {
    1: (
      // At-home test banner
      <div className="w-full h-24 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2 bg-accent rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <p className="text-xs font-satoshi text-primary">At-Home Collection</p>
        </div>
      </div>
    ),
    2: (
      // Endocrinologist banner
      <div className="w-full h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2 bg-primary rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <p className="text-xs font-satoshi text-primary">Expert Consultation</p>
        </div>
      </div>
    ),
    3: (
      // Nutritionist banner
      <div className="w-full h-24 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-xs font-satoshi text-primary">Nutrition Planning</p>
        </div>
      </div>
    )
  };

  return bannerImages[featureId as keyof typeof bannerImages] || null;
};

export const FeaturesList = () => {
  return (
    <section className="py-8 px-4 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <p className="font-satoshi text-sm text-secondary mb-2">Body Weight Diagnosis</p>
          <h2 className="font-unna text-2xl lg:text-4xl text-foreground mb-4">
            The First Step to Medically-Guided Weight Loss
          </h2>
          
          {/* Rating Widget */}
          <StarRating rating={4.6} totalReviews={100} className="mb-6" />
        </div>

        {/* Features Grid - Mobile optimized for single scroll */}
        <div className="space-y-6 lg:space-y-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-3">
              {/* Banner Image */}
              <FeatureBanner featureId={feature.id} />

              {/* Content */}
              <div>
                <h3 className="font-satoshi font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <div className="space-y-1 mb-3">
                  {feature.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <p className="font-satoshi text-foreground text-sm">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Trust Marker */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-satoshi font-medium ${
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
