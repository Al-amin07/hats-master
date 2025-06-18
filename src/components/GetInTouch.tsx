"use client"
import React from 'react'
import { motion } from 'motion/react'

const details = [
    {
        name: "Phone",
        desc: "+880 1611-247183",
    },

    {
        name: "Email",
        desc: "info.hatsmaster@gmail.com",
    },
    {
        name: "Address",
        desc: "House- 10, Road- 12, Sector- 04, Uttara, Dhaka, Bangladesh.",
    },
];
export default function GetInTouch() {
    return (
        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='bg-[#F6EFE4] max-w-lg p-8 md:p-12 lg:px-20 hover:shadow-lg hover:scale-105 cursor-pointer transition-all duration-500'>
            <h2 className='text-3xl md:text-4xl   uppercase  mb-8 '>Get in Touch</h2>
            <div>
                {
                    details.map((el, ind: number) => <div key={ind} className="mb-5">
                        <h3 className="font-semibold text-xl text-gray-800 mb-1">{el.name} : </h3>
                        <p className=" text-gray-600 text-lg leading-relaxed">
                            {el.desc}
                        </p>
                    </div>)
                }
            </div>
        </motion.div>
    )
}
