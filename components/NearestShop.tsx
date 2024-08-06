import Link from "next/link";
import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export const NearestShop = () => {
  return (
    <DialogContent className="z-[99999]">
      <DialogHeader>
        <DialogTitle>Choose your nearest shop</DialogTitle>
        <DialogDescription asChild>
          <div className="space-y-4">
            <div className=" flex items-center flex-col">
              <Link
                href="https://www.clover.com/online-ordering/bobo-bites-arlington"
                target="_blank"
              >
                <Button id="arlington">Arlington Texas</Button>
              </Link>
            </div>

            <div className=" flex items-center flex-col">
              <Link
                href="https://www.clover.com/online-ordering/bobo-bites-keller"
                target="_blank"
              >
                <Button id="keller">Keller Texas</Button>
              </Link>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};
