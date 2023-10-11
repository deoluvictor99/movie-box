"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import dynamic from "next/dynamic";

function page({ params }) {
const itemId = parseInt(params.movieid);

const [data, setData] = useState([]);
const [trailer, setTrailer] = useState([]);
const [error, setError] = useState(null);
const [genre, setGenre] = useState([]);
const [movieStars, setMovieStars] = useState([]);
const [writers, setWriters] = useState([]);
const [directors, setDirectors] = useState([]);

useEffect(() => {
async function getTopMovies() {
    try {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${itemId}?api_key=c0d1307e1b3c01284c7025bb0964cb2f`
    );
    const ans = await res.json();
    setData(ans);
    setGenre(ans.genres);
    } catch (error) {
    setError(error.message);
    }
}
getTopMovies();
}, []);

useEffect(() => {
    async function getMovieCredits() {
        try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${itemId}/credits?api_key=c0d1307e1b3c01284c7025bb0964cb2f`);
        const ans = await res.json();
        setMovieStars(ans.cast);
        setWriters(ans.crew);
        setDirectors(ans.crew);
        } catch (error) {
        setError(error.message);
        }
    }
    getMovieCredits();

}, []);

useEffect(() => {
    async function getMoviesTrailer() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${itemId}/videos?api_key=c0d1307e1b3c01284c7025bb0964cb2f`);
            const ans = await response.json();
            setTrailer(ans.results[0]);
        } catch (error) {
            setError(error.message);
        }
    }
    getMoviesTrailer();
}, []);

const getGenre = genre.map((gen) => gen.name);

const topStars = movieStars.slice(0, 3);

const allWriters = writers.filter((writer) => writer.known_for_department == "Writing");
const director = directors.find((director) => director.known_for_department == "Directing");

return (
    <>
        <section>
        <aside >
            <div className=" py-[2.5rem] flex flex-col justify-between h-[100%] fixed border border-[#0000004d] rounded-r-[2.8rem]  ">
                <Link href="/">
                    <div className='flex items-center px-2 sm:px-4 '>
                        <Image src="/tv.svg" alt='MovieBox' width={500} height={500} className='px-1 w-[3rem] '/>
                        <span className='hidden lg:block text-xl font-bold'>MovieBox</span>
                    </div>
                </Link>

                <div className='flex flex-col gap-10 gap-y-2'>
                    <Link href="/" className="">
                        <div className=' py-5 pr-1 px-5  hover:border-r-8 hover:border-[#BE123C] hover:text-[#BE123C]  flex items-center gap-2 hover:bg-[#be123c17] '>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" className='w-[1.6rem] '>
                                <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
                            </svg>
                            <span className=' hidden lg:block text-[1rem] font-bold'>Home</span>
                        </div>
                    </Link>

                    <Link href="" >
                        <div className='py-5 pr-1 px-5  hover:border-r-8 hover:border-[#BE123C] hover:text-[#BE123C]  flex items-center gap-2 hover:bg-[#be123c17]'>
                            <Image src="/icons8-movie-projector-50.png" alt='Logo' width={500} height={500} className='w-[1.6rem] '/>
                            <span className='hidden lg:block text-[1rem] font-bold'>Movies</span>
                        </div>
                    </Link>

                    <Link href="" >
                        <div className='py-5 pr-1 px-5 hover:border-r-8 hover:border-[#BE123C] hover:text-[#BE123C]  flex items-center gap-2 hover:bg-[#be123c17] '>
                            <Image src="/icons8-tv-show-50.png" alt='Logo' width={500} height={500} className='w-[1.6rem] '/>
                            <span className='hidden lg:block text-[1rem]  font-bold'>TV Series</span>
                        </div>
                    </Link>

                    <Link href="" >
                        <div className='py-5 pr-1 px-5  hover:border-r-8 hover:border-[#BE123C] hover:text-[#BE123C]  flex items-center gap-2 hover:bg-[#be123c17] '>
                            <Image src="/icons8-calendar-50.png" alt='Logo' width={500} height={500} className='w-[1.6rem] '/>
                            <span className='hidden lg:block text-[1rem]  font-bold'>Upcoming</span>
                        </div>
                    </Link>
                </div>

                {/* <Link href="" className="flex items-center gap-2 text-center pr-1 px-4">
                    <span>
                        <Image src="/icons8-log-out-50.png" alt='Logo' width={500} height={500} className='w-[1.6rem] '/>
                    </span>
                    <span className='hidden lg:block text-[1.1rem] '>Log out</span>
                </Link> */}
            </div>
        </aside>

        <main className="max-w-[80vw] sm:max-w-[84vw] md:max-w-[86vw] ml-[19vw] sm:ml-[14vw] md:ml-[11vw] lg:ml-[14vw] lg:max-w-[82vw] p-2 py-6 ">
            {error && (
            <p className="text-2xl text-[#BE123C]">
                Error: {error}, please refresh
            </p>
            )}

            <div className="rounded-3xl overflow-hidden w-full max-h-[40rem] flex justify-center bg-black">
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${trailer.key}`}
                    width={1000}
                    className="top-0 left-0 w-[90rem] h-100%"
                />
            </div>

            <div className="flex flex-col md:flex-row gap-2 justify-between mt-4">
                <div className=" flex sm:flex-row flex-wrap gap-x-6 gap-y-2 sm:gap-3 text-[#404040] text-[1rem] font-[500]">
                    <p data-testid="movie-title">{data.title} •</p>
                    <p data-testid="movie-release-date">{data.release_date ? data.release_date.slice(0, 4) : ""} •</p>
                    <p>{data.adult ? "R" : "PG-13"} • </p>
                    <p data-testid="movie-runtime">
                    {`${data.runtime ? Math.floor(data.runtime / 60) : ""}h`}{" "}
                    {data.runtime ? data.runtime % 60 : ""}m
                    </p>
                    {getGenre.map((gen) => (
                    <p key={gen} className="text-[#BE123C]">
                        {gen}
                    </p>
                    ))}
                </div>

                <div className="flex items-center gap-1">
                    <span>
                        <Image
                            src="/Star.svg"
                            alt="Rating"
                            width={500}
                            height={500}
                            className="w-[1.64rem] "
                        />
                    </span>
                    <span className="text-[#E8E8E8] text-[1rem]  ">
                        {data.vote_average
                            ? data.vote_average.toString().slice(0, 3)
                            : ""}
                    | <span className="text-[#666] text-[1rem]">350k</span>
                    </span>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row mt-4 justify-between gap-4">
                <div className="flex flex-col justify-between">
                    <p className="text-[#333]" data-testid="movie-overview">{data.overview}</p>
                    <div className="text-[1rem] text-[#333] space-y-4 mt-4">
                        <p>
                            Director :
                            {
                            <span className="text-[#BE123C] "> {director ? director.name : ""}</span>
                            }
                        </p>
                        <p>
                            Writers :
                        {allWriters
                        ? allWriters.map((writer) => (
                            <span className="text-[#BE123C] " > {writer.name} </span>
                            ))
                        : ""}
                    </p>
                    <p>
                        Stars :
                        {topStars
                        ? topStars.map((stars) => (
                            <span className="text-[#BE123C] " > {stars.name} </span>
                            ))
                        : ""}
                    </p>
                    </div>

                    <div className="flex mt-7 border rounded-[0.625rem] border-[#C7C7C7] ">
                        <div className="bg-[#BE123C] rounded-[0.625rem] p-2 md:px-5 md:py-3 text-white sm:whitespace-nowrap">
                            <p>Top rated movie #65</p>
                        </div>
                        <div className="flex justify-between items-center w-full px-3">
                            <p className="text-[#333]">Awards 9 nominations</p>
                            <span>
                            <Image
                                src="/Expand Arrow.svg"
                                alt="Logo"
                                width={10000}
                                height={10000}
                                className="w-[1.4rem] "
                            />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="min-w-[23vw]">
                    <div className="bg-[#BE123C] flex items-center justify-center px-6 py-2 gap-2 rounded-[0.625rem] drop-shadow-sm">
                        <span>
                            <Image
                                src="/Two Tickets.svg"
                                alt="Logo"
                                width={100}
                                height={100}
                                className="w-[2.1rem] md:w-[2.4rem] drop-shadow-sm"
                            />
                        </span>
                        <span className="whitespace-nowrap sm:text-[1rem] text-white drop-shadow-sm ">
                            See Showtimes
                        </span>
                    </div>
                    <div className="border-[#BE123C] border bg-[#be123c1a] flex items-center gap-2 justify-center px-6 py-2 mt-2 rounded-[0.625rem]">
                        <span>
                            <Image
                            src="/List.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="w-[1.5rem] md:w-[1.7rem] "
                            />
                        </span>
                        <span className="whitespace-nowrap text-[1rem] text-[#333]  ">
                            More watch options
                        </span>
                    </div>

                    <div className="relative rounded-[0.625rem] overflow-hidden mt-4">
                    <Image
                        src="/istockphoto-1522056968-612x612.jpg"
                        alt="Logo"
                        width={10000}
                        height={10000}
                        className="w-full "
                    />
                    <div className="flex justify-center items-center gap-2 w-full absolute bottom-0 left-0 bg-[#12121280] px-3 ">
                        <span>
                        <Image
                            src="/List (1).svg"
                            alt="Logo"
                            width={10000}
                            height={10000}
                            className="w-[2.5rem] "
                        />
                        </span>
                        <span className="text-white text-[0.875rem] ">
                        The Best Movies and Shows in September
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </main>
        </section>
    </>
);
}

export default dynamic(() => Promise.resolve(page), { ssr: false });
