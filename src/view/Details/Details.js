import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const Details = () => {

    const { id } = useParams();


    const [anime, setAnime] = useState({});
    const [genre, setGenre] = useState([]);
    const [episodeUrl, setEpisodeUrl] = useState([]);



    const popularAnime = async () => {
        const temp = fetch(`https://gogoanime.herokuapp.com/anime-details/` + id)
            .then(response => response.json())
            .then(anime => {
                // console.log(anime.genres)
                setAnime(anime)
                setGenre(anime.genres)
                setEpisodeUrl(anime.episodesList[0].episodeUrl)
            }).catch(error => { console.log(error) })
    }

    useEffect(() => {
        popularAnime();
        console.log(genre)

    }, [])



    return (
        <>

            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt={anime.animeTitle} className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={anime.animeImg} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <div className="flex  divide-x-2 divide-gray-600 ">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest px-2 ">{anime.type}</h2>
                                <h2 className="text-sm title-font text-gray-500 tracking-widest px-2 ">{anime.status}</h2>
                                <h2 className="text-sm title-font text-gray-500 tracking-widest px-2 ">{anime.releasedDate}</h2>
                            </div>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{anime.animeTitle}</h1>
                            <div className="flex mb-4">
                                <span className="flex flex-wrap items-center gap-2">
                                    {genre.map((genre, index) =>
                                        <span key={index} className="text-gray-500 border-2 rounded-lg px-2 py-1 ">{genre}</span>
                                    )}

                                </span>

                            </div>
                            <p className="leading-relaxed">{anime.synopsis}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">Episodes - {anime.totalEpisodes} </span>
                                <a href={episodeUrl} target='blank' className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Watch now</a>
                                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details