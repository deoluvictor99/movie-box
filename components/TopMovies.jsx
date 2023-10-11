"use client"
import { useState, useEffect } from 'react';

// components
import Card from './Card'

export default function TopMovies() {

    const [topMovies, setTopMovies] = useState([]);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        async function getTopMovies() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c0d1307e1b3c01284c7025bb0964cb2f`)
                const ans = await res.json();
                setTopMovies(ans.results)
            } catch (error) {
                setError(error.message)
            }
        }
        getTopMovies()
    },[])


    return (
        <>
            <main className=' my-10 '>
                <div className=' px-8 sm:px-[5rem] space-y-7 '>
                    <h1 className='text-[2rem] font-bold text-start '>
                        Featured Movies
                    </h1>
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex-wrap gap-8 sm:gap-4 justify-center '>
                            {error && <p className='text-2xl text-[#BE123C]'>Error: {error}, please refresh</p>}
                            {topMovies? topMovies.slice(0,20).map((movie) => (
                                <Card key={movie.id} movie={movie}/>
                            )) :  ''}
                        </div>
                    </div>
                </div>
            </main>


            
        </>
    )
}
