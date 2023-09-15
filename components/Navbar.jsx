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
            <nav className="fixed md:px-10 lg:px-2 w-full z-20 top-3 sm:top-0 left-0 ">
                <div className=" flex flex-wrap items-center justify-between p-1 sm:px-4 xl:px-[6rem] sm:py-[1rem]">

                    <Link href="/" className="flex items-center lg:order-1">
                        <div className='flex items-center justify-between gap-2 sm:gap-[1.3rem]'>
                            <Image src="/tv.svg" alt='Logo' width={500} height={500} className='w-[2.5rem] sm:w-[3.5rem] md:w-[4.5rem]'/>
                            <span className='text-white text-[1.2rem] sm:text-[2rem] font-bold'>MovieBox</span>
                        </div>
                    </Link>

                    <Searchbar
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />

                    <div className="flex items-center gap-4 sm:gap-5 order-2 lg:order-3">
                        <button 
                            onClick={() => {setIsOpen(!isOpen)}}
                            className="block sm:hidden  "
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill='none'>
                                <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
    
                        <Link href="/" className="text-white text-center text-[1rem] py-1 rounded">Sign in</Link>

                        <button
                            type='button'
                            className="bg-[#BE123C] rounded-full p-[0.4rem] sm:p-3"
                        >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  className='w-[1.5rem] h-[1.5rem]'>
                                    <path d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z" />
                                    <path d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
