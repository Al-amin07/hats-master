import Image from "next/image";
import sourcingImg from "@/assets/about/sss3.jpg"; // Rename your uploaded image and place it in /public

import { rajdhani } from "../fonts";


const SourcingSection = () => {
    const advantages = [
        {
            id: 1,
            title: "Cost-Effective Manufacturing with Skilled Labor",
            desc: "Bangladesh offers affordable and high-quality cap and hat manufacturing, with a skilled workforce experienced in private label headwear."
        },
        {
            id: 2,
            title: "Second-Largest Apparel Exporter Globally",
            desc: "As the world’s second-largest apparel exporter, Bangladesh is a reliable sourcing and manufacturing hub for fashion hats, beanies, baseball caps, and more."
        },
        {
            id: 3,
            title: "Sustainable and Ethical Headwear Production",
            desc: "Home to many green-certified factories, it’s a top choice for brands seeking sustainable and ethical headwear production."
        },
        {
            id: 4,
            title: "Strategic Location & Rapid Infrastructure Growth",
            desc: "With strong logistics and port access, Bangladesh ensures quick delivery of both bulk and custom cap orders worldwide."
        },
        {
            id: 5,
            title: "Government Incentives & Trade Benefits",
            desc: "Enjoy duty-free exports to the EU and other regions, plus government support for Retail Apparel and Fashion Industry."
        }
    ];

    return (
        <section className=" ">
            <div className="  flex gap-12 flex-col md:flex-row min-h-[600px] items-center">
                {/* Left side with image and text box */}
                <div className="relative  flex-1">
                    <div className="">
                        <Image
                            src={sourcingImg}
                            alt="Team discussing sourcing"
                            width={700}
                            height={700}
                            className="w-full h-[510px]   object-cover "

                        />
                    </div>

                </div>

                {/* Right side with text content */}
                <div className={`flex-1 ${rajdhani.className} py-6 px-6 md:p-0`}>
                    {/* <h2 className="text-2xl uppercase md:w-3/4  md:text-2xl font-semibold text-gray-900 mb-4">
                        Why Global Retailers Choose  Bangladesh  for Apparel  Sourcing?
                    </h2> */}

                    <div className="space-y-0">


                        {
                            advantages.map((detail, index) => (
                                <div key={index} className="flex cursor-pointer  items-start space-x-4 hover:shadow-2xl  p-4  transition-all  md:w-3/4 duration-500">
                                    <h2 className=" text-4xl font-semibold text-black">
                                        {detail.id}
                                    </h2>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg flex items-center">
                                            {detail.title}
                                        </h3>
                                        <p className="text-gray-500 font-semibold text-sm mt-1">
                                            {detail.desc}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SourcingSection;
