import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./footer";

export const AppShell = ({ children }: PropsWithChildren) => {
  return (
    <div className="items-center justify-center flex flex-col overflow-hidden ">
      <Navbar />
      <div className="mt-24 h-full ">{children}</div>
      <Footer />
    </div>
  );
};
