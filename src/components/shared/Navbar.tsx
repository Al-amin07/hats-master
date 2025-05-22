"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";
import { slugify } from "@/service/slug";

const caps = [
  {
    id: 1,
    name: "Hats & Caps",
    child: [
      { id: 11, name: "Baseball Hat" },
      { id: 13, name: "Snapback Hat" },
      { id: 12, name: "Trucker Hat" },
      { id: 14, name: "5 Panel Hat" },
      { id: 16, name: "Dad Hat" },
      { id: 16, name: "Visor Hat" },
      { id: 15, name: "Bucket Hat" },
    ],
  },
  { id: 2, name: "Beanies & Knit Hats" },
  { id: 3, name: "Head Scarves" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "#", label: "PRODUCT" },
    { href: "/process", label: "OUR PROCESS" },
    { href: "/blog", label: "BLOG" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 top-0  left-0 w-full transition-all duration-300 ${
        scrolled
          ? "fixed bg-white shadow "
          : "absolute bg-transparent  text-white"
      }`}
    >
      <div className="container  mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1
              className={`text-2xl ml-6 font-semibold ${
                pathname !== "/" && "text-black"
              }`}
            >
              HATSMASTER
            </h1>
          </Link>

          {/* Mobile menu button */}
          <div className="flex px-6 py-7 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 cursor-pointer dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-500 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 lg:flex md:items-center ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
          }`}
        >
          <div className="flex flex-col space-y-3  md:space-y-0 md:flex-row md:mx-6">
            {navLinks.map((link) => (
              <div
                className={`lg:px-4 group cursor-pointer  lg:py-7 `}
                key={link.href}
              >
                <Link
                  href={link.href}
                  className={`my-2   ${
                    scrolled || pathname !== "/"
                      ? "text-black   "
                      : "text-white "
                  }   group-hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0  ${
                    pathname === link.href && "underline underline-offset-[6px]"
                  }`}
                >
                  {link.label}
                </Link>
                <div
                  className={`absolute hidden  top-16 lg:top-20 left-[135px] w-[160px] bg-gray-100 text-black/75 shadow-lg ${
                    link.label === "PRODUCT" && "group-hover:flex"
                  }`}
                >
                  <div className="flex flex-col  w-full">
                    {caps.map((cap) => (
                      <div key={cap.id} className=" relative group/item">
                        <Link
                          href={`${
                            cap.child ? "#" : `/product/${slugify(cap.name)}`
                          }`}
                          className="py-2.5  group
                                              px-2 text-base flex items-center justify-between gap-1 w-full text-gray-900 text-center dark:text-gray-200 hover:bg-black hover:text-white transition-all duration-300  dark:hover:bg-slate-400/50  
                                            "
                        >
                          {cap.name}
                          {cap.child && (
                            <FaAngleRight className="group-hover/item:rotate-90 transition-transform duration-200" />
                          )}
                        </Link>

                        <div
                          className={`absolute top-0 z-20 left-[158px] w-[140px] bg-gray-100 text-black/75 shadow-lg hidden ${
                            cap.name === "Hats & Caps" &&
                            "group-hover/item:flex"
                          }`}
                        >
                          <div className="flex flex-col w-full">
                            {caps[0]?.child?.map((cap) => (
                              <Link
                                key={cap.id}
                                href={`/product/${slugify(cap.name)}`}
                                className="py-2.5  text-base flex items-center justify-start px-2.5 gap-1 w-full text-gray-900 text-center dark:text-gray-200 hover:bg-black hover:text-white transition-all duration-300 dark:hover:bg-slate-400/50"
                              >
                                {cap.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
