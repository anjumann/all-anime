import React, { useEffect, useState } from 'react'

import RecentAnimeCard from '../../Components/Cards/RecentAnimeCard';


const RecentAnime = () => {

    const [recentAnime, setRecentAnime] = useState([]);
    const [loading, setLoading] = useState(false)

    const recentRelease = async () => {
        setLoading(true)
        const temp = fetch('https://gogoanime.herokuapp.com/recent-release')
            .then(response => response.json())
            .then(anime => {
                // console.log(anime)
                setRecentAnime(anime)
                setLoading(false)
            }).catch(error => { console.log(error) })


    }

    useEffect(() => {
        recentRelease();
    }, [])

    // console.log(recentAnime[0]);


    return (
        <>
            {loading ? (<div className=' bg-[#c0eafa] flex justify-center items-center w-full  text-3xl' >
                <img src="/loading.gif" alt="" />
            </div>) : <>
                <div className="flex flex-col m-auto p-auto ">
                    <h1
                        className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
                    >
                        Recent Anime Release
                    </h1>
                    <div
                        className="flex overflow-x-scroll pb-10 scrollbar scrollbar-thumb-red-800 scrollbar-track-red-300"
                    >
                        <div
                            className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                        >
                            {recentAnime.map((anime, index) =>
                                <div className="mx-3">
                                    <RecentAnimeCard key={index} anime={anime} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </>}




        </>
    )
}

export default RecentAnime