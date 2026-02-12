"use client";

import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { src: "/daydreamInstaPhoto.jpg", href: "instagram.com", title: "Instagram" },
  { src: "/discordIcon.png", href: "discord.com", title: "Discord" },
];

export function MainFooter() {
  return (
    <footer
      className={`bottom-0 bg-background/90 shadow-lg backdrop-blur-sm w-full z-50 transition-all duration-300 ease-in-out
    h-20 flex items-center justify-center`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl px-4 md:px-8">
        <div className="flex items-center space-x-6">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              <div className="w-16 h-16">
                <Image
                  src={link.src}
                  alt={link.title}
                  className="rounded-full"
                  layout="fill"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-sm md:text-2xs font-bold tracking-tight mx-2 right-0">
          <span className=" text-foreground/20 transition">
            Last Updated Feburary 9, 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
