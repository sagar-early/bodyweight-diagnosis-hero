
import { Check, Shield, Star } from "lucide-react";
import { StarRating } from "./StarRating";
import { Button } from "./ui/button";

interface Feature {
  id: number;
  title: string;
  bullets: string[];
  trustMarker: {
    text: string;
    variant: "accent" | "neutral";
    icon: string;
    logos?: string[];
  };
}

const features: Feature[] = [
  {
    id: 1,
    title: "At-Home Metabolic Check",
    bullets: [
      "Uncover your metabolic root cause with our 35+ marker test.",
      "Fast, easy, and convenient sample collection from your home."
    ],
    trustMarker: {
      text: "Trusted Diagnostic Partners",
      variant: "accent",
      icon: "shield",
      logos: ["PharmEasy", "Healthians"]
    }
  },
  {
    id: 2,
    title: "Diagnosis by a Top Endocrinologist",
    bullets: [
      "A 1:1 video consultation to understand the \"why\" behind your weight.",
      "Receive a clear, personalized medical path to sustainable results."
    ],
    trustMarker: {
      text: "Elite Medical Team",
      variant: "neutral",
      icon: "caduceus"
    }
  },
  {
    id: 3,
    title: "Personalized Nutrition Blueprint",
    bullets: [
      "A practical nutrition plan based directly on your medical results.",
      "Includes a 7-day starter meal plan to begin your journey."
    ],
    trustMarker: {
      text: "Science-Backed Plans",
      variant: "accent",
      icon: "dna"
    }
  }
];

const FeatureBanner = ({ featureId }: { featureId: number }) => {
  const bannerImages = {
    1: (
      <div className="w-full h-24 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50"></div>
        <div className="relative flex items-center justify-between w-full px-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-xs font-satoshi text-primary font-medium">Professional</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-satoshi text-primary font-medium mr-3">Comfortable</span>
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    ),
    2: (
      <div className="w-full h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50"></div>
        <div className="relative flex items-center justify-between w-full px-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xs font-satoshi text-primary font-medium">Patient</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-satoshi text-primary font-medium mr-3">Doctor</span>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    ),
    3: (
      <div className="w-full h-24 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-green-50"></div>
        <div className="relative flex items-center justify-between w-full px-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xs font-satoshi text-primary font-medium">Nutritionist</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-satoshi text-primary font-medium mr-3">Plan</span>
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return bannerImages[featureId as keyof typeof bannerImages] || null;
};

const TrustMarkerIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'shield':
      return (
        <div className="relative">
          <Shield className="w-3 h-3" />
          <Check className="w-2 h-2 absolute top-0.5 left-0.5" />
        </div>
      );
    case 'caduceus':
      return (
        <div className="relative">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20M8 6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.1-.45 2.1-1.17 2.83L12 12l-2.83-3.17C8.45 8.1 8 7.1 8 6z" />
          </svg>
          <Star className="w-2 h-2 absolute -top-1 left-1" />
        </div>
      );
    case 'dna':
      return (
        <div className="relative">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" />
          </svg>
          <svg className="w-2 h-2 absolute top-0.5 right-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.82 17.17 9.8 12.4 17 10.44V8z"/>
          </svg>
        </div>
      );
    default:
      return <Check className="w-3 h-3" />;
  }
};

export const FeaturesSection = () => {
  return (
    <section className="py-6 px-4 lg:px-16 bg-background" data-section="features">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <p className="font-satoshi text-xs text-secondary mb-1">Body Weight Diagnosis</p>
          <h2 className="font-unna text-xl lg:text-4xl text-foreground mb-3">
            The First Step to Medically-Guided Weight Loss
          </h2>
          
          {/* Rating Widget */}
          <StarRating rating={4.6} totalReviews={100} className="mb-4" />
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-2">
              <FeatureBanner featureId={feature.id} />
              <div>
                <h3 className="font-satoshi font-bold text-base text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <div className="space-y-1 mb-2">
                  {feature.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                      <p className="font-satoshi text-foreground text-xs">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-satoshi font-medium ${
                  feature.trustMarker.variant === "accent" 
                    ? "bg-accent text-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  <TrustMarkerIcon icon={feature.trustMarker.icon} />
                  <div className="flex flex-col">
                    <span>{feature.trustMarker.text}</span>
                    {feature.trustMarker.logos && (
                      <div className="flex gap-1 text-xs opacity-75">
                        {feature.trustMarker.logos.map((logo, idx) => (
                          <span key={idx}>{logo}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Zig Zag */}
        <div className="hidden lg:block space-y-16">
          {features.map((feature, index) => (
            <div key={feature.id} className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              {/* Feature Image */}
              <div className="w-1/2">
                <FeatureBanner featureId={feature.id} />
              </div>
              
              {/* Feature Content */}
              <div className="w-1/2">
                <h3 className="font-satoshi font-bold text-2xl text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <div key={bulletIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="font-satoshi text-foreground text-lg">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-satoshi font-medium ${
                  feature.trustMarker.variant === "accent" 
                    ? "bg-accent text-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  <TrustMarkerIcon icon={feature.trustMarker.icon} />
                  <div className="flex flex-col">
                    <span>{feature.trustMarker.text}</span>
                    {feature.trustMarker.logos && (
                      <div className="flex gap-2 text-xs opacity-75">
                        {feature.trustMarker.logos.map((logo, idx) => (
                          <span key={idx}>{logo}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Connected to Features */}
        <div className="hidden lg:block mt-12 pt-8 border-t border-border">
          <div className="text-center bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8">
            <h3 className="font-unna text-3xl text-foreground mb-4">
              Ready to Understand Your Body?
            </h3>
            <p className="font-satoshi text-lg text-secondary mb-6">
              Get the complete Body Weight Diagnosis for just{" "}
              <span className="font-bold text-foreground">₹1,499</span>
              {" "}(MRP ₹4,999)
            </p>
            <Button variant="medical" size="lg" className="text-lg px-8 py-6" id="book-test-cta">
              Book Your Test Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
