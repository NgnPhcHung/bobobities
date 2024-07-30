"use client";

import Link from "next/link";

import useViewport from "@hooks/useViewport";
import Image from "next/image";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";
import { Button } from "./ui/button";

export function Navbar() {
  const { width = 0, height } = useViewport();

  return (
    <div className="w-full flex items-center justify-between p-1 px-4 bg-white fixed top-0 left-0 z-50">
      <Link href="/">
        <div className="rounded-full self-start justify-self-start size-20 relative">
          <Image
            src="/images/logos/logo_1.PNG"
            alt="app-banner-hero"
            fill
            className="bg-contain rounded-full"
          />
        </div>
      </Link>

      {width >= 769 && <NavbarDesktop />}

      {width <= 769 && <NavbarMobile />}

      <Link
        href="https://www.clover.com/online-ordering/bobo-bites-arlington"
        target="_blank"
      >
        <Button variant="default" className="rounded-xl">
          Order pickup
        </Button>
      </Link>
    </div>
  );
}
