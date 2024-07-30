import { cn } from "@lib/utils";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

export interface MenuCardProps {
  id: number;
  src: string;
  title: string;
  background: string;
  delay: number;
  initial: {
    x: number;
  };
  to: {
    x: number;
  };
}

export const MenuCard = ({
  delay,
  src,
  title,
  background,
  initial,
  to,
}: MenuCardProps) => {
  return (
    <motion.div
      initial={{
        x: initial.x,
        opacity: 0,
      }}
      whileInView={{
        x: to.x,
        opacity: 1,
        transition: {
          duration: 0.75,
          delay: delay,
        },
      }}
      className={cn(
        "h-[360px] lg:w-72 w-full rounded-3xl relative group",
        background
      )}
    >
      <motion.div
        className="h-[320px] w-full absolute "
        initial={{
          y: -30,
        }}
        whileHover={{
          y: -45,
          transition: {
            duration: 0.3,
            ease: easeInOut,
          },
        }}
      >
        <Image
          src={src}
          alt={title}
          fill
          className="bg-cover rounded-3xl transition-all duration-1000 ease-in-out "
        />
      </motion.div>
      <div className="text-3xl lg:text-4xl font-semibold h-fit absolute bottom-0 left-0 text-white p-4">
        {title}
      </div>
    </motion.div>
  );
};
