import { cn } from "@lib/utils";
import { MenuOptions } from "./MenuOptions";
import { Button } from "@components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { NearestShop } from "@components/NearestShop";

export const MenuSection = () => {
  return (
    <div className="relative flex flex-col w-full md:p-4 md:pt-12 lg:p-10 py-20 space-y-10 bg-brand/20">
      <div className="w-full lg:w-[calc(100vw-30rem)] xl:w-[calc(100vw-50rem)] mx-auto flex flex-col items-center justify-center mt-2 lg:mt-12">
        <div
          className={cn(
            "relative w-full ",
            "before:contents=[''] before:w-1/2 before:absolute before:h-1 before:bg-primary before:top-1/2 before:left-0",
            "after:contents=[''] after:w-1/2 after:absolute after:h-1 after:bg-primary after:top-1/2 after:right-0"
          )}
        >
          <div className="size-24 rounded-full bg-brand flex items-center justify-center font-semibold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-start text-lg md:text-xl ">
            Menu
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-5 md:pt-15">
        <p className="text-lg md:text-xl lg:text-4xl uppercase font-bold text-center">
          With so much to choose from,
        </p>
        <p className="text-lg md:text-xl lg:text-4xl uppercase font-bold text-center">
          your ideal coffee is just a click away
        </p>
      </div>
      <MenuOptions />

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="font-bold rounded-2xl w-fit border lg:border-0 hover:border border-primary self-center"
            size="lg"
          >
            Browse All Products
          </Button>
        </DialogTrigger>
        <NearestShop />
      </Dialog>
    </div>
  );
};
