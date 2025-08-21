
import { BodyWeightHero } from "./BodyWeightHero";
import { FeaturesSection } from "./FeaturesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { MedicalTeamSection } from "./MedicalTeamSection";
import { TwoStepJourneySection } from "./TwoStepJourneySection";
import { AsSeenInSection } from "./AsSeenInSection";
import { StickyFooterCTA } from "./StickyFooterCTA";
import { MetabolicConditionsSection } from "./MetabolicConditionsSection";

export const CompleteLandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Background 1 */}
      <div style={{ backgroundColor: '#FAF8F1' }}>
        <BodyWeightHero />
      </div>
      
      {/* Metabolic Conditions Section - Background 2 */}
      <div style={{ backgroundColor: '#79855F' }} className="py-16">
        <div className="text-white">
          <MetabolicConditionsSection />
        </div>
      </div>
      
      {/* What You Get Section - Background 1 */}
      <div style={{ backgroundColor: '#FAF8F1' }}>
        <FeaturesSection />
      </div>
      
      {/* Testimonials Section - Background 2 */}
      <div style={{ backgroundColor: '#79855F' }}>
        <div className="text-white">
          <TestimonialsSection />
        </div>
      </div>
      
      {/* Medical Team Section - Background 1 */}
      <div style={{ backgroundColor: '#FAF8F1' }}>
        <MedicalTeamSection />
      </div>
      
      {/* Two Step Journey Section - Background 2 */}
      <div style={{ backgroundColor: '#79855F' }}>
        <div className="text-white">
          <TwoStepJourneySection />
        </div>
      </div>
      
      {/* As Featured In Section - Background 1 */}
      <div style={{ backgroundColor: '#FAF8F1' }}>
        <AsSeenInSection />
      </div>
      
      {/* Sticky Footer CTA (Mobile Only) */}
      <StickyFooterCTA />
    </div>
  );
};
