"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="block w-full p-4 text-center border-t bg-gray-700 text-white border-gray-200 mt-16">
      <div className="flex justify-center md:block">
        <div className="block py-10 md:flex md:space-x-16 justify-center mt-4">
          <Link href="/About" className="block md:inline">
            About
          </Link>
          <Link href="/Services" className="block mt-4 md:inline md:mt-0">
            Services
          </Link>
          <Link href="/Contact" className="block mt-4 md:inline md:mt-0">
            Contact
          </Link>
        </div>

        <div className="flex flex-col ml-10 md:flex-row justify-center items-center mt-10 mb-5">
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
      </div>

      <h1 className="font-bold">
        © {new Date().getFullYear()} Getahun Fikade. All rights reserved.
      </h1>
    </footer>
  );
}