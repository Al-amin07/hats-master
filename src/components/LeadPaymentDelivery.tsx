'use client';

import Image from 'next/image';
import { Truck, Plane, Ship } from 'lucide-react';
import img from '@/assets/DEL2.jpg'
export default function LeadPaymentDelivery() {
  return (
    <div className="relative min-h-[600px] text-white">
      <Image
        src={img}// replace with your image path
        alt="Delivery background"
        layout="fill"
        objectFit="cover"
        className=" min-h-[600px]"
      />
      <div className="absolute  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 px-6 py-16 min-w-[90%] md:min-w-3xl max-w-4xl mx-auto text-center bg-white opacity-85 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Worldwide Delivery, Seamless Logistics</h2>
        <div className="w-12 h-1 bg-red-600 mx-auto mb-4 rounded" />
        <p className="text-gray-600 mb-3 md:mb-10 md:px-8">
          We ship globally using trusted air and sea freight partners, including DHL, FedEx, TNT, and UPS for express delivery and leading freight forwarders for ocean shipments. Whether by air or sea, we ensure secure handling, timely dispatch, and full order tracking for every shipment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
          <div className="flex flex-col items-center">
            <Truck className="w-16 h-16 text-red-600 mb-2" />
            <h3 className="font-semibold text-xl">Express (DHL, FedEx)</h3>
            <p className="text-sm">7–9 days</p>
          </div>
          <div className="flex flex-col items-center">
            <Plane className="w-16 h-16 text-red-600 mb-2" />
            <h3 className="font-semibold text-xl">Air (UPS, TNT)</h3>
            <p className="text-sm">10–12 days</p>
          </div>
          <div className="flex flex-col items-center">
            <Ship className="w-16 h-16 text-red-600 mb-2" />
            <h3 className="font-semibold text-xl">Ocean freight</h3>
            <p className="text-sm">21–35 days depending on location</p>
          </div>
        </div>
      </div>
      <div className="h-full w-full absolute inset-0 bg-black/20">

      </div>
    </div>
  );
}
