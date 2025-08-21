import { Quote } from "lucide-react";
import testimonialUser1 from "@/assets/testimonial-user-1.jpg";

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
    quote: "The metabolic insights changed everything. I now know exactly why I was struggling.",
    name: "Amit K.",
    result: "Lost 15 kgs",
    image: testimonialUser1
  }
];

export const TestimonialsSection = () => {
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
        <div className="lg:hidden space-y-6">
          {testimonials.slice(0, 2).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="medical-card p-6">
      <Quote className="w-8 h-8 text-accent mb-4" />
      
      <blockquote className="font-unna text-lg text-foreground leading-relaxed mb-6">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
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
    </div>
  );
};