import { cn } from "@lib/utils";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export const NavItem = ({
  children,
  name,
}: PropsWithChildren & { name: string }) => {
  const path = usePathname();
  return (
    <div
      className={cn(
        "relative after:contents-[''] after:absolute after:w-0 after:h-[2px] after:bg-primary/40 after:bottom-0 after:left-0 after:transition-width after:duration-300 hover:after:w-full w-fit mx-3",
        {
          "font-semibold": path === name,
        }
      )}
      role="button"
    >
      {children}
    </div>
  );
};
