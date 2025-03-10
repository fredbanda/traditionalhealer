"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav className="bg-black text-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              className="h-6 mr-3 sm:h-9"
              alt="Landwind Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              <span className="hidden md:block">Baba Ngozo</span>
              <span className="block md:hidden">Baba Ngozo</span>
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <div className="hidden mt-2 mr-4 sm:inline-block"></div>

            <Link href="https://wa.me/27818693899">
              <button
                type="button"
                className="text-white bg-emerald-500 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
              >
                WhatsApp
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
