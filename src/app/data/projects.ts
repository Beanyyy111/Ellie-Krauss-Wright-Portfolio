import dmrRecoveryLogo from "../../imports/Screenshot_2026-02-25_at_15.27.05.png";
import englishWithContentLogo from "../../imports/Screenshot_2026-05-27_at_15.36.26.png";
import beanieDesignsLogo from "../../imports/Screenshot_2026-05-27_at_14.42.56.png";
import studentLoungeRebrand from "../../imports/Screenshot_2026-05-27_at_13.18.00-2.png";
import professionalCV from "../../imports/Screenshot_2026-05-27_at_15.29.30.png";
import discoveryCoachingLogo from "../../imports/Screenshot_2026-05-27_at_13.44.26.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  transparentBg?: boolean;
  mockups?: string[];
  detailDescription?: string;
}

export const projects: Project[] = [
  {
    id: "dmr-recovery",
    title: "DMR Recovery Logo",
    category: "Logo Design",
    image: dmrRecoveryLogo,
    description: "Logo refinement for breakdown and recovery services company",
    transparentBg: false,
    detailDescription: "A comprehensive logo refinement for DMR Recovery, featuring a bold chain motif and automotive elements to represent their breakdown and recovery services.",
    mockups: [],
  },
  {
    id: "english-with-content",
    title: "English With Context Logo",
    category: "Brand Design",
    image: englishWithContentLogo,
    description: "Educational brand logo with circular badge design",
    transparentBg: false,
    detailDescription: "Created a circular badge logo for English With Context, an educational platform. The design features a TV icon symbolising content-based learning.",
    mockups: [],
  },
  {
    id: "professional-cv",
    title: "Professional CV Design",
    category: "Print",
    image: professionalCV,
    description: "Custom CV design for hydrogeologist client",
    detailDescription: "Professional CV design for a hydrogeologist client, featuring a clean two-column layout with custom colour scheme and clear information hierarchy.",
    mockups: [],
  },
  {
    id: "student-lounge",
    title: "The Student Lounge",
    category: "Human Centred Design",
    image: studentLoungeRebrand,
    description: "School rebrand innovation design concept",
    detailDescription: "An innovative rebrand concept reimagining school spaces from industrial to innovative. This project explores modern educational environments with a focus on student-centred design.",
    mockups: [],
  },
  {
    id: "beanie-designs",
    title: "Beanie Designs Logo",
    category: "Logo Design",
    image: beanieDesignsLogo,
    description: "Apparel brand logo with modern aesthetic",
    transparentBg: false,
    detailDescription: "Modern logo design for Beanie Designs, an apparel brand. The logo features clean typography and a beanie icon, perfect for clothing labels and business cards.",
    mockups: [],
  },
  {
    id: "discovery-coaching",
    title: "Discovery Coaching Logo",
    category: "Logo Design",
    image: discoveryCoachingLogo,
    description: "Coaching brand logo with yin-yang inspired design",
    transparentBg: false,
    detailDescription: "Logo refinement for Discovery Coaching, featuring a balanced yin-yang design with hand and circle elements. The purple-to-pink gradient creates a sense of harmony and transformation.",
    mockups: [],
  },
];
