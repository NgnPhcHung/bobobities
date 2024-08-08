import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BurgerButton from "./Burger";
import { NearestShop } from "./NearestShop";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

interface NavItem {
  name: string;
  url?: string;
  children?: NavItem[];
}

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Menu",
      children: [
        {
          name: "Arlington",
          url: "/menus/arlington",
        },
        {
          name: "Keller",
          url: "/menus/keller",
        },
      ],
    },
    {
      name: "About Us",
      url: "/about-us",
    },
  ];
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Drawer direction="right" onClose={handleClose} open={isOpen}>
      <DrawerTrigger>
        <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </DrawerTrigger>
      <DrawerContent className="right-0 z-[9999]">
        <DrawerHeader>
          <DrawerTitle>
            <DrawerClose>
              <Button
                className="absolute top-5 right-5"
                variant="ghost"
                size="icon"
                onClick={handleClose}
              >
                <X className="size-7 text-brand font-bold" />
              </Button>
            </DrawerClose>
          </DrawerTitle>
          <DrawerDescription className="space-y-2 flex flex-col justify-between !h-[calc(100vh-200px)] ">
            <div className="h-fit space-y-5">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.url ? (
                    <Link href={item.url}>
                      <div
                        className="font-bold text-2xl text-primary/85 text-start"
                        onClick={handleClose}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ) : (
                    <div className="font-bold text-2xl text-primary/85 text-start">
                      {item.name}
                    </div>
                  )}
                  <div className="h-full flex flex-col w-full space-y-4 pl-6">
                    {item.children?.map((child) => (
                      <Link href={child.url || ""} key={child.name} passHref>
                        <div
                          className="w-full p-2 font-semibold text-xl !text-start cursor-pointer h-6"
                          onClick={handleClose}
                        >
                          {child.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full mt-6 justify-self-end"
                >
                  Order pickup
                </Button>
              </DialogTrigger>
              <NearestShop />
            </Dialog>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};
