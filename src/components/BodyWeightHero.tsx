
import { FloatingCTA } from "./FloatingCTA";
import { DoctorProfile } from "./DoctorProfile";
import { Button } from "./ui/button";
import { DoctorSpeechBubble } from "./DoctorSpeechBubble";
import { MovingConditionsStrip } from "./MovingConditionsStrip";
import doctorImage from "@/assets/dr-saptarshi.jpg";

export const BodyWeightHero = () => {
  const quote = "For many with a BMI over 27, the first step isn't another diet, but a diagnosis";
  const desktopQuote = "For many with a BMI over 27, the first step isn't another diet, but a diagnosis";

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
        {/* Beautiful Header Section - Redesigned */}
        <div className="text-center mb-8 pt-8">
          <div 
            className="relative rounded-3xl p-8 shadow-2xl border-2 border-white/20 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, #927A9E 0%, #EED6B5 52%, #9CD212 99%)',
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-white/30"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-white/20"></div>
            
            <h1 className="font-unna text-4xl mb-3" style={{ color: '#393f2d' }}>
              Weight Diagnosis Plan
            </h1>
            <div className="h-px bg-white/30 mx-8 mb-3"></div>
            <h3 className="font-satoshi text-lg" style={{ color: '#434a35' }}>
              Weight loss starts with a diagnosis
            </h3>
          </div>
        </div>

        {/* Doctor Card with Credentials */}
        <div className="flex items-start gap-4 mb-4">
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
            <p className="font-satoshi text-secondary text-sm mb-2">
              Chief Medical Advisor, EarlyFit
            </p>
            <div className="font-satoshi text-xs text-muted-foreground leading-relaxed">
              <p>DM Endocrinology (AIIMS)</p>
              <p>MD (MAMC) & Apollo Hospital</p>
            </div>
          </div>
        </div>

        {/* Speech Bubble pointing upwards */}
        <div className="relative mb-6">
          <div className="bg-card rounded-2xl p-4 shadow-lg relative">
            <blockquote className="font-unna text-lg text-foreground leading-relaxed text-center">
              "{quote}"
            </blockquote>
            {/* Bubble tail pointing up */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-card rotate-45"></div>
          </div>
        </div>

        {/* Moving Conditions Strip with more spacing above */}
        <div className="mt-6">
          <MovingConditionsStrip />
        </div>

        {/* Enhanced Floating CTA */}
        <FloatingCTA />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Column */}
        <div className="w-[55%] flex flex-col justify-center px-12 xl:px-16">
          <div className="max-w-2xl">
            <div 
              className="relative rounded-3xl p-8 shadow-2xl border-2 border-white/20 backdrop-blur-sm mb-8"
              style={{
                background: 'linear-gradient(135deg, #927A9E 0%, #EED6B5 52%, #9CD212 99%)',
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/30"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-white/20"></div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src="/lovable-uploads/dcdad922-7ea1-4d7e-be18-90f62ced083f.png"
                    alt="Weight Diagnosis Plan"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1 className="font-unna text-4xl xl:text-5xl" style={{ color: '#393f2d' }}>
                  Weight Diagnosis Plan
                </h1>
              </div>
              <div className="h-px bg-white/30 mx-4 mb-4"></div>
              <h3 className="font-satoshi text-xl" style={{ color: '#434a35' }}>
                Weight loss starts with a diagnosis
              </h3>
            </div>
            
            <p className="font-satoshi font-bold text-xl text-foreground mb-8">
              Lose up to 20% of your body weight.
            </p>
            
            <Button 
              variant="medical" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={handleDesktopCTAClick}
            >
              Start Your Diagnosis Journey
            </Button>

            {/* Moving Conditions Strip for Desktop with more spacing */}
            <div className="mt-16 mb-4">
              <div className="w-full max-w-lg">
                <MovingConditionsStrip />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[45%] flex flex-col items-center justify-center p-8">
          <DoctorSpeechBubble quote={desktopQuote} layout="desktop" className="w-full max-w-lg mb-6" />
        </div>
      </div>
    </div>
  );
};
