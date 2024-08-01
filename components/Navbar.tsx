"use client";

import useViewport from "@hooks/useViewport";
import { useEffect, useState } from "react";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import useScroll from "@hooks/useScroll";
import { cn } from "@lib/utils";

export function Navbar() {
  const { width = 0 } = useViewport();
  const scrollY = useScroll();
  const isScrolled = scrollY > 0;

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "w-full flex items-center justify-between p-1 px-4 bg-white fixed top-0 left-0 z-50",
        {
          "bg-opacity-80 backdrop-blur-md": isScrolled,
        }
      )}
    >
      <Link href="/">
        <div
          className={cn(
            "rounded-full self-start justify-self-start size-20 relative",
            {
              "size-16": isScrolled,
            }
          )}
        >
          <Image
            src="/images/logos/logo_1.PNG"
            alt="app-banner-hero"
            fill
            className="bg-contain rounded-full"
          />
        </div>
      </Link>

      {isMounted && width <= 769 && <NavbarMobile />}
      {isMounted && width >= 769 && <NavbarDesktop />}

      {isMounted && width >= 769 && (
        <Link
          href="https://www.clover.com/online-ordering/bobo-bites-arlington"
          target="_blank"
        >
          <Button variant="default" className="rounded-xl">
            Order pickup
          </Button>
        </Link>
      )}
    </div>
  );
}
