import { cn } from "@lib/utils";

export const MenuSection = () => {
  return (
    <div className="relative flex flex-col h-fit w-screen bg-primary-foreground p-10 my-10">
      <div className="w-full lg:w-[calc(100vw-30rem)] xl:w-[calc(100vw-50rem)] mx-auto flex flex-col items-center justify-center">
        <div
          className={cn(
            "relative w-full ",
            "before:contents=[''] before:w-1/2 before:absolute before:h-1 before:bg-primary before:top-1/2 before:left-0",
            "after:contents=[''] after:w-1/2 after:absolute after:h-1 after:bg-primary after:top-1/2 after:right-0"
          )}
        >
          <div className="size-24 rounded-full  bg-brand flex items-center justify-center text-xl font-semibold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-start">
            Menu
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center">
        <p className="text-2xl lg:text-4xl uppercase font-bold text-center">
          With so much to choose from,
        </p>
        <p className="text-2xl lg:text-4xl uppercase font-bold text-center">
          your ideal coffee is just a click away
        </p>
      </div>
      {/* <Receipt /> */}
    </div>
  );
};
