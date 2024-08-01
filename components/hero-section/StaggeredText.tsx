import { motion } from "framer-motion";

const DURATION = 0.2;
const STAGGER = 0.025;
const STRING = [
  "W",
  "e",
  "l",
  "c",
  "o",
  "m",
  "e",
  ", ",
  "B",
  "i",
  "t",
  "e",
  "r",
  "s",
];
export const StaggeredText = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl sm:text-5xl md:text-6xl xl:text-8xl"
    >
      <div>
        {STRING.map((l, i) => {
          return (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-110%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block font-bold "
            >
              {l}
            </motion.span>
          );
        })}
      </div>

      <div className="absolute inset-0">
        {STRING.map((l, i) => {
          return (
            <motion.span
              key={i}
              variants={{
                initial: { y: "110%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block font-bold "
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};
