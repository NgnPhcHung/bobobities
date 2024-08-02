"use client";

import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import { useState } from "react";
import { MenuCardItem } from "./MenuCardItem";
import { allData, coffee, tea, special } from "./datas";

enum MenuOpt {
  All = "All",
  Coffee = "Coffees",
  Tea = "Teas",
  Special = " Special",
}



const data = {
  [MenuOpt.All]: allData,
  [MenuOpt.Coffee]: coffee,
  [MenuOpt.Tea]: tea,
  [MenuOpt.Special]: special,
};

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
        {data[selectedTab].map((data, idx) => (
          <MenuCardItem {...data} key={idx} />
        ))}
      </div>
    </div>
  );
};
