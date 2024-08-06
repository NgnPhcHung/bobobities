"use client";


import Image from "next/image";
import { PopularCard } from "./PopularCard";

export const PopularChoice = () => {

  return (
    <div className="w-full min-h-screen h-fit flex flex-col justify-center items-center relative p-8">
      <div className="w-full lg:w-[calc(100vw-30rem)] xl:w-[calc(100vw-50rem)] grid place-items-center  space-y-4">
        <div className="flex flex-col lg:flex-row">
        <Image
          src="/images/banner/banner_1.jpg"
          alt="about-us"
          className="object-cover  col-span-1"
          width={400}
          height={400}
        />
        <Image
          src="/images/banner/banner_2.jpg"
          alt="banner_2"
          className="object-center "
          width={400}
          height={200}
        />
        </div>
        <PopularCard />
      </div>
    </div>
  );
};
