import React, { useEffect, useState } from 'react'
import PopularAnimeCard from '../../Components/Cards/PopularAnimeCard';





const PopularAnime = () => {

    const [popAnime, setPopAnime] = useState([]);


    const popularAnime = async () => {
        const temp = fetch('https://gogoanime.herokuapp.com/popular')
            .then(response => response.json())
            .then(anime => {
                // console.log(anime)
                setPopAnime(anime)
            }).catch(error => { console.log(error) })


    }

    useEffect(() => {
        popularAnime();
    }, [])

    console.log(popAnime[0]);


    return (
        <>


            <div className="flex flex-col m-auto p-auto ">
                <h1
                    className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
                >
                    Popular Anime
                </h1>
                <div
                    className="flex overflow-x-scroll pb-10 scrollbar scrollbar-thumb-red-800 scrollbar-track-red-300"
                >
                    <div
                        className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                    >
                        {popAnime.map((anime, index) =>
                            <div className="mx-3">
                                <PopularAnimeCard key={index} anime={anime} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* <style>
                .hide-scroll-bar {
                    -ms - overflow - style: none;
                scrollbar-width: none;
}
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none;
}
            </style> */}
        </>
    )
}

export default PopularAnime