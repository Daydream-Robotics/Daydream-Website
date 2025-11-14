export interface TeamInfo {
  key: string;
  name: string;
  teamImage: string;
  shortDescription: string;
  longDescription: string;
  teamLeads: string[];
  skills: string[];
  className: string;
}

export const TEAMS: TeamInfo[] = [
  {
    key: "design",
    name: "Design",
    teamImage: "/file.svg",
    shortDescription: "This team does design",
    longDescription:
      "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    teamLeads: ["Tomas"],
    skills: ["CAD", "Mechanical stuff"],
    className: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
  },
  {
    key: "build",
    name: "Build",
    teamImage: "/file.svg",
    shortDescription: "This team does build",
    longDescription:
      "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    teamLeads: ["Ross", "Joseph"],
    skills: ["CAD", "Mechanical stuff"],
    className: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
  },
  {
    key: "programming",
    name: "Programming",
    teamImage: "/file.svg",
    shortDescription: "This team does programming",
    longDescription:
      "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    teamLeads: ["Alex", "Natalia"],
    skills: ["C++", "AI"],
    className: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
  },
  {
    key: "notebook",
    name: "Notebook",
    teamImage: "/file.svg",
    shortDescription: "This team does notebook",
    longDescription:
      "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    teamLeads: ["Khang", "Natalia"],
    skills: ["powerpoint", "photos"],
    className: "bg-gradient-to-r from-red-500 via-orange-500 to-pink-500",
  },
];
