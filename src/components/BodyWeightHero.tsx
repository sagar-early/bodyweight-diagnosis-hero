import { Button } from "@/components/ui/button";
import { DoctorProfile } from "./DoctorProfile";
import { FloatingCTA } from "./FloatingCTA";
import { MovingConditionsStrip } from "./MovingConditionsStrip";

export const BodyWeightHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col" style={{ backgroundColor: '#FAF8F1' }}>
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 py-12 lg:py-24 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-unna text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4" style={{ color: '#393f2d' }}>
              Unlock Your Body's Hidden Potential
            </h1>
            <p className="font-satoshi text-lg lg:text-xl text-secondary mb-8" style={{ color: '#434a35' }}>
              Discover the root cause of your weight gain with our at-home metabolic test and doctor-led guidance.
            </p>
            <Button className="bg-green-700 text-white font-bold py-3 px-6 rounded-full hover:bg-green-800 transition-colors">
              Start Your Journey
            </Button>
          </div>

          {/* Right Side: Image and Doctor Profile */}
          <div className="relative">
            <img
              src="/hero-image.png"
              alt="Woman with healthy food"
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute bottom-0 left-0 p-4">
              <DoctorProfile layout="horizontal" className="bg-white/80 rounded-full backdrop-blur-md p-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Medical Conditions Strip for Desktop - positioned at bottom with no margin */}
      <div className="hidden lg:block mt-auto">
        <MovingConditionsStrip />
      </div>

      {/* Mobile Floating CTA */}
      <div className="lg:hidden">
        <FloatingCTA />
      </div>

      {/* Mobile Medical Conditions Strip */}
      <div className="lg:hidden">
        <MovingConditionsStrip />
      </div>
    </section>
  );
};
