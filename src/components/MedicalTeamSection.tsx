import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import teamDoctor1 from "@/assets/team-doctor-1.jpg";
import teamNutritionist1 from "@/assets/team-nutritionist-1.jpg";
import doctorSaptarshi from "@/assets/dr-saptarshi.jpg";

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
  }
];

export const MedicalTeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const getVisibleMembers = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : 1;
    const members = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      members.push(teamMembers[index]);
    }
    return members;
  };

  return (
    <section className="py-16 px-4 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-unna text-3xl lg:text-4xl text-foreground mb-4">
            The Medical Team Behind Your Diagnosis
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-12">
            <div className="flex gap-6 lg:gap-8 transition-transform duration-300">
              {getVisibleMembers().map((member) => (
                <TeamMemberCard key={member.id} member={member} />
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
    <div className="flex-1 text-center min-w-0">
      {/* Photo */}
      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mx-auto mb-6">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="font-unna text-xl lg:text-2xl text-foreground mb-2">
        {member.name}
      </h3>

      {/* Title */}
      <p className="font-satoshi font-bold text-secondary text-base mb-4">
        {member.title}
      </p>

      {/* Credentials */}
      <p className="font-satoshi text-sm text-muted-foreground leading-relaxed">
        {member.credentials}
      </p>
    </div>
  );
};