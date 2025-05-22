'use client'
import React from 'react'
import img1 from '@/assets/cap/c1.jpg'
import img2 from '@/assets/cap/c2.avif'
import img3 from '@/assets/cap/c3.avif'
import img4 from '@/assets/cap/c4.avif'
// import img1 from '../../assets/cap/c1.jpg'
// import img2 from '../../assets/cap/c2.avif'
// import img3 from '../../assets/cap/c3.avif'
// import img4 from '../../assets/cap/c4.avif'

import Image from 'next/image'

const products = [
    {
        id: 1,
        name: "Classic Snapback",
        image: img1,
        description: "Timeless style, perfect fit.",
    },
    {
        id: 2,
        name: "Streetwear Cap",
        image: img2,
        description: "Bold, urban design.",
    },
    {
        id: 3,
        name: "Bucket Hat",
        image: img3,
        description: "Casual and trendy.",
    },
    {
        id: 4,
        name: "Vintage Trucker",
        image: img4,
        description: "Retro vibes with modern comfort.",
    },
    {
        id: 5,
        name: "Sporty Cap",
        image: img1,
        description: "Built for performance.",
    },
    {
        id: 6,
        name: "Minimalist Beanie",
        image: img2,
        description: "Warmth meets simplicity.",
    },
];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {

    Navigation,
    HashNavigation,
    Autoplay,
} from "swiper/modules";
// import { menuItems } from "./populrFoods";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
// import { playDisplay } from '../fonts'
// import { playDisplay } from '../fonts'

export default function ProductSection() {
    return (
        <section className="bg-white pt-16 border-2
        ">
            <div className="max-w-7xl min-h-auto relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-start ">

                    {/* Vertical Text on the Left */}
                    <div className="hidden border-b-2 uppercase border-transparent hover:border-[#90645A] h-[411px] lg:flex min-w-1/3 justify-center items-center">
                        <span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg) ' }} className='-rotate-180 uppercase text-3xl mr-5'>we make it all</span>
                        <h2
                            className={`text-4xl rotate-180 font-bold   text-black  `}
                            style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
                        >


                            Product Category
                        </h2>
                    </div>

                    {/* Swiper Carousel */}
                    <div className="flex-1 relative">
                        <Swiper
                            speed={1000}
                            slidesPerView={2}
                            spaceBetween={30}
                            pagination={{ clickable: true }}
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
                            breakpoints={{
                                "@0.00": {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                "@1.25": {
                                    slidesPerView: 2,
                                    spaceBetween: 0,
                                },


                            }}
                            modules={[Navigation, HashNavigation, Autoplay]}
                            className="mySwiper max-w-[350px] sm:max-w-[450px] md:max-w-2/3 lg:max-w-3xl min-h-[500px]"
                        >
                            {products.map((el, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="select-none bg-white shadow cursor-pointer border-b-2 border-transparent hover:border-[#90645A] transition-all duration-300 overflow-hidden"
                                >
                                    <Image
                                        src={el.image}
                                        alt={el.name}
                                        height={200}
                                        width={300}
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold text-gray-800">{el?.name}</h3>
                                        <p className="text-gray-500 mt-1">{el.description}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <div className="absolute lg:-top-16  lg:mt-0 z-10 lg:-right-6 right-1/2 -translate-x-1/2 flex gap-3">
                            <button className="custom-prev cursor-pointer p-2 h-10 w-10 flex items-center justify-center bg-white rounded-full border border-black/45 hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
                                <FaChevronLeft size={18} />
                            </button>
                            <button className="custom-next cursor-pointer p-2 h-10 w-10 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors border border-black/45 duration-300 font-bold shadow-xl">
                                <FaChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
