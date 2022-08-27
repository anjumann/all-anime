import React from 'react'
import RecentAnime from '../RecentRelease/RecentAnime'
import Hero from './Hero'

function Home() {
  return (
    <>
      <div className='bg-gradient-to-r from-[#fbefbc]' >

        <Hero />
        <div className="w-[95vw] mx-auto ">
          <RecentAnime />
        </div>
      </div>
    </>
  )
}

export default Home