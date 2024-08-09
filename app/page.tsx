import HeroSection from "@/components/sections/hero";
import InfoSection from "@/components/sections/infoSection";
import Navbar from "@/components/sections/navbar";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr Ngozo | The Herbalist</title>
        <meta name="description" content="A good herbalist for you" />
        <meta name="keywords" content="herbalist" />
      </Head>
    
    <HeroSection />
    <InfoSection />
    </>
  );
}
