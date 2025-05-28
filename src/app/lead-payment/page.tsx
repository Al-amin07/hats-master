"use client";
import { Clock } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import img1 from '@/assets/banner/b8.webp'
import Image from "next/image";
import LeadPaymentDelivery from "@/components/LeadPaymentDelivery";
export default function LeadPaymentPage() {
  const sampleCard = [
    {
      name: "Option 1",
      desc: "Sample cost is US$100 per piece + US$49 Express shipping anywhere in the world",
      desc2:
        "Your sample fee (less shipping fee) is reimbursed if you go ahead with a production order of 300+ pieces.",
    },
    {
      name: "Option 2",
      desc: "Go direct to order and pay 50% deposit for a mass production order and receive high resolution images from all angles of your preproduction sample to approve before moving ahead with the order. If you are not 100% sure from the images you just need to pay the US$49 express shipping fee and we will ship your custom sample out to you.",
    },
  ];
  const paymentCard = [
    {
      name: "Samples",
      desc: "Full payment plus shipping cost before sample is started.",
    },
    {
      name: "Productions",
      desc: "50% deposit to start production 50% balance before shipment. Goods will have a full quality control inspection and images sent to you for approval before you pay your invoice.",
    },
    { name: "Payment Methods", desc: "Bank TT, Paypal" },
  ];
  return (
    <div className="mt-24 space-y-16 max-w-7xl px-5 md:px-12 lg:px-16 ">
      <div className="max-w-xl  flex flex-col items-center mx-auto">
        <h1 className="text-3xl  mb-5 font-medium">Sampling lead time</h1>
        <Clock size={40} className=" text-red-600" />
        <p className="my-5 text-center md:text-lg">
          14-21 DAYS TO COMPLETE ONCE SAMPLE PAYMENT IS RECEIVED
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {sampleCard?.map((el, ind) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: ind * 0.2 }}
            key={el.desc}
            className="p-8 bg-gray-100 "
          >
            <h1 className="text-2xl font-semibold mb-7">{el.name}</h1>
            <p>{el.desc}</p>
            {el.desc2 && <p className="mt-6">{el.desc2}</p>}
          </motion.div>
        ))}
      </div>
      <div className="relative  md:max-h-[450px]">
        <Image src={img1} alt="product image" className="h-[500px] md:h-[450px] w-full "/>
          <motion.div   initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5}} className="min-w-[90%] sm:min-w-[80%] md:min-w-3xl z-10 opacity-30 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-12  bg-gray-100 flex flex-col items-center mx-auto">
        <h1 className="text-3xl  mb-5 font-medium">Production lead time
</h1>
        <Clock size={40} className=" text-red-600" />
        <p className="my-5 md:text-lg text-center">
          35-45 WORKING DAYS ONCE 50% DEPOSIT IS RECEIVED
        </p>
        <p className="text-center text-sm">If you have any specific events or deadlines that you need your order received by please make this clear before placing your order so we can assess if the timeline is workable</p>
      </motion.div>
      <div className="h-full w-full absolute inset-0 bg-black/20">

      </div>
      </div>
      {/* Payment */}
      <div>
        <h1 className="text-3xl  mb-5 text-center font-medium">
          Payment Terms
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-12 mx-auto">
          {paymentCard?.map((el, ind) => (
            <motion.div
              key={el.desc}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ind * 0.2 }}
              className="p-8 bg-gray-100 "
            >
              <h1 className="text-2xl font-semibold mb-7">{el.name}</h1>
              <p>{el.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <LeadPaymentDelivery />
    </div>
  );
}
