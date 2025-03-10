"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // Open modal after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsOpen(false);

  // Function to track WhatsApp clicks in Google Analytics
  const trackWhatsAppClick = () => {
    console.log("WhatsApp button clicked");

    // Ensure `gtag` is available before sending the event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "Engagement",
        event_label: "Popup WhatsApp Button",
        value: 1,
      });
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative mx-4 w-full max-w-md rounded-lg bg-white shadow-lg sm:mx-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-3 top-3 rounded-full p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Content */}
            <div className="p-6 text-center">
              <FaWhatsapp className="mx-auto mb-4 h-12 w-12 text-emerald-500" />

              <h3 className="mb-5 text-lg font-medium text-gray-900">
                I&apos;m currently on WhatsApp and want to chat with YOU!
              </h3>

              <Link
                href="https://wa.me/27818693899"
                className="w-full"
                target="_blank"
                onClick={trackWhatsAppClick} // Track clicks here
              >
                <button
                  type="button"
                  className="w-full rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-red-300"
                >
                  Chat Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;
