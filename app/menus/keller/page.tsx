"use client";
import { Label } from "@components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import Image from "next/image";
import { useState } from "react";
enum Types {
  Coffee = "coffee",
  Bites = "bites",
  Tea = "tea",
  Other = "other",
}

const typeShop: Record<Types, any> = {
  bites: "/images/menus/keller_milktea.png",
  coffee: "/images/menus/keller_coffee.png",
  other: "/images/menus/keller_special.png",
  tea: "/images/menus/keller_tea.png",
};

export default function Page() {
  const [tab, setTab] = useState<Types>(Types.Coffee);

  return (
    <div className="w-full h-full">
      <Tabs defaultValue={Types.Coffee}>
        <TabsList className="grid w-full grid-cols-4">
          {Object.keys(Types).map((key) => (
            <TabsTrigger
              key={key}
              value={Types[key as keyof typeof Types]}
              onClick={() => setTab(Types[key as keyof typeof Types])}
            >
              {key}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent
          value={tab}
          className="w-[90vw] h-[80vw] flex justify-center relative"
        >
          <Image src={typeShop[tab]} fill className="object-contain" alt="1" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
