import {SponsorInfo, SPONSORS} from "@/data/sponsors";
import { Card } from "./ui/card";
import Image from "next/image"

export function SponsorSection() {
  return (
    <section className="justify-center items-center">
        <h2 className="text-6xl text-foreground font-extrabold text-center mt-20 mb-20">Meet Our Sponsors!</h2>
        
        <div className="flex flex-wrap gap-20 justify-center ml-20 mr-20">

        
      {SPONSORS.map((s) => {
        return <SponsorBlock key={s.key} sponsorInfo={s} />;
      })}
      </div>
    </section>
  );
}

export function SponsorBlock({ sponsorInfo }: { sponsorInfo: SponsorInfo }){
    return(<a href = {sponsorInfo.link} className="outline-5 outline-border mb-10">  <Image
                            src={sponsorInfo.img}
                            className=""
                            alt="Profile Picture of Tai Williams"
                            width={200}
                            height={200}
                            priority
                        />
                        </a>);
}