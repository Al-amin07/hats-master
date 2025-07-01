"use client";
import Link from "next/link";
import React from "react";
import img1 from "@/assets/about/111.jpg"
import Image from "next/image";
import { motion } from "motion/react";
export default function About() {
  return (
    <div className="bg-[#F4F3F3]  text-black py-12 md:py-16 lg:py-20 px-5 md:px-0 w-full flex justify-center ">
      <div className="flex items-center max-w-7xl mx-auto gap-12">
        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="md:w-1/2">
          <Image src={img1} alt="about" width={400} height={400} className=" rounded-full" />
        </motion.div>
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-[40px] font-medium uppercase  mb-5 md:mb-8">
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
          <div className="flex ">
            <Link href={"/about"}>
              <button className="py-1.5 border border-black  hover:bg-transparent hover:text-black transition-all duration-300 cursor-pointer px-5 bg-black text-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
