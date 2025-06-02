
import { slugify } from '@/service/slug';
import { capDatas } from '@/static/cap.data';
import { Link2, Search } from 'lucide-react';
import Image from 'next/image';
// import { capDatas } from '@/data/capData'; // Adjust the import path
import Link from 'next/link';
export const metadata = {
    title: "All Headwear Products | Sourcing Premium Caps, Hats & Accessories",
    description:
        "Explore our complete catalog of high-quality headwear and accessories, including baseball caps, snapbacks, bucket hats, beanies, and more. Perfect for global buyers seeking trusted sourcing solutions.",
    keywords: [
        "headwear sourcing",
        "cap manufacturer",
        "custom hats supplier",
        "premium caps and hats",
        "baseball caps wholesale",
        "bucket hats export",
        "snapbacks sourcing",
        "private label headwear",
        "global sourcing headwear",
        "OEM cap manufacturer"
    ],

};

export default function AllProductsPage() {
    return (
        <div className="max-w-7xl  px-5 md:px-12 lg:px-16 mx-auto mt-24 py-10">
            <h1 className="text-3xl font-medium text-center mb-10">Premium Caps & Accessories – Sourced for You</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {capDatas.map((cap) => (
                    <Link
                        href={`/product/${slugify(cap.name)}`}
                        key={cap.id}
                        className="bg-white group   overflow-hidden transition "
                    >
                        <div className="relative h-64 w-full">
                            <Image
                                src={cap.image1}
                                alt={cap.name}
                                fill
                                className="object-cover "
                            />
                            <div className='absolute  w-full max-h-[35px] flex gap-4 justify-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bottom-0 z-10'>
                                <button className='p-1.5 cursor-pointer bg-gray-300 opacity-0 group-hover:opacity-100 hover:bg-black hover:text-white -translate-x-20 group-hover:-translate-x-0  transition-all duration-500'>

                                    <Link2 size={24} />
                                </button>
                                <button className='p-1.5 cursor-pointer hover:bg-black hover:text-white bg-gray-300 opacity-0 group-hover:opacity-100 translate-x-20 group-hover:translate-x-0 transition-all duration-500'>

                                    <Search size={24} />
                                </button>

                            </div>
                            <div className='absolute group-hover:bg-black/20 inset-0 bg-black/5 transition-all duration-500'>

                            </div>
                        </div>

                        <div className="p-4 space-y-2">
                            <h2 className="text-xl font-semibold">{cap.name}</h2>
                            <p className="text-gray-600 ">{cap.title}</p>



                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
