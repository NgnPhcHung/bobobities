import Link from "next/link";
import { FooterCard, FooterCardProps } from "./FooterCard";
import { Clock, Map } from "lucide-react";

const JOIN_TEAM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfcWUwfzN32AfHTk2LzmsxWTGrxhOoEUEGdC37sNczZJatx-Q/viewform";

export const Footer = () => {
  const footerData: FooterCardProps[] = [
    {
      id: 1,
      title: "BOBO BITES",
      description: [
        {
          title: "Contact",
          url: "/contact",
        },
        {
          title: "Join Our Team",
          url: JOIN_TEAM_URL,
        },
      ],
    },
    {
      id: 2,
      title: (
        <div className="flex items-center space-x-2">
          <div>Our Location</div>
          <Map className="size-5" />
        </div>
      ),
      description: [
        {
          title: "4201 W Green Oaks Blvd Unit 416 Arlington, TX 76016",
          url: "https://www.google.com/maps/place/BoBo+Bites/@32.6806038,-97.1957067,17z/data=!4m6!3m5!1s0x864e654deca324a3:0xe6aba4b8091b5ac9!8m2!3d32.6806038!4d-97.1957067!16s%2Fg%2F11v9v_c9x6?hl=en&entry=tts&shorturl=1",
        },
      ],
    },
    {
      id: 3,
      title: (
        <div className="flex items-center space-x-2">
          <div>Business Hours</div>
          <Clock className="size-5" />
        </div>
      ),
      description: [
        {
          title: (
            <div className="flex flex-col items-center justify-center">
              <div>Mon – Sat: 10am – 9pm</div>
              <div>Sun: 10am – 8pm</div>
            </div>
          ),
        },
      ],
    },
  ];


  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-6 mt-4 lg:space-x-10 lg:space-y-0 space-y-6 bg-brand w-full">
      {footerData.map((footer) => (
        <FooterCard {...footer} key={footer.id} />
      ))}
    </div>
  );
};
