"use client";

import { AboutCard } from "./AboutCard";

export const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen h-fit w-screen bg-brand md:p-12  ">
      <div className="w-full lg:w-[calc(100vw-30rem)] xl:w-[calc(100vw-50rem)]  2xl:w-[900px] mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-semibold relative after:contents-[''] after:absolute after:w-0 after:h-1 after:bg-primary/40 after:bottom-0 after:left-0 after:transition-width after:duration-300 hover:after:w-full py-4">
          About Us
        </h1>
        <AboutCard />
      </div>
    </div>
  );
};
