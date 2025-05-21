"use client"
import React from 'react'

import img from '@/assets/dhaka.jpg'
import Image from 'next/image'
import { motion } from "motion/react"
import Link from 'next/link'

export default function ManuFacture() {
  return (
    <div 

    className="relative w-full  h-[500px] md:h-[600px] overflow-hidden">
      <Image src={img} alt='aadha'   height={600}
        width={1200}
        className="absolute inset-0 w-full h-full object-cover"/>
     

      {/* Content Box */}
      <motion.div 
        initial={{ y: 100, opacity: 0}}
  whileInView={{opacity: 1, y: 0}}
  transition={{  duration: 0.5, delay: 0.1 }}
      className={`absolute top-12 right-10 md:right-16 
       transform  bg-white bg-opacity-95 max-w-[350px] md:max-w-xl p-6 md:p-8  shadow-lg  text-gray-800 `}>
        <h5 className="uppercase font-futura  text-lg tracking-wide text-gray-800 ">
          Premier Hat and Cap Manufacturing Partner
        </h5>
        <h1 className='text-4xl text-black font-bold uppercase'>Bangladesh</h1>
        {/* <h2 className="text-3xl font-bold text-black mb-4">Bangladesh</h2> */}
        <p className="text-xs md:text-sm mb-4 mt-5  leading-relaxed">
     We believe that quality isn&apos;t just a standard it&apos;s a promise. As a dedicated sourcing specialist and buying agent for top-tier importers in the United States, Japan, France, and Australia, we ensure every product meets the highest expectations. Backed by a reliable network of manufacturing partners across South Asia and our standout role as a Private Label Cap Manufacturer in Bangladesh, we offer an exceptional range of custom Caps, Hats, and Beanies. 

        </p>
        <p className="text-xs md:text-sm leading-relaxed mb-5">
      Our Bangladesh facilities are especially known for blending skilled craftsmanship with global fashion trends, allowing us to consistently deliver headwear that exceeds industry benchmarks.
        </p>
          
                    <Link href={'/about'}>
                        <button className='py-1.5 border text-sm border-black  hover:bg-transparent hover:text-black transition-all duration-300 cursor-pointer px-5 bg-black text-white'>
                            Learn More
                        </button>
                    </Link>
               
    </motion.div>
      </div>
  )
}
