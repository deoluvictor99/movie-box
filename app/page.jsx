'use client'

import { useState } from 'react'

// components
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import TopMovies from '@/components/TopMovies'



export default function Home() {
  
  const [movieList, setMovieList] = useState([])
  
  async function getMovies() {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c0d1307e1b3c01284c7025bb0964cb2f`)
    const ans = await res.json();
    setMovieList(ans.results)
    // console.log(ans.results);
  }
  
  // getMovies();
  // console.log(movieList);
  
  
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <TopMovies/>
      </div>
    </>
  )
}
