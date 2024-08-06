import Link from "next/link";
import { FooterCard, FooterCardProps } from "./FooterCard";
import { Clock, Facebook, Instagram, Mail, Map } from "lucide-react";
import { Button } from "@components/ui/button";

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
        {
          title: "841 NORTH TARRANT PARKWAY, KELLER TEXAS",
          url: "https://maps.app.goo.gl/6R9apD5qfQemkTag9",
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
    <div className="flex flex-col md:flex-row items-center justify-center py-6 mt-4 lg:space-x-10 lg:space-y-0 space-y-6 bg-brand w-full">
      {footerData.map((footer) => (
        <FooterCard {...footer} key={footer.id} />
      ))}
      <div className="space-y-3 flex flex-col items-center ml-4">
        <Button
          size="icon"
          className="rounded-full bg-[#4267B2] size-8"
          asChild
        >
          <Link href="https://www.facebook.com/eatbobobites/" target="_blank">
            <Facebook className=" text-white size-4" />
          </Link>
        </Button>
        <Button
          size="icon"
          className="rounded-full bg-[#E1306C] size-8"
          asChild
        >
          <Link href="https://www.instagram.com/eatbobobites" target="_blank">
            <Instagram className="size-4 text-white" />
          </Link>
        </Button>
        <Link href="mailto:eatbobobites@gmail.com">
          <Button
            size="icon"
            className="rounded-full bg-primary-foreground size-8"
          >
            <Mail className="size-4 text-primary" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
