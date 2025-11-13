import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamInfo {
  key: string;
  name: string;
  teamImage: string;
  shortDescription: string;
  longDescription: string;
  teamLeads: string[];
  skills: string[];
}

export function TeamsSection() {}

export function TeamsCard({ teamInfo }: { teamInfo: TeamInfo }) {
  return (
    <Card key={teamInfo.key} className="w-1/4 w-max-sm text-center">
      <CardHeader>
        <CardTitle className="text-xl">{teamInfo.name}</CardTitle>
        <CardDescription className="text-md text-card-foreground">
          {teamInfo.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <img
          src={teamInfo.teamImage}
          alt={teamInfo.name}
          className="object-cover m-3 border-2"
        />
        <p className="text-shadow-card-foreground text-center">
          {teamInfo.longDescription}
        </p>
        <span className="text-accent border-b-2 border-accent">Skills</span>
        {teamInfo.skills.map((s) => {
          return <div></div>;
        })}
      </CardContent>
    </Card>
  );
}
