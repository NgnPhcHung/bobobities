import { PopularCard } from "./PopularCard";
import { Rotator } from "./Rotator";

export const PopularChoice = () => {
  const variants = {
    initial: {},
    selected: {},
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center relative">
      <PopularCard />
      <PopularCard />
      <PopularCard />

      <Rotator />
    </div>
  );
};
