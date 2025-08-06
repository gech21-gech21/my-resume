"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center font-bold text-3xl mt-5 mb-8">
        About me
      </h1>

      <div className="flex flex-col sm:flex-row rounded-lg p-4 sm:p-0 overflow-hidden">
        <div className="relative h-64 w-64 mx-auto sm:mx-0 sm:ml-4 sm:mt-11 mb-6 sm:mb-0 animate-slideInLeft">
          <Image
            src="/getahun.jpg"
            alt="Getahun Fikade"
            width={500}
            height={550}
            className="object-cover rounded-lg shadow-md border-4 border-white"
            quality={80}
          />
        </div>

        <div className="p-4 sm:p-8 sm:ml-15 sm:w-1/2 animate-slideInRightLong">
          <p className="text-lg leading-relaxed">
            I'm Getahun Fikade, a Computer Science student at Debre Birhan
            University, Ethiopia, passionate about crafting user-centric digital
            experiences. As a full-stack developer, I leverage modern
            technologies like React, Tailwind CSS, and Node.js to build
            responsive web applications, RESTful APIs, and scalable solutions.
            My journey in tech is driven by a curiosity to solve real-world
            problems through code. I've developed multiple projects—from dynamic
            web apps to intuitive interfaces—always prioritizing clean
            architecture and optimal performance. Beyond coursework, I actively
            explore AI/ML and contribute to tech communities, believing
            collaborative learning accelerates innovation.
          </p>
        </div>
      </div>
    </div>
  );
}