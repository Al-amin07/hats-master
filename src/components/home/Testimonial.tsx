'use client'
import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {

    Navigation,

    Autoplay,

} from "swiper/modules";
import { CgProfile } from "react-icons/cg";

const reviews = [
    {
        rating: 5,
        name: "Alice Johnson",
        text: "Amazing service! The team was incredibly helpful and the product exceeded my expectations.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        website: "https://aliceportfolio.com"
    },
    {
        rating: 4,
        name: "Mark Thompson",
        text: "Great experience overall. There’s a little room for improvement, but I’m satisfied.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        website: "https://marktech.dev"
    },
    {
        rating: 5,
        name: "Sara Patel",
        text: "I love how user-friendly everything is. Support was top-notch too!",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        website: "https://sarapdesigns.com"
    },
    {
        rating: 3,
        name: "Tom Harris",
        text: "Decent product. Could use more features, but it's heading in the right direction.",
        image: "https://randomuser.me/api/portraits/men/71.jpg",
        website: "https://tomh.dev"
    },
    {
        rating: 5,
        name: "Lena Morales",
        text: "Superb! This is now an essential tool in my daily workflow.",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
        website: "https://lenacodes.io"
    }
];
import { MdOutlineStar } from "react-icons/md";

import "./testimonial.css"
export default function Testimonial() {
    const [activeIndex, setActiveIndex] = React.useState(0);



    return (
        <div className="min-h-[400px] max-h-[500px]  relative">
            <h1 className=" text-5xl font-medium text-center  mb-12">Real Reviews from Real Clients</h1>
            <Swiper
                speed={1200}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                hashNavigation={{ watchState: true }}

                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    "@1.25": {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    "@1.50": {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },


                }}
                onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                modules={[Navigation, Autoplay]}
                className="mySwiper w-full min-h-[450px]"
            >
                {reviews.map((review, index) => {
                    const middleIndex = (activeIndex + 1) % reviews.length;
                    const isMiddle = index === middleIndex;

                    return (
                        <SwiperSlide
                            key={review.name}
                            className={`cursor-pointer bg-white   rounded-lg p-8 text-center w-full mx-auto transition-all duration-700 ${isMiddle ? ' scale-125 z-10 shadow-2xl' : 'scale-95 opacity-80'
                                }`}
                        >
                            {/* Rating Stars */}
                            <div className="text-black flex gap-2 items-center justify-center mb-4 text-xl">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i}>
                                        <MdOutlineStar size={28} className="text-black" />
                                    </span>
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-800 text-lg leading-relaxed mb-6">
                                {review.text}
                            </p>

                            {/* Image */}
                            <div className="flex justify-center mb-2">
                                <CgProfile size={50} />
                            </div>

                            {/* Name */}
                            <div className="font-semibold text-lg text-black">{review.name}</div>

                            {/* Website */}
                            <div className="text-gray-600 text-sm">{review.website}</div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </div>
    )
}
