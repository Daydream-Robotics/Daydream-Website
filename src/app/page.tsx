import AboutUsCard from "@/components/AboutUsCard";
import HomepageHero from "@/components/HomepageHero";
import { TeamsSection } from "@/components/TeamsSection";
import { TeamsCard } from "@/components/TeamsSection";

export default function Home() {
  return (
    <div>
      <main>
        <HomepageHero />
        <TeamsSection>
          
        </TeamsSection>

        {/* <div className="h-[200vh] flex items-center justify-center">
          <h2 className="text-3xl text-muted-foreground">More Content Below to Test Scroll...</h2>
        </div> */}

        <AboutUsCard />

        <TeamsSection />
      </main>
    </div>
  );
}
