import React from "react";
import a1 from "@/assets/application/a1.webp";
import a2 from "@/assets/application/a2.webp";
import a3 from "@/assets/application/a3.webp";
import a4 from "@/assets/application/a4.webp";
import a5 from "@/assets/application/a5.webp";
import a6 from "@/assets/application/a6.webp";
import a7 from "@/assets/application/a7.jpg";
import a8 from "@/assets/application/a8.webp";
import a9 from "@/assets/application/a9.webp";
import a10 from "@/assets/application/a10.webp";
import a11 from "@/assets/application/11.webp";
import a12 from "@/assets/application/a12.webp";
import Image from "next/image";
import Link from "next/link";
const datas = [
  { img: a1, name: "Embroidered Patch" },
  { img: a2, name: "Embroidery" },
  { img: a3, name: "Sublimation Print Logo" },
  { img: a4, name: "Rubber Badge" },
  { img: a5, name: "Screenprint" },
  { img: a6, name: "3D Embroidery" },
  { img: a7, name: "Woven Patch" },
  { img: a8, name: "Ask Our Team" },
];
const fastenings = [
  { img: a9, name: "Embossed Buckle" },
  { img: a10, name: "Plastic Snap" },
  { img: a11, name: "Embossed PU Fastening" },
  { img: a12, name: "Ask Our Team" },
];
export default function ApplicationPage() {
  return (
    <div>
      <div className="mt-32 max-w-7xl mx-auto">
        <h1 className="text-4xl mb-7">Applications</h1>
        <div className="grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {datas.map((el, ind) =>
            datas.length !== ind + 1 ? (
              <div className="relative group" key={el.name}>
                <Image
                  src={el.img}
                  alt={el.name}
                  height={500}
                  className="md:h-[500px] h-[400px] group-hover:scale-105   transition-all duration-500 cursor-pointer object-cover"
                  width={450}
                />
                <div className="absolute z-10 bottom-4 left-5">
                  
                  <h1 className=" text-2xl font-semibold text-white ">
                    {el.name}
                  </h1>
                </div>
                <div className="h-full opacity-0 group-hover:opacity-100 w-full group-hover:scale-105  transition-all duration-500 cursor-pointer object-cover inset-0 absolute bg-black/30 ">

                </div>
              </div>
            ) : (
              <Link href={"/contact"} className="relative group" key={el.name}>
                <Image
                  src={el.img}
                  alt={el.name}
                  height={500}
                  className="h-[500px] group-hover:scale-105 group-hover:opacity-90  transition-all duration-500 cursor-pointer object-cover"
                  width={450}
                />
                <div className="absolute z-10 bottom-4 left-5">
                 
                    <p className="text-white text-sm font-bold">
                      Do You need help?
                    </p>
                  
                  <h1 className={`text-2xl font-semibold text-white  `}>
                    {el.name}

                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </h1>
                </div>
                <div className="h-full opacity-0 group-hover:opacity-100 w-full group-hover:scale-105  transition-all duration-500 cursor-pointer object-cover inset-0 absolute bg-black/30 ">

                </div>
              </Link>
            )
          )}
        </div>
      </div>
      <div className="mt-32 max-w-7xl mx-auto">
        <h1 className="text-4xl mb-7">Fastenings</h1>
    <div className="grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fastenings.map((el, ind) =>
            fastenings.length !== ind + 1 ? (
              <div className="relative group" key={el.name}>
                <Image
                  src={el.img}
                  alt={el.name}
                  height={500}
                  className="h-[500px] group-hover:scale-105 group-hover:opacity-90  transition-all duration-500 cursor-pointer object-cover"
                  width={450}
                />
                <div className="absolute z-10 bottom-4 left-5">
                  
                  <h1 className=" text-2xl font-semibold text-white ">
                    {el.name}
                  </h1>
                </div>
                <div className="h-full opacity-0 group-hover:opacity-100 w-full group-hover:scale-105  transition-all duration-500 cursor-pointer object-cover inset-0 absolute bg-black/30 ">

                </div>
              </div>
            ) : (
              <Link href={"/contact"} className="relative group" key={el.name}>
                <Image
                  src={el.img}
                  alt={el.name}
                  height={500}
                  className="h-[500px] group-hover:scale-105  transition-all duration-500 cursor-pointer object-cover"
                  width={450}
                />
                <div className="absolute z-10 bottom-4 left-5">
                  {fastenings.length === ind + 1 && (
                    <p className="text-white text-sm font-bold">
                      Do You need help?
                    </p>
                  )}
                  <h1 className={`text-2xl font-semibold text-white  `}>
                    {el.name}

                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </h1>
                </div>
                <div className="h-full opacity-0 group-hover:opacity-100 w-full group-hover:scale-105  transition-all duration-500 cursor-pointer object-cover inset-0 absolute bg-black/30 ">

                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
