import { StarRating } from "./StarRating";
import { Button } from "./ui/button";

interface Feature {
  id: number;
  title: string;
  tag: string;
  bullets: string[];
}

const features: Feature[] = [
  {
    id: 1,
    title: "Full Body Check-up at Home",
    tag: "1. Full Body Check-up at Home",
    bullets: [
      "Find the real reason for your weight gain.",
      "Easy sample collection from your home."
    ]
  },
  {
    id: 2,
    title: "The Doctor's Advice",
    tag: "2. The Doctor's Advice",
    bullets: [
      "Understand the 'why' behind your weight.",
      "A personal video call with our doctor."
    ]
  },
  {
    id: 3,
    title: "Personalized Nutrition Blueprint",
    tag: "3. Personalized Nutrition Blueprint",
    bullets: [
      "A diet plan made just for you.",
      "Turns your health report into daily meals."
    ]
  }
];

const FeatureBanner = ({ featureId, tag }: { featureId: number; tag: string }) => {
  const bannerImages = {
    1: (
      <div className="w-full h-32 lg:h-48 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg relative overflow-visible">
        {/* Feature Tag - positioned to overflow outside */}
        <div 
          className="absolute -top-2 -left-4 px-4 py-2 rounded-lg font-satoshi font-medium shadow-lg z-10 text-white text-base"
          style={{ backgroundColor: '#393f2d' }}
        >
          {tag}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg"></div>
        <div className="relative flex items-center justify-between w-full px-4 h-full">
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
      <div className="w-full h-32 lg:h-48 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg relative overflow-visible">
        {/* Feature Tag - positioned to overflow outside */}
        <div 
          className="absolute -top-2 -left-4 px-4 py-2 rounded-lg font-satoshi font-medium shadow-lg z-10 text-white text-base"
          style={{ backgroundColor: '#393f2d' }}
        >
          {tag}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg"></div>
        <div className="relative flex items-center justify-between w-full px-4 h-full">
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
      <div className="w-full h-32 lg:h-48 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg relative overflow-visible">
        {/* Feature Tag - positioned to overflow outside */}
        <div 
          className="absolute -top-2 -left-4 px-4 py-2 rounded-lg font-satoshi font-medium shadow-lg z-10 text-white text-base"
          style={{ backgroundColor: '#393f2d' }}
        >
          {tag}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-green-50 rounded-lg"></div>
        <div className="relative flex items-center justify-between w-full px-4 h-full">
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

export const FeaturesSection = () => {
  const handleBookTestClick = () => {
    // Scroll to contact or booking section
    console.log("Book test clicked");
  };

  return (
    <section className="py-8 px-4 lg:px-16" data-section="features" style={{ backgroundColor: '#FAF8F1' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-2">
          <p className="font-satoshi text-xs text-secondary mb-1">Weight Diagnosis Plan</p>
          <h2 className="font-unna text-3xl lg:text-4xl text-foreground mb-4">
            The First Step to Medically-Guided Weight Loss
          </h2>
          
          {/* Rating Widget with updated colors */}
          <div className="flex items-center justify-center gap-1 mb-6">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} className="w-4 h-4" fill={i < 4 ? "#9cd312" : "#c6f15b"} stroke={i < 4 ? "#9cd312" : "#c6f15b"} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>
            <span className="font-satoshi text-sm text-foreground ml-2">4.6</span>
            <span className="font-satoshi text-xs text-secondary ml-1">(based on 100+ reviews)</span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-4">
              {/* Banner Image with Tag */}
              <FeatureBanner featureId={feature.id} tag={feature.tag} />

              {/* Content - No heading, just bullet points */}
              <div className="space-y-2">
                {feature.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#927b9e' }}></div>
                    <p className="font-satoshi text-foreground text-sm">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Zig-zag Layout */}
        <div className="hidden lg:block space-y-8">
          {features.map((feature, index) => (
            <div key={feature.id} className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className="flex-1">
                <FeatureBanner featureId={feature.id} tag={feature.tag} />
              </div>

              {/* Content - No heading, just bullet points */}
              <div className="flex-1">
                <div className="space-y-4">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <div key={bulletIndex} className="flex items-start gap-4">
                      <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: '#927b9e' }}></div>
                      <p className="font-satoshi text-foreground text-lg">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hide CTA Section on Mobile */}
        <div className="hidden lg:block mt-8 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
          <div className="text-center">
            <h3 className="font-unna text-2xl lg:text-3xl text-foreground mb-4">
              Ready to Start Your Diagnosis?
            </h3>
            <p className="font-satoshi text-foreground mb-6 text-lg">
              Book your comprehensive metabolic test today and take the first step towards sustainable weight loss.
            </p>
            
            {/* Pricing */}
            <div className="bg-white rounded-xl p-6 mb-6 inline-block shadow-lg">
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="font-satoshi text-2xl font-bold text-primary">₹2,999</p>
                  <p className="font-satoshi text-sm text-muted-foreground line-through">₹4,999</p>
                </div>
                <div className="text-left">
                  <p className="font-satoshi font-semibold text-foreground">Complete Diagnosis Package</p>
                  <p className="font-satoshi text-sm text-secondary">35+ Metabolic Markers + Doctor Consultation</p>
                </div>
              </div>
            </div>
            
            <div>
              <Button 
                variant="medical" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={handleBookTestClick}
                id="book-test-cta"
              >
                Book Your Test Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
