"use client"
import { useState } from 'react';
import Link from "next/link";
import "./globals.css";
import Image from "next/image";

export default function Layout({
  children,
  footer,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <head>
        <title>Getahun Fikade</title>
      </head>
      <body>
        <header>
          {/* Mobile menu button - visible only on small screens */}
          <div className="sm:hidden flex justify-end p-4 fixed w-full bg-white z-50 shadow-lg">
            <button onClick={toggleMenu} className="p-2">
              <Image src="/bars.svg" width={30} height={40} alt="Menu" />
            </button>
          </div>

          {/* Navigation - hidden on mobile unless toggled, always visible on sm+ */}
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row z-40 justify-center bg-white shadow-lg space-y-4 sm:space-y-0 sm:space-x-6 py-8 fixed w-full mb-16 mt-16 sm:mt-0`}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/About" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/Projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link href="/Skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
            <Link href="/Services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/Contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </header>
        
        <main className="pt-19">{children}</main>
        
        <footer className="block w-full p-4 text-center border-t border-gray-200 mt-16">
          <div className="block md:flex md:space-x-16 justify-center mt-4">
            <Link href="/About" className="block md:inline">
              About
            </Link>
            <Link href="/Services" className="block md:inline">
              Services
            </Link>
            <Link href="/Contact" className="block md:inline">
              Contact
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-10 mb-5">
            <Link href="https://t.me/gecho_01" className="mb-4 md:mb-0">
              <Image
                width={50}
                height={50}
                src="/telegram.jpg"
                alt="Telegram"
              />
            </Link>
            <Link
              href="https://github.com/gech21-gech21"
              className="mb-4 md:mb-0 md:mx-4"
            >
              <Image width={50} height={50} src="/github.png" alt="GitHub" />
            </Link>
          </div>
          <h1 className="font-bold">
            © {new Date().getFullYear()} Getahun Fikade. All rights reserved.
          </h1>
        </footer>
      </body>
    </html>
  );
}