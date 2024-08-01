"use client";

import { Banner } from "@components/banner";
import { HeroSection } from "@components/hero-section";
import { MenuSection } from "@components/menu-section";
import { PopularChoice } from "@components/popular-choice/PopularChoice";
import { Slogan } from "@components/slogan/Slogan";

export default function HomePage() {
  return (
    <div className="w-screen">
      <HeroSection />
      <Slogan />
      <Banner />
      <PopularChoice />
      <MenuSection />
    </div>
  );
}
