
import { useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  demographics: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "I never imagined my insulin resistance was the real problem. The diagnosis was a wake-up call. The doctors at Early didn't just give me a diet; they gave me answers.",
    name: "Priya S.",
    demographics: "34, Bangalore",
    image: "/lovable-uploads/35596b19-5162-4746-b39a-e843a757732b.png"
  },
  {
    id: 2,
    quote: "Early finally helped me understand my body. The personalized approach made all the difference and I lost weight sustainably.",
    name: "Anita M.",
    demographics: "28, Mumbai",
    image: "/lovable-uploads/07969a95-c2f8-4906-9963-5f41136444e7.png"
  },
  {
    id: 3,
    quote: "The comprehensive metabolic test revealed everything I needed to know. My PCOS symptoms improved significantly.",
    name: "Meera R.",
    demographics: "31, Delhi",
    image: "/lovable-uploads/8a638733-910f-4baf-83b3-2ccfc31f3c2e.png"
  },
  {
    id: 4,
    quote: "Finally found the root cause of my weight issues. The medical team's guidance was incredible and life-changing.",
    name: "Kavya P.",
    demographics: "29, Hyderabad",
    image: "/lovable-uploads/2e8263f8-69fd-4d48-986f-0083fef5a145.png"
  },
  {
    id: 5,
    quote: "The doctors helped me understand my thyroid issues and I lost weight safely with their medical supervision.",
    name: "Suresh K.",
    demographics: "35, Chennai",
    image: "/lovable-uploads/b17a32a9-9c21-4099-a8dd-b7ff2b42e847.png"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 px-4 lg:px-16" style={{ backgroundColor: '#434a35' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-unna text-3xl lg:text-4xl mb-4 text-white">
            Real Stories, Real Results
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Testimonial Cards Container */}
            <div 
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth' }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="flex-shrink-0 w-80 snap-center">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg h-full flex flex-col border border-gray-100 relative">
      {/* User Profile Image as Tag */}
      <div className="absolute -top-4 -left-4 w-20 h-20 rounded-lg overflow-hidden shadow-lg border-4 border-white">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content with top padding to account for image tag */}
      <div className="pt-8">
        {/* User Details */}
        <div className="mb-6">
          <div className="font-satoshi font-bold text-sm mb-1" style={{ color: '#393f2d' }}>
            {testimonial.name}
          </div>
          <div className="font-satoshi text-sm" style={{ color: '#798660' }}>
            {testimonial.demographics}
          </div>
        </div>

        {/* Quote with stylized quotation marks */}
        <blockquote className="font-satoshi italic text-lg leading-relaxed flex-1 relative" style={{ color: '#434a35' }}>
          <span className="text-4xl absolute -left-2 -top-2 text-gray-300">"</span>
          <span className="relative z-10">{testimonial.quote}</span>
        </blockquote>
      </div>
    </div>
  );
};
