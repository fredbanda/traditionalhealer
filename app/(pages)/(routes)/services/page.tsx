import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};
const Services = () => {
  return (
    <>
      <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-70">
          <img
            src="/images/goto.jpeg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="md:text-white text-yellow-400  font-bold text-4xl md:text-5xl leading-tight mb-2 mt-[36px] md:mt-0 ">
              Dr Ngozo
            </h1>
            <p className="font-regular text-xl mb-8 mt-4 text-white">
              The only herbalist that gives you real solutions
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/images/sang-oma.jpeg"
                alt="wheat flour grinding"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  End Weak Erection Today
                </h3>
                <p className="text-gray-700 text-base">
                  Weak erection is a problem amongst a lot of men today because
                  the food we eat and alcohol. Premature ejaculation is a common
                  cause of relationship breakups. Its treatable please let Dr
                  Ngozo help you today and save your relationship.
                  <Link href="https://wa.me/27818693899">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-sky-500 w-full text-white hover:bg-green-600 hover:text-white"
                    >
                      Send Me A Message
                    </Button>
                  </Link>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="images/preg.jpg"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Difficult in Conceiving ?
                </h3>
                <p className="text-gray-700 text-base">
                  Do you have problems concieving and having difficulties to
                  carry it through? Do you always have miscarriages after
                  miscarriages? These things can bring down a spirit of a good
                  woman but don't let it do that. Dr Ngozo is now in South
                  Africa come talk
                  <Link href="https://wa.me/27818693899">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-sky-500 w-full text-white hover:bg-green-600 hover:text-white"
                    >
                      Send Me A Message
                    </Button>
                  </Link>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/images/money1.jpg"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Struggling with Debt
                </h3>
                <p className="text-gray-700 text-base">
                  Are you in debt always living from hand to mouth? Well its not
                  your fault there is a lot of bad spirits that take money. Let
                  me help you today and you will stop avoiding those phone
                  calls. Well everyone want to enjoy love making and if its
                  quick its like nothing.
                  <Link href="https://wa.me/27818693899">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-sky-500 w-full text-white hover:bg-green-600 hover:text-white"
                    >
                      Send Me A Message
                    </Button>
                  </Link>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/images/fixa.jpeg"
                alt="Money"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Waiting for you Luck
                </h3>
                <p className="text-gray-700 text-base">
                  Do not let the world drown you in your own sorrow. You have
                  seen successful people with less effort but for you no matter
                  how hard you work nothing seems to work. It might not be your
                  fault so get the help you deserve from Dr Ngozo
                  <Link href="https://wa.me/27818693899">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-sky-500 w-full text-white hover:bg-green-600 hover:text-white"
                    >
                      Send Me A Message
                    </Button>
                  </Link>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
              <div className="text-center text-white font-medium">
                Special product
              </div>
              <img
                src="/images/lovep.jpg"
                alt="Coffee"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Portions to keep them grounded
                </h3>
                <p className="text-gray-700 text-base">
                  <span className="font-medium underline">
                    Our speciality is{" "}
                  </span>
                  Love protection spell, Love spell amulet stones, Love spell
                  talisman, Love voodoo, Lungs cleansing herbs, Memory spell,
                  Mountain remedies . Poverty fighter jinni. Quranical
                  Recitation/duas/azmat/Taweez.
                  <Link href="https://wa.me/27818693899">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-sky-500 w-full text-white hover:bg-green-600 hover:text-white"
                    >
                      Send Me A Message
                    </Button>
                  </Link>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/images/cheeka.jpeg"
                alt="papad"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                 We Check Your Life
                </h3>
                <p className="text-gray-700 text-base">
                  Sale quick spell Sex appetizer, Skin lash herbs Skin
                  purification remedies. Slimming herbs. Sperming herbs Spirits
                  calling Spiritual ability spell Talukkalar statue Triple
                  strength charms Voodoo dolls Chick magnet ring 79 spirits
                  spell casting .
                  <Link href="https://wa.me/27818693899">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-sky-500 w-full text-white hover:bg-green-600 hover:text-white"
                    >
                      Send Me A Message
                    </Button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-600 w-full " />

      <section className="bg-gray-100" id="aboutus">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                About Me And My Work
              </h2>
              <p className="mt-4 text-gray-600 text-lg ">
                Using herbal alternatives is not just about detoxification;
                it&apos;s about nourishing the body with the nutrients it needs
                to function optimally. Many herbs are rich in antioxidants,
                vitamins, and minerals, which can help repair cellular damage
                caused by toxin exposure. Turmeric, for instance, is a powerful
                anti-inflammatory agent that can protect against the oxidative
                stress induced by toxins. Furthermore, herbal remedies often
                come with fewer side effects compared to conventional
                medications. This makes them a safer option for long-term use in
                maintaining overall health and preventing toxin-related
                diseases. By incorporating herbal alternatives into your daily
                routine, you not only support your body&apos;s natural detox
                pathways but also take a proactive step towards a healthier,
                more balanced life. In conclusion, embracing herbal alternatives
                is a vital strategy for combating toxin buildup. They offer a
                natural, gentle, and effective way to cleanse and rejuvenate the
                body, promoting long-term health and well-being.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="/images/dept-5.jpg"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="text-gray-700 body-font mt-10 bg-white">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
          Why Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Latest Milling Machinery
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Reasonable Rates
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Time Efficiency
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Expertise in Industry
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <hr className="border-gray-600 w-full " />
      <section className="text-gray-700 body-font mb-[68px]" id="gallery">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
          Gallery
        </div>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <div className="group relative">
            <img
              src="/images/about-img.jpg"
              alt="Image 1"
              className="aspect-[2/3] h-80  rounded-lg transition-transform transform scale-100 group-hover:scale-105 object-fill"
            />
          </div>

          <div className="group relative">
            <img
              src="images/doctor1.jpg"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-fit rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div className="group relative">
            <img
              src="images/heck.jpeg"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className="group relative">
            <img
              src="images/g1.jpg"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
