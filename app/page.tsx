import HeroSection from "@/components/sections/hero";
import InfoSection from "@/components/sections/infoSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baba Ngozo| The Powerful Healer</title>
        <meta name="description" content="A good herbalist for you" />
        <meta name="keywords" content="herbalist" />
      </Head>
    
    <HeroSection />
    <InfoSection />
    </>
  );
}
