
import testimonialUser1 from "@/assets/testimonial-user-1.jpg";
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  result: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "I never imagined my insulin resistance was the real problem. The diagnosis was a wake-up call. The doctors at Early didn't just give me a diet; they gave me answers.",
    name: "Rahul Gupta",
    result: "Lost 18 kgs in 6 months",
    image: testimonialUser1
  },
  {
    id: 2,
    quote: "Early finally helped me understand my body. I lost 12 kgs and have never felt better!",
    name: "Priya S.",
    result: "Lost 12 kgs",
    image: testimonialUser1
  },
  {
    id: 3,
    quote: "The personalized approach made all the difference. My PCOS symptoms improved and I lost 15 kgs sustainably.",
    name: "Anita Sharma",
    result: "Lost 15 kgs in 8 months",
    image: testimonialUser1
  },
  {
    id: 4,
    quote: "Finally found the root cause of my weight issues. The metabolic test revealed everything I needed to know.",
    name: "Vikram Patel",
    result: "Lost 22 kgs in 10 months",
    image: testimonialUser1
  },
  {
    id: 5,
    quote: "The medical team's guidance was incredible. I understood my thyroid issues and lost weight safely.",
    name: "Meera Reddy",
    result: "Lost 14 kgs in 7 months",
    image: testimonialUser1
  },
  {
    id: 6,
    quote: "The comprehensive approach changed my life. No more yo-yo dieting, just sustainable results.",
    name: "Suresh Kumar",
    result: "Lost 20 kgs in 9 months",
    image: testimonialUser1
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 px-4 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-unna text-3xl lg:text-4xl text-white mb-4">
            Real Stories, Lasting Results
          </h2>
        </div>

        {/* Mobile Swipeable Layout */}
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
                  className={`w-2 h-2 rounded-full transition-colors ${
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
    <div className="bg-white rounded-2xl p-6 shadow-lg h-full flex flex-col">
      {/* User Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-satoshi font-semibold text-foreground text-sm">
            {testimonial.name}
          </div>
          <div className="font-satoshi text-secondary text-xs">
            {testimonial.result}
          </div>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="font-unna text-sm text-foreground leading-relaxed flex-1">
        "{testimonial.quote}"
      </blockquote>
    </div>
  );
};
