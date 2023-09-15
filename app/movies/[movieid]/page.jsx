"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function page({params}) {
    const itemId = parseInt(params.movieid);

    const [data, setData] = useState([]);
    
    useEffect(() => {
        async function getTopMovies() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${itemId}?api_key=c0d1307e1b3c01284c7025bb0964cb2f`);
            const ans = await res.json();
            setData(ans)
        }
        getTopMovies()
    },[])

    console.log(data);
    

    const genres = data.genres;
    console.log([genres].id);


    return (
        <>
            <section className='flex'>
                <aside className='max-w-[16vw]'>
                    <div className=' py-[2.5rem] flex flex-col justify-between h-[100%] 2xl:h-[100vh]  border border-[#0000004d] rounded-r-[2.8rem] '>
                        <Link href="/" className="flex items-center  px-4">
                            <div className='flex items-center gap-3  '>
                                <Image src="/tv.svg" alt='MovieBox' width={500} height={500} className='w-[2.2rem] '/>
                                <span className='hidden lg:block text-[1.2rem] font-bold'>MovieBox</span>
                            </div>
                        </Link>

                        <div className='flex flex-col gap-10'>
                            <Link href="/" className="">
                                <div className=' py-5  pl-3 sm:pl-7  hover:border-r-8 hover:border-[#BE123C] hover:text-[#BE123C]  flex items-center gap-2 hover:bg-[#be123c17] '>
                                    <Image src="/Home.svg" alt='Logo' width={500} height={500} className='w-[1.6rem] '/>
                                    <span className=' hidden lg:block text-[1rem]  font-bold'>Home</span>
                                </div>
                            </Link>

                            <Link href="" >
                                <div className='py-5  pl-3 sm:pl-7  border-r-8 border-[#BE123C] text-[#BE123C]  flex items-center  gap-2  bg-[#be123c17]'>
                                    <Image src="/Movie Projector.svg" alt='Logo' width={500} height={500} className='w-[1.6rem] '/>
                                    <span className='hidden lg:block text-[1rem]  font-bold'>Movies</span>
                                </div>
                            </Link>

                            <Link href="" >
                                <div className='py-5 pl-3 sm:pl-7  hover:border-r-8 hover:border-[#BE123C] hover:text-[#BE123C]  flex items-center gap-2 hover:bg-[#be123c17] '>
                                    <Image src="/TV Show.svg" alt='Logo' width={500} height={500} className='w-[1.6rem] '/>
                                    <span className='hidden lg:block text-[1rem]  font-bold'>TV Series</span>
                                </div>
                            </Link>

                            <Link href="" >
                                <div className='py-5  pl-3 sm:pl-7  hover:border-r-8 hover:border-[#BE123C] hover:text-[#BE123C]  flex items-center gap-2 hover:bg-[#be123c17] '>
                                    <Image src="/Calendar.svg" alt='Logo' width={500} height={500} className='w-[1.6rem] '/>
                                    <span className='hidden lg:block text-[1rem]  font-bold'>Upcoming</span>
                                </div>
                            </Link>
                        </div>

                        <div className='hidden lg:block mx-[0.8rem] p-4 pt-[3rem] bg-[#f8e7eb66] border border-[#be123cb3] rounded-[1.25rem] space-y-3 '>
                            <h3 className='text-[1rem] font-semibold text-[#333333CC]'>Play movie quizes and earn free tickets</h3>
                            <p className='text-[0.75rem] text-[#666666] font-[500] '>50K people are playing now</p>
                            
                            <div className=' text-center'>
                                <button className='bg-[#be123c33] text-[0.85rem] text-[#BE123C] hover:bg-[#be123cb3] hover:text-white rounded-full px-6 py-2 '>
                                    Start playing
                                </button>
                            </div>
                        </div>

                        <Link href="" className="flex items-center text-center justify-center">
                            <span>
                                <Image src="/Logout.svg" alt='Logo' width={500} height={500} className='w-[2.5rem] '/>
                            </span>
                            <span className='hidden lg:block text-[1.1rem] '>Log out</span>
                        </Link>
    
                    </div>
                </aside>

                <main className='max-w-[90vw] lg:max-w-[83vw]  p-2 sm:p-8'>

                    <div className='relative'>
                        <div className='rounded-3xl overflow-hidden  lg:h-[30rem]'>
                            <Image src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt='Logo' width={10000} height={10000} className='w-[100%] '/>
                        </div>
                        <div className='absolute flex flex-col items-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 '>
                            <div className=' bg-[#ffffff59]  p-3 sm:p-6 rounded-full'> 
                                <Image src="/Play.svg" alt='Logo' width={10000} height={10000} className='w-[1rem] sm:w-[2.5rem] cursor-pointer '/>
                            </div>
                            <p className='text-[#E8E8E8]  text-[0.5rem] sm:text-xl '>Watch Trailer</p>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-2 justify-between mt-4'>
                        <div className=' flex flex-col sm:flex-row gap-1 sm:gap-3 text-[#404040] text-[0.6rem] sm:text-[1.4rem] font-[500]'>
                            <p data-testid="movie-title">{data.title }   </p>
                            •
                            <p data-testid="movie-release-date">{data.release_date} </p>
                            •
                            <p>{data.adult? "R": "PG-13"} </p>
                            •
                            <p data-testid="movie-runtime">{data.runtime}</p> 
                        </div>
                        <div className='flex items-center gap-1'>
                            <span>
                                <Image src="/Star.svg" alt='Rating' width={500} height={500} className='w-[1.64rem] '/>
                            </span>
                            <span className='text-[#E8E8E8] sm:text-[1.5rem] '>
                                {data.vote_average? data.vote_average.toString().slice(0,3) : ""} | <span className='text-[#666] sm:text-[1.25rem]'>350k</span> 
                            </span>
                        </div>
                    </div>
                    
                    <div className='flex flex-col lg:flex-row mt-4 justify-between gap-4 '>
                        <div>

                            <p className='text-[#333] text-[0.6rem] sm:text-[1.25rem]' data-testid="movie-overview">{data.overview}</p>
                            <div className='text-[0.7rem] sm:text-[1.25rem] text-[#333] space-y-4 mt-4'>
                                <p>Director : <span className='text-[#BE123C] '>Joseph Kosinski</span></p>
                                <p>Writers : <span className='text-[#BE123C] '>Jim Cash, Jack Epps Jr,  Peter Craig</span> </p>
                                <p>Stars : <span className='text-[#BE123C] '>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                            </div>

                            <div className='flex text-[0.6rem] sm:text-[1.25rem] mt-7 border rounded-[0.625rem] border-[#C7C7C7] '>
                                <div className='bg-[#BE123C] rounded-[0.625rem] px-5 py-3 text-white sm:whitespace-nowrap'> <p>Top rated movie #65</p></div>
                                <div className='flex justify-between items-center w-full px-3'> 
                                    <p className='text-[#333]'> 
                                        Awards 9 nominations
                                    </p> 
                                    <span>
                                        <Image src="/Expand Arrow.svg" alt='Logo' width={10000} height={10000} className='w-[2.5rem] '/>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='min-w-[24vw]'>
                            <div className='bg-[#BE123C] flex items-center justify-center px-6 py-2 gap-2 rounded-[0.625rem] drop-shadow-sm'>
                                <span>
                                    <Image src="/Two Tickets.svg" alt='Logo' width={100} height={100} className='w-[2.7rem] drop-shadow-sm'/>
                                </span>
                                <span className='whitespace-nowrap text-[1.25rem] text-white drop-shadow-sm '>
                                    See Showtimes
                                </span>
                            </div>
                            <div className='border-[#BE123C] border bg-[#be123c1a] flex items-center gap-2 justify-center px-6 py-2 mt-2 rounded-[0.625rem]'>
                                <span>
                                    <Image src="/List.svg" alt='Logo' width={100} height={100} className='w-[2rem] '/>
                                </span>
                                <span className='whitespace-nowrap text-[1.25rem] text-[#333]  '>
                                    More watch options
                                </span>
                            </div>
                            
                            <div className='relative rounded-[0.625rem] overflow-hidden mt-4'>
                                    <Image src="/Rectangle 37.png" alt='Logo' width={10000} height={10000} className='w-full '/>
                                    <div className='flex justify-center items-center gap-2 w-full absolute bottom-0 left-0 bg-[#12121280] px-3 '>
                                        <span>
                                            <Image src="/List (1).svg" alt='Logo' width={10000} height={10000} className='w-[2.5rem] '/>
                                        </span>
                                        <span className='text-white text-[0.875rem] '>The Best Movies and Shows in September</span>
                                    </div>
                            </div>
                        </div>
                    </div>

                </main>
            </section>
        </>
    )
}
