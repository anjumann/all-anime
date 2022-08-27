import React from 'react'
import PopularAnime from '../AnimeScroll/PopularAnime'
import RecentAnime from '../AnimeScroll/RecentAnime'
import Hero from './Hero'

function Home() {
  return (
    <>
      <div className='bg-[#fbefbc] scrollbar scrollbar-thumb-red-800 scrollbar-track-red-300 ' >

        <Hero />
        <div className="w-[95vw] mx-auto ">
          <PopularAnime />
        </div>
        <div className="w-[95vw] mx-auto ">
          <RecentAnime />
        </div>

      </div>
    </>
  )
}

export default Home