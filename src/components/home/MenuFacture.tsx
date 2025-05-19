"use client"
import React from 'react'

import img from '@/assets/dhaka.jpg'
import Image from 'next/image'
import { motion } from "motion/react"

export default function ManuFacture() {
  return (
    <div 

    className="relative w-full  h-screen overflow-hidden">
      <Image src={img} alt='aadha'   height={600}
        width={1200}
        className="absolute inset-0 w-full h-full object-cover"/>
     

      {/* Content Box */}
      <motion.div 
        initial={{ y: 100, opacity: 0}}
  whileInView={{opacity: 1, y: 0}}
  transition={{  duration: 0.5, delay: 0.1 }}
      className={`absolute top-1/2 right-8 
       transform -translate-y-1/2 bg-white bg-opacity-95 max-w-md p-6 md:p-8  shadow-lg  text-gray-800 `}>
        <h5 className="uppercase font-futura  text-lg tracking-wide text-gray-500 ">
          Premier Hat and Cap Manufacturing Partner
        </h5>
        {/* <h2 className="text-3xl font-bold text-black mb-4">Bangladesh</h2> */}
        <p className="text-sm mb-5 mt-6  leading-relaxed">
         HATSMASTER is at the forefront of Bangladesh’s fast-growing hat and cap manufacturing sector, offering global brands a smarter, more cost-effective sourcing solution. As international demand shifts from traditional manufacturing hubs, our vertically integrated factory provides custom hat manufacturing, bulk cap production, and private label solutions with uncompromising quality.
        </p>
        <p className="text-sm leading-relaxed">
         Our strategic location and export advantage tariff-free cap and hat shipments to the U.S., making us a preferred sourcing partner for American brands looking to reduce costs without sacrificing quality. Our factory is equipped for large-scale headwear production, managed by a skilled workforce and strict quality assurance systems that meet global compliance standards.
        </p>
    </motion.div>
      </div>
  )
}
