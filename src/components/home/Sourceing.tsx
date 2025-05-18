import Image from "next/image";
import sourcingImg from "@/assets/banner/b12.jpg"; // Rename your uploaded image and place it in /public
import { MdOutlineFindInPage } from "react-icons/md";
import { rajdhani } from "../fonts";
import { MdPersonalInjury } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const SourcingSection = () => {
    const details = [
        {
            icon: <MdOutlineFindInPage className="text-5xl text-red-600" />,

            title: "Extensive Local Network",
            description:
                "We offer an extensive local network in Vietnam, ensuring access to reliable suppliers and manufacturers.",
        },
        {
            icon: <MdPersonalInjury className="text-5xl text-red-600" />,
            title: "Cost-Effectiveness",
            description:
                "We provide cost-effective solutions by leveraging Vietnam’s competitive manufacturing and labor costs.",
        },
        {
            icon: <IoSearch className="text-5xl text-red-600" />,
            title: "Quality Assurance and Due-Diligence",
            description:
                "We support due diligence and ensure that your sourcing operations meet the highest standards of quality.",
        },
    ]
    return (
        <section className="bg-[#F6F6F6]  ">
            <div className="  flex gap-12 flex-col md:flex-row min-h-[600px] items-center">
                {/* Left side with image and text box */}
                <div className="relative  flex-1">
                    <div className="">
                        <Image
                            src={sourcingImg}
                            alt="Team discussing sourcing"
                            height={700}
                            width={800}
                            className="w-full h-auto object-cover "

                        />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-red-600 text-white max-w-xs ">
                        <p className="text-lg max-w-[200px] p-6 font-semibold leading-snug">
                            We specialize in sourcing products from Vietnam
                        </p>
                    </div>
                </div>

                {/* Right side with text content */}
                <div className={`flex-1 ${rajdhani.className} p-6 md:p-0`}>
                    <h2 className="text-3xl w-3/4  md:text-4xl font-semibold text-gray-900 mb-6">
                        <span className="text-red-600 ">—</span> Why Choosing a Sourcing
                        Agency in Bangladesh
                    </h2>

                    <div className="space-y-6">


                        {
                            details.map((detail, index) => (
                                <div key={index} className="flex cursor-pointer items-start space-x-4 hover:bg-white p-4  transition w-3/4 duration-300">
                                    <div className="">
                                        {detail.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg flex items-center">
                                            <span className="text-red-600 mr-2">{`0${index + 1}`}</span> {detail.title}
                                        </h3>
                                        <p className="text-gray-500 font-semibold text-sm mt-1">
                                            {detail.description}
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
