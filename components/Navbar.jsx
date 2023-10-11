import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

// components
import Searchbar from './Searchbar';


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="px-3 md:px-5 lg:px-4 w-full py-4 md:py-2 z-20 left-0 absolute bg-black bg-opacity-60 ">
                <div className=" flex flex-wrap items-center sm:items-start justify-between md:gap-x-10 p-1 md:p-0 sm:px-1 xl:px-[4rem] sm:py-[1rem]">

                    <Link href="/" className="flex items-center lg:order-1">
                        <div className='flex items-center gap-x-2 sm:gap-x-[1.3rem]'>
                            <Image src="/tv.svg" alt='Logo' width={500} height={500} className='w-[2.5rem] sm:w-[3.5rem] '/>
                            <span className='text-white text-[1.2rem] sm:text-[1.8rem] font-bold'>MovieBox</span>
                        </div>
                    </Link>

                    <Searchbar
                        isOpen={isOpen}
                    />

            {/* search icon only appears on mobile screens */}
                    <button 
                        onClick={() => {setIsOpen(!isOpen)}}
                        className="block sm:hidden order-2"
                    >
                        <svg className='w-[1.4rem]' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill='none'>
                            <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                </div>
            </nav>
        </>
    )
}
