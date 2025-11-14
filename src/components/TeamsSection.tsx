import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

import { type TeamInfo, TEAMS } from "@/data/teams";

export function TeamsSection() {
  return (
    <section className="flex flex-1 align-middle justify-center m-10">
      {TEAMS.map((t) => {
        return <TeamsCard key={t.key} teamInfo={t} />;
      })}
    </section>
  );
}

export function TeamsCard({ teamInfo }: { teamInfo: TeamInfo }) {
  return (
    <Card className="w-1/4 w-max-sm text-center">
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
          return (
            <div className="flex">
              <Badge className="bg-accent">{s}</Badge>
            </div>
          );
        })}
        <span className="text-accent border-b-2 border-accent">Team Leads</span>
        {teamInfo.teamLeads.map((s) => {
          return (
            <div className="flex">
              <Badge className="bg-accent">{s}</Badge>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
