
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export const StickyFooterCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA when user scrolls past the hero section
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Price Details */}
        <div style={{ color: '#434a35' }}>
          <div className="font-satoshi font-bold text-lg">₹1,799</div>
          <div className="font-satoshi text-sm line-through opacity-70">MRP ₹4,999</div>
        </div>
        
        {/* CTA Button */}
        <Button 
          className="text-white font-satoshi rounded-full px-6 py-3"
          style={{ backgroundColor: '#434a35' }}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};
