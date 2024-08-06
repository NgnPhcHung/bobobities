"use client";

import { NearestShop } from "@components/NearestShop";
import { Dialog, DialogTrigger } from "@components/ui/dialog";
import { MenuCard, MenuCardProps } from "./MenuCard";
import { Video } from "./Video";

const menu: MenuCardProps[] = [
  {
    id: 1,
    src: "/images/drinks_2/Facetune_19-11-2023-23-19-57.jpg",
    title: "Coffee",
    background: "bg-coffee",
    delay: 0.25,
    to: {
      x: 0,
    },
    initial: {
      x: 30,
    },
  },
  {
    id: 2,
    src: "/images/drinks_1/Facetune_07-09-2023-00-09-41.jpg",
    title: "Tea",
    background: "bg-brand",
    delay: 0,
    to: {
      x: 0,
    },
    initial: {
      x: 0,
    },
  },
  {
    id: 3,
    src: "/images/muffins_3/IMG_6067.jpg",
    title: "Small Bites",
    background: "bg-coffee",
    delay: 0.5,
    to: {
      x: 0,
    },
    initial: {
      x: -30,
    },
  },
];

export const HeroSection = () => {
  return (
    <div className="w-full min-h-fit overflow-hidden relative flex flex-col items-center justify-center space-y-10 mb-5">
      <Video />

      <div className="flex items-center space-x-1">
        <Dialog>
          <DialogTrigger asChild>
            <div
              className="bg-brand text-2xl lg:text-4xl p-3 px-8 lg:p-5 lg:px-14 rounded-3xl mb-4 "
              role="button"
            >
              Order now
            </div>
          </DialogTrigger>
          <NearestShop />
        </Dialog>
      </div>

      <div className="flex items-center space-y-4 flex-col w-full bg-[url('/images/NicePng_coffee-plant-png_4099885.png')] bg-repeat ">
        <div className="flex flex-col sm:space-y-0 space-y-10 sm:flex-row items-center lg:items-start justify-center gap-4 h-full w-full px-3">
          {menu.map((item) => (
            <MenuCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
