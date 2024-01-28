"use client";
import { useState, useEffect } from "react";
import { Logo } from "./logo";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

interface NavbarProps {
  staticBar?: boolean;
}

export const Navbar = ({ staticBar }: NavbarProps) => {
  // TODO: Add hamburger bar for smaller screens.
  // TODO: When focused/active, make it into some color.

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(isOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // TODO: Refactor so it's better.
    if (staticBar) {
      setScrolled(true);
    } else {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      className={cn(
        "w-full h-20 z-50 bg-transparent sticky top-0 px-6 transition ease-in-out duration-300",
        scrolled && "w-full h-20 z-50 bg-emerald-700 sticky top-0 px-6",
      )}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="pt-1 px-3 rounded-sm ">
            <Logo />
          </Link>
          <ul
            className={cn(
              "hidden md:flex gap-x-12 text-white transition ease-in-out duration-300",
              scrolled && "text-white",
            )}
          >
            <li>
              <Link href="/profil">
                <p className=" text-sm font-bold hover:text-emerald-500">
                  Profil
                </p>
              </Link>
            </li>
            <li>
              <Link href="/profil">
                <p className=" text-sm font-bold hover:text-emerald-500">
                  Galeri
                </p>
              </Link>
            </li>
            <li>
              <Link href="/profil">
                <p className=" text-sm font-bold hover:text-emerald-500">
                  Berita
                </p>
              </Link>
            </li>
            <li>
              <Link href="/kontak">
                <p className=" text-sm font-bold hover:text-emerald-500">
                  Kontak
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
