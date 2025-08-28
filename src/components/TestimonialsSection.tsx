
import { useState, useEffect } from "react";

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

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = (event: Event) => {
      const container = event.target as HTMLElement;
      if (container?.classList.contains('testimonial-scroll')) {
        const scrollLeft = container.scrollLeft;
        const card = container.children[0] as HTMLElement;
        const cardWidth = card?.offsetWidth || 0;
        const gap = parseInt(window.getComputedStyle(container).gap) || 24;
        const totalCardWidth = cardWidth + gap;
        const newIndex = Math.round(scrollLeft / totalCardWidth);

        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      }
    };

    const scrollContainer = document.querySelector('.testimonial-scroll');
    scrollContainer?.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex]);

  // Function to scroll to a specific card
  const scrollToTestimonial = (index: number) => {
    const scrollContainer = document.querySelector('.testimonial-scroll');
    if (scrollContainer) {
      const card = scrollContainer.children[0] as HTMLElement;
      const cardWidth = card?.offsetWidth || 0;
      const gap = parseInt(window.getComputedStyle(scrollContainer).gap) || 24;
      const scrollPosition = index * (cardWidth + gap);
      scrollContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-6 lg:px-16" style={{ backgroundColor: '#798660' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 px-4">
          <h2 className="font-unna text-3xl lg:text-4xl mb-4 text-white">
            Real Stories, Real Results
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Testimonial Cards Container with corrected padding */}
            <div
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory testimonial-scroll px-10 pt-10" // <-- CHANGE IS HERE
              style={{ scrollBehavior: 'smooth' }}
            >
              {testimonials.map((testimonial) => (
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
                  onClick={() => scrollToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block px-4">
          <div className="grid grid-cols-3 gap-10">
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


// TestimonialCard component with corrected image positioning
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-visible min-h-fit">
      {/* User Profile Image with corrected left positioning */}
      <div className="absolute -top-8 -left-8 w-24 h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden shadow-lg border-2 border-white"> {/* <-- CHANGE IS HERE */}
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="pt-12 lg:pt-14">
        {/* User Details */}
        <div className="mb-4 text-right">
          <div className="font-satoshi font-bold text-sm mb-1" style={{ color: '#393f2d' }}>
            {testimonial.name}
          </div>
          <div className="font-satoshi text-sm" style={{ color: '#798660' }}>
            {testimonial.demographics}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="font-satoshi italic text-base lg:text-lg leading-relaxed relative" style={{ color: '#434a35' }}>
          <span className="text-3xl lg:text-4xl absolute -left-2 -top-2 text-gray-300">"</span>
          <span className="relative z-10">{testimonial.quote}</span>
        </blockquote>
      </div>
    </div>
  );
};