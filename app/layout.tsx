import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { GoogleAnalyticsTracking } from "@/lib/google-tag-manager";
import WhatsappButton from "@/components/whatsapp-button";
import Script from "next/script";

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
    <head>
       {/* Google Tag Manager - HEAD */}
       <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P4ZC3TLB');
          `}
        </Script>
    </head>
      <body className={inter.className}>
                {/* Google Tag Manager (noscript) - BODY */}
                <noscript>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P4ZC3TLB"
            height="0"
            width="0"
            title="noscript"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
          </noscript>
        <GoogleAnalyticsTracking />
        <Navbar />
        {children}
        <WhatsappButton />
        <Footer />
        </body>
    </html>
  );
}
