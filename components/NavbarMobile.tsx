import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BurgerButton from "./Burger";
import { Button } from "./ui/button";
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
      name: "Menus",
      children: [
        { name: "Coffee", url: "/menus/coffee" },
        { name: "Tea", url: "/menus/tea" },
        { name: "Smoothie", url: "/menus/smoothie" },
        { name: "Kids", url: "/menus/kids" },
        { name: "Other", url: "/menus/other" },
      ],
    },
    {
      name: "About Us",
      url: "/about-us",
    },
    {
      name: "Contact Us",
      url: "/contact-us",
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
      <DrawerContent className="right-0">
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
                  <div className="font-bold text-2xl text-primary/85 text-start">
                    {item.name}
                  </div>
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
            <Link
              href="https://www.clover.com/online-ordering/bobo-bites-arlington"
              target="_blank"
            >
              <Button
                variant="default"
                size="lg"
                className="w-full mt-6 justify-self-end"
              >
                Order pickup
              </Button>
            </Link>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};
