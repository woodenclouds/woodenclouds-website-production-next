export type TeamMember = {
  name: string;
  role?: string;
  photo: string;
  isBoard?: boolean;
};

export const boardOfDirectors: TeamMember[] = [
  {
    name: "Anooj Reji",
    photo: "/assets/user/imgs/team/anooj.jpg",
    isBoard: true,
  },
  {
    name: "Justin Chacko",
    photo: "/assets/user/imgs/team/justin.jpg",
    isBoard: true,
  },
  {
    name: "Dayana T Jaison",
    photo: "/assets/user/imgs/team/dayana.jpg",
    isBoard: true,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Arjun Menon",
    role: "Engineering Lead",
    photo: "/assets/user/imgs/team-01.jpg",
  },
  {
    name: "Meera Nair",
    role: "Product Designer",
    photo: "/assets/user/imgs/team-02.jpg",
  },
  {
    name: "Rahul Krishnan",
    role: "Full Stack Developer",
    photo: "/assets/user/imgs/team-04.jpg",
  },
  {
    name: "Sneha Thomas",
    role: "Digital Marketer",
    photo: "/assets/user/imgs/team.jpg",
  },
];
