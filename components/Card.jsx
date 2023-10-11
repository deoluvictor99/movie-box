"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({movie}) {
    const [isClicked, setIsClicked] = useState(false);
    const [genres, setGenres] = useState(null);

    useEffect(() => {
        async function getGenres() {
            try {
                const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=c0d1307e1b3c01284c7025bb0964cb2f')
                const res = await response.json();
                setGenres(res.genres);
            } catch (error) {
                console.error(error)
            }
        }
        getGenres();
    }, []);

    function findNameByNumber(objects, numbers) {
        const names = [];
            for (const number of numbers) {
                if (objects) {
                    for (const object of objects) {
                        if (object.id === number) {
                            names.push(object.name);
                        }
                    }
                }
            }
        return names;
    }

    const movieGenre = findNameByNumber(genres, movie.genre_ids);

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
                    <div className='space-y-3 sm:space-y-1'>
                        <div className='flex justify-between items-center mt-3'>

                            <p
                                className='text-[#9CA3AF]'
                            >
                                {movie.release_date.toString().slice(0,4)}
                            </p>
                            <div className='flex items-center gap-3'>
                                    <div className='w-[2.7rem] sm:w-[2rem]'>
                                        <Image src="/imdb.svg" width={100} height={100} alt='imdb' />
                                    </div>
                                    <span>
                                        <p className='text-[#9CA3AF]'>{movie.vote_average}/10</p>
                                    </span>
                            </div>
                        </div>
                        <div >
                            <h1 
                                data-testid= "movie-title"
                                className='text-[1.25rem] font-bold'
                            >
                                {movie.title}
                            </h1>
                        </div>
                        <div className='flex gap-2'>
                            {
                                movieGenre?.map((genre) => (
                                    <p key={genre} className='text-[#BE123C] text-sm flex flex-wrap'>{genre}</p>
                                ))
                            }
                        </div>
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
