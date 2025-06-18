// components/WhatsAppIcon.js
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppIcon() {
    return (
        <a
            href="https://wa.me/8801718556056"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-7 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-green-600 transition"
        >
            <FaWhatsapp size={28} />
        </a>
    );
}
