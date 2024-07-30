"use client";

import { HeroSection } from "@components/hero-section";
import { MenuSection } from "@components/menu-section";
import { Slogan } from "@components/slogan/Slogan";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Slogan />
      <MenuSection />
    </div>
  );
}
