import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <Head>
        <title>Dr Ngozo | The Herbalist</title>
        <meta
          name="description"
          content="A good herbalist to make all your wishes come true and true happiness"
        />
        <meta
          name="keywords"
          content="herbalist, sangoma, healer, fortuneteller, snakefortune"
        />
      </Head>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <h2 className="block md:hidden text-2xl text-center mb-2">
                  <Link href="https://wa.me/27818693899">081 869 3899

                  </Link>
                </h2>
                <img
                  className="w-full h-full object-cover rounded-md"
                  src="/images/image2.jpg"
                  alt="Image"
                />
              </div>
              <div className="flex -mx-2 mb-4 ">
                <div className="w-1/2 px-2">
                  <Link href="/contact">
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Fill The Form
                    </button>
                  </Link>
                </div>

                <div className="w-1/2 px-2">
                  <Link href="https://wa.me/27818693899">
                    <button className="w-full bg-red-500 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-green-500 hover:text-white dark:hover:bg-gray-600">
                      Send WhatsApp Now
                      <Image
                        src="/whatsapp.png"
                        width={20}
                        height={20}
                        alt="whatapp icon"
                        className="inline-block ml-4 h-auto"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                What You Can Get From me
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Love is a beautiful thing and we all deserve some love Why waste
                more years to start another relationship? Why not make this one
                work? Get help today and let him or her commit tomorrow.{" "}
              </p>
              <div className="flex mb-4">
                <div className="mr-4 font-bold">
                  <ul>
                    <li>Bring back lost Lover</li>
                    <li>Magic Wallet</li>
                    <li>Wash out bad luck</li>
                    <li>Casino Table magic</li>
                    <li>Magic rings for those miracles</li>
                    <li>You wish it I make it</li>
                  </ul>
                </div>
              </div>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Trusting What Your Friends Say?
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  So you don&apos;t trust a Sangoma right because your friends
                  say so? Your friends got everything going well for them right?
                  What if they consulted a sangoma would they tell you? I can
                  help you with the following: Attract a new lover or just Heal
                  an addiction. Know the future & Remove bewitchment & bad luck
                  .Make more money or want to Communicate with your
                  ancestors.Protection against physical violence .Draw a
                  ex-lover closer .Increase your personal wealth .Make your
                  lover commit. Achieve your career goals .Infertility & sexual
                  problems. Let&apos;s get started for the sake of your kids
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
