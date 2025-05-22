import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <div className='bg-[#F4F3F3] md:mt-32 lg:mt-40 text-black py-12 md:py-16 lg:py-20 px-5 md:px-0 w-full flex justify-center '>
            <div className='max-w-xl'>
                <h1 className='text-3xl md:text-[40px] font-medium uppercase text-center mb-5 md:mb-8'>About HATSMASTER</h1>
                <p className=''>At Hatsmaster, we specialize in providing premium accessory products to fashion brands around the world. Our focus is on building strong relationships with our customers, and delivering the quality and craftsmanship that they demand.</p>
                <p className='my-6'>Contact us today to learn more about our products and services, and how we can help take your brand to the next level.</p>
                <div className='flex justify-center'>
                    <Link href={'/about'}>
                        <button className='py-1.5 border border-black  hover:bg-transparent hover:text-black transition-all duration-300 cursor-pointer px-5 bg-black text-white'>
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
