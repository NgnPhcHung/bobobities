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
import { Dialog, DialogTrigger } from "./ui/dialog";
import { NearestShop } from "./NearestShop";
import { Label } from "./ui/label";

interface NavItem {
  name: string;
  url: string;
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
      name: "About Us",
      url: "/about-us",
    },
  ];
  const keller = [
    { name: "Coffee", url: "/menus/keller/coffee" },
    { name: "Tea", url: "/menus/keller/tea" },
    { name: "Bites", url: "/menus/keller/bites" },
    { name: "Other", url: "/menus/keller/other" },
  ];

  const arlington = [
    { name: "Coffee", url: "/menus/arlington/coffee" },
    { name: "Tea", url: "/menus/arlington/tea" },
    { name: "Bites", url: "/menus/arlington/bites" },
    { name: "Other", url: "/menus/arlington/other" },
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
                  <Link href={item.url}>
                    <div
                      className="font-bold text-2xl text-primary/85 text-start"
                      onClick={handleClose}
                    >
                      {item.name}
                    </div>
                  </Link>
                </div>
              ))}
              <Label className="text-2xl border-0 border-b-[1px] border-solid border-gray-400">Arlington Texas</Label>

              {arlington.map((item) => (
                <div key={item.name}>
                  <Link href={item.url}>
                    <div
                      className="font-bold text-xl text-primary/85 text-start"
                      onClick={handleClose}
                    >
                      {item.name}
                    </div>
                  </Link>
                </div>
              ))}
              <Label className="text-2xl border-0 border-b-[1px] border-solid border-gray-400">Keller Texas</Label>

              {keller.map((item) => (
                <div key={item.name}>
                  <Link href={item.url}>
                    <div
                      className="font-bold text-xl text-primary/85 text-start"
                      onClick={handleClose}
                    >
                      {item.name}
                    </div>
                  </Link>
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
