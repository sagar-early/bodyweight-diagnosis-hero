
import testimonialUser1 from "@/assets/testimonial-user-1.jpg";
import { useEffect, useRef } from "react";

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
  }
];

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-unna text-3xl lg:text-4xl text-foreground mb-4">
            Real Stories, Lasting Results
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-80">
                <TestimonialBubble testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-96">
                <TestimonialBubble testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialBubble = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex items-start gap-4">
      {/* Speech Bubble */}
      <div className="relative bg-card rounded-2xl p-4 flex-1 shadow-lg">
        <blockquote className="font-unna text-sm lg:text-base text-foreground leading-relaxed mb-3">
          {testimonial.quote}
        </blockquote>
        <div className="flex flex-col">
          <div className="font-satoshi font-semibold text-foreground text-sm">
            {testimonial.name}
          </div>
          <div className="font-satoshi text-secondary text-xs">
            {testimonial.result}
          </div>
        </div>
        {/* Bubble tail pointing to user */}
        <div className="absolute top-6 -right-3 w-6 h-6 bg-card rotate-45"></div>
      </div>

      {/* User Image */}
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
