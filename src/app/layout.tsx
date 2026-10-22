import type { Metadata } from "next";
import { Geist_Mono, Kurale } from "next/font/google";
import "./globals.css";
import { APP_FULL_NAME, APP_TAGLINE } from "@/lib/app";

const kurale = Kurale({
  variable: "--font-kurale",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_FULL_NAME,
  description: APP_TAGLINE,
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${kurale.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
