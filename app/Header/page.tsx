"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white shadow-lg text-black sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-3xl font-bold">Gech</div>

        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 focus:outline-none"
        >
          <Image src="/bars.svg" width={30} height={40} alt="Menu" />
        </button>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row absolute sm:relative top-16 sm:top-0 left-0 sm:left-auto w-full sm:w-auto bg-white sm:bg-transparent shadow-lg sm:shadow-none py-4 sm:py-0 space-y-4 sm:space-y-0 sm:space-x-6`}
        >
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2 hover:text-blue-600 ${
              isActive("/") ? "text-blue-600 font-medium" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/About"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2 hover:text-blue-600 ${
              isActive("/About") ? "text-blue-600 font-medium" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/Projects"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2 hover:text-blue-600 ${
              isActive("/Projects") ? "text-blue-600 font-medium" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/Skills"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2 hover:text-blue-600 ${
              isActive("/Skills") ? "text-blue-600 font-medium" : ""
            }`}
          >
            Skills
          </Link>
          <Link
            href="/Services"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2 hover:text-blue-600 ${
              isActive("/Services") ? "text-blue-600 font-medium" : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="/Contact"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2 hover:text-blue-600 ${
              isActive("/Contact") ? "text-blue-600 font-medium" : ""
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
