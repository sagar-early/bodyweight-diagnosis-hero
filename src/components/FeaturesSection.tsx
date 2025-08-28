
import { StarRating } from "./StarRating";
import { Button } from "./ui/button";

interface Feature {
  id: number;
  title: string;
  tag: string;
  bullets: string[];
  image: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Full Body Check-up at Home",
    tag: "1. Full Body Check-up at Home",
    bullets: [
      "Find the real reason for your weight gain."
    ],
    image: "/lovable-uploads/5406704c-cba5-4b09-84c3-70707de745c2.png"
  },
  {
    id: 2,
    title: "The Doctor's Advice",
    tag: "2. The Doctor's Advice",
    bullets: [
      "Understand the 'why' behind your weight."
    ],
    image: "/lovable-uploads/ea7fc330-9e2f-4f3c-aa02-4e6478f3e341.png"
  },
  {
    id: 3,
    title: "Personalized Nutrition Blueprint",
    tag: "3. Personalized Nutrition Blueprint",
    bullets: [
      "A diet plan made just for you."
    ],
    image: "/lovable-uploads/b181c7c1-696d-4a00-9b73-89cafe154488.png"
  }
];

const FeatureBanner = ({ feature }: { feature: Feature }) => {
  return (
    <div className="w-full h-32 lg:h-48 rounded-lg relative overflow-visible">
      {/* Feature Tag - positioned to overflow outside */}
      <div 
        className="absolute -top-2 -left-4 px-4 py-2 rounded-lg font-satoshi font-medium shadow-lg z-10 text-white text-base"
        style={{ backgroundColor: '#393f2d' }}
      >
        {feature.tag}
      </div>
      
      {/* Feature Image */}
      <div className="w-full h-full rounded-lg overflow-hidden">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
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
        <div className="text-center mb-4">
          <p className="font-satoshi text-xs text-secondary mb-1" style={{ color: '#000000' }}>Weight Diagnosis Plan</p>
          <h2 className="font-unna text-3xl lg:text-4xl text-foreground mb-4">
            The First Step to Medically-Guided Weight Loss
          </h2>
          
          {/* Rating Widget with updated colors */}
          <div className="flex items-center justify-center gap-1 mb-6">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} className="w-4 h-4" fill={i < 4 ? "#9cd312" : "rgba(156, 211, 18, 0.6)"} stroke={i < 4 ? "#9cd312" : "rgba(156, 211, 18, 0.6)"} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>
            <span className="font-satoshi text-sm text-foreground ml-2">4.6</span>
            <span className="font-satoshi text-xs ml-1" style={{ color: '#000000' }}>(based on 100+ reviews)</span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-4">
              {/* Banner Image with Tag */}
              <FeatureBanner feature={feature} />

              {/* Content - bullet points only */}
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
                <FeatureBanner feature={feature} />
              </div>

              {/* Content - bullet points only */}
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
