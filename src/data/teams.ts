export interface TeamInfo {
  key: string;
  name: string;
  teamImage: string;
  shortDescription: string;
  longDescription: string;
  teamLeads: string[];
  skills: string[];
}

export const TEAMS: TeamInfo[] = [
  {
    key: "mechanical",
    name: "Mechanical",
    teamImage: "/file.svg",
    shortDescription: "This team does mechanical",
    longDescription:
      "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    teamLeads: ["Ross", "Joseph"],
    skills: ["CAD", "Mechanical stuff"],
  },
];
