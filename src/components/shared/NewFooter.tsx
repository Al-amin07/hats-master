// app/components/Footer.tsx
import { slugify } from "@/service/slug";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
const links = [
  { id: 11, name: "Baseball Cap" },
  { id: 13, name: "Snapback Cap" },
  { id: 12, name: "Trucker Cap" },
  { id: 14, name: "6 Panel Cap" },
  { id: 16, name: "Dad Cap" },
  { id: 16, name: "Visor Cap" },
  { id: 15, name: "Bucket Hat" },
  { id: 2, name: "Beanie Hat" },
  { id: 3, name: "Head Scarf" },
];
export default function NewFooter() {
  return (
    <footer className="bg-[#1a232c] text-white px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between border-b border-white/60 pb-8">
          {/* Left Logo and Desc */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-2xl mb-2 font-bold uppercase text-white">
              Hats<span className="text-white">Master</span>
            </h1>
            <p className="text-sm text-gray-400 mt-4 max-w-sm">
              Hatsmaster is your behind-the-scenes partner for premium custom headwear in Bangladesh, worn worldwide. We turn your vision into reality with full-package development, precision sourcing, and production that meets the highest global standards.
            </p>
            <div>
              <h1 className="text-lg font-medium mb-2 mt-5">What We Do
              </h1>
              <ul className="space-y-2 ">
                <li className=" text-sm text-gray-300">Private Label Headwear</li>
                <li className=" text-sm text-gray-300">OEM & Custom Cap Manufacturing</li>
                <li className=" text-sm text-gray-300">Sustainable & Ethical Sourcing</li>
                <li className=" text-sm text-gray-300">Design-to-Delivery Solutions</li>
              </ul>

            </div>

            {/* Socials */}
            {/* <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="p-2 bg-gray-800 border  rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 border rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div> */}
          </div>

          {/* Contact + Services + Why */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-2/3">
            {/* Textile Services */}
            <div>
              <h4 className="text-white uppercase text-2xl font-semibold mb-2 inline-block">
                Our Products
              </h4>
              <ul className="mt-2 text-sm text-gray-300 space-y-2">
                {links.map((el) => (
                  <li key={el.id}>
                    <Link
                      className="hover:underline"
                      href={`/product/${slugify(el.name)}`}
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact Us */}
            <div>
              <h4 className="text-white text-2xl uppercase font-semibold mb-2  inline-block">
                Contact Us
              </h4>
              <div className="text-sm mt-2 space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 text-white" />
                  <p>House- 10, Road- 12, Sector- 04,<br /> Uttara, Dhaka, Bangladesh.</p>
                </div>
                <div className="flex items-start gap-2">
                  <FaPhoneAlt className="mt-1 text-white" />
                  <p>+880 1611-247183</p>
                </div>
                <div className="flex items-start gap-2">
                  <FaEnvelope className="mt-1 text-white" />
                  <p>info@hatsmaster.com</p>
                </div>
                <div className="flex space-x-4 text-xl">
                  <Link href={"https://www.linkedin.com/company/hatsmaster/"} target="_blank" className="p-1 bg-gray-800 border rounded-md hover:bg-white hover:text-black transition-all duration-300"><FaFacebookF /></Link>
                  <Link href={"https://www.linkedin.com/company/hatsmaster/"} target="_blank" className="p-1 bg-gray-800 border rounded-md hover:bg-white hover:text-black transition-all duration-300">  <FaLinkedin /></Link>


                </div>
              </div>
            </div>

            {/* Why Apparelx */}
            <div>
              <h4 className="text-white uppercase text-2xl font-semibold mb-2 0 inline-block">
                Why Hats Master
              </h4>
              <p className="mt-2 text-white font-semibold">


              </p>
              <p className="text-sm text-gray-300 mt-2">
                Ready to manufacture premium headwear with us?
              </p>
              <p className="mt-8">Connect With Us</p>
              <Link
                href={"/contact"}
                className="mt-4 inline-block px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-all text-sm"
              >
                Free Samples Available
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-sm text-gray-400 mt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>
            © HATSMASTER. All Rights Reserved. | Crafted in Bangladesh. Built for the world.
          </p>
          <div className="flex space-x-4">
            <Link href="/about">About Us</Link>
            <span>/</span>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        {/* Legal Links for Hats Master */}


      </div>
    </footer>
  );
}
