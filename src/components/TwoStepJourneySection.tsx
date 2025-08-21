
import { Check, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export const TwoStepJourneySection = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-unna text-3xl lg:text-4xl text-foreground mb-4">
            Your Clear Path to Sustainable Results
          </h2>
        </div>

        {/* Step 1 Card */}
        <div className="medical-card p-6 mb-8">
          {/* Step Label */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-satoshi font-medium mb-4">
            STEP 1: YOUR DIAGNOSIS
          </div>

          {/* Headline */}
          <h3 className="font-unna text-2xl text-foreground mb-4">
            Start with Your Body Weight Diagnosis
          </h3>

          {/* Description */}
          <p className="font-satoshi text-foreground mb-6 leading-relaxed">
            This is the essential first step. We use a comprehensive medical test and an endocrinologist consultation to give you the clear answers you've been looking for.
          </p>

          {/* Feature List */}
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
          {/* Step Label */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-foreground text-sm font-satoshi font-medium mb-4">
            STEP 2: YOUR TRANSFORMATION
          </div>

          {/* Headline */}
          <h3 className="font-unna text-2xl text-foreground mb-4">
            Unlock the Full Medically-Guided Program
          </h3>

          {/* Description */}
          <p className="font-satoshi text-foreground mb-6 leading-relaxed">
            With your diagnosis in hand, you can enroll in our full program. Your dedicated care team will guide you every step of the way to ensure you achieve lasting, sustainable weight loss.
          </p>

          {/* Feature List */}
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

        {/* Section CTA */}
        <div className="text-center">
          <Button variant="medical" size="lg" className="text-lg px-8 py-6">
            Start with Step 1 Today
          </Button>
        </div>
      </div>
    </section>
  );
};
