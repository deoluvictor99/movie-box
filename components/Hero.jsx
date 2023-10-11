import { useEffect, useState } from "react";



// components
import Button from "./Button";

export default function Hero() {    
    

    const [movieList, setMovieList] = useState([])

    useEffect( () => {
        async function getTopMovies() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c0d1307e1b3c01284c7025bb0964cb2f`)
            const ans = await res.json();
            setMovieList(ans.results[9])
        }
        getTopMovies()
    }, [])
    

    return (
        <>
            <header >
                <div className="h-screen bg-cover bg-center flex items-center" 
                    style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieList.backdrop_path})`}}
                >
                    <div className=" mx-[1.7rem] sm:pl-10 text-white md:mt-[8rem] lg:max-w-[38vw] sm:space-y-8" >
                        <h1 className="font-bold whitespace-normal sm:whitespace-nowrap text-[3rem] mb-4">{movieList.original_title}</h1>
                        <p className="text-[0.8rem] sm:text-[1rem] mb-8">{movieList.overview}</p>
                    </div>
                </div>
            </header>
        </>
    )
}
