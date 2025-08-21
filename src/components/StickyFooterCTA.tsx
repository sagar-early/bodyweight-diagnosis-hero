import { Button } from "./ui/button";

export const StickyFooterCTA = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary p-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Price Details */}
        <div className="text-primary-foreground">
          <div className="font-satoshi font-bold text-lg">₹1,499</div>
          <div className="font-satoshi text-sm line-through opacity-70">MRP ₹4,999</div>
        </div>
        
        {/* CTA Button */}
        <Button variant="outline" className="bg-accent text-foreground border-accent hover:bg-accent/90">
          Book Your Test Now
        </Button>
      </div>
    </div>
  );
};