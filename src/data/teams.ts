


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
    name: "Programming",
    teamImage: "/file.svg",
    shortDescription: "[Enter Short Description Here]",
    longDescription: "[Enter Long Description Here]",
    teamLeads: ["Enter Leads Here"],
    skills: ["Enter Skills Here"],
  },
  {
    key: "electrical",
    name: "Electrical",
    teamImage: "/file.svg",
    shortDescription: "[Enter Short Description Here]",
    longDescription: "[Enter Long Description Here]",
    teamLeads: ["Enter Leads Here"],
    skills: ["Enter Skills Here"]
  },
  {
  key: "design",
  name: "Design",
  teamImage: "/file.svg",
  shortDescription: "[Enter Short Description Here]",
  longDescription: "[Enter Long Description Here]",
  teamLeads: ["Enter Leads Here"],
  skills: ["Enter Skills Here"]
  },
  {
  key: "notebook",
  name: "Notebook",
  teamImage: "/file.svg",
  shortDescription: "[Enter Short Description Here]",
  longDescription: "[Enter Long Description Here]",
  teamLeads: ["Enter Leads Here"],
  skills: ["Enter Skills Here"]
  },
  {
  key: "drive",
  name: "Drive",
  teamImage: "/file.svg",
  shortDescription: "[Enter Short Description Here]",
  longDescription: "[Enter Long Description Here]",
  teamLeads: ["Enter Leads Here"],
  skills: ["Enter Skills Here"]
  }
  

];
