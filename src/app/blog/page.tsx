'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import person from '@/assets/about/challenge1.webp'
import c1 from '@/assets/challenge/c1.jpg'
import c2 from '@/assets/challenge/c2.jpeg'
import c3 from '@/assets/challenge/c3.jpg'
const tabs = ['Language Barriers', 'Scams', 'Quality Control'];
const challengeData: {
    name: string;
    text: string;
    lists: string[];
    image: string | undefined | StaticImageData
}[] = [
        {
            name: 'Language Barriers',
            text: 'Communicating effectively with suppliers and navigating cultural differences can be challenging, particularly if you are unfamiliar with the Vietnamese language and business culture. Indeed, at Sourcingagentvietnam.com, we are :',
            lists: ['Bilingual Staff', 'Multicultural backgrounds', 'Young and dynamic', 'French, English and Vietnamese', 'Manufacturing and Business skillset'],
            image: c1
        },
        {
            name: 'Scams',
            text: 'Be cautious against potential scams in the sourcing and exporting industry, as due diligence and careful assessment are crucial to avoid fraudulent activities and ensure a successful journey manufacturing your products in Vietnam. At sourcingagentvietnam.com, we guarantee :',
            lists: ['Transparent Pricing', 'Direct contact with manufacturers', 'No middle man', 'No hidden fees'],
            image: c2
        },
        {
            name: 'Quality Control',
            text: 'In Bangladesh, adherence to quality standards and certifications may vary, emphasizing the need for careful selection to ensure the highest level of quality and compliance in your sourcing ventures. We assist clients for :',
            lists: ['Quality control', 'Due Diligence', 'Negotiation', 'Factory checks', 'Production timeline'],
            image: c3
        },
    ]
export default function BlogPage() {
    const [activeTab, setActiveTab] = useState('Language Barriers');
    const selectedChallenges = challengeData.find(el => el.name === activeTab)
    return (
        <section className="text-black mt-28 bg-white py-12 px-4 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Person */}
            <div className="relative w-full lg:w-1/2">
                <Image
                    src={person} // replace with actual image path
                    alt="Guillaume"
                    width={600}
                    height={600}
                    className=" object-cover"
                />
                <div className="absolute top-1/2 -translate-y-1/2 left-6 bg-white text-black p-4 shadow-md rounded-lg max-w-[220px]">
                    <div className="flex items-center gap-2">
                        <span className="text-red-600 text-5xl">👍</span>
                        <p className="text-sm font-semibold leading-tight">
                            We’re a Small but
                            Reactive and
                            Experienced Team
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-4 left-6 text-red-500 font-signature text-2xl">
                    Guillaume Rondan
                </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 px-5">
                <h2 className="text-4xl font-semibold mb-4">
                    <span className="text-red-600 mr-2">—</span>Challenges of sourcing in Bangladesh
                </h2>

                {/* Tabs */}
                <div className="flex gap-4 mb-6">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 border cursor-pointer hover:bg-black hover:text-white transition-all duration-500 ${activeTab === tab
                                    ? 'bg-black text-white border-black'
                                    : 'bg-transparent text-black border-black'
                                }  text-sm font-medium`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>


                <div className="text-sm">
                    <p className="mb-4">
                        {selectedChallenges?.text}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Image
                            src={selectedChallenges?.image as StaticImageData}
                            alt={selectedChallenges?.name as string}
                            width={150}
                            height={150}
                            className=" h-[130px]"
                        />
                        <ul className="list-none space-y-2  text-sm">
                            {
                                selectedChallenges?.lists?.map(el => <li key={el}><span className="text-red-500">-</span> {el}</li>)
                            }


                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
