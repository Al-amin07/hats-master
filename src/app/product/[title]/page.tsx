import { unslugify } from '@/service/slug'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image from '@/assets/cap/cap1.webp'
import { ICap } from '@/type/cap.type'
import { capDatas } from '@/static/cap.data'
export default async function ProductDetailsPage({ params }: { params: Promise<{ title: string }> }) {
    const title = unslugify((await params).title)
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cap.json`)
    // const data = await res.json() as ICap[]
    const cap = capDatas?.find(el => el.name === title) as ICap
   console.log({title})
    return (
      <div className=" mt-24 ">
      <div className="max-w-5xl bg-gray-100 p-8 mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
           {cap?.title}
          </h2>
          <p className="text-gray-700 mb-4">
            {cap?.description}
          </p>

          <div className="space-y-4">
            {
                cap?.features?.map(el =>   <div key={el.content}>
              <h3 className="font-semibold text-gray-800">{el.heading}:</h3>
              <p className="text-gray-700">{el.content}</p>
            </div>)
            }
          
           
          </div>

          <Link href="/contact">
            <button className="mt-6 bg-blue-600 text-white cursor-pointer px-5 py-1.5 hover:bg-blue-800 transition duration-300">
              Get Price
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3">
          <Image
            src={image}
            alt="Baseball cap manufacturers in Bangladesh"
            className=" shadow-md"
          />
          <p className="text-sm text-center text-gray-600 mt-2">{cap?.title}</p>
        </div>
      </div>
    </div>
    )
}
