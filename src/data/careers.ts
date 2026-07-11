export type CareerOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
};

export const careerOpenings: CareerOpening[] = [
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Kochi · Hybrid",
    type: "Full-time",
    summary:
      "Build and ship web products end to end — modern frontends, solid APIs, and cloud-ready delivery with client teams.",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Kochi · Hybrid",
    type: "Full-time",
    summary:
      "Own product UI and brand systems — from flows and prototypes to polished interfaces that feel intentional.",
  },
  {
    id: "digital-marketer",
    title: "Digital Marketing Specialist",
    department: "Growth",
    location: "Kochi",
    type: "Full-time",
    summary:
      "Plan and run campaigns across SEO, social, and performance — turning attention into measurable outcomes.",
  },
  {
    id: "mobile-developer",
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Kochi · Hybrid",
    type: "Full-time",
    summary:
      "Ship iOS and Android experiences with React Native or native stacks — clean architecture, real release cycles.",
  },
  {
    id: "project-coordinator",
    title: "Project Coordinator",
    department: "Delivery",
    location: "Kochi",
    type: "Full-time",
    summary:
      "Keep delivery clear and moving — timelines, client communication, and the glue between design, eng, and growth.",
  },
];
