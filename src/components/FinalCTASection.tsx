
import { Button } from "./ui/button";

export const FinalCTASection = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-muted">
      <div className="max-w-4xl mx-auto">
        {/* Main Gradient Container */}
        <div 
          className="relative rounded-2xl shadow-lg p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, #927A9E 0%, #EED6B5 52%, #9CD212 99%)'
          }}
        >
          {/* Header Text */}
          <div className="mb-8">
            <h2 className="font-unna text-4xl lg:text-5xl mb-4" style={{ color: '#393f2d' }}>
              Ready to Take the First Step?
            </h2>
            <p className="font-satoshi text-lg" style={{ color: '#434a35' }}>
              This is your starting point to medically-guided weight loss
            </p>
          </div>

          {/* Inner White Card */}
          <div className="bg-white rounded-xl shadow-xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-8">
              {/* Left Side - Pricing */}
              <div className="lg:flex-1 mb-6 lg:mb-0">
                <div className="font-satoshi font-bold text-4xl lg:text-5xl mb-2" style={{ color: '#393f2d' }}>
                  ₹2,199
                </div>
                <div className="font-satoshi text-lg line-through" style={{ color: '#939f79' }}>
                  MRP ₹4,999
                </div>
              </div>

              {/* Right Side - Package Details */}
              <div className="lg:flex-1 text-left">
                <h3 className="font-unna text-xl lg:text-2xl mb-4" style={{ color: '#393f2d' }}>
                  The Early™ Clarity Kit
                </h3>
                <div className="space-y-2 font-satoshi text-base" style={{ color: '#434a35' }}>
                  <div className="flex items-center gap-2">
                    <span style={{ color: '#9CD212' }}>✓</span>
                    <span>Full Body Blood Test</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span style={{ color: '#9CD212' }}>✓</span>
                    <span>Doctor & Nutritionist Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span style={{ color: '#9CD212' }}>✓</span>
                    <span>1-Week Personal Diet Plan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            className="font-satoshi font-bold text-white text-lg px-8 py-4 rounded-full hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
            style={{ backgroundColor: '#393f2d' }}
          >
            Start My Diagnosis
          </Button>
        </div>
      </div>
    </section>
  );
};
