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
      "Build websites and apps from start to finish — modern screens, solid APIs, and delivery with client teams.",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Kochi · Hybrid",
    type: "Full-time",
    summary:
      "Design product screens and brand systems people enjoy using — from first flow to a finished look.",
  },
  {
    id: "digital-marketer",
    title: "Digital Marketing Specialist",
    department: "Growth",
    location: "Kochi",
    type: "Full-time",
    summary:
      "Plan and run campaigns across SEO, social, and ads — turning attention into results you can measure.",
  },
  {
    id: "mobile-developer",
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Kochi · Hybrid",
    type: "Full-time",
    summary:
      "Build iOS and Android apps with React Native or native stacks — clean structure, real release cycles.",
  },
  {
    id: "project-coordinator",
    title: "Project Coordinator",
    department: "Delivery",
    location: "Kochi",
    type: "Full-time",
    summary:
      "Keep delivery clear and moving — timelines, client communication, and the glue between design, engineering, and growth.",
  },
];
