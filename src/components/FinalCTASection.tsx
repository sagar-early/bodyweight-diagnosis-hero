import { Button } from "./ui/button";

export const FinalCTASection = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-unna text-3xl lg:text-4xl text-foreground mb-6">
          Ready to Stop Guessing?
        </h2>
        
        <p className="font-satoshi text-lg lg:text-xl text-secondary mb-8">
          Get the complete Body Weight Diagnosis for just{" "}
          <span className="font-bold text-foreground">₹1,499</span>
          {" "}(MRP ₹4,999)
        </p>
        
        <Button variant="medical" size="lg" className="text-lg px-8 py-6">
          Book Your Test Now
        </Button>
      </div>
    </section>
  );
};