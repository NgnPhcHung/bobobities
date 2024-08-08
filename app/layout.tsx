import { AppShell } from "@components/AppShell";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "BOBO Bities",
  description: "Coffee, Milk Tea, Fruit Tea, Smoothie, Mochi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/images/logos/logo_1.PNG"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={fontSans.className}>
        <main>
          <AppShell>{children}</AppShell>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
