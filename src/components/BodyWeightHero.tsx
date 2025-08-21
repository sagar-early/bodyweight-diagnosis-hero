import { TrustBar } from "./TrustBar";
import { QuoteCard } from "./QuoteCard";
import { FloatingCTA } from "./FloatingCTA";
import { DoctorProfile } from "./DoctorProfile";
import { Button } from "./ui/button";

export const BodyWeightHero = () => {
  const quote = "It's not your willpower, it's your biology. Over 80% of weight struggles are linked to hidden metabolic factors.";
  const desktopQuote = "It's not your willpower, it's your biology. Over 80% of weight struggles are linked to hidden metabolic factors. We help you find your answer.";

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen p-4 pb-20">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="font-unna text-4xl md:text-5xl text-foreground mb-3">
            Body Weight Diagnosis
          </h1>
          <h3 className="font-satoshi text-xl text-secondary mb-6">
            Stop guessing, start testing.
          </h3>
          <TrustBar />
        </div>

        {/* Quote Card */}
        <div className="flex-1 flex items-center">
          <QuoteCard quote={quote} className="w-full" />
        </div>

        {/* Floating CTA */}
        <FloatingCTA />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Column */}
        <div className="w-[55%] flex flex-col justify-center px-12 xl:px-16">
          <div className="max-w-2xl">
            <h1 className="font-unna text-5xl xl:text-6xl text-foreground mb-4">
              Body Weight Diagnosis
            </h1>
            <h3 className="font-satoshi text-2xl text-secondary mb-8">
              Stop guessing, start testing.
            </h3>
            <TrustBar className="mb-10" />
            
            <blockquote className="font-unna text-2xl xl:text-3xl text-foreground leading-relaxed mb-8">
              "{desktopQuote}"
            </blockquote>
            
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
          <div className="w-full max-w-lg h-[600px]">
            <DoctorProfile layout="vertical" className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};