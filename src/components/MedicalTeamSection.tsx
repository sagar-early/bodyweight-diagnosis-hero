
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  credentials: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Saptarshi Bhattacharya",
    title: "Chief Medical Advisor",
    credentials: "Associated with Indraprastha Apollo Hospitals (Delhi) and previously with Max Hospitals. He trained at AIIMS (DM in Endocrinology) and MAMC (MD in Medicine). He has co-authored over 120 research publications.",
    image: "/lovable-uploads/4658e62f-fad0-42a1-bffa-5714498a5dbd.png"
  },
  {
    id: 2,
    name: "Dr. Ankita Aneja",
    title: "Consultant Endocrinologist",
    credentials: "Previously worked at Safdarjung Hospital, Ganga Ram Hospital, and RML Hospital. She completed her DrNB in Endocrinology from Safdarjung and her MD in Medicine from Jawaharlal Nehru Medical College.",
    image: "/lovable-uploads/d0364617-83e6-4bae-9232-5dd11922d3c5.png"
  },
  {
    id: 3,
    name: "Dr. Savita Jain",
    title: "Consultant Endocrinologist",
    credentials: "Previously worked at Apollo Hospital, DMC Ludhiana, and Mohan Dai Oswal Hospital. She completed her DNB in Endocrinology from Apollo Delhi and her MD in Medicine from DMC Ludhiana.",
    image: "/lovable-uploads/491a6843-dfce-4187-a975-41499193a126.png"
  },
  {
    id: 4,
    name: "Anushi Dhiman",
    title: "Lead, Nutrition",
    credentials: "An experienced dietician who has worked with VLCC, HCL Healthcare, and Mamily Technology. She holds a Master's in Nutrition & Dietetics from Delhi University (DU).",
    image: "/lovable-uploads/2f95c7d5-58cb-420b-83a7-3ae0d6085a5c.png"
  },
  {
    id: 5,
    name: "Drishti Bansal",
    title: "Lead, Nutrition",
    credentials: "With over 10 years of experience, she has worked at HealthifyMe, Fitelo, and Breathe Wellbeing. She holds a Master's in Nutrition and Dietetics from Delhi University (DU).",
    image: "/lovable-uploads/503a97a3-9be1-4671-8ccb-833a5f00db0d.png"
  }
];

export const MedicalTeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3));
  };

  const getVisibleMembers = () => {
    const membersPerSlide = 3;
    const startIndex = currentIndex * membersPerSlide;
    return teamMembers.slice(startIndex, startIndex + membersPerSlide);
  };

  return (
    <section className="py-2 px-4 lg:px-16 lg:pb-12" style={{ backgroundColor: '#FAF8F1' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header with increased padding for desktop */}
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="font-unna text-3xl lg:text-4xl" style={{ color: '#393f2d' }}>
            Our Medical Experts
          </h2>
        </div>

        {/* Mobile Carousel -- CORRECTED */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pt-16">
              <div className="flex gap-8 pb-4 px-8">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex-shrink-0 w-64">
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Carousel -- CORRECTED */}
        <div className="hidden lg:block">
          <div className="relative pt-16 mb-8">
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

            {/* Team Members Grid */}
            <div className="grid grid-cols-3 gap-8">
              {getVisibleMembers().map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                style={{ backgroundColor: index === currentIndex ? '#393f2d' : '#ddd' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// This card component has the correct overlap logic from the previous step
const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg h-full relative">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white z-10">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pt-24 lg:pt-28 text-center">
        <h3 className="font-unna text-lg lg:text-xl mb-1" style={{ color: '#393f2d' }}>
          {member.name}
        </h3>
        <p className="font-satoshi font-bold text-sm mb-3" style={{ color: '#798660' }}>
          {member.title}
        </p>
        <p className="font-satoshi text-xs leading-relaxed" style={{ color: '#434a35' }}>
          {member.credentials}
        </p>
      </div>
    </div>
  );
};
