"use client"

// components
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import TopMovies from '@/components/TopMovies'
import Footer from '@/components/Footer'



export default function Home() {

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <TopMovies/>
        <Footer/>
      </div>
    </>
  )
}
