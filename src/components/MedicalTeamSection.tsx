
import teamDoctor1 from "@/assets/team-doctor-1.jpg";
import teamNutritionist1 from "@/assets/team-nutritionist-1.jpg";
import doctorSaptarshi from "@/assets/dr-saptarshi.jpg";
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
    credentials: "Senior Consultant, Department of Endocrinology, Indraprastha Apollo Hospitals (Delhi), previously at Max Hospitals. Trained at AIIMS (DM in Endocrinology) and MAMC (MD in Medicine). Co-authored 120+ research publications.",
    image: doctorSaptarshi
  },
  {
    id: 2,
    name: "Dr. Anjali Mehta",
    title: "Senior Nutritionist",
    credentials: "12+ Years Experience, Ex-Max Healthcare. Specialized in metabolic nutrition and weight management with 1000+ successful patient transformations.",
    image: teamNutritionist1
  },
  {
    id: 3,
    name: "Dr. Vikram Singh",
    title: "Endocrinology Specialist",
    credentials: "15+ Years Experience, Apollo Hospitals. Expert in diabetes and metabolic disorders with extensive research in obesity management.",
    image: teamDoctor1
  },
  {
    id: 4,
    name: "Dr. Kavya Reddy",
    title: "Clinical Nutritionist",
    credentials: "10+ Years Experience, Fortis Healthcare. Specialized in personalized nutrition therapy for metabolic conditions.",
    image: teamNutritionist1
  },
  {
    id: 5,
    name: "Drishti Bansal",
    title: "Lead, Nutrition",
    credentials: "8+ Years Experience in personalized nutrition coaching. Expert in creating sustainable meal plans for metabolic health.",
    image: teamNutritionist1
  },
  {
    id: 6,
    name: "Anushi Dhiman",
    title: "Lead, Nutrition",
    credentials: "7+ Years Experience in clinical nutrition. Specialized in PCOS and hormonal weight management programs.",
    image: teamNutritionist1
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
    <section className="py-16 px-4 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-unna text-3xl lg:text-4xl text-foreground mb-4">
            Our Care Circle
          </h2>
          <p className="font-satoshi text-lg text-secondary">
            A dedicated team of experts committed to your health journey
          </p>
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
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
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
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
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
      <h3 className="font-unna text-lg lg:text-xl text-foreground mb-1">
        {member.name}
      </h3>

      {/* Title */}
      <p className="font-satoshi font-bold text-secondary text-sm mb-3">
        {member.title}
      </p>

      {/* Credentials */}
      <p className="font-satoshi text-xs text-muted-foreground leading-relaxed">
        {member.credentials}
      </p>
    </div>
  );
};
