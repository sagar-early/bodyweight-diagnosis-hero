
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    quote: "Loved the Early Diagnosis Plan, the endocrinologist heard me out so patiently. My labs pointed to insulin resistance which explained why weight loss has been so hard for so long. I'm now working with their nutritionist who is very knowledgeable.",
    name: "Sangeeta P.",
    demographics: "59, Bangalore",
    image: "/lovable-uploads/c8b4fe7a-6fa2-45ae-ab98-ce2621d63d26.png"
  },
  {
    id: 2,
    quote: "I always thought I lacked the willpower to loose weight till Early's metabolic diagnosis plan with their convenient at home blood collection, endocrinologist and nutritionist consult helped me discover that my metabolism was the problem. I have lost 7 kgs already in a month, never felt this healthier before.",
    name: "Arun S.",
    demographics: "68, Mumbai",
    image: "/lovable-uploads/3d4b4e4b-cadb-4a64-a798-0f8dbaa5fadc.png"
  },
  {
    id: 3,
    quote: "I've failed at every diet and fad since college and honestly was skeptical about this too. Early's is such a one stop solution for weight loss, they find out whats wrong and then bring in personalised treatment and help for you that includes nutrition plan, fitness plan and timely doctor consults. Weight loss never felt such a no brainer.",
    name: "Anushree S.",
    demographics: "38, Kolkata",
    image: "/lovable-uploads/68979620-f2be-4352-b747-ceee5b6d999e.png"
  },
  {
    id: 4,
    quote: "Even with regular gym sessions, I was pre-diabetic. No matter how hard I tried my weight had hit a plateau, thats when my gym trainer suggested to me check out Early , and I can't thank him enough for that, its been 2 months and I have lost 6kgs already by following home cooked food, light exercise and habits that are right for me and specially my metabolism. Early gave me so much clarity.",
    name: "Mohit G.",
    demographics: "40, Gurgaon",
    image: "/lovable-uploads/99a06c5f-1be9-42e2-a546-b496293685b5.png"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Desktop navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };

  const getVisibleTestimonials = () => {
    const testimonialsPerSlide = 2;
    const startIndex = currentIndex * testimonialsPerSlide;
    return testimonials.slice(startIndex, startIndex + testimonialsPerSlide);
  };

  // Effect to handle scroll detection for mobile
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

  // Function to scroll to a specific card (mobile)
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
        <div className="text-center mb-6 px-4 lg:mb-12">
          <h2 className="font-unna text-2xl lg:text-3xl mb-4 text-white">
            From "I've Tried Everything" to Thriving
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Testimonial Cards Container */}
            <div
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory testimonial-scroll px-6"
              style={{ scrollBehavior: 'smooth' }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 w-80 snap-center py-6">
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
          <div className="relative pt-8 mb-8">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" style={{ color: '#393f2d' }} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6" style={{ color: '#393f2d' }} />
            </button>

            {/* Testimonial Cards Grid */}
            <div className="grid grid-cols-2 gap-10">
              {getVisibleTestimonials().map((testimonial) => (
                <div key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
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
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-visible h-full">
      {/* User Profile Image with partial border */}
      <div className="absolute -top-6 -left-2 lg:-top-7 lg:-left-3 w-24 h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden shadow-lg">
        {/* Partial border effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-white" 
             style={{
               clipPath: 'polygon(0% 0%, 100% 0%, 100% 60%, 70% 100%, 0% 100%)'
             }}>
        </div>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover rounded-xl"
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
          <span className="text-3xl lg:text-4xl absolute -bottom-4 right-0 text-gray-300">"</span>
        </blockquote>
      </div>
    </div>
  );
};
