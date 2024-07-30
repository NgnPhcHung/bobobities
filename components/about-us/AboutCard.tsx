import Image from "next/image";
import { motion } from "framer-motion";

export const AboutCard = () => {
  return (
    <div className="md:space-y-14 space-y-2">
      <div className="flex items-center space-x-4 border-solid border-primary/30 border-b-0 border-r-0 rounded-br-lg border-2 p-5">
        <Image
          src="/images/logos/logo_3.PNG"
          alt="about_1"
          width={150}
          height={150}
          className="bg-contain rounded-sm hidden md:block"
        />
        <div className="leading-relaxed mt-6">
          People always say that everything happens for a reason. That there is
          a silver lining in every thunderstorm. Four years ago, four women from
          four different backgrounds found each other under the difficult
          circumstances of the pandemic. A time where the world stopped, but our
          dreams continued. We shared a desire to create sweet treats that
          represent our heritage and culture. Our philosophy is to spread love
          one bite at a time.
        </div>
      </div>

      <div className="flex items-center justify-start md:justify-end rounded-br-none p-5">
        <div className="leading-relaxed mt-6 md:text-right md:w-72 text-wrap">
          The inception of BOBO Bites was born from a sketch on a napkin in a
          home kitchen during the pandemic and has now materialized into our
          first brick and mortar store in Arlington.
        </div>
        <motion.div
          initial={{
            rotate: "10deg",
            x: 10,
          }}
          whileHover={{
            rotate: ["5deg", "-5deg", "2deg", 0],
          }}
        >
          <Image
            src="/images/drinks_1/IMG_6068.JPG"
            alt="about_2"
            width={350}
            height={350}
            className="bg-contain rounded-sm hidden md:block ml-6"
          />
        </motion.div>
      </div>

      <div className="flex items-center space-x-4 border-solid border-primary/30 border-t-0 border-l-0 rounded-br-lg border-2 p-5">
        <Image
          src="/images/muffins_3/IMG_6135.JPG"
          alt="about_2"
          width={200}
          height={200}
          className="bg-contain rounded-sm hidden md:block mr-7 "
        />
        <div className="leading-relaxed mt-6 w-96">
          BOBO Bites strives to recreate, re-imagine, and redefine what bubble
          tea, coffee, and Vietnamese sweet treats can be. Come join us and be
          apart of the BOBO Bites family. Calling all Biters!
        </div>
      </div>
    </div>
  );
};
