'use client'

import Image from "next/image"
import AboutUsCard from "@/components/AboutUsCard";


export default function HomepageHero() {

    return (
        <section className="relative flex items-center justify-center min-h-screen text-center overflow-hidden">

            <div className="z-10 max-w-8xl flex gap-5 m-40">

                 <div className={`relative w-72 h-72 
                            md:w-200 md:h-200 mx-auto 
                             overflow-hidden 
                            border-4 border-border shadow-2xl
                            `}>
                    <Image
                        src={"/teamPicAuburn.jpg"}
                        className="object-cover flex-2"
                        alt="Profile Picture of Tai Williams"
                        layout="fill"
                        priority
                    />
                </div> 
                
                <div className="flex-1 p-10">
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