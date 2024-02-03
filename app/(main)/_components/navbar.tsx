"use client";
import { useState, useLayoutEffect } from "react";
import { Logo } from "./logo";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileMenu } from "./mobileMenu";

interface NavbarProps {
  staticBar?: boolean;
}

export const Navbar = ({ staticBar }: NavbarProps) => {
  // TODO: When focused/active, make it into some color.

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  let dynamic = false;
  if (!staticBar) {
    dynamic = true;
  }

  const [scrolled, setScrolled] = useState(staticBar);

  useLayoutEffect(() => {
    // TODO: Refactor so it's better.
    if (dynamic) {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);

      handleScroll();
    }
  }, []);

  return (
    <div
      className={cn(
        "w-full h-20 z-50 bg-transparent sticky top-0 lg:px-6 transition ease-in-out duration-300",
        scrolled && "w-full h-20 z-50 bg-emerald-700 sticky top-0 md:px-6",
      )}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="pt-1 lg:px-3 lg:mx-0 rounded-sm ">
            <Logo />
          </Link>
          <ul
            className={cn(
              "flex gap-x-12 text-white transition ease-in-out duration-300",
              scrolled && "text-white",
            )}
          >
            <li>
              <Link href="/">
                <p className="hidden lg:flex text-sm font-bold hover:text-emerald-500">
                  Halaman Utama
                </p>
              </Link>
            </li>
            <li>
              <Link href="/berita">
                <p className="hidden lg:flex text-sm font-bold hover:text-emerald-500">
                  Berita
                </p>
              </Link>
            </li>
            <li>
              <Link href="/peta">
                <p className="hidden lg:flex text-sm font-bold hover:text-emerald-500">
                  Peta Interaktif
                </p>
              </Link>
            </li>
            <li>
              <Link href="/struktur">
                <p className="hidden lg:flex text-sm font-bold hover:text-emerald-500">
                  Struktur Organisasi
                </p>
              </Link>
            </li>
            <li>
              <Link href="/kontak">
                <p className="hidden lg:flex text-sm font-bold hover:text-emerald-500">
                  Kontak
                </p>
              </Link>
            </li>
            <li className="lg:hidden pt-3" onClick={toggle}>
              <p className="text-xl font-bold hover:text-emerald-500">
                <GiHamburgerMenu />
              </p>
            </li>
          </ul>
        </div>
        <MobileMenu isOpen={isOpen} />
      </div>
    </div>
  );
};
