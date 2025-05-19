"use client"
import Image from 'next/image'
import React from 'react'
import banner from '@/assets/banner/b5.jpg'
import {motion} from 'motion/react'
import { Button } from './ui/button'
import Link from 'next/link'
export default function TransitionToBangladesh() {
  return (
      <div 

    className="relative w-full  h-[500px] md:h-[600px] overflow-hidden">
      <Image src={banner} alt='aadha'   height={600}
        width={1200}
        className="absolute inset-0 w-full h-full object-cover"/>
     

      {/* Content Box */}
      <motion.div 
        initial={{ y: 100, opacity: 0}}
  whileInView={{opacity: 1, y: 0}}
  transition={{  duration: 0.5, delay: 0.1 }}
      className={`absolute top-1/2 right-10 md:left-16 
       transform -translate-y-1/2 bg-white bg-opacity-95 max-w-[350px] md:max-w-md p-6 md:p-8  shadow-lg  text-gray-800 `}>
        <h5 className="uppercase text-xl font-futura font-[400] mb-2   tracking-wide text-black ">
          Transition to Bangladesh:


        </h5>
        <h1 className='text-4xl text-black font-bold mb-5'>Facilitating Your Move</h1>
        {/* <h2 className="text-3xl font-bold text-black mb-4">Bangladesh</h2> */}
        <p className="text-base text-black/80 leading-relaxed">
    Hats Master provides comprehensive support for businesses looking to transition their hat and cap manufacturing operations to Bangladesh. We manage the entire process, from documentation to logistics, ensuring a seamless and stress-free shift for your business.
        </p>
    <Link href={'/contact'}>
    <Button variant={'outline'} className=' bg-black mt-4 text-white'>Get more details</Button>
    </Link> 
    </motion.div>
      </div>
  )
}
