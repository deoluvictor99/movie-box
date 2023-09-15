"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({movie}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <>
            
                    <div 
                        key={movie.id} 
                        data-testid= "movie-card"
                        className=' sm:max-w-[15rem] space-y-1 relative '
                    >
                        <Link href={`/movies/${movie.id}`}>
                            <div className='relative overflow-hidden '>

                                <Image
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.title}
                                    width={1000}
                                    height={1000}
                                    data-testid= "movie-poster"
                                    className='w-full hover:scale-[1.1] transition-all'
                                />

                                
                            </div>
                            <div className=''>
                                <p
                                    data-testid= "movie-release-date"
                                    className='text-[#9CA3AF] mt-3'
                                >
                                    {movie.release_date}
                                </p>
                                <h1 
                                    data-testid= "movie-title"
                                    className='text-[1.25rem] font-bold mt-3'
                                >
                                    {movie.title}
                                </h1>
                            </div>
                        </Link>

                        <div
                            className=' rounded-full bg-[#f3f4f580] p-1 absolute top-3 right-3 cursor-pointer'
                            onClick={handleClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z" fill={isClicked? "red" : "#D1D5DB"}/>
                            </svg>
                        </div>

                    </div>
        </>
    )
}
