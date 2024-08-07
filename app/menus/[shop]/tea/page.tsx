"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page({ params }: { params: { shop: string } }) {
  const {} = useRouter();
  const { shop } = params;

  return (
    <div className="relative w-screen h-screen">
      <Image
      src={
        shop === "arlington"
          ? "/images/menus/2.jpg"
          : "/images/menus/keller_tea.png"
      }
      fill
      className="object-contain"
      alt="1"
    />
    </div>
  );
}
