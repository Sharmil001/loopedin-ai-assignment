import "./globals.css";
import type { Metadata } from "next";
import Provider from "@/lib/Provider";
import { Open_Sans } from "@next/font/google";
import Navbar from "@/components/navabar/Navbar";

const openSans = Open_Sans({
  weight: ["400", "600", "800"], // font weights
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Users App",
  description: "Get a list of users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${openSans.className} bg-[#f7faff]`}>
          <Navbar />
          {children}
        </body>
      </Provider>
    </html>
  );
}
