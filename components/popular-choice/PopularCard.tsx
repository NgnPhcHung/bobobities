"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import useViewport from "@hooks/useViewport";

export const PopularCard = () => {
  const { width = 0, height = 0 } = useViewport();
  const videoSource = [
    "/videos/Crack Series.mp4",
    "/videos/Crack Series (1).mp4",
    "/videos/Crack Series (3).mp4",
    "/videos/Crack Series (4).mp4",
  ]
  return (
    <Carousel className="w-[100vw-25rem] mx-10">
      <CarouselContent>
        {videoSource.map((source, index) => (
          <CarouselItem key={index}>
            <video
              width={width}
              height={height - 400}
              loop
              muted
              autoPlay
              preload="none"
            >
              <source src={source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
