import React, { FC, useState } from "react";
import { motion } from "framer-motion";

interface BurgerButtonProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const BurgerButton: FC<BurgerButtonProps> = ({ isOpen, setIsOpen }) => {
  const topBunVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 6 },
  };
  const meatVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottomBunVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -10 },
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col justify-around size-6 bg-transparent border-none cursor-pointer focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <motion.span
        variants={topBunVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="block w-full h-1 bg-brand"
        transition={{ duration: 0.5 }}
      />
      <motion.span
        variants={meatVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="block w-full h-1 bg-brand"
        transition={{ duration: 0.5 }}
      />
      <motion.span
        variants={bottomBunVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="block w-full h-1 bg-brand"
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default BurgerButton;
