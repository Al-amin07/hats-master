import { FaClock, FaSearchPlus, FaMoneyBillAlt, FaCertificate } from 'react-icons/fa';

const features = [
    {
        icon: <FaClock size={46} className="text-blue-400" />,
        title: 'Time',
        description: 'To get on time product supply',
    },
    {
        icon: <FaSearchPlus size={46} className="text-blue-400" />,
        title: 'Sourcing',
        description: 'To get the support of expert multi sourcing team',
    },
    {
        icon: <FaMoneyBillAlt size={46} className="text-blue-400" />,
        title: 'Price',
        description: 'To get the best price as the benefit of cost effectiveness',
    },
    {
        icon: <FaCertificate size={46} className="text-blue-400" />,
        title: 'Certificate',
        description: 'We are certified and trusted partner',
    },
];

export default function WhyChooseUs() {
    return (
        <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/choose-us-bg.jpg')" }}>
            <div className="bg-black opacity-60 py-12">
                {/* <h2 className="text-center text-white text-3xl font-serif mb-10">WHY CHOOSE US</h2> */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 text-white">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center space-y-2">
                            <div className="flex  justify-center">{feature.icon}</div>
                            <h3 className="font-bold text-lg">{feature.title}</h3>
                            <p className="text-sm w-3/4 mx-auto">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
