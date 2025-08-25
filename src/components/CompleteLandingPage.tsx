
import { BodyWeightHero } from "./BodyWeightHero";
import { FeaturesSection } from "./FeaturesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { MedicalTeamSection } from "./MedicalTeamSection";
import { TwoStepJourneySection } from "./TwoStepJourneySection";
import { AsSeenInSection } from "./AsSeenInSection";
import { StickyFooterCTA } from "./StickyFooterCTA";

export const CompleteLandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Background FAF8F1 */}
      <div style={{ backgroundColor: '#FAF8F1' }}>
        <BodyWeightHero />
      </div>
      
      {/* What You Get Section - Background FAF8F1 */}
      <div style={{ backgroundColor: '#FAF8F1' }}>
        <FeaturesSection />
      </div>
      
      {/* Testimonials Section - Background E8E9E1 */}
      <div style={{ backgroundColor: '#E8E9E1' }}>
        <TestimonialsSection />
      </div>
      
      {/* Medical Team Section - Background 79855F */}
      <div style={{ backgroundColor: '#79855F' }}>
        <div className="text-white">
          <MedicalTeamSection />
        </div>
      </div>
      
      {/* Two Step Journey Section - Background E8E9E1 */}
      <div style={{ backgroundColor: '#E8E9E1' }}>
        <TwoStepJourneySection />
      </div>
      
      {/* As Featured In Section - Background E8E9E1 */}
      <div style={{ backgroundColor: '#E8E9E1' }}>
        <AsSeenInSection />
      </div>
      
      {/* Sticky Footer CTA (Mobile Only) */}
      <StickyFooterCTA />
    </div>
  );
};
