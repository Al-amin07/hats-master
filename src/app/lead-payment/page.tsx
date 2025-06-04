"use client";
import React from "react";
import { motion } from "motion/react";
// import img1 from '@/assets/banner/b8.webp'
// import Image from "next/image";
import LeadPaymentDelivery from "@/components/LeadPaymentDelivery";


export default function LeadPaymentPage() {

  const sampleCard = [
    {
      name: "Development & Reimbursement",
      title: 'OPTION 01',
      desc: "We develop custom samples at USD $49 per piece, plus USD $99 express shipping worldwide. And, when you place a production order of 1000 pieces or more, your sample fee (excluding shipping) will be credited back to you.",
      desc2:
        "See and feel the quality before committing; your vision, realized with Hatsmaster.",
    },
    {
      name: "Order & Sample Approval",
      title: 'OPTION 02',
      desc: "Place your order with a 75% deposit, and we’ll send you high-resolution images of your pre-production sample for your approval. If you prefer, you can request the physical sample by paying a USD $99 express shipping fee, and we’ll ship it directly to you.",
      desc2: 'This ensures you’re fully confident before full production begins. '
    },
  ];

  return (
    <div className="mt-24 space-y-16 mx-auto max-w-7xl px-5 md:px-12 lg:px-16 ">
      <div className="  flex flex-col items-center mx-auto">
        <h1 className="text-3xl  mb-5 font-medium">Sample Development Time</h1>
        {/* <Clock size={40} className=" text-red-600" /> */}
        <p className="mb-5 text-center md:text-lg">
          Sample development takes up to 2 weeks to complete after receiving the sample payment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {sampleCard?.map((el, ind) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: ind * 0.2 }}
            key={el.desc}
            className="p-8 bg-gray-100 "
          >
            <h1 className="text-2xl font-semibold mb-5">{el.title}</h1>
            <h1 className="text-lg font-medium mb-4">{el.name}</h1>
            <p>{el.desc}</p>
            {el.desc2 && <p className="mt-6">{el.desc2}</p>}
          </motion.div>
        ))}
      </div>

      <div>
        <div className="  flex flex-col items-center mx-auto">
          <h1 className="text-3xl  mb-5 font-medium">Global Payment Flexibility Backed by Compliance
          </h1>
          {/* <Clock size={40} className=" text-red-600" /> */}
          <p className="mb-5 text-center md:text-lg">
            We offer secure, flexible, and fully compliant payment options for smooth global transactions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8  mt-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 bg-gray-100"
          >
            <h1 className="text-2xl font-semibold mb-5">Letter of Credit (L/C)</h1>
            <h1 className="text-lg font-medium mb-4">Most Common & Safe for Export</h1>
            <p className="mb-2">
              • An L/C is issued by the buyer’s bank and guarantees payment to the supplier upon meeting
              specific shipment and documentation terms.
            </p>
            <p className="mb-4">
              • It protects both parties; especially for first-time or large orders.
            </p>
            <p className="font-medium mb-2">Types include:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong>Sight L/C:</strong> payment immediately after document acceptance
              </li>
              <li>
                <strong>Usance/Deferred L/C:</strong> payment after a certain period
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 bg-gray-100"
          >
            <h1 className="text-2xl font-semibold mb-5">Telegraphic Transfer (T/T)</h1>
            <h1 className="text-lg font-medium mb-4">Preferred for Small Orders or Repeat Business</h1>
            <p className="mb-2">
              • Faster but riskier for suppliers unless trust is established.
            </p>
            <p className="mb-4">
              • T/T is a direct bank-to-bank wire transfer.
            </p>
            <p className="font-medium mb-2">Common structure:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>50%–75% advance</li>
              <li>Remaining 25%–50% after shipment (against scanned documents or BL copy)</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 bg-gray-100"
          >
            <h1 className="text-2xl font-semibold mb-5">CAD & Full Payment Methods</h1>
            <h1 className="text-lg font-medium mb-4">Used for trusted or low-risk deals</h1>
            <p className="mb-2">
              • Used when trust is moderate and L/C is not required.
            </p>
            <p className="mb-4">
              Payment is made after the buyer receives shipping documents via bank.
            </p>
            <p className="font-medium mb-2">For small buyers or low-value orders, full payment is often accepted via:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Western Union</li>
              <li>MoneyGram (less common)</li>
              <li>T/T (100% in advance)</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 bg-gray-100"
          >
            <h1 className="text-2xl font-semibold mb-5">Local Payment (BDT)</h1>
            <h1 className="text-lg font-medium mb-4">Payment in Bangladeshi Taka (BDT)</h1>
            <p className="mb-4">
              • Mostly used when local buying agents handle order coordination or inspection.
            </p>
            <p className="font-medium mb-2">Can be made by:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Bank transfer (BEFTN/RTGS)</li>
              <li>Cross-cheque or account payee cheque</li>
              <li>Cash (rare and less preferred due to compliance issues)</li>
            </ul>
          </motion.div>



        </div>
      </div>
      <LeadPaymentDelivery />
    </div>
  );
}
