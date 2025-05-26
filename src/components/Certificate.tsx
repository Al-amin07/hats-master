import React from "react";
import c1 from '@/assets/certificate/c1.png'
import c2 from '@/assets/certificate/c2.jpg'
import c3 from '@/assets/certificate/c3.webp'
import c4 from '@/assets/certificate/c4.png'
import c5 from '@/assets/certificate/c55.jpg'
import Image from "next/image";
const images =  [c1, c2, c3, c4, c5]
export default function Certificate() {
  return (
    <div className=" bg-blue-200 px-4 md:px-7 py-12 md:py-16">
      <h1 className=" text-center text-black/90 text-3xl uppercase md:text-4xl  font-semibold mb-6 ">
        CERTIFIED QUALITY & ETHICAL MANUFACTURING
      </h1>
      <p className=" text-slate-700 md:px-16 mx-auto  text-center">
        We know that premium headwear manufacturing is about more than style —
        it’s about sustainability, safety, and social responsibility. That’s why
        every partner factory we collaborate with strictly follows globally
        recognized compliance certifications to deliver top-quality hats, caps,
        and headwear that meet the highest international standards.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-12">
    {
        images.map((el, ind) => <div className="hover:shadow-2xl transition-all duration-500 cursor-pointer" key={ind}>
            <Image  src={el} className="h-[200px]" alt="certificate image"/>
        </div>)
    }
      </div>
    </div>
  );
}
