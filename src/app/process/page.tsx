import img1 from '@/assets/process/1.jpg'
import img2 from '@/assets/process/2.jpg'
import img3 from '@/assets/process/3.jpg'
// import img4 from '@/assets/process/4.jpg'
import img5 from '@/assets/process/5.jpg'
import Application from '@/components/Application'
// import ManufacturingProcess from '@/components/home/MenufacturingProcess'
import Image from 'next/image'
import React from 'react'
export const metadata = {
    title: 'Our Process | How We Source Premium Headwear & Accessories',
    description:
        'See how our sourcing process works—from initial consultation to sample development, production, and delivery. We ensure smooth, reliable, and scalable sourcing for caps and hats.',
    keywords: [
        'cap sourcing process',
        'hat production steps',
        'how we source caps',
        'OEM manufacturing process',
        'custom headwear sourcing flow'
    ]
};

export default function ProcessPage() {
    return (
        <div className='mt-24 space-y-7 lg:space-y-0 container px-5 md:px-12  mx-auto'>

            {/* 1st */}
            <div className='flex flex-col   lg:flex-row gap-6 md:gap-12    md:h-[450px]'>
                <div className='flex-1 '>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl pb-5 md:pb-8 lg:pb-12 border-b mb-5 md:mb-8 lg:mb-12 font-semibold'>OUR <br className='hidden md:inline' /> PROCESS</h1>

                    <h1 className='text-3xl font-semibold mb-4 md:mb-6 uppercase'>Consult</h1>
                    <p>Where streetwear heritage meets global business strategy. At HATSMASTER, we guide emerging and established headwear brands through smart growth, trend adaptation, and market expansion. With real-world insight from the heart of the industry, we shape launch-to-retail strategies that elevate your brand presence. We don&apos;t just consult—we co-create.
                    </p>
                </div>
                <div className='flex-1 h-[500px] md:h-[450px]'>
                    <Image src={img1} alt='logo' width={400} height={700} className='w-full h-[400px] md:h-[450px]' />
                </div>
            </div>
            {/* 2nd */}
            <div className='flex flex-col lg:flex-row-reverse  items-center lg:gap-12 gap-6   md:h-[450px]'>
                <div className='flex-1 '>


                    <h1 className='text-3xl font-semibold mb-4 md:mb-6 uppercase'>Design</h1>
                    <p className='text-sm md:text-base  mb-4 md:mb-6'>Inspired by icons like New Era and Kangol, our design ethos balances innovation with identity. From textured seasonal drops to timeless silhouettes, we create headwear that resonates. Our team blends global trend sense with deep sourcing knowledge from Bangladesh’s apparel capital to craft styles that set you apart. </p>

                </div>
                <div className='flex-1  '>
                    <Image src={img2} alt='logo' width={700} height={700} className='w-full h-[400px] md:h-[450px]' />
                </div>
            </div>
            {/* 3rd */}
            <div className='flex flex-col  lg:flex-row items-center lg:gap-12 gap-6   md:h-[450px]'>
                <div className='flex-1 '>


                    <h1 className='text-3xl font-semibold mb-4 md:mb-6 uppercase'>PRODUCE</h1>
                    <p className='text-sm md:text-base  mb-4 md:mb-6'>Production is our core. From concept to cargo-ready collections, HATSMASTER delivers scalable, high-quality manufacturing solutions. We support your brand with a structured process: creative packs, sampling, QC, and efficient delivery. With deep ties to Bangladesh’s most reliable factories, we ensure every cap reflects excellence and brand intent. </p>

                </div>
                <div className='flex-1'>
                    <Image src={img3} alt='logo' width={700} height={700} className='w-full h-[400px] md:h-[450px]' />
                </div>
            </div>
            {/* 4th */}
            <div className='flex flex-col  lg:flex-row-reverse items-center lg:gap-12 gap-6   md:h-[450px]'>
                <div className='flex-1 '>


                    <h1 className='text-3xl font-semibold mb-4 md:mb-6 uppercase'>Deliver</h1>
                    <p className='text-sm md:text-base  mb-4 md:mb-6'>Reliability is in our DNA. We ship retail-ready headwear, complete with branded trims, sustainable packaging, and transparent logistics. Our production partners meet strict ethical standards—so you receive products built with integrity. From Dhaka to your global storefront, we deliver more than just hats—we deliver trust. </p>

                </div>
                <div className='flex-1'>
                    <Image src={img5} alt='logo' width={700} height={700} className='w-[500px] md:w-full h-[400px] md:h-[450px]' />
                </div>
            </div>
            <hr className='my-10 lg:my-16 text-black' />
            {/* <ManufacturingProcess /> */}
            <Application />

        </div>
    )
}
