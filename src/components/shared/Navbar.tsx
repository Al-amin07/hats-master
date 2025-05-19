'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const caps = [
    { id: 1, name: 'Baseball Cap' },
    { id: 2, name: 'Trucker Hat' },
    { id: 3, name: 'Snapback Cap', },
    { id: 4, name: 'Fitted Cap', },
    { id: 5, name: 'Bucket Hat', },
    { id: 6, name: 'Washed Cap', },
]
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname()
    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "#", label: "PRODUCT" },
        { href: "/process", label: "OUR PROCESS" },
        { href: "/blog", label: "BLOG" },
        { href: "/about", label: "ABOUT" },
        { href: "/contact", label: "CONTACT" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`z-50 top-0  left-0 w-full transition-all duration-300 ${scrolled ? 'fixed bg-white shadow ' : 'absolute bg-transparent  text-white'
                }`}
        >
            <div className="container px-6 py-7 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <h1 className={`text-2xl font-semibold ${pathname !== '/' && 'text-black'}`}>HATSMASTER</h1>
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex  lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 cursor-pointer dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full md:opacity-100 md:translate-x-0'
                        }`}
                >
                    <div onMouseLeave={() => {

                        setIsProductOpen(false);

                    }} className="flex flex-col md:flex-row md:mx-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onMouseEnter={() => {
                                    if (link.label === 'PRODUCT') {
                                        setIsProductOpen(true);
                                    }
                                }}

                                className={`my-2  ${scrolled || pathname !== '/' ? 'text-black   ' : 'text-white '}   hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0  ${pathname === link.href && 'underline underline-offset-[6px]'}`}
                            >
                                {link.label}
                            </Link>


                        ))}
                        {
                            isProductOpen && <div className='absolute top-6 left-0 min-w-sm bg-gray-200 text-black/75 shadow-lg px-4 py-3 rounded-sm'>
                                <div className='flex flex-col'>
                                    {
                                        caps.map((cap) => (
                                            <Link key={cap.id} href={`/product/${cap.id}`} className='py-2 
                                            hover:bg-slate-400/50 rounded-md px-2 text-sm text-gray-700 dark:text-gray-200  dark:hover:bg-slate-400/50  
                                            '>
                                                {cap.name}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </div>

                    
                </div>
            </div>
        </nav>
    );
}
