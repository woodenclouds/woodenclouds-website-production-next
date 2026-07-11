export type TeamMember = {
  name: string;
  role?: string;
  photo: string;
  isBoard?: boolean;
};

export const boardOfDirectors: TeamMember[] = [
  {
    name: "Anooj Reji",
    photo: "/team/anooj.jpg",
    isBoard: true,
  },
  {
    name: "Justin Chacko",
    photo: "/team/justin.jpg",
    isBoard: true,
  },
  {
    name: "Dayana T Jaison",
    photo: "/team/dayana.jpg",
    isBoard: true,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Arjun Menon",
    role: "Engineering Lead",
    photo: "/team/team-01.jpg",
  },
  {
    name: "Meera Nair",
    role: "Product Designer",
    photo: "/team/team-02.jpg",
  },
  {
    name: "Rahul Krishnan",
    role: "Full Stack Developer",
    photo: "/team/team-04.jpg",
  },
  {
    name: "Sneha Thomas",
    role: "Digital Marketer",
    photo: "/team/team.jpg",
  },
];
