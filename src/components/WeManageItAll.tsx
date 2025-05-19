'use client'
import Image from 'next/image';
import img from '@/assets/banner/banner5.jpg'
import {motion} from 'motion/react'
import { Button } from './ui/button';
 const details = [
    {
      title: 'Factories',
      desc: 'Our trusted verified factory is ready to accelerate your brand. Tailoring our selection to your specific requirements, we meticulously produce each collection with the utmost precision, ensuring a trusted and reliable collaboration.'
    },
    {
      title: 'Fabric Sourcing',
      desc: ' Explore a world of quality fabrics. We arrange fabric kits to send all out clients. We also take pride in crafting our own range of sustainable fabrics—environmentally conscious and designed to contribute to a planet-friendly future.'
    },
    {
      title: 'Production Management',
      desc: 'Embark on your manufacturing journey as we navigate the entire process together, overseeing production, packaging and shipping, ensuring a seamless onboarding experience with our global supply chain.'
    },
  ]
export default function WeManageItAll() {
 
  return (
    <section className=" max-w-7xl mx-auto">
      <h2 className="text-4xl  mb-6">We manage it All.</h2>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
       {
        details.map((el, ind: number) => <motion.div   initial={{ y: 100, opacity: 0}}
  whileInView={{opacity: 1, y: 0}}
  transition={{  duration: 0.8, delay: ind * 0.2 }} key={el.desc} className="bg-gray-100/75 cursor-pointer hover:shadow-xl transition-shadow duration-500 p-6 rounded-lg">
          <h3 className="font-semibold text-xl text-gray-800 mb-2">{el.title}</h3>
          <p className=" text-gray-600 text-lg leading-relaxed">
            {el.desc}
          </p>
        </motion.div>)
      }
        
        
      </div>

      {/* Product Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
     
        <div>
          <h3 className="text-2xl font-semibold mb-4">Product Categories</h3>
          <p className=" text-gray-700 text-lg mb-4">
            At Fashion Factories, we encompass a wide scope of product categories. Our expertise excels across <strong>ladies and mens fashion, knitwear, swim, bags and accessories, footwear</strong>, and so much more.
          </p>
          <p className=" text-gray-700 text-lg mb-6">
            We embrace the liberty to curate your vision and set the path to building successful brands.
          </p>
          <Button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
            See Categories
          </Button>
        </div>

        {/* Replace with your image */}
        <div className="w-full h-64 relative hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
          <Image
            src={img} // Replace with your actual image path
            alt="Product categories"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
