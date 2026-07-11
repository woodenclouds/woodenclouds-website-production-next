import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Woodenclouds | Designing your digital future",
    template: "%s | Woodenclouds",
  },
  description:
    "Woodenclouds designs and builds digital products, technology solutions, and dedicated teams.",
  icons: {
    icon: "/assets/user/imgs/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.variable}>
      <body className="font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
