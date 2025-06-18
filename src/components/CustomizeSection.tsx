import Image from 'next/image';
import React from 'react';
// import img from '@/assets/about/c1.jpg';
import img2 from '@/assets/about/CUSTOMIZE YOUR STYLE (1).jpg';
// import img3 from '@/assets/about/CUSTOMIZE YOUR STYLE (2).jpg';
const CustomizeSection = () => {
    return (
        <section className="">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div className="relative w-full h-[450px]">
                    <Image
                        src={img2} // Save your image as /public/images/customize-style.png
                        alt="Hat embroidery machine"
                        layout="fill"
                        objectFit="cover"
                        className=" shadow-md"
                        priority
                    />
                </div>

                {/* Text */}
                <div>
                    <h2 className="text-4xl md:text-5xl  text-gray-700 mb-7">
                        CUSTOMIZE YOUR  STYLE
                    </h2>
                    <p className="text-gray-800/90 mb-6 leading-relaxed">
                        Whether you&apos;re building a fashion label, creating merch for your community, or launching a bold new line, Hatsmaster brings your vision to life, one stitch at a time. Our decoration options aren&apos;t just techniques; they’re tools to express identity.
                    </p>
                    <p className=" text-gray-800/90">
                        Choose direct embroidery for timeless impact, or explore woven and embroidered patches for texture and craft. Want something bolder? Genuine and faux leather patches add richness, while silicone and flexstyle designs bring a clean, modern edge.
                    </p>
                    <p className='my-5 text-gray-800/90'>And when color and detail matter most, our sublimated patches deliver photo-quality clarity that turns heads.
                    </p>
                    <p className='font-semibold  text-gray-800/90'>Every brand has a story. We help you wear it.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CustomizeSection;
