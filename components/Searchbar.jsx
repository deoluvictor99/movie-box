import { useState, useEffect } from "react";
import Link from "next/link";

export default function Searchbar({isOpen}) {

    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");


    

    useEffect(() => {
        const searchMovie = async() => {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=c0d1307e1b3c01284c7025bb0964cb2f&query=${query}`;
            const res = await fetch(url);
            const data = await res.json();
            setSearchResults(data.results)
        }
        searchMovie();
    }, [query])

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(() => e.target.value)
    }
    

    return (
        <>
            <div 
                className={` sm:flex mt-2 sm:mt-0
                            w-full sm:w-[23rem] md:w-[35rem] xl:w-[50rem] relative order-last sm:order-2 transition-all duration-500
                            ${isOpen? 'flex' : 'hidden'}
                        `}>
                <div className="relative w-full">

                        <input 
                            type="search" 
                            placeholder="Search Movie"
                            className="block w-full p-2 sm:p-4 sm:px-6 text-white placeholder:text-white font-normal border-2 border-[#D1D5DB] focus:outline-none rounded-md bg-transparent " 
                            onChange={handleChange}
                        />
                        <div className=" max-h-[30rem] overflow-y-scroll overflow-hidden ">
                            {
                                searchResults?.map(result => (
                                        <Link href={`/movies/${result.id}`} key={result.id} className="bg-[#BE123C] bg-opacity-90 text-white flex gap-5 border-y-2 border-dotted">
                                            <div>
                                                <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} alt="movie-poster" width='35px' height='auto' className="w-[4rem]"/>
                                            </div>
                                            <div className="space-y-2 pt-1">
                                                <h2>{result.original_title}</h2>
                                                <p>{result.release_date.toString().slice(0,4)}</p>
                                            </div>
                                        </Link>
                                ))
                            }
                        </div>

                </div>
            </div>
        </>
    );
}
