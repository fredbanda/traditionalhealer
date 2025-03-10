import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <div>
      <div className="fixed bottom-4 right-4 lg:bottom-4 lg-left-4 z-50">
        <Link
          href="https://wa.me/27818693899"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 p-4 bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-500 hover:shadow-xl transition-all duration-200 ease-in-out"
        >
          <FaWhatsapp className="h-6 w-6" />
          <span>Chat with Me</span>
        </Link>
      </div>
    </div>
  );
}
