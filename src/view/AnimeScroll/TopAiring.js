import React, { useEffect, useState } from 'react'
import PopularAnimeCard from '../../Components/Cards/PopularAnimeCard';
import TopAiringCard from '../../Components/Cards/TopAiringCard';
import RecentAnimeCard from '../../Components/Cards/RecentAnimeCard';


const TopAiring = () => {

    const [recentAnime, setRecentAnime] = useState([]);


    const recentRelease = async () => {
        const temp = fetch('https://gogoanime.herokuapp.com/top-airing')
            .then(response => response.json())
            .then(anime => {
                // console.log(anime)
                setRecentAnime(anime)
            }).catch(error => { console.log(error) })


    }

    useEffect(() => {
        recentRelease();
    }, [])

    // console.log(recentAnime[0]);


    return (
        <>
            <div className="flex flex-col m-auto p-auto ">
                <h1
                    className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
                >
                    Trending Anime  
                </h1>
                <div
                    className="flex overflow-x-scroll pb-10 scrollbar scrollbar-thumb-red-800 scrollbar-track-red-300"
                >
                    <div
                        className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                    >
                        {recentAnime.map((anime, index) =>
                            <div className="mx-3">
                                <TopAiringCard key={index} anime={anime} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default TopAiring