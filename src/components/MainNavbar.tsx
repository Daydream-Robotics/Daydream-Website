"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Navigation Links Data
const navLinks = [
  { href: "/2025", title: "2025" },
  { href: "/gallery", title: "Gallery" },
  { href: "/sponsors", title: "Sponsors" },
  { href: "/archive", title: "Archive" },
  { href: "/awards", title: "Awards" },
];

export function MainNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // --- Scroll Detection Effect ---
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if vertical scroll position is > 100px
      setIsScrolled(window.scrollY > 100);
    };

    // Attach listener to window scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures it runs once on mount

  // --- Dynamic Styling ---
  const headerClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
    h-20 flex items-center justify-center bg-secondary
    ${
      isScrolled
        ? "bg-background/90 shadow-lg backdrop-blur-sm " // When scrolled, add background/shadow
        : "" // At top, transparent
    }
  `;

  return (
    <header className={headerClasses}>
      <nav className="flex items-center justify-between w-full max-w-19/20 px-4 md:px-8">
        {/* Logo/Name */}
      <Link href="/" className="text-3xl font-bold tracking-tight">
          <span className=" text-foreground hover:text-secondary-foreground transition">
            DayDream Robotics 
          </span>
        </Link>

        {/* --- Desktop Naviation --- */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.title}
              {/* Underline hover effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </div>

        {/* --- Mobile Navigation (Sheet) --- */}
        <div className="md:hidden flex items-center space-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="mt-4">
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 pt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-semibold text-center text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
