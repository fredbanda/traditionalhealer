import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { GoogleAnalyticsTracking } from "@/lib/google-tag-manager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baba Ngozo | Traditional Healer",
  description: "The powerful herbalist that is helping people around the world inyanga sangoma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalyticsTracking />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
