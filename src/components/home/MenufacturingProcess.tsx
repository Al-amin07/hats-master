import { FaRegComments, FaCogs, FaShippingFast } from "react-icons/fa";
import { BiCube } from "react-icons/bi";

export default function ManufacturingProcess() {
    const steps = [
        {
            id: 1,
            title: "Get a Quote",
            icon: <FaRegComments className="text-5xl mx-auto mb-4" />,
            description:
                "Send us your product designs and we'll get you a quote within 24 hours.",
        },
        {
            id: 2,
            title: "Sampling",
            icon: <BiCube className="text-5xl mx-auto mb-4" />,
            description: "Custom samples can be made within 2-3 weeks on average.",
        },
        {
            id: 3,
            title: "Production & Inspection",
            icon: <FaCogs className="text-5xl mx-auto mb-4" />,
            description:
                "We have over 30 quality-control inspectors across Asia who manage on-site inspection of your goods to ensure quality standards are met.",
        },
        {
            id: 4,
            title: "Shipping",
            icon: <FaShippingFast className="text-5xl mx-auto mb-4" />,
            description:
                "After passing our quality-control inspection, we manage the delivery of your goods to your warehouse or Third-Party Logistics.",
        },
    ];

    return (
        <section className="  bg-white text-black">
            <h2 className="text-3xl font-semibold text-center uppercase mb-16">Manufacturing Process</h2>
            <div className="grid md:grid-cols-2 gap-2 max-w-5xl mx-auto px-4">
                {steps.map((step) => (
                    <div key={step.id} className="text-center hover:shadow-2xl transition-shadow duration-500 rounded-lg cursor-pointer px-4 py-4">
                        <div className=" flex justify-center">
                            <div className="w-24 h-24 relative group-hover:bg-black/80 group-hover:text-white transition-colors duration-700 rounded-full   flex items-center justify-center text-black text-4xl font-bold">
                                <div className=" absolute animate-spin  h-full w-full  rounded-full border-[3px]  border-black/80 border-dotted">

                                </div>

                                {step.icon}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mt-2 mb-2">
                            {step.title}
                        </h3>
                        <p className="text-gray-700">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
