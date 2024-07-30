import Link from "next/link";
import { ReactNode } from "react";

export interface FooterCardProps {
  id: number;
  icon?: ReactNode;
  title: ReactNode | string;
  description: { title: string | ReactNode; url?: string }[];
}

export const FooterCard = ({ description, title, icon }: FooterCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-fit max-w-72 lg:w-80">
      {icon}
      <div className="font-semibold ">{title}</div>
      {description.map((des, index) =>
        des.url ? (
          <Link href={des.url} target="_blank" key={index}>
            <div className="underline text-center">{des.title}</div>
          </Link>
        ) : (
          <div key={index}>{des.title}</div>
        )
      )}
    </div>
  );
};
