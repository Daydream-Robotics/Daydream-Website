import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

import { type TeamInfo, TEAMS } from "@/data/teams";

export default function TeamsSection() {
  return (
    <section
      aria-labelledby="teams-section-title"
      className="flex flex-col items-center justify-center px-6 py-12 md:py-20"
    >
      <header className="text-center mb-8">
        <h2
          id="teams-section-title"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight"
        >
          Teams
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
          Explore our cross-functional teams, their focus areas, and the people
          leading them.
        </p>
      </header>

      {/* Responsive grid: 1 column mobile, 2 tablet, 3 desktop, 4 xl */}
      <div className="w-full max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {TEAMS.map((t) => (
          <TeamsCard key={t.key} teamInfo={t} />
        ))}
      </div>
    </section>
  );
}

export function TeamsCard({ teamInfo }: { teamInfo: TeamInfo }) {
  return (
    <Card
      role="article"
      aria-label={`${teamInfo.name} team card`}
      className={`group relative overflow-hidden transform transition-shadow duration-300 hover:scale-[1.01] focus-within:scale-[1.01] shadow-lg rounded-2xl`}
    >
      <div
        className={`absolute inset-0 pointer-events-none opacity-60 bg-gradient-to-br ${teamInfo.className}`}
        aria-hidden
      />

      <CardHeader className="relative z-10 px-4 pt-4">
        <CardTitle className="text-lg sm:text-2xl text-card-foreground font-semibold">
          {teamInfo.name}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-card-foreground/85 mt-1">
          {teamInfo.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 px-4 pb-6 pt-0 flex flex-col gap-4">
        <div className="w-full h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden border border-white/10 shadow-sm">
          <img
            src={teamInfo.teamImage}
            alt={`${teamInfo.name} team image`}
            className="object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed text-card-foreground/95 line-clamp-3">
          {teamInfo.longDescription}
        </p>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-wide text-accent border-b border-accent/40 pb-1 mb-2 inline-block">
            Skills
          </h3>

          <ul
            className="flex flex-wrap gap-2 mt-2"
            role="list"
            aria-label={`${teamInfo.name} skills`}
          >
            {teamInfo.skills.map((s) => (
              <li key={s}>
                <Badge className="px-2 py-0.5 rounded-md text-sm bg-accent/95 hover:bg-accent/100 focus:outline-none focus:ring-2 focus:ring-accent/30">
                  {s}
                </Badge>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-wide text-accent border-b border-accent/40 pb-1 mb-2 inline-block">
            Team Leads
          </h3>

          <ul
            className="flex flex-wrap gap-2 mt-2"
            role="list"
            aria-label={`${teamInfo.name} leads`}
          >
            {teamInfo.teamLeads.map((lead, idx) => (
              <li key={`${lead}-${idx}`}>
                <Badge className="px-2 py-0.5 rounded-md text-sm bg-card-foreground/5 border border-card-foreground/10">
                  {lead}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
