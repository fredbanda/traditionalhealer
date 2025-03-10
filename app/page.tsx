import PopupModal from "@/components/modal";
import HeroSection from "@/components/sections/hero";
import InfoSection from "@/components/sections/infoSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baba Ngozo| The Powerful Healer</title>
        <meta
          name="description"
          content="A good herbalist for you Financial prosperity charms
Marriage or relationship ,
Cleansing rituals,
Bad luck removal,
Traditional healers in South Africa,
Sangoma near Johannesburg,
Spiritual healing in Durban,
African herbalist in Cape Town,
Traditional doctor near Pretoria,
Fixing relationships with a heale"
        />
        <meta
          name="keywords"
          content="Traditional healer near me
African traditional doctors,
Sangoma services,
Inyanga herbal medicine,
Ancestral healing,
Spiritual healer ,
African herbalist remedies,
Traditional health practitioner,
Natural healing herbs,
Love spell caster,
Ancestral consultation,
Fertility healer,
Herbal remedies for illness,
Healing spiritual ailments,
Financial prosperity charms,
Marriage or relationship healer,
Protection spells,
Cleansing rituals,
Bad luck removal,
Traditional healers in South Africa,
Sangoma near Johannesburg,
Spiritual healing in Durban,
African herbalist in Cape Town,
Traditional doctor near Pretoria,
Fixing relationships with a healer,
Ancestral blessings for success,
Removing curses or bad energy,
Herbs for cleansing and protection,
Spiritual consultation online,
Help with infertility from a healer,
Traditional medicine for [specific ailment],
African spiritual practices,
Herbal healing in Africa,
Best sangoma in [location],
Affordable traditional healer,
Testimonials for traditional healers,
Authentic African spells"
        />
      </Head>

      <HeroSection />
      <InfoSection />
      <PopupModal />
    </>
  );
}
