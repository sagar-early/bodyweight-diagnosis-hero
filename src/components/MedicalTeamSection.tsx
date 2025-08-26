
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
    name: "Dr. Savita Jain",
    title: "Consultant Endocrinologist",
    credentials: "Previously worked at Apollo Hospital, DMC Ludhiana, and Mohan Dai Oswal Hospital. She completed her DNB in Endocrinology from Apollo Delhi and her MD in Medicine from DMC Ludhiana.",
    image: "/lovable-uploads/2e8263f8-69fd-4d48-986f-0083fef5a145.png"
  },
  {
    id: 2,
    name: "Anushi Dhiman",
    title: "Lead, Nutrition",
    credentials: "An experienced dietician who has worked with VLCC, HCL Healthcare, and Mamily Technology. She holds a Master's in Nutrition & Dietetics from Delhi University (DU).",
    image: "/lovable-uploads/07969a95-c2f8-4906-9963-5f41136444e7.png"
  },
  {
    id: 3,
    name: "Dr. Saptarshi Bhattacharya",
    title: "Chief Medical Advisor",
    credentials: "Associated with Indraprastha Apollo Hospitals (Delhi) and previously with Max Hospitals. He trained at AIIMS (DM in Endocrinology) and MAMC (MD in Medicine). He has co-authored over 120 research publications.",
    image: "/lovable-uploads/73496776-77af-4785-9093-075e1291fea0.png"
  },
  {
    id: 4,
    name: "Dr. Ankita Aneja",
    title: "Consultant Endocrinologist",
    credentials: "Previously worked at Safdarjung Hospital, Ganga Ram Hospital, and RML Hospital. She completed her DrNB in Endocrinology from Safdarjung and her MD in Medicine from Jawaharlal Nehru Medical College.",
    image: "/lovable-uploads/b17a32a9-9c21-4099-a8dd-b7ff2b42e847.png"
  },
  {
    id: 5,
    name: "Drishti Bansal",
    title: "Lead, Nutrition",
    credentials: "With over 10 years of experience, she has worked at HealthifyMe, Fitelo, and Breathe Wellbeing. She holds a Master's in Nutrition and Dietetics from Delhi University (DU).",
    image: "/lovable-uploads/35596b19-5162-4746-b39a-e843a757732b.png"
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
    <section className="py-16 px-4 lg:px-16" style={{ backgroundColor: '#79855F' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-unna text-3xl lg:text-4xl text-white mb-4">
            Medically-Guided, Expert-Led
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex-shrink-0 w-64">
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block">
          <div className="relative">
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

            {/* Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
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
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="text-center bg-white rounded-2xl p-6 shadow-lg h-full">
      {/* Photo */}
      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden mx-auto mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="font-unna text-lg lg:text-xl mb-1" style={{ color: '#393f2d' }}>
        {member.name}
      </h3>

      {/* Title */}
      <p className="font-satoshi font-bold text-sm mb-3" style={{ color: '#798660' }}>
        {member.title}
      </p>

      {/* Credentials */}
      <p className="font-satoshi text-xs leading-relaxed" style={{ color: '#434a35' }}>
        {member.credentials}
      </p>
    </div>
  );
};
