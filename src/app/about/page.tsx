
import Image from 'next/image'
import React from 'react'
import t1 from '@/assets/about/t1.webp'
import { BsArrowRight } from 'react-icons/bs'
// import WhyChooseUs from '@/components/home/WhyChooseUs'
import { playDisplay } from '@/components/fonts'
import WhyChooseUs from '@/components/WhyChooseUs'
import WeManageItAll from '@/components/WeManageItAll'
import { Button } from '@/components/ui/button'

export default function AboutUsPge() {
    return (
        <div className='container  mx-auto mt-28 lg:px-8'>
            <div className=' flex flex-col mb-20 md:flex-row items-center gap-16'>
                <div className='flex-1'>
                    <Image src={t1} alt='Team' height={500} width={600} />
                </div>
                <div className='flex-1'>
                    <h1 className='text-3xl  mb-7'>Meet the team</h1>
                    <div className='space-y-3 pr-7'>
                        <p className='text-sm text-slate-600'>Mitchell’s Cap Company is a family owned and operated business based in Burleigh on the Gold Coast.  Operating since 1992, we specialise in importing premium quality headwear & accessories. </p>
                        <p className='text-sm text-slate-600'>Our products are of the highest quality and we pride ourselves on our wide customer base both here in Australia and overseas.  We are the preferred supplier to many of Australia’s most recognised brands, offering fast lead times, competitive pricing and low minimums.</p>
                        <p className='text-sm text-slate-600'>Our belief is that you are only as good as your supplier which is why we have built strong and reliable relationships with our chosen factories. </p>
                        <p className='text-sm text-slate-600'>Our friendly and experienced staff will ensure that all aspects of your order are looked after from the first sample approval to the final delivery of your stock. </p>
                        <p className='text-sm text-slate-600'>Enquire now and bring your ideas to life!</p>
                    </div>
        <Button variant={'outline'} className='hover:bg-black text-slate-600 hover:text-white transition-colors duration-500 mt-5 text-xs'>
            ENQUIRE
                        <BsArrowRight /> 
        </Button>
                  
                </div>
            </div>
            <h1 className={`text-6xl font-semibold uppercase mb-5 ${playDisplay.className}`}>Why <br /> we are  different</h1>
           <div className='space-y-12'>
             <WhyChooseUs />
            <WeManageItAll />
           </div>
        </div>
    )
}
