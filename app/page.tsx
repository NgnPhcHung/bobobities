"use client";

import { HeroSection } from "@components/hero-section";
import { MenuSection } from "@components/menu-section";
import { PopularChoice } from "@components/popular-choice/PopularChoice";

export default function HomePage() {
  return (
    <div className="w-screen">
      <HeroSection />
      <PopularChoice />
    </div>
  );
}
