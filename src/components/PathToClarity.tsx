import { TrustBar } from "./TrustBar";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import bloodTestImage from "@/assets/blood-test-home.jpg";
import doctorConsultationImage from "@/assets/doctor-consultation.jpg";
import nutritionistImage from "@/assets/nutritionist-guidance.jpg";

export const PathToClarity = () => {
  const features = [
    {
      step: "STEP 1",
      title: "At-Home Comprehensive Test",
      description: "A certified professional collects your sample from the comfort of your home. We analyze 35+ key metabolic markers to uncover the root biological cause of your weight gain.",
      trustMarker: "NABL Certified Partner Labs",
      image: bloodTestImage,
      imageAlt: "Professional phlebotomist taking blood sample at home"
    },
    {
      step: "STEP 2", 
      title: "Consult a Top Endocrinologist",
      description: "Receive a detailed diagnosis from one of India's leading specialists. Understand exactly why you're gaining weight and get a clear medical path forward.",
      trustMarker: "100% Confidential & Private",
      image: doctorConsultationImage,
      imageAlt: "Top endocrinologist during video consultation"
    },
    {
      step: "STEP 3",
      title: "Get Your Actionable Nutrition Plan", 
      description: "Our expert nutritionist translates your medical diagnosis into a practical, easy-to-follow lifestyle plan and guides you on your next steps toward sustainable results.",
      trustMarker: "Personalized 7-Day Plan Included",
      image: nutritionistImage,
      imageAlt: "Nutritionist explaining personalized meal plan"
    }
  ];

  return (
    <div className="bg-background">
      {/* Mobile Layout */}
      <div className="lg:hidden px-4 py-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-unna text-3xl text-foreground mb-4">
            Your Path to Metabolic Clarity
          </h2>
          <TrustBar />
        </div>

        {/* Feature Blocks */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="mb-6">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div className="font-satoshi font-bold text-secondary text-sm tracking-wider">
                  {feature.step}
                </div>
                <h3 className="font-unna text-2xl text-foreground">
                  {feature.title}
                </h3>
                <p className="font-satoshi text-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-secondary">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="font-satoshi">{feature.trustMarker}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block px-12 xl:px-16 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-unna text-4xl text-foreground mb-6">
            Your Path to Metabolic Clarity
          </h2>
          <TrustBar />
        </div>

        {/* Feature Rows */}
        <div className="max-w-7xl mx-auto space-y-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex items-center gap-12 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className="w-[45%]">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              
              {/* Content Column */}
              <div className="w-[55%] space-y-4">
                <div className="font-satoshi font-bold text-secondary text-sm tracking-wider">
                  {feature.step}
                </div>
                <h3 className="font-unna text-3xl text-foreground">
                  {feature.title}
                </h3>
                <p className="font-satoshi text-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="font-satoshi">{feature.trustMarker}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Block */}
        <div className="text-center mt-20 py-12 bg-card rounded-2xl">
          <h3 className="font-unna text-3xl text-foreground mb-4">
            Ready to Stop Guessing?
          </h3>
          <p className="font-satoshi text-lg text-foreground mb-6">
            Get the complete Body Weight Diagnosis for just ₹1499 
            <span className="line-through text-secondary ml-2">MRP ₹4999</span>
          </p>
          <Button variant="default" size="lg" className="text-lg px-8 py-6">
            Book Your Test Now
          </Button>
        </div>
      </div>

      {/* Sticky Footer CTA - Mobile Only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-foreground p-4 flex items-center justify-between">
        <div className="text-background">
          <div className="font-satoshi font-bold text-lg">₹1499</div>
          <div className="font-satoshi text-sm line-through text-background/70">MRP ₹4999</div>
        </div>
        <Button variant="secondary" className="bg-accent text-foreground hover:bg-accent/90">
          Book Your Test Now
        </Button>
      </div>
    </div>
  );
};