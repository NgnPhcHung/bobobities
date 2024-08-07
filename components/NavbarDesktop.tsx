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
import { NavItem } from "./NavItem";
import { Label } from "./ui/label";

export const NavbarDesktop = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">
            <NavItem name="/">Home</NavItem>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] divide-x-[1px] divide-solid divide-gray-400">
              <div className="col-span-1 ">
                <Label className="text-lg">Arlington Texas</Label>
                <ListItem href="/menus/arlington/coffee" title="Coffee"></ListItem>
                <ListItem href="/menus/arlington/tea" title="Tea"></ListItem>
                <ListItem href="/menus/arlington/bites" title="Bites"></ListItem>
                <ListItem href="/menus/arlington/other" title="Other"></ListItem>
              </div>
              <div className="col-span-1 pl-3">
                <Label className="text-lg">Keller Texas</Label>
                <ListItem href="/menus/keller/coffee" title="Coffee"></ListItem>
                <ListItem href="/menus/keller/tea" title="Tea"></ListItem>
                <ListItem href="/menus/keller/bites" title="Bites"></ListItem>
                <ListItem href="/menus/keller/other" title="Other"></ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about-us">
            <NavItem name="/about-us">About Us</NavItem>
          </Link>
        </NavigationMenuItem>
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
          <div className="text-md leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
