import { BodyWeightHero } from "./BodyWeightHero";
import { FeaturesList } from "./FeaturesList";
import { TestimonialsSection } from "./TestimonialsSection";
import { IntermediateCTA } from "./IntermediateCTA";
import { MedicalTeamSection } from "./MedicalTeamSection";
import { AsSeenInSection } from "./AsSeenInSection";
import { FinalCTASection } from "./FinalCTASection";
import { StickyFooterCTA } from "./StickyFooterCTA";

export const CompleteLandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <BodyWeightHero />
      
      {/* What You Get Section */}
      <FeaturesList />
      
      {/* First Intermediate CTA (Desktop Only) */}
      <IntermediateCTA 
        headline="Ready to understand your body?" 
        buttonText="Unlock Clarity" 
      />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Medical Team Section */}
      <MedicalTeamSection />
      
      {/* Second Intermediate CTA (Desktop Only) */}
      <IntermediateCTA 
        headline="Take the first step towards lasting results." 
        buttonText="Start Your Diagnosis" 
      />
      
      {/* As Featured In Section */}
      <AsSeenInSection />
      
      {/* Final CTA Section */}
      <FinalCTASection />
      
      {/* Sticky Footer CTA (Mobile Only) */}
      <StickyFooterCTA />
    </div>
  );
};