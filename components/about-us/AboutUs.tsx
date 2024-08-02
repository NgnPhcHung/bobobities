"use client";

import Image from "next/image";

export const AboutUs = () => {
  return (
    <div className="flex h-screen justify-center w-screen bg-coffee">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full relative">
        <Image src="/images/aboutus.jpg" alt="about-us" fill />
      </div>
    </div>
  );
};
