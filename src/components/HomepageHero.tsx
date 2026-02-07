'use client'

import Image from "next/image"
import AboutUsCard from "@/components/AboutUsCard";


export default function HomepageHero() {

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">

            <div className="z-10 max-w-6xl">
               <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-4 mt-25">
                    DayDream Robotics
                </h1>
            
                {/* round photo */}
                 <div className={`relative w-72 h-72 
                            md:w-144 md:h-144 mx-auto 
                             overflow-hidden 
                            border-4 border-border shadow-2xl
                            `}>
                    <Image
                        src={"/teamPicAuburn.jpg"}
                        className="object-cover"
                        alt="Profile Picture of Tai Williams"
                        layout="fill"
                        priority
                    />
                </div> 
                
                <div className="flex p-10">
                    <div>
                        <AboutUsCard/>
                    </div>
                    {/* <div className={`relative w-72 h-72 
                            md:w-300 md:h-144 mx-auto 
                             overflow-hidden 
                            border-4 border-primary shadow-2xl
                            `}>
                        <Image
                            src={"/teamPicAuburn.jpg"}
                            className="object-cover"
                            alt="Profile Picture of Tai Williams"
                            layout= "fill"
                            priority
                            
                    </div>
                    /> */}



                </div>


 

            </div>
        </section>
    )

}