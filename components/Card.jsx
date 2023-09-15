"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card() {

    
    const [topMovies, setTopMovies] = useState([]);
    

    
    async function getTopMovies() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c0d1307e1b3c01284c7025bb0964cb2f`)
            const ans = await res.json();
            setTopMovies(ans.results)
    }

    useEffect(() => {
        getTopMovies()
    },[])

    


    // topMovies.length > 0 && console.log(topMovies) 

    return (
        <>
            
                {topMovies? topMovies.slice(0,10).map((movie) => (
                    <div 
                        key={movie.id} 
                        data-testid= "movie-card"
                        className=' sm:max-w-[15rem] space-y-1 relative hover:scale-[1.1] transition-all'
                    >
                        <Link href={`/movies/${movie.id}`}>
                            <div className='relative '>

                                <Image
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.original_title}
                                    width={1000}
                                    height={1000}
                                    data-testid= "movie-poster"
                                    className='w-full'
                                />

                                
                                
                            </div>
                            <div className=''>
                                <p
                                    data-testid= "movie-release-date"
                                    className='text-[#9CA3AF] mt-3'
                                >
                                    Release Date: {movie.release_date}
                                </p>
                                <h1 
                                    data-testid= "movie-title"
                                    className='text-[1.25rem] font-bold mt-3'
                                >
                                    {movie.original_title}
                                </h1>
                            </div>
                        </Link>

                        {/* <button type='button' className='absolute top-4 right-4 p-1 rounded-full bg-[#f3f4f67f]' onClick={(e) => {
                            setIsClicked(!isClicked)
                        }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z" fill={isClicked? "red": "#D1D5DB" }/>
                                </svg>
                        </button> */}
                    </div>
                )) : ''}
        </>
    )
}
