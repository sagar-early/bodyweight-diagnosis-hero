
import { FloatingCTA } from "./FloatingCTA";
import { DoctorProfile } from "./DoctorProfile";
import { Button } from "./ui/button";
import { DoctorSpeechBubble } from "./DoctorSpeechBubble";
import { MetabolicConditionsSection } from "./MetabolicConditionsSection";

export const BodyWeightHero = () => {
  const quote = "It's not your willpower, it's your biology. Your body is different and needs a different strategy for weight loss.";
  const desktopQuote = "It's not your willpower, it's your biology. Your body is different and needs a different strategy for weight loss.";

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen p-4 pb-32">
        {/* Header */}
        <div className="text-left mb-4 pt-8">
          <div className="flex items-center gap-3 mb-3">
            {/* Medical diagnosis icon from uploaded image */}
            <div className="w-10 h-10 flex-shrink-0">
              <img
                src="/lovable-uploads/35ac02ad-0c4a-4a10-ba4b-95d3fea77a0d.png"
                alt="Medical diagnosis icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="font-unna text-3xl text-foreground">
              Body Weight Diagnosis
            </h1>
          </div>
          <h3 className="font-satoshi text-lg text-secondary mb-4">
            "Stop guessing, start testing."
          </h3>
        </div>

        {/* Metabolic Conditions Section */}
        <MetabolicConditionsSection />

        {/* Doctor Speech Bubble */}
        <div className="flex-1 flex items-center mb-20">
          <DoctorSpeechBubble quote={quote} className="w-full" />
        </div>

        {/* Floating CTA */}
        <FloatingCTA />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Column */}
        <div className="w-[55%] flex flex-col justify-center px-12 xl:px-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="20" y="15" width="60" height="70" rx="5" fill="#d4f57f" stroke="#393f2d" strokeWidth="2"/>
                  <rect x="35" y="8" width="30" height="12" rx="3" fill="#393f2d"/>
                  <circle cx="65" cy="35" r="15" fill="none" stroke="#393f2d" strokeWidth="2"/>
                  <path d="M58 35 L62 39 L72 29" fill="none" stroke="#393f2d" strokeWidth="2"/>
                  <line x1="25" y1="50" x2="45" y2="50" stroke="#393f2d" strokeWidth="2"/>
                  <line x1="25" y1="60" x2="40" y2="60" stroke="#393f2d" strokeWidth="2"/>
                  <line x1="25" y1="70" x2="35" y2="70" stroke="#393f2d" strokeWidth="2"/>
                </svg>
              </div>
              <h1 className="font-unna text-5xl xl:text-6xl text-foreground">
                Body Weight Diagnosis
              </h1>
            </div>
            <h3 className="font-satoshi text-2xl text-secondary mb-8">
              "Stop guessing, start testing."
            </h3>
            
            <MetabolicConditionsSection />
            
            <p className="font-satoshi font-bold text-xl text-foreground mb-8">
              Lose up to 20% of your body weight.
            </p>
            
            <Button variant="medical" size="lg" className="text-lg px-8 py-6">
              Start Your Diagnosis Journey
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[45%] flex items-center justify-center p-8">
          <DoctorSpeechBubble quote={desktopQuote} layout="desktop" className="w-full max-w-lg" />
        </div>
      </div>
    </div>
  );
};
