import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

export interface MenuCardItemProps {
  title: string;
  price: number;
  receipt: string;
  backgroundImage: string;
}

export const MenuCardItem: FC<MenuCardItemProps> = (data) => {
    return (
      <div className="mobileL:w-48 mobileM:w-4/5 md:w-64 lg:w-80 flex flex-col justify-center space-y-2 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 ease bg-primary-foreground">
        <div className="relative w-full h-44 md:h-56 group rounded-xl">
          <Image
            src={data.backgroundImage}
            fill
            alt={data.title}
            className="rounded-2xl transition-all duration-200 ease object-cover p-4"
          />
        </div>
        <div className="flex flex-col justify-end text-primary h-36 rounded-3xl">
          <div className="p-4">
            <p className="font-bold">{data.title}</p>
            <p className="lg:text-md text-sm">{data.receipt}</p>
          </div>
  
          <div className="rounded-tr-3xl rounded-tl-3xl self-center w-full md:w-1/2 bg-brand text-center">
            <div className="items-center justify-center space-x-2 flex py-3">
              <p className="font-bold">Order</p>
              <ShoppingBag />
            </div>
            <p>$ {data.price}</p>
          </div>
        </div>
      </div>
    );
  };
  