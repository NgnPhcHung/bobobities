import Image from "next/image";
import { FC } from "react";

export interface MenuCardItemProps {
  title: string;
  receipt: string;
  backgroundImage: string;
}

export const MenuCardItem: FC<MenuCardItemProps> = (data) => {
  return (
    <div className="mobileL:w-48 mobileM:w-4/5 md:w-64 lg:w-80 flex flex-col justify-center space-y-2 shadow-xl hover:shadow-2xl transition-all duration-200 ease bg-primary-foreground border border-solid border-white rounded-xl">
      <div className="relative w-full h-44 md:h-56 group rounded-xl">
        <Image
          src={data.backgroundImage}
          fill
          alt={data.title}
          className="transition-all duration-200 ease object-cover p-4 rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-center text-primary h-20 rounded-3xl">
        <div className="p-4">
          <p className="font-bold">{data.title}</p>
          <p className="lg:text-md text-sm">{data.receipt}</p>
        </div>
      </div>
    </div>
  );
};
