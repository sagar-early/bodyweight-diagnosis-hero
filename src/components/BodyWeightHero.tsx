
import { FloatingCTA } from "./FloatingCTA";
import { DoctorProfile } from "./DoctorProfile";
import { Button } from "./ui/button";
import { DoctorSpeechBubble } from "./DoctorSpeechBubble";
import { MovingConditionsStrip } from "./MovingConditionsStrip";

export const BodyWeightHero = () => {
  const quote = "When people come to me with a BMI above 27, they have already tried everything - diets, workouts, fads. For them, I recommend a root-cause diagnosis.";
  const desktopQuote = "When people come to me with a BMI above 27, they have already tried everything - diets, workouts, fads. For them, I recommend a root-cause diagnosis.";

  const handleDesktopCTAClick = () => {
    // Scroll to features section
    const featuresSection = document.querySelector('[data-section="features"]');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F1' }}>
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen p-4 pb-0">
      {/* Simple Header Section with increased bottom margin */}
      <div className="text-center mb-4 pt-2">
        <div className="px-4">
          <h2 className="font-unna text-3xl mb-2" style={{ color: '#000000' }}>
            I've tried everything
          </h2>
        </div>
      </div>

      {/* Speech Bubble pointing leftwards */}
      <div className="relative mb-8">
        <div className="bg-card rounded-2xl p-1 shadow-lg relative">
          <blockquote className="font-unna text-lg text-foreground leading-relaxed text-center mb-4">
            {quote}
          </blockquote>
          {/* Bubble tail pointing down and moved to the left */}
          <div className="absolute -bottom-3 left-12 w-6 h-6 bg-card rotate-45"></div>
        </div>
      </div>

      {/* Doctor Card with increased bottom margin */}
      <div className="flex items-start gap-2 mb-6">
        {/* Large Doctor Photo */}
        <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="/lovable-uploads/73496776-77af-4785-9093-075e1291fea0.png"
            alt="Dr. Saptarshi Bhattacharya"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Doctor Credentials */}
        <div className="flex-1">
          <h4 className="font-satoshi font-bold text-foreground text-lg mb-1">
            Dr. Saptarshi Bhattacharya
          </h4>
          <p className="font-satoshi text-sm mb-2" style={{ color: '#000000' }}>
            Chief Medical Advisor, EarlyFit
          </p>
          <div className="font-satoshi text-xs text-muted-foreground leading-relaxed">
            <p>DM Endocrinology (AIIMS)</p>
            <p>MD (MAMC), MBBS</p>
          </div>
        </div>
      </div>

      {/* Moving Conditions Strip with spacing (margin top is handled by section above) */}
      <div className="mb-6">
        <MovingConditionsStrip />
      </div>

      {/* Enhanced Floating CTA */}
      <FloatingCTA />
    </div>

      {/* Desktop Layout - New Structure with integrated medical conditions */}
      <div className="hidden lg:block">
        {/* Hero Section with Medical Conditions Strip at bottom */}
        <div className="min-h-screen flex flex-col">
          {/* Main Hero Content */}
          <div className="flex-1 flex">
            {/* Left Column - 50% width */}
            <div className="w-1/2 flex flex-col justify-center px-12 xl:px-16">
              <div className="max-w-2xl">
                {/* Weight Diagnosis Plan - Non-card with NO line separator */}
                <div className="text-center mb-8">
                  <div className="flex items-center gap-4 mb-4 justify-center">
                    <h1 className="font-unna text-3xl xl:text-4xl" style={{ color: '#000000' }}>
                      Weight Diagnosis Plan
                    </h1>
                  </div>
                  <h3 className="font-satoshi text-lg" style={{ color: '#798660' }}>
                    Weight loss starts with a diagnosis
                  </h3>
                </div>

                <p className="font-satoshi font-bold text-xl text-foreground mb-8 text-center">
                  Lose up to 20% of your body weight.
                </p>
                
                <div className="text-center mb-8">
                  <Button 
                    variant="medical" 
                    size="lg" 
                    className="text-lg px-8 py-6 text-white"
                    style={{ backgroundColor: '#434a35' }}
                    onClick={handleDesktopCTAClick}
                  >
                    Start Your Diagnosis Journey
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - 50% width */}
            <div className="w-1/2 flex flex-col items-center justify-center p-8">
              {/* Doctor Section */}
              <div className="flex flex-col items-center">
                {/* Doctor Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                  <img
                    src="/lovable-uploads/73496776-77af-4785-9093-075e1291fea0.png"
                    alt="Dr. Saptarshi Bhattacharya - Top Endocrinologist"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Credentials */}
                <div className="text-center mb-6">
                  <div className="font-satoshi font-bold text-foreground text-lg">
                    Dr. Saptarshi Bhattacharya
                  </div>
                  <div className="font-satoshi text-sm" style={{ color: '#000000' }}>
                    Chief Medical Advisor, EarlyFit
                  </div>
                  <div className="font-satoshi text-xs text-muted-foreground leading-relaxed">
                    <p>DM Endocrinology (AIIMS)</p>
                    <p>MD (MAMC) & Apollo Hospital</p>
                  </div>
                </div>

                {/* Speech Bubble pointing down from doctor with reduced padding */}
                <div className="relative bg-card rounded-2xl p-4 shadow-lg max-w-md">
                  <blockquote className="font-unna text-lg text-foreground leading-relaxed">
                    {desktopQuote}
                  </blockquote>
                  {/* Bubble tail pointing up to doctor */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-card rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Conditions Strip integrated at bottom of hero */}
          <div className="mt-auto">
            <MovingConditionsStrip />
          </div>
        </div>
      </div>
    </div>
  );
};
