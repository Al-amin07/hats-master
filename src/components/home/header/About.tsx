import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="bg-[#F4F3F3] md:mt-32 lg:mt-40 text-black py-12 md:py-16 lg:py-20 px-5 md:px-0 w-full flex justify-center ">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-[40px] font-medium uppercase text-center mb-5 md:mb-8">
          About HATSMASTER
        </h1>
        <p className="">
          We’re more than a headwear manufacturer; we craft stories in every stitch.  From street-ready caps to timeless styles, we help brands
          stand out. As a reliable custom cap supplier, we blend craftsmanship
          with flexibility to match your vision .
        </p>
        <p className="my-6">
          Backed by years of industry know-how, our private label hat factory
          powers collections for emerging and established labels worldwide.
          Whether you&apos;re just starting out or scaling up, we’re your trusted
          partner in headwear production.{" "}
        </p>
        <div className="flex justify-center">
          <Link href={"/about"}>
            <button className="py-1.5 border border-black  hover:bg-transparent hover:text-black transition-all duration-300 cursor-pointer px-5 bg-black text-white">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
