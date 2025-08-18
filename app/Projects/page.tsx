"use client";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center text-3xl font-bold mb-4">My Project</div>
      <div className="relative w-full max-w-2xl h-auto">
        <Image
          alt="image of the zemenay ed website screenshot"
          width={800}
          height={600}
          src="/zemenayed.png"
          className="object-cover rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
};

export default Page;
