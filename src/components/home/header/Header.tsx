"use client"
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
// import '@/assets/banner/banner2.jpg'

import './header.css'

import {
    Scrollbar,
    Navigation,
    HashNavigation,
    Autoplay,
} from 'swiper/modules';
import img2 from '@/assets/test/new1.jpg'
import img1 from '@/assets/test/new5.jpg'
import img3 from '@/assets/test/next4.jpg'
// import img2 from '@/assets/test/r1.jpg'
// import img1 from '@/assets/test/r2.jpg'
// import img3 from '@/assets/test/r3.jpg'
// import img2 from '@/assets/test/blaack3.jpg'
// import img1 from '@/assets/test/black2.jpg'
// import img3 from '@/assets/test/black1.jpg'
// import img2 from '@/assets/banner/banner5.jpg'
// import img1 from '@/assets/banner/b5.jpg'
// import img3 from '@/assets/banner/b7.jpeg'
import Image from 'next/image';
import Link from 'next/link';
import { GoDotFill } from 'react-icons/go';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Header() {
    return (
        <div className='md:h-screen  relative'>
            <Swiper
                grabCursor={true}
                speed={800}

                scrollbar={{
                    el: '.custom-swiper-scrollbar',
                    draggable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                hashNavigation={{ watchState: true }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}

                modules={[Navigation, HashNavigation, Autoplay, Scrollbar]}
                className="mySwiper max-w-[1600px] h-[450px] md:h-[calc(100vh-48px)]"
            >

                <SwiperSlide>

                    <div className="w-full   min-h-[calc(100vh-48px)] "

                    >
                        <Image src={img1} alt='vsdv' className='h-full w-full object-cover' fill />
                        <div className="flex items-center relative z-30 min-h-[450px]  md:min-h-screen justify-between w-full bg-gray-900/10">
                            <div className="md:px-24  w-full 
              ">
                                <h1 className="text-2xl  font-semibold uppercase  text-white  text-center  md:text-right  lg:text-[40px]">
                                    GLOBAL LEADERS
                                    IN
                                    PRIVATE LABEL <br />
                                    headwear sourcing partner
                                </h1>

                                <Link href={'/process'} className='flex justify-center md:justify-between items-center gap-2.5 md:gap-0 max-w-[400px] lg:max-w-md  ml-auto mr-auto md:mr-0 mt-6  border p-3 md:p-4 rounded-md cursor-pointer text-white hover:bg-black  hover:border-black transition-colors duration-500'>
                                    <h1 className='text-sm md:text-xl uppercase font-medium'>Consult </h1> <span><GoDotFill size={20} /></span>
                                    <h1 className='text-sm md:text-xl uppercase font-medium'>Design</h1> <span><GoDotFill size={20} /></span>
                                    <h1 className='text-sm md:text-xl uppercase font-medium'>Produce</h1> <span><GoDotFill size={20} /></span>
                                    <h1 className='text-sm md:text-xl uppercase font-medium'>Deliver</h1>
                                </Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-full   min-h-[calc(100vh-48px)] "

                    >
                        <Image src={img2} alt='vsdv' className='h-full w-full object-cover' fill />
                        <div className="flex items-center relative z-20 min-h-[450px]  md:min-h-screen justify-between w-full bg-gray-900/10">
                            <div className=" md:px-24  w-full 
              ">
                                <h1 className="text-2xl uppercase font-semibold  text-white  text-center  md:text-right  lg:text-[40px]">
                                    Headwear manufacturing specialist <br />
                                    sourcing agent to importers
                                </h1>

                                <Link href={'/process'} className='flex justify-center md:justify-between items-center gap-2.5 md:gap-0 max-w-[400px] lg:max-w-md  ml-auto mr-auto md:mr-0 mt-6  border p-3 md:p-4 rounded-md cursor-pointer text-white hover:bg-black  hover:border-black transition-colors duration-500'>
                                    <h1 className='text-sm md:text-xl uppercase font-medium'>Consult </h1> <span><GoDotFill size={20} /></span>
                                    <h1 className='text-sm md:text-xl uppercase font-medium'>Design</h1> <span><GoDotFill size={20} /></span>
                                    <h1 className='text-sm md:text-xl uppercase font-medium'>Produce</h1> <span><GoDotFill size={20} /></span>
                                    <h1 className='text-sm md:text-xl uppercase font-medium'>Deliver</h1>
                                </Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-full   min-h-[calc(100vh-48px)] "

                    >
                        <Image src={img3} alt='vsdv' className='h-full w-full object-cover' fill />
                        <div className="flex  items-center relative z-30 min-h-[450px]  md:min-h-screen justify-between w-full bg-gray-900/10">
                            <div className="md:px-24  w-full 
              ">
                                <h1 className="text-2xl uppercase font-semibold  text-white  text-center  md:text-right  lg:text-[40px]">
                                    We design, sample and manufacture <br />
                                    with verified factory partners
                                </h1>

                                <Link href={'/process'} className='flex justify-center md:justify-between items-center gap-2.5 md:gap-0 max-w-[400px] lg:max-w-md  ml-auto mr-auto md:mr-0 mt-6  border p-3 md:p-4 rounded-md cursor-pointer text-white hover:bg-black  hover:border-black transition-colors duration-500'>
                                    <h1 className='text-sm md:text-xl uppercase font-medium'>Consult </h1> <span><GoDotFill size={20} /></span>
                                    <h1 className='text-sm md:text-xl uppercase font-medium'>Design</h1> <span><GoDotFill size={20} /></span>
                                    <h1 className='text-sm md:text-xl uppercase font-medium'>Produce</h1> <span><GoDotFill size={20} /></span>
                                    <h1 className='text-sm md:text-xl uppercase font-medium'>Deliver</h1>
                                </Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>


            </Swiper>
            <div className="h-12  hidden md:flex  items-center    bg-[#3d3d3d] opacity-60 relative">
                <div className="custom-swiper-scrollbar w-[40%] h-1  rounded relative overflow-hidden"></div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 md:bottom-1.5 z-30 flex items-center  mt-4  gap-3">
                <button className="custom-prev cursor-pointer p-1.5 h-9 w-9 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
                    <FaChevronLeft size={18} />
                </button>
                <button className="custom-next cursor-pointer p-1.5 h-9 w-9 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
                    <FaChevronRight size={18} />
                </button>
            </div>




        </div>
    );
}
