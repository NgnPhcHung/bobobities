import useViewport from "@hooks/useViewport";
import Image from "next/image";

export const Receipt = () => {
  const { width } = useViewport();
  const best = [
    {
      title: "Coco Pandan Latte",
      src: "/images/drinks_2/7F12ECC0-69DC-4748-AC9D-D350972C6562.JPEG",
    },
    {
      title: "Iced Coffee",
      src: "/images/drinks_2/Ice Baileys Coffee Instagram Post Template_1.PNG",
    },
    {
      title: "Thai Iced Green Tea",
      src: "/images/drinks_2/Facetune_19-11-2023-18-08-35.jpg",
    },
  ];

  return (
    <div className="bg-primary-foreground w-full mt-20">
      <div className="flex md:flex-row flex-col justify-center items-center md:space-y-0 space-y-4 md:space-x-4">
        {best.map((item) => (
          <div key={item.title} className="md:w-1/4 w-full">
            <Image
              alt={item.title}
              src={item.src}
              width={Math.floor(width / 1.2) || 250}
              height={100}
            />
            <div className="font-bold">{item.title}</div>
            <div>Homemade pandan syrup, coconut cream, pandan jelly</div>
          </div>
        ))}
      </div>
    </div>
  );
};
