import img1 from '@/assets/process/1.jpg'
import img2 from '@/assets/process/2.jpg'
import img3 from '@/assets/process/3.jpg'
// import img4 from '@/assets/process/4.jpg'
import img5 from '@/assets/process/5.jpg'
import Image from 'next/image'
import React from 'react'

export default function ProcessPage() {
    return (
        <div className='mt-24 space-y-7 lg:space-y-0 container px-0 md:px-12  mx-auto'>

            {/* 1st */}
            <div className='flex flex-col lg:flex-row gap-12   min-h-[500px]'>
                <div className='flex-1 '>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl pb-5 md:pb-8 lg:pb-12 border-b mb-5 md:mb-8 lg:mb-12 font-semibold'>OUR <br /> PROCESS</h1>

                    <h1 className='text-3xl font-semibold mb-6 uppercase'>Consult</h1>
                    <p>Our consultancy team has a deep wealth of experience in strategic sales, marketing and brand activations at retail level within the action sport and street fashion markets. The Sauce Suppliers can implement marketing and sales strategies for new and existing brands to drive profitable growth and yield greater commercial leverage.</p>
                </div>
                <div className='flex-1'>
                    <Image src={img1} alt='logo' width={400} height={700} className='w-full h-full' />
                </div>
            </div>
            {/* 2nd */}
            <div className='flex flex-col  lg:flex-row-reverse items-center lg:gap-12 gap-6  min-h-[550px]'>
                <div className='flex-1 '>


                    <h1 className='text-3xl font-semibold mb-4 md:mb-6 uppercase'>Design</h1>
                    <p className='text-sm md:text-base  mb-4 md:mb-6'>Our dynamic team has a combined industry experience of 20 years + with backgrounds in global sourcing, product design, production management, sales & marketing and a love of fashion, art and music.  We have a proven ability to design, develop, manufacture and deliver custom made products that build your brand.  </p>
                    <p className='text-sm md:text-base '>We strongly believe that the quality and design of merchandise directly influences a customers perception of your brand. Our business relationships are built on trust and our integrity to your brand. Our high standard of quality ensures your brands integrity. </p>
                </div>
                <div className='flex-1'>
                    <Image src={img2} alt='logo' width={700} height={700} className='w-full h-[500px] md:h-[550px]' />
                </div>
            </div>
            {/* 3rd */}
            <div className='flex flex-col  lg:flex-row items-center lg:gap-12 gap-6  min-h-[700px]'>
                <div className='flex-1 '>


                    <h1 className='text-3xl font-semibold mb-4 md:mb-6 uppercase'>PRODUCE</h1>
                    <p className='text-sm md:text-base  mb-4 md:mb-6'>Over the past 20+ years The Sauce Suppliers has been helping our clients design, develop, produce and deliver the highest quality custom apparel, custom headwear, accessories and merchandise.  The Sauce are able to offer a full design and supply program for private label manufacturing from creative and tech packs through to sampling, production and delivery.  </p>
                    <p className='text-sm md:text-base  mb-4 md:mb-6'>Once we have been briefed on your requirements we manage the entire process from sampling through to production and delivery. We present current on trend silhouettes, swatches, treatments and trims to streamline production. </p>
                    <p className='text-sm md:text-base '>We work closely with you through each stage, involve you in approvals and pre-production sampling and keep you up to date with time lines.  We make sure you receive a unique and creative experience to suit your brands product needs and budgets, saving you valuable time and operating costs. </p>
                </div>
                <div className='flex-1'>
                    <Image src={img3} alt='logo' width={700} height={700} className='w-full h-[500px] md:h-[700px]' />
                </div>
            </div>
            {/* 4th */}
            <div className='flex flex-col  lg:flex-row-reverse items-center lg:gap-12 gap-6  min-h-[550px]'>
                <div className='flex-1 '>


                    <h1 className='text-3xl font-semibold mb-4 md:mb-6 uppercase'>Deliver</h1>
                    <p className='text-sm md:text-base  mb-4 md:mb-6'>We understand the importance of reliability both in terms of quality control and speed to market.  Our production department can arrange to develop all retail trim requirements including swing tags, bar coding and special packaging requirements to assist with in-store merchandise and display, delivered directly to your door.</p>
                    <p className='text-sm md:text-base '>Our sourcing division makes every effort to ensure that all factories contracted within our supply chain comply with our high level of moral values and human rights code of conduct.</p>
                </div>
                <div className='flex-1'>
                    <Image src={img5} alt='logo' width={700} height={700} className='w-full h-[500px] md:h-[550px]' />
                </div>
            </div>
            {/* 5th */}
            {/* <div className='flex flex-col lg:flex-row  items-center lg:gap-12 gap-6  min-h-[700px]'>
         <div className='flex-1 '>
          
          
          <h1 className='text-3xl font-semibold mb-4 md:mb-6 uppercase'>ETHICAL SOURCING</h1>
          <p className='text-sm md:text-base  mb-4 md:mb-7'>All of the factories contracted within The Sauce supply chain are socially and ethically compliant.</p>
          <p className='text-sm md:text-base  mb-4 md:mb-6'>This ensures that all products are manufactured in a fair way, workers are paid a fair wage, human rights are respected, factories are safe, and communities impacted by sourcing are treated fairly and respectfully, ethical sourcing enforces social and environmental responsibility.

</p>
          <p className='text-sm md:text-base  mb-4 md:mb-6'>Environmentally, factories are switching to renewable energy sources such as solar and hydro power to reduce emissions and are working on reduced operating hours, reducing energy, chemical and water consumption to minimise carbon foot print and purchasing raw and sustainable materials where possible.</p>
          <p className='text-sm md:text-base  mb-4 md:mb-6'>Working with The Sauce provides you peace of mind and assurance that you are doing business with a responsible company and manufacturing products for your brand that are ethically sourced and produced by environmentally conscious factories.</p>
          <p className='text-sm md:text-base '>We are committed to building long term partnerships with factories that share our vision of accountability, transparency and sustainability</p>
        </div>
        <div className='flex-1'>
            <Image src={img4} alt='logo'  width={700} height={700} className='w-full h-[500px] md:h-[700px]' />
        </div>
     </div> */}
        </div>
    )
}
