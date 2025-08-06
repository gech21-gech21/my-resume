"use client";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1      className="font-bold text-center text-4xl mt-6 mb-10  ">My Skills</h1>
      <p className="font-bold text-center font-3xl mt-5 mb-9">I have some skills through my Experiences listed below.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:border-2 hover:border-blue-700 bg-green-50  hover:bg-black  text-black hover:text-white transition-all duration-300">
          <Image src="/react.png" width={50} height={40} alt="React" />
          <p className="mt-2 text-sm font-bold">React</p>
          <h2>
            Exprience in buliding responsive web site and components using
            react.
          </h2>
        </div>

        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:border-2 hover:border-blue-700 bg-green-50  hover:bg-black  text-black hover:text-white transition-all duration-300">
          <Image src="/css.png" width={50} height={40} alt="CSS" />
          <p className="mt-2 text-sm font-medium">CSS</p>
          <h2>Familiar in CSS for styling responsive and modern layout  using Tailwind css framework.</h2>
        </div>

        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:border-2 hover:border-blue-700 bg-green-50  hover:bg-black  text-black hover:text-white transition-all duration-300">
          <Image src="/js.png" width={50} height={40} alt="JavaScript" />
          <h1 className="mt-2 text-sm font-medium">JavaScript</h1>
          <h2>skilled in javascript  for building dynamic and interactive  web applications.</h2>
        </div>

        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:border-2 hover:border-blue-700 bg-green-50  hover:bg-black  text-black hover:text-white transition-all duration-300">
          <Image src="/node.png" width={50} height={40} alt="JS Framework" />
          <p className="mt-2 text-sm font-bold">Node.js</p>
          <h2> skilled in Node.js to building server-side application and APIs using NExt.js Framework. </h2>
        </div>

        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:border-2 hover:border-blue-700 bg-green-50  hover:bg-black  text-black hover:text-white transition-all duration-300">
          <Image src="/db.jpg" width={50} height={40} alt="Database" />
          <p className="mt-2 text-sm font-medium">Database</p>
          <h2>Familiar with SQlite db with prisma framework to handle database requirement.</h2>
        </div>

        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:border-2 hover:border-blue-700 bg-green-50  hover:bg-black  text-black hover:text-white transition-all duration-300">
          <Image src="/github.png" width={50} height={40} alt="GitHub" />
          <p className="mt-2 text-sm font-bold"> Git & GitHub</p>.
          <h2>
            Somewhat skilled using Git and Github for version control and
            collaboration respectfuly{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
