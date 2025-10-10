import HomepageHero from "@/components/HomepageHero";


export default function Home() {
  return (
    <div>
      <main>
        <HomepageHero />

        <div className="h-[200vh] flex items-center justify-center">
          <h2 className="text-3xl text-muted-foreground">More Content Below to Test Scroll...</h2>
        </div>
      </main>
    </div>
  )
}
