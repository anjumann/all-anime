import React, { useState, useEffect } from 'react'
import MoviesCard from '../../Components/Cards/MoviesCard';



const AnimeMovie = () => {
    const [loading, setLoading] = useState(false)
    const [movieAnime, setMovieAnime] = useState([]);
    const recentRelease = async () => {
        setLoading(true);
        const temp = fetch("https://gogoanime.herokuapp.com/anime-movies")
            .then((response) => response.json())
            .then(anime => {
                // console.log(anime)
                setMovieAnime(anime)
                setLoading(false)
            })
            .catch((error) => console.log(error))


    }

    useEffect(() => {
        recentRelease();
    }, [])
    return (
        <>
            {loading ? (<div className=' bg-[#c0eafa] flex justify-center items-center w-full  text-3xl' >
                <img src="/loading.gif" alt="" />
            </div>) : (
                <>
                    <div className="flex flex-col m-auto p-auto ">
                        <h1
                            className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
                        >
                            Movies
                        </h1>
                        <div
                            className="flex overflow-x-scroll overflow-y-hidden pb-10 scrollbar scrollbar-thumb-red-800 scrollbar-track-red-300"
                        >
                            {loading ? <div> Loading... </div> : (
                                <div
                                    className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                                >
                                    {movieAnime.map((anime, index) =>
                                        <div className="mx-3">
                                            <MoviesCard key={index} anime={anime} />
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </>
            )
            }


        </>
    )
}

export default AnimeMovie