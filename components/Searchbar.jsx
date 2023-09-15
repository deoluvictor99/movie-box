import React, { useState } from "react";

export default function Searchbar({isOpen, setIsOpen}) {
    const [value, setValue] = useState("");
    return (
        <>
            <div 
                className={`
                            sm:block w-full lg:w-[40rem] relative order-last lg:order-2
                            ${isOpen? 'flex mt-2' : 'hidden'}
                        `}>
                <div className="relative w-full">

                        <button 
                            type="button" 
                            className="absolute top-1/2 right-4 -translate-x-1/2 -translate-y-1/2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <input 
                            type="search" 
                            id="search-navbar" 
                            placeholder="What do you want to watch?"
                            className="block w-full sm:mt-5 p-2 sm:p-4 sm:px-6 text-white placeholder:text-white font-normal border-2 border-[#D1D5DB] focus:outline-none rounded-md bg-transparent " 
                            value={value}
                            onChange={(e) => {setValue(e.target.value)}}
                        />

                </div>
            </div>

        </>
    );
}
