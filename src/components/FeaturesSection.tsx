import { StarRating } from "./StarRating";
import { Button } from "./ui/button";
interface Feature {
  id: number;
  title: string;
  tag: string;
  bullets: string[];
  desktopImage: string;
  mobileImage: string;
}
const features: Feature[] = [{
  id: 1,
  title: "Full Body Home Check-up",
  tag: "1. Full Body Home Check-up",
  bullets: ["Find the root cause of your weight gain with our 35+ marker test.", "Fast, easy, and convenient sample collection from your home."],
  desktopImage: "/lovable-uploads/feature-desktop.png",
  mobileImage: "/lovable-uploads/feature-mobile.png"
}, {
  id: 2,
  title: "Consult with a Top Endocrinologist",
  tag: "2. Consult with a Top Endocrinologist",
  bullets: ["A 1-on-1 video call to understand the 'why' behind your weight.", "Get advice from a super-specialist doctor for weight loss."],
  desktopImage: "/lovable-uploads/feature-desktop.png",
  mobileImage: "/lovable-uploads/feature-mobile.png"
}, {
  id: 3,
  title: "Personalized Nutrition Plan",
  tag: "3. Personalized Nutrition Plan",
  bullets: ["A practical diet plan based on your medical results and lifestyle."],
  desktopImage: "/lovable-uploads/feature-desktop.png",
  mobileImage: "/lovable-uploads/feature-mobile.png"
}];
const FeatureBanner = ({
  feature
}: {
  feature: Feature;
}) => {
  return <div className="w-full h-32 lg:h-48 rounded-lg relative overflow-visible">
      {/* Feature Tag - positioned to overflow outside */}
      <div className="absolute -top-2 -left-4 px-4 py-2 rounded-lg font-satoshi font-medium shadow-lg z-10 text-white text-base" style={{
      backgroundColor: '#393f2d'
    }}>
        {feature.tag}
      </div>
      
      {/* Feature Image */}
      <div className="w-full h-full rounded-lg overflow-hidden">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/lovable-uploads/des.png" />
          <img src="/lovable-uploads/mob.png" alt={feature.title} className="w-full h-full object-cover" />
        </picture>
      </div>
    </div>;
};
export const FeaturesSection = () => {
  return <section className="py-8 px-4 lg:px-16" data-section="features" style={{
    backgroundColor: '#FAF8F1'
  }}>
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-4">
          <p className="font-satoshi text-xs text-secondary mb-1" style={{
          color: '#000000'
        }}>The "I've tried everything" Plan</p>
          <h2 className="font-unna text-3xl lg:text-4xl text-foreground mb-4" style={{
          color: '#000000'
        }}>
            The First Step to Medically-Guided Weight Loss
          </h2>
          
          {/* Rating Widget with updated colors */}
          <div className="flex items-center justify-center gap-1 mb-6">
            <div className="flex items-center gap-0.5">
              {Array.from({
              length: 5
            }, (_, i) => <svg key={i} className="w-4 h-4" fill={i < 4 ? "#9cd312" : "rgba(156, 211, 18, 0.6)"} stroke={i < 4 ? "#9cd312" : "rgba(156, 211, 18, 0.6)"} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>)}
            </div>
            <span className="font-satoshi text-sm text-foreground ml-2">4.6</span>
            <span className="font-satoshi text-xs ml-1" style={{
            color: '#000000'
          }}>(based on 100+ reviews)</span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {features.map(feature => <div key={feature.id} className="flex flex-col gap-4">
              {/* Banner Image with Tag */}
              <FeatureBanner feature={feature} />

              {/* Content - bullet points only */}
              <div className="space-y-2">
                {feature.bullets.map((bullet, index) => <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{
                backgroundColor: '#927b9e'
              }}></div>
                    <p className="font-satoshi text-foreground text-sm">
                      {bullet}
                    </p>
                  </div>)}
              </div>
            </div>)}
        </div>

        {/* Desktop Zig-zag Layout */}
        <div className="hidden lg:block space-y-8">
          {features.map((feature, index) => <div key={feature.id} className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className="flex-1">
                <FeatureBanner feature={feature} />
              </div>

              {/* Content - bullet points only */}
              <div className="flex-1">
                <div className="space-y-4">
                  {feature.bullets.map((bullet, bulletIndex) => <div key={bulletIndex} className="flex items-start gap-4">
                      <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1" style={{
                  backgroundColor: '#927b9e'
                }}></div>
                      <p className="font-satoshi text-foreground text-lg">
                        {bullet}
                      </p>
                    </div>)}
                </div>
              </div>
            </div>)}
        </div>

        {/* New CTA Section - Moved from bottom */}
        <div className="hidden lg:block mt-16">
          <div className="relative rounded-2xl shadow-lg p-6 text-center" style={{
          background: 'linear-gradient(135deg, #927A9E 0%, #EED6B5 52%, #9CD212 99%)'
        }}>
            {/* Header Text */}
            <div className="mb-4">
              <h2 className="font-unna text-3xl lg:text-4xl mb-2" style={{
              color: '#393f2d'
            }}>
                Ready to Take the First Step?
              </h2>
              <p className="font-satoshi text-lg" style={{
              color: '#434a35'
            }}>
                This is your starting point to medically-guided weight loss
              </p>
            </div>

            {/* Inner White Card with reduced padding */}
            <div className="bg-white rounded-xl shadow-xl p-4 mb-4 max-w-2xl mx-auto">
              <div className="lg:flex lg:items-center lg:justify-between lg:gap-6">
                {/* Left Side - Pricing */}
                <div className="lg:flex-1 mb-4 lg:mb-0">
                  <div className="font-satoshi font-bold text-3xl lg:text-4xl mb-2" style={{
                  color: '#393f2d'
                }}>
                    ₹1,799
                  </div>
                  <div className="font-satoshi text-base line-through" style={{
                  color: '#939f79'
                }}>
                    MRP ₹4,999
                  </div>
                </div>

                {/* Right Side - Package Details */}
                <div className="lg:flex-1 text-left">
                  <h3 style={{
                  color: '#393f2d'
                }} className="font-unna text-lg mb-3 lg:text-lg text-center">
                    The "I've tried everything" Plan
                  </h3>
                  <div className="space-y-2 font-satoshi text-sm" style={{
                  color: '#434a35'
                }}>
                    <div className="flex items-center gap-2">
                      <span style={{
                      color: '#9CD212'
                    }}>✓</span>
                      <span>Full Body Home Check-up</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{
                      color: '#9CD212'
                    }}>✓</span>
                      <span>Consult with a Top Endocrinologist</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{
                      color: '#9CD212'
                    }}>✓</span>
                      <span>Personalized Nutrition Plan</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button inside white card */}
                <div className="lg:flex-1 mt-4 lg:mt-0 lg:text-center">
                  <Button className="font-satoshi font-bold text-white text-base px-6 py-3 rounded-full hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-200 w-full lg:w-auto" style={{
                  backgroundColor: '#393f2d'
                }}>
                    Start My Diagnosis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};