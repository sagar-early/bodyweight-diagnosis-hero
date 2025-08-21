
import { Check, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export const TwoStepJourneySection = () => {
  const handleCTAClick = () => {
    const bookTestCTA = document.getElementById('book-test-cta');
    if (bookTestCTA) {
      bookTestCTA.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 lg:px-16 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-unna text-3xl lg:text-4xl text-foreground mb-4">
            Your Clear Path to Sustainable Results
          </h2>
        </div>

        {/* Desktop Enhanced Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Step 1 Card */}
            <div className="medical-card p-8 mb-12 relative">
              <div className="flex items-start gap-8">
                {/* Left: Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-satoshi font-medium mb-6">
                    STEP 1: YOUR DIAGNOSIS
                  </div>

                  <h3 className="font-unna text-3xl text-foreground mb-4">
                    Start with Your Body Weight Diagnosis
                  </h3>

                  <p className="font-satoshi text-foreground mb-6 leading-relaxed text-lg">
                    This is the essential first step. We use a comprehensive medical test and an endocrinologist consultation to give you the clear answers you've been looking for.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Check className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="font-satoshi text-foreground text-lg">Pinpoint your metabolic root cause</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="font-satoshi text-foreground text-lg">Consult with a top endocrinologist</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="font-satoshi text-foreground text-lg">Receive your initial nutrition blueprint</span>
                    </div>
                  </div>
                </div>

                {/* Right: Visual */}
                <div className="w-80 h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="font-satoshi font-medium text-primary">Medical Diagnosis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center mb-12">
              <div className="flex flex-col items-center">
                <div className="w-px h-12 bg-border"></div>
                <ArrowDown className="w-8 h-8 text-secondary" />
                <div className="w-px h-12 bg-border"></div>
              </div>
            </div>

            {/* Step 2 Card */}
            <div className="medical-card p-8 mb-12">
              <div className="flex items-start gap-8">
                {/* Left: Visual */}
                <div className="w-80 h-64 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="font-satoshi font-medium text-primary">Transformation Program</p>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-foreground text-sm font-satoshi font-medium mb-6">
                    STEP 2: YOUR TRANSFORMATION
                  </div>

                  <h3 className="font-unna text-3xl text-foreground mb-4">
                    Unlock the Full Medically-Guided Program
                  </h3>

                  <p className="font-satoshi text-foreground mb-6 leading-relaxed text-lg">
                    With your diagnosis in hand, you can enroll in our full program. Your dedicated care team will guide you every step of the way to ensure you achieve lasting, sustainable weight loss.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Check className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="font-satoshi text-foreground text-lg">Full access to the Early App for tracking</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="font-satoshi text-foreground text-lg">Ongoing consultations with your Doctor & Nutritionist</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="font-satoshi text-foreground text-lg">Personalized weekly meal & workout plans</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="font-satoshi text-foreground text-lg">Medication management (if prescribed)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="font-satoshi text-foreground text-lg">Achieve your long-term weight loss goals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (existing) */}
        <div className="lg:hidden">
          {/* Step 1 Card */}
          <div className="medical-card p-6 mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-satoshi font-medium mb-4">
              STEP 1: YOUR DIAGNOSIS
            </div>

            <h3 className="font-unna text-2xl text-foreground mb-4">
              Start with Your Body Weight Diagnosis
            </h3>

            <p className="font-satoshi text-foreground mb-6 leading-relaxed">
              This is the essential first step. We use a comprehensive medical test and an endocrinologist consultation to give you the clear answers you've been looking for.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-satoshi text-foreground">Pinpoint your metabolic root cause</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-satoshi text-foreground">Consult with a top endocrinologist</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-satoshi text-foreground">Receive your initial nutrition blueprint</span>
              </div>
            </div>
          </div>

          {/* Connecting Arrow */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center">
              <div className="w-px h-8 bg-border border-dashed"></div>
              <ArrowDown className="w-6 h-6 text-secondary" />
              <div className="w-px h-8 bg-border border-dashed"></div>
            </div>
          </div>

          {/* Step 2 Card */}
          <div className="medical-card p-6 mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-foreground text-sm font-satoshi font-medium mb-4">
              STEP 2: YOUR TRANSFORMATION
            </div>

            <h3 className="font-unna text-2xl text-foreground mb-4">
              Unlock the Full Medically-Guided Program
            </h3>

            <p className="font-satoshi text-foreground mb-6 leading-relaxed">
              With your diagnosis in hand, you can enroll in our full program. Your dedicated care team will guide you every step of the way to ensure you achieve lasting, sustainable weight loss.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-satoshi text-foreground">Full access to the Early App for tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-satoshi text-foreground">Ongoing consultations with your Doctor & Nutritionist</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-satoshi text-foreground">Personalized weekly meal & workout plans</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-satoshi text-foreground">Medication management (if prescribed)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-satoshi text-foreground">Achieve your long-term weight loss goals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <Button 
            variant="medical" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={handleCTAClick}
          >
            Start with Step 1 Today
          </Button>
        </div>
      </div>
    </section>
  );
};
