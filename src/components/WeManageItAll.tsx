'use client'
// import Image from 'next/image';
// import img from '@/assets/banner/banner5.jpg'
import { motion } from 'motion/react'

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
    <section className=" container mx-auto">
      <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase  mb-6">We manage it All</h2>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {
          details.map((el, ind: number) => <motion.div initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: ind * 0.2 }} key={el.desc} className="bg-gray-100/75 cursor-pointer hover:shadow-xl transition-shadow duration-500 p-6 rounded-lg">
            <h3 className="font-semibold text-xl text-gray-800 mb-2">{el.title}</h3>
            <p className=" text-gray-600 text-lg leading-relaxed">
              {el.desc}
            </p>
          </motion.div>)
        }


      </div>


    </section>
  );
}
