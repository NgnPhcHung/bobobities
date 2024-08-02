import { MenuCard, MenuCardProps } from "./MenuCard";
import { StaggeredText } from "./StaggeredText";
import { Video } from "./Video";

const menu: MenuCardProps[] = [
  {
    id: 1,
    src: "/images/drinks_2/Facetune_19-11-2023-23-19-57.jpg",
    title: "Coffee",
    background: "bg-coffee",
    delay: 0.25,
    to: {
      x: 0,
    },
    initial: {
      x: 30,
    },
  },
  {
    id: 2,
    src: "/images/drinks_1/Facetune_07-09-2023-00-09-41.jpg",
    title: "Tea",
    background: "bg-brand",
    delay: 0,
    to: {
      x: 0,
    },
    initial: {
      x: 0,
    },
  },
  {
    id: 3,
    src: "/images/muffins_3/IMG_6067.jpg",
    title: "Small Bites",
    background: "bg-coffee",
    delay: 0.5,
    to: {
      x: 0,
    },
    initial: {
      x: -30,
    },
  },
];

export const HeroSection = () => {
  return (
    <div className="w-full min-h-fit overflow-hidden relative flex flex-col items-center justify-center space-y-10 mb-5 bg-primary-foreground]">
      <Video />

      <div className="flex items-center space-x-1">
        <StaggeredText />
        <span className="text-4xl sm:text-7xl md:text-8xl text-brand">!</span>
      </div>

      <div className="flex items-center space-y-4 flex-col w-full">
        <div className="flex flex-col sm:space-y-0 space-y-10 sm:flex-row items-center lg:items-start justify-center gap-4 h-full w-full px-3">
          {menu.map((item) => (
            <MenuCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
