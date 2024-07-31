"use client";

import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import { useState } from "react";
import { MenuCardItem } from "./MenuCardItem";
import { ScrollArea } from "@components/ui/scroll-area";

enum MenuOpt {
  All = "All",
  Coffee = "Coffees",
  MilkTea = "Milk Teas",
  SpecialTea = " Special Teas",
}

const allData = [
  {
    title: "Test coffee",
    price: 4.99,
    receipt: "Coffee 50%, Milk 50%, total 190ml",
    backgroundImage: "/images/drinks_2/Facetune_19-11-2023-18-08-35.jpg",
  },
  {
    title: "Test coffee",
    price: 4.99,
    receipt: "Coffee 50%, Milk 50%, total 190ml",
    backgroundImage: "/images/drinks_2/Facetune_19-11-2023-18-08-35.jpg",
  },
  {
    title: "Test coffee",
    price: 4.99,
    receipt: "Coffee 50%, Milk 50%, total 190ml",
    backgroundImage: "/images/drinks_2/Facetune_19-11-2023-18-08-35.jpg",
  },
  {
    title: "Test coffee",
    price: 4.99,
    receipt: "Coffee 50%, Milk 50%, total 190ml",
    backgroundImage: "/images/drinks_2/Facetune_19-11-2023-18-08-35.jpg",
  },
  {
    title: "Test coffee",
    price: 4.99,
    receipt: "Coffee 50%, Milk 50%, total 190ml",
    backgroundImage: "/images/drinks_2/Facetune_19-11-2023-18-08-35.jpg",
  },
  {
    title: "Test coffee",
    price: 4.99,
    receipt: "Coffee 50%, Milk 50%, total 190ml",
    backgroundImage: "/images/drinks_2/Facetune_19-11-2023-18-08-35.jpg",
  },
];

export const MenuOptions = () => {
  const [selectedTab, setSelectedTab] = useState<MenuOpt>(MenuOpt.All);

  return (
    <div className="h-fit space-y-4 items-center flex flex-col w-full">
      <div className="grid grid-rows-2 grid-cols-2  gap-2 px-4 md:flex md:items-center md:justify-center md:space-x-4 w-full min-h-20">
        {Object.entries(MenuOpt).map(([key, value]) => (
          <Button
            size="lg"
            key={key}
            variant={selectedTab === value ? "default" : "outline"}
            onClick={() => setSelectedTab(value)}
            className={cn("font-semibold ", {
              "text-white hover:text-primary": selectedTab === value,
            })}
          >
            {value}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap w-full lg:max-w-[1024px] items-center justify-center gap-4">
        {allData.map((data, idx) => (
          <MenuCardItem {...data} key={idx} />
        ))}
      </div>
    </div>
  );
};
