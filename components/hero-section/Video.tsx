"use client";

import useViewport from "@hooks/useViewport";

export const Video = () => {
  const { width = 0, height = 0 } = useViewport();

  return (
    <video
      width={width}
      height={height - 400}
      loop
      muted
      autoPlay
      preload="none"
    >
      <source src="/videos/videoplayback.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};
