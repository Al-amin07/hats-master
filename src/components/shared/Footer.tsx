import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";

export default function Footer() {
    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/about", label: "ABOUT" },
        { href: "/production", label: "PRODUCTION" },
        { href: "/contact", label: "CONTACT" },
        { href: "/blog", label: "BLOG" },
    ]
    const rightNavLinks = [
        { href: "/baseball", label: "Baseball cap" },
        { href: "/bulk", label: "Bulk cap" },
        { href: "/custom", label: "Custom cap" },

    ]
    return (
        <footer className="bg-black text-white dark:bg-gray-900 px-16 py-16 lg:py-24">
            <div className='grid md:grid-cols-3 gap-y-6 lg:grid-cols-4'>

                <div>
                    <h1 className=' text-xs font-bold mb-6'>Assistant</h1>
                    <ul className='space-y-3 '>
                        {
                            navLinks.map(el => <li key={el.href} className=' relative w-full'>
                                <Link className='text-sm hover:underline ' href={el.href}>{el.label}
                                    <span className="absolute bottom-0 left-0 block w-0 h-1 bg-blue-500 transition-all duration-300 ease-out hover:w-full"></span>

                                </Link>
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <h1 className=' text-xs font-bold mb-6'>Product Information</h1>
                    <ul className='space-y-3 '>
                        {
                            rightNavLinks.map(el => <li key={el.href} className=' relative w-full'>
                                <Link className='text-sm hover:underline ' href={el.href}>{el.label}
                                    <span className="absolute bottom-0 left-0 block w-0 h-1 bg-blue-500 transition-all duration-300 ease-out hover:w-full"></span>

                                </Link>
                            </li>)
                        }
                    </ul>
                </div>



                <div className=' flex flex-col items-end col-span-1 lg:col-span-2'>
                    <div className=' min-w-sm mx-auto'>
                        <h1 className=' text-xs font-bold  mb-6'>Keep in Touch</h1>
                        <form action="" className='mb-5 relative'>
                            <input type="email" placeholder='Enter valid email' className='w-full border-1 
                        border-transparent border-b-white hover:border-white
                        border-b-1  p-2 text-sm' />
                            <button className='absolute z-20 top-1/2 -translate-y-1/2 right-2'> <IoIosArrowRoundForward className='' size={34} /></button>
                        </form>
                        <div className='flex gap-5 items-center'>
                            <IoLogoFacebook size={32} className='cursor-pointer rounded-full transition-colors duration-500 hover:bg-white hover:text-black' />
                            <IoLogoFacebook size={32} className='cursor-pointer rounded-full transition-colors duration-500 hover:bg-white hover:text-black' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
