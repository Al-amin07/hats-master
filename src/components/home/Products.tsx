'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {

    Navigation,
    HashNavigation,
    Autoplay,
} from "swiper/modules";

import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Link from 'next/link'
import { slugify } from '@/service/slug'
import { capDatas } from '@/static/cap.data'


export default function ProductSection() {
    return (
        <section className="bg-white pt-16 
        ">
            <div className="max-w-7xl min-h-auto relative mx-auto  px-4 sm:px-6 lg:px-8">
                <div className="flex items-start ">

                    {/* Vertical Text on the Left */}
                    <div className="hidden border-b-2 uppercase border-transparent hover:border-[#90645A] h-[455px] lg:flex min-w-[200px]  justify-center items-center">
                        <span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg) ' }} className='-rotate-180 uppercase text-3xl mr-5'>we make it all</span>
                        <h2
                            className={`text-4xl rotate-180 font-bold   text-black  `}
                            style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
                        >


                            Product Category
                        </h2>
                    </div>

                    {/* Swiper Carousel */}
                    <div className="flex-1  relative">
                        <Swiper
                            speed={700}
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
                                    spaceBetween: 0,
                                },
                                "@1.25": {
                                    slidesPerView: 2,
                                    spaceBetween: 0,
                                },


                            }}
                            modules={[Navigation, HashNavigation, Autoplay]}
                            className="mySwiper max-w-md sm:max-w-[550px] md:max-w-2xl lg:max-w-4xl  min-h-[500px]"
                        >
                            {capDatas.map((el, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="select-none bg-white  cursor-pointer border-b-2 border-transparent group   overflow-hidden transition-all duration-500 "
                                >
                                    <Link className='' href={`/product/${slugify(el.name)}`}>
                                        <div className="relative w-full  min-h-[300px]">
                                            <Image
                                                src={el.image1}
                                                alt={el.name}
                                                title={el.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-all duration-500 bg-center w-full h-full"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-gray-800">{el?.name}</h3>
                                            <p className="text-gray-600  mt-1">{el.description}</p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <div className="absolute lg:-top-16  lg:mt-0 z-10 lg:-right-0 left-1/2 md:left-[90%] -translate-x-1/2 flex gap-3">
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
