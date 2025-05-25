import Image from 'next/image';
import React from 'react';
import img from '@/assets/about/c1.jpg';
const CustomizeSection = () => {
    return (
        <section className="">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div className="relative w-full h-[450px]">
                    <Image
                        src={img} // Save your image as /public/images/customize-style.png
                        alt="Hat embroidery machine"
                        layout="fill"
                        objectFit="cover"
                        className=" shadow-md"
                        priority
                    />
                </div>

                {/* Text */}
                <div>
                    <h2 className="text-5xl  text-gray-700 mb-7">
                        CUSTOMIZE YOUR  STYLE
                    </h2>
                    <p className="text-gray-700/80 mb-6 leading-relaxed">
                        Whether you’re looking to outfit a team, promote your brand, or make a statement, our stock decoration options ensure your caps make a memorable impression. Choose from traditional direct embroidery options, embroidered patches, woven patches, or go bold with genuine and faux leather options for a touch of sophistication. For modern styles, our silicone and flexstyle patches provide a contemporary edge, while sublimated patches deliver vibrant, photo-quality detail.
                    </p>
                    <p className="font-semibold text-gray-800/80">
                        The possibilities are endless!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CustomizeSection;
