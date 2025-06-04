import React from "react";
import c1 from '@/assets/certificate/c1.png'
import c2 from '@/assets/certificate/c2.jpg'
import c3 from '@/assets/certificate/c3.webp'
import c4 from '@/assets/certificate/Certifications logo (3).jpg'
import logo from '@/assets/logo/p2.jpg'
import Image from "next/image";
import Link from "next/link";
const images = [c1, c2, c3, c4]
export default function Certificate() {
  return (

    <div className="flex flex-col md:flex-row gap-8  max-w-7xl mx-auto ">
      {/* Main Content */}
      <div className="md:w-3/4 shadow-lg py-7 shadow-black/50">
        <h2 className="text-base mb-4 text-center px-8">
          We know that premium headwear manufacturing is about more than style — it’s about sustainability, safety, and social responsibility. That’s why every partner factory we collaborate with strictly follows globally recognized compliance certifications to deliver top-quality hats, caps, and headwear that meet the highest international standards.

        </h2>

        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold  border-2 p-3 text-center inline-block ">CERTIFIED QUALITY & ETHICAL MANUFACTURING</h3>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-2 p-12 gap-5 mt-12">
          {
            images.map((el, ind) => <div className=" flex items-center justify-center" key={ind}>
              <Image src={el} height={300} width={300} className="mix-blend-multiply hover:shadow-2xl transition-all hover:scale-110 duration-700 cursor-pointer" alt="certificate image" />
            </div>)
          }
        </div>


      </div>

      {/* Sidebar */}
      <aside className="md:w-1/4 sticky top-28 bg-[#EFEBEA] max-h-[500px] p-6 rounded-lg shadow-lg text-center">
        <Image
          src={logo} // Place David's image in public folder as 'david.png'
          alt="David"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h4 className="text-lg font-bold mb-2">Hey there, I’m Gayen!</h4>
        <p className="text-sm text-gray-700 mb-4">
          I truly enjoy the headwear manufacturing industry because my work helps elevate my clients&apos; brands with high-quality, customized baseball caps.
        </p>
        <p className="text-sm text-gray-700 mb-6">
          If you have any questions about cap production or custom branding, feel free to contact me!
        </p>
        <Link href="/contact" className="bg-black border border-black text-white hover:bg-transparent hover:text-black px-4 py-2 rounded transition-all duration-500">
          Let&apos;s Talk →
        </Link>
      </aside>
    </div>
  );
}
