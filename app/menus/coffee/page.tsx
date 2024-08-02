import Image from "next/image";

export default function CoffeePage() {
  const mockData = {
    title: "Coffee",
    src: "/images/drinks_2/Ice Baileys Coffee Instagram Post Template.PNG",
  };
  return (
    <div className="w-full h-full flex flex-wrap gap-4 space-y-6 items-center justify-center">
      {Array.from({ length: 15 }).map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between relative md:size-72 w-48 h-56"
        >
          <div className="size-48 rounded-xl relative">
            <Image
              className="object-cover rounded-xl"
              fill
              alt="coffee_image"
              src={mockData.src}
            />
          </div>
          <div>
            <div className="font-semibold text-start">Hue Salted Coffee</div>
            <div className="font-semibold text-start text-brand">
              Milk coffee with salted sea cream
            </div>
            <div className="font-semibold text-start"> $3.64</div>
          </div>
        </div>
      ))}
    </div>
  );
}
