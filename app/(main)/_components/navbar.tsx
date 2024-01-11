"use client";
import { useState } from "react";
import { Logo } from "./logo";
import React from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(isOpen);
  };
  return (
    <>
      <div className="w-full h-20 z-99999 bg-transparent sticky top-0 px-20">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/" className="pt-1 px-3 bg-emerald-600 rounded-sm ">
              <Logo />
            </Link>
            <ul className="hidden md:flex gap-x-12 text-white">
              <li>
                <Link href="/pelayanan">
                  <p className="text-white text-sm font-bold hover:text-emerald-500">
                    Pusat Pelayanan
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/profil">
                  <p className="text-white text-sm font-bold hover:text-emerald-500">
                    Profil
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/kontak">
                  <p className="text-white text-sm font-bold hover:text-emerald-500">
                    Kontak
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
