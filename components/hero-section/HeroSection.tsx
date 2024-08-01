import { MenuCard, MenuCardProps } from "./MenuCard";
import { StaggeredText } from "./StaggeredText";
import { Video } from "./Video";

const menu: MenuCardProps[] = [
  {
    id: 1,
    src: "/images/croffles/Facetune_05-01-2024-18-56-09 2.jpg",
    title: "Croffles",
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
    src: "/images/drinks_2/Ice Baileys Coffee Instagram Post Template_1.PNG",
    title: "Coffees",
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
    title: "Other...",
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
        <div className="font-semibold self-start lg:self-center pl-4  capitalize text-2xl lg:text-4xl md:mb-12 mb-6">
          Here We <span className="text-brand underline">Have:</span>
        </div>

        <div className="flex flex-col sm:space-y-0 space-y-10 sm:flex-row items-center lg:items-start justify-center gap-4 h-full w-full px-3">
          {menu.map((item) => (
            <MenuCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
