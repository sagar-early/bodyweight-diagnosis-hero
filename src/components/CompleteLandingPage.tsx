
import { BodyWeightHero } from "./BodyWeightHero";
import { FeaturesSection } from "./FeaturesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { MedicalTeamSection } from "./MedicalTeamSection";
import { AsSeenInSection } from "./AsSeenInSection";
import { StickyFooterCTA } from "./StickyFooterCTA";
import { FinalCTASection } from "./FinalCTASection";
import { FAQSection } from "./FAQSection";
import { GetCallbackSection } from "./GetCallbackSection";

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
      
      {/* Testimonials Section - Background 434a35 */}
      <div style={{ backgroundColor: '#434a35' }}>
        <TestimonialsSection />
      </div>
      
      {/* Medical Team Section - Background FAF8F1 */}
      <div style={{ backgroundColor: '#FAF8F1' }}>
        <MedicalTeamSection />
      </div>
      
      {/* FAQ Section - Background FAF8F1 */}
      <div style={{ backgroundColor: '#FAF8F1' }}>
        <FAQSection />
      </div>
      
      {/* As Featured In Section - Background FAF8F1 */}
      <div style={{ backgroundColor: '#FAF8F1' }}>
        <AsSeenInSection />
      </div>

      {/* Final CTA Section - Desktop Only */}
      <div className="hidden lg:block" style={{ backgroundColor: '#FAF8F1' }}>
        <FinalCTASection />
      </div>
      
      {/* Sticky Footer CTA (Mobile Only) */}
      <StickyFooterCTA />

      {/* Get Callback Section */}
      <GetCallbackSection />
    </div>
  );
};
