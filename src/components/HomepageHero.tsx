'use client'

import Image from "next/image"

export default function HomepageHero() {

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen p-8 text-center overflow-hidden">

            <div className="z-10 max-w-4xl">
                <div className={`relative w-72 h-72 
                            md:w-144 md:h-144 mx-auto 
                            rounded-full overflow-hidden 
                            border-4 border-primary shadow-2xl
                            `}>
                    <Image
                        src={"/window.svg"}
                        className="object-cover"
                        alt="Profile Picture of Tai Williams"
                        layout="fill"
                        priority
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-4">
                    DayDream Robotics
                </h1>

            </div>
    </section>
    )

}