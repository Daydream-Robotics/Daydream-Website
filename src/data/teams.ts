


export interface TeamInfo {
  key: string;
  name: string;
  teamImage: string;
  shortDescription: string;
  longDescription: string;
  teamLeads: string[];
  skills: string[];
}


//Use this to edit teams, add teams, and delete teams
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
  {
    key: "programming",
    name: "programming",
    teamImage: "/file.svg",
    shortDescription: "CODE",
    longDescription: "ALOT OF CODE",
    teamLeads: ["Alex"],
    skills: ["code"],
  }
];
