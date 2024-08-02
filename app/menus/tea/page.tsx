"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import Image from "next/image";
import { useState } from "react";

export default function TeaPage() {
  const [tab, setTab] = useState<"Arlington" | "Keller">("Arlington");
  return (
    <Tabs defaultValue="Arlington">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Arlington" onClick={() => setTab("Arlington")}>
          Arlington
        </TabsTrigger>
        <TabsTrigger value="Keller" onClick={() => setTab("Keller")}>
          Keller
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value={tab}
        className="w-[90vw] h-[80vw] flex justify-center relative"
      >
        <Image
          src={
            tab === "Arlington"
              ? "/images/menus/2.jpg"
              : "/images/menus/keller_tea.png"
          }
          fill
          className="object-contain"
          alt="1"
        />
      </TabsContent>
    </Tabs>
  );
}
