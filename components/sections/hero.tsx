import Head from "next/head";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <>
      <Head>
        <title>Baba Ngozo | The Herbalist</title>
        <meta
          name="description"
          content="A good herbalist to make all your wishes come true and true happiness"
        />
        <meta
          name="keywords"
          content="herbalist, sangoma, healer, fortuneteller, snakefortune"
        />
      </Head>
      <div className="bg-gray-900  text-white text-[16px] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-slate-900 text-white  mb-4">
                <h2 className="block md:hidden text-2xl text-center mb-2">
                  <Link href="tel:+27818693899">Call me 081 869 3899</Link>
                </h2>
                <img
                  className="w-full h-full object-cover rounded-md"
                  src="/images/ngozo1.jpg"
                  alt="ngozo logo"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 mt-6">
              <h2 className="text-2xl font-bold text-white  mb-2">
                Baba Ngozo is The One
              </h2>
              <p className="text-white/80 mb-4">
                Looking for a powerful Sangoma near you? Get spiritual guidance,
                love spells, protection, and traditional healing. Trusted
                results! Contact us today!
              </p>
              <div className="flex mb-4">
                <div className="mr-4 font-bold">
                  <ul className="text-white/80">
                    <li>
                      ❤️ Powerful Love Spells | Trusted Sangoma for Relationship
                      Solutions : Need love spells that work? Ispecialize in
                      bringing back lost lovers, marriage solutions, and
                      spiritual guidance for relationships.
                    </li>{" "}
                    <li>
                      {" "}
                      🛡️ Spiritual Cleansing & Protection | Remove Bad Luck &
                      Negative Energy: Struggling with bad luck or negative
                      energy? Our traditional healer provides spiritual
                      cleansing, protection spells, and ancestral healing for
                      peace.
                    </li>{" "}
                    <li>
                      💰 Sangoma for luck and Success | Good luck in life Growth
                      Spells Meta Description: Unlock your financial success!
                      Our Sangoma offers spiritual guidance, wealth spells, and
                      property protection for prosperity.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="https://wa.me/27818693899"
          className="flex justify-center items-center"
        >
          <button
            type="button"
            className="w-full bg-green-400 rounded-lg py-2 mt-6 flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="h-5 w-5 text-white" />
            WhatsApp Me
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
