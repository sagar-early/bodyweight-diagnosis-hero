
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
  return (
    <section className="py-16 px-4 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-unna text-3xl lg:text-4xl text-foreground mb-4">
            Our Care Circle
          </h2>
        </div>

        {/* Team Grid - Mobile: 2x3, Desktop: 3x2 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="text-center">
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
