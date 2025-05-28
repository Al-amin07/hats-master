// app/components/Footer.tsx
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function NewFooter() {
  return (
    <footer className="bg-[#1a232c] text-white px-6 md:px-20 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between border-b border-white/10 pb-8">
          {/* Left Logo and Desc */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-2xl font-bold text-red-600">
              Hats<span className="text-white">Master</span>
            </h1>
            <p className="text-sm text-gray-400 mt-2 max-w-sm">
           Hats Master is a Bangladesh-based headwear manufacturer, offering custom hats and caps for brands worldwide. We specialize in sourcing, production, and development with the highest quality standards.
            </p>

            {/* Socials */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <FaYoutube />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact + Services + Why */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-2/3">
            {/* Contact Us */}
            <div>
              <h4 className="text-white font-semibold mb-2  inline-block">Contact Us</h4>
              <div className="text-sm mt-4 space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 text-white" />
                  <p>House #00, Road #00, Dhaka, Bangladesh</p>
                </div>
                <div className="flex items-start gap-2">
                  <FaPhoneAlt className="mt-1 text-white" />
                  <p>+880 1234-567890</p>
                </div>
                <div className="flex items-start gap-2">
                  <FaEnvelope className="mt-1 text-white" />
                  <p>info@hatsmaster.com</p>
                </div>
              </div>
            </div>

            {/* Textile Services */}
            <div>
              <h4 className="text-white font-semibold mb-2 inline-block">Textile Services</h4>
              <ul className="mt-4 text-sm text-gray-300 space-y-2">
                <li>Development and planning</li>
                <li>Samples</li>
                <li>Pricing</li>
                <li>Production</li>
                <li>Quality control</li>
                <li>Logistics</li>
              </ul>
            </div>

            {/* Why Apparelx */}
            <div>
              <h4 className="text-white font-semibold mb-2 0 inline-block">Why Hats Master</h4>
              <p className="mt-4 text-white font-semibold">Made in Bangladesh</p>
              <p className="text-sm text-gray-300 mt-2">
                – Qualified labor force. <br />
                – Geographical proximity to main Asian markets...
              </p>
              <Link href={'/contact'} className="mt-4 inline-block px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-all text-sm">
                REQUEST FREE SAMPLE
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-sm text-gray-400 mt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>
            Copyright © 2025 <span className="text-red-600">Hats Master</span>. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/about">About Us</Link>
            <span>/</span>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        {/* Legal Links */}
        <div className="text-xs text-gray-500 mt-4 text-center space-x-2">
          <Link href="#">Política de Privacidade</Link>
          <span className="text-red-500">–</span>
          <Link href="#">Livro De Reclamações Online</Link>
        </div>
      </div>
    </footer>
  );
}
