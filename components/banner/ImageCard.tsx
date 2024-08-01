import { motion } from "framer-motion";
import Image from "next/image";

interface ImageCardProps {
  text: string;
  src: string;
}

export const ImageCard = ({
    src, text
}: ImageCardProps) => {
  const variants = {
    initial: {
      y: 0,
    },
    hovered: {
      y: "-100%",
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="overflow-hidden relative w-72 h-96"
    >
      <motion.div
        variants={variants}
        transition={{
          duration: 1,
          ease: "backOut",
        }}
        className="absolute w-full h-full top-0 left-0 bg-primary/60 z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl uppercase font-semibold -rotate-90 text-white z-20 w-full text-center break-keep">
          {text}
        </div>
      </motion.div>

      <div className="relative w-full h-full">
        <Image
          alt="image-banner"
          fill
          className="object-cover"
          src={src}
        />
      </div>
    </motion.div>
  );
};
