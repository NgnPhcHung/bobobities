import React from "react";
import { motion } from "framer-motion";
import useViewport from "@hooks/useViewport";
import { Coffee } from "lucide-react";
import { cn } from "@lib/utils";

const slogans = [
  "Espresso Yourself",
  "Steeped in Tradition",
  "Your Cup of Inspiration",
  "Brewed for Thought",
  "Where Good Days Begin",
];

const sloganBottom = [
  "Sip into Something Comfortable",
  "Grounds for Celebration",
  "Life Begins After Coffee",
  "Stay Grounded",
  "Better Latte Than Never",
];

const SloganItem = ({ text }: { text: string }) => (
  <div className="mx-4 w-fit ">
    <h1 className="text-2xl font-bold text-white !break-keep">{text}</h1>
  </div>
);

export const Slogan = () => {
  const { width = 0 } = useViewport();

  const sliderVariants = {
    animate: {
      x: [-width, width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
          type: "tween",
        },
      },
    },
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-primary p-8 space-x-6">
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate="animate"
            variants={sliderVariants}
          >
            {slogans.map((slogan, idx) => (
              <div key={idx} className="flex items-center ">
                <Coffee
                  size={20}
                  color="white"
                  className={cn({ hidden: idx === 0 })}
                />
                <SloganItem text={slogan} />
              </div>
            ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center bg-brand p-8">
        {sloganBottom.map((slogan, idx) => (
          <div key={idx} className="flex items-center ">
            <Coffee
              size={20}
              color="white"
              className={cn({ hidden: idx === 0 })}
            />
            <SloganItem text={slogan} />
          </div>
        ))}
      </div>
    </div>
  );
};
