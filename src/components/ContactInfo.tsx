"use client";
import React from "react";

import { motion } from "motion/react";
const details = [
  {
    name: "Phone",
    desc: "+880 1611247183",
  },

  {
    name: "Email",
    desc: "info.hatsmaster@gmail.com",
  },
  {
    name: "Our Address",
    desc: "House 10, Road 12, Sector 04, Uttara, Dhaka—1230, Bangladesh.",
  },
];
export default function ContactInfo() {
  return (
    <section className=" max-w-7xl mx-auto">
      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {details.map((el, ind: number) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: ind * 0.2 }}
            key={el.desc}
            className="bg-gray-100/75 cursor-pointer hover:shadow-xl transition-shadow duration-500 py-6 px-8 rounded-lg"
          >
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              {el.name}
            </h3>
            <p className=" text-gray-600 text-lg leading-relaxed">{el.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
