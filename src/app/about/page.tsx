
import Image from 'next/image'
import React from 'react'
import t1 from '@/assets/about/team3.jpg'
import { BsArrowRight } from 'react-icons/bs'
// import WhyChooseUs from '@/components/home/WhyChooseUs'

import WeManageItAll from '@/components/WeManageItAll'
import { Button } from '@/components/ui/button'
import TransitionToBangladesh from '@/components/TransitionToBangladesh'
import Link from 'next/link'
import CustomizeSection from '@/components/CustomizeSection'
import Certificate from '@/components/Certificate'

export default function AboutUsPge() {
    return (
        <div className='container  mx-auto mt-28 px-5 lg:px-8'>
            <div className=' flex md:max-h-[550px] flex-col mb-20 md:flex-row items-center gap-6 md:gap-16'>
                <div className='flex-1'>
                    <Image src={t1} alt='Team' objectFit='cover' className='h-[450px]  w-full' height={500} width={600} />
                </div>
                <div className='flex-1'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl uppercase  mb-4 font-semibold'>Meet  The Team</h1>
                    <div className='space-y-3 pr-7'>
                        <p className='text-sm text-slate-800'>Hats Master Cap Company is a family owned and operated business based in Burleigh on the Gold Coast.  Operating since 1992, we specialise in importing premium quality headwear & accessories. </p>
                        <p className='text-sm text-slate-800'>Our products are of the highest quality and we pride ourselves on our wide customer base both here in Australia and overseas.  We are the preferred supplier to many of Australia’s most recognised brands, offering fast lead times, competitive pricing and low minimums.</p>
                        <p className='text-sm text-slate-800'>Our belief is that you are only as good as your supplier which is why we have built strong and reliable relationships with our chosen factories. </p>
                        <p className='text-sm text-slate-800'>Our friendly and experienced staff will ensure that all aspects of your order are looked after from the first sample approval to the final delivery of your stock. </p>
                        <p className='text-sm text-slate-800'>Enquire now and bring your ideas to life!</p>
                    </div>
                    <Link href={'/contact'}>
                        <Button variant={'outline'} className='hover:bg-black text-slate-600 hover:text-white transition-colors duration-500 mt-5 text-xs'>
                            ENQUIRE
                            <BsArrowRight />
                        </Button>
                    </Link>

                </div>
            </div>

            <div className='space-y-16'>
                {/* <WhyChooseUs /> */}
                <WeManageItAll />
                <TransitionToBangladesh />
                <CustomizeSection />
                <Certificate />
                {/* <Testimonial /> */}
            </div>
        </div>
    )
}
