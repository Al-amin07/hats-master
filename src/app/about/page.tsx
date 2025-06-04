
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
export const metadata = {
    title: 'About Us | Trusted Global Headwear Sourcing Partner',
    description:
        'Learn about our sourcing company specializing in premium caps, hats, and headwear accessories. Discover how we help global buyers find high-quality, custom-manufactured products with confidence.',
    keywords: [
        'headwear sourcing company',
        'about cap supplier',
        'hat manufacturer background',
        'sourcing agent caps',
        'OEM headwear partner'
    ]
};

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
                        <p className='text-sm text-slate-800'>Hatsmaster is a privately held headwear company based in Bangladesh, operating since MMXX. We specialize in the design, development, and sourcing of premium-quality hats, caps, beanies, scarves, and fashion headwear for global private label brands, retailers, and lifestyle companies. <br />
                            As a trusted headwear supplier in Bangladesh, we take pride in offering custom cap manufacturing, OEM hat production, and private label headwear solutions that meet international standards in both style and compliance. </p>
                        <p className='text-sm text-slate-800'>With our deep understanding of global headwear trends and technical expertise in structured caps, dad hats, bucket hats, trucker caps, and fashion beanies, we deliver scalable solutions for brands that demand more, from startup streetwear labels to established fashion retailers. Our production ecosystem includes fully compliant, ethically certified factories that guarantee quality, transparency, and reliability.</p>
                        <p className='text-sm text-slate-800'>Your brand. Your vision. Our craftsmanship.
                        </p>

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
