import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const SloganItemTop = ({ text }: { text: string }) => (
  <div className="mx-4 w-fit min-w-max ">
    <h1 className="text-lg lg:text-2xl font-bold text-white !break-keep">
      {text}
    </h1>
  </div>
);

const SloganItemBottom = ({ text }: { text: string }) => (
  <motion.div
    className="mx-4 w-fit min-w-max"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 100, opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-lg lg:text-2xl font-bold text-white !break-keep">
      {text}
    </h1>
  </motion.div>
);

export const Slogan = () => {
  const { width = 0 } = useViewport();
  const [currentIdx, setCurrentIdx] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % sloganBottom.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center bg-secondary p-8 space-x-6">
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
              <SloganItemTop text={slogan} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center bg-brand p-6 lg:p-0">
        {width <= 768 && (
          <motion.div className="relative space-x-3 h-8 overflow-hidden">
            <AnimatePresence>
              <motion.div
                key={currentIdx}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text:md md:text-lg lg:text-2xl font-bold text-white !break-keep">
                  {sloganBottom[currentIdx]}
                </h1>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}

        {width > 768 && (
          <div className="flex items-center justify-center bg-brand p-8 py-3">
            {sloganBottom.map((slogan, idx) => (
              <div key={idx} className="flex items-center ">
                <Coffee
                  size={20}
                  color="white"
                  className={cn({ hidden: idx === 0 })}
                />
                <SloganItemTop text={slogan} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
