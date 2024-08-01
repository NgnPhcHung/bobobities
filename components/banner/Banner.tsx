import { ImageCard } from "./ImageCard";

export const Banner = () => {
  return (
    <div className="bg-primary-foreground px-4 w-full p-6 flex flex-col items-center">
      <div className="text-2xl lg:text-6xl 2xl:8xl text-center uppercase font-bold">
        &ldquo; More than just coffee,
      </div>
      <div className="text-2xl lg:text-6xl 2xl:8xl text-center uppercase font-bold">
        Welcome to your second home &rdquo;
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 gap-x-6 mt-10 w-/4/5 lg:max-w-[1024px] md:max-w-xl">
        <ImageCard  src="/images/banner/banner_img.jpg" text="comfortable"/>
        <ImageCard src="/images/banner/banner_desert.jpg" text="high quality"/>
        <ImageCard src="/images/banner/banner_drinks.jpg" text="recharge"/>
      </div>
    </div>
  );
};
