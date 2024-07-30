import { cn } from "@lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export const NavbarDesktop = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-2 w-48">
              <ListItem href="/menus/coffee" title="Coffee"></ListItem>
              <ListItem href="/menus/tea" title="Tea"></ListItem>
              <ListItem href="/menus/other" title="Other"></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about-us">
            <Button variant="ghost">About Us</Button>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Button variant="ghost">Menu</Button>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Button variant="ghost">Contact us</Button>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <div className="space-x-3">
            <Button
              size="icon"
              className="rounded-full bg-[#4267B2] size-8"
              asChild
            >
              <Link
                href="https://www.facebook.com/eatbobobites/"
                target="_blank"
              >
                <Facebook className=" text-white size-4" />
              </Link>
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-[#E1306C] size-8"
              asChild
            >
              <Link
                href="https://www.instagram.com/eatbobobites"
                target="_blank"
              >
                <Instagram className="size-4 text-white" />
              </Link>
            </Button>

            <Button
              size="icon"
              className="rounded-full bg-primary-foreground size-8"
            >
              <Mail className="size-4 text-primary" />
            </Button>
          </div>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand hover:text-accent-foreground focus:bg-brand focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-md font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
