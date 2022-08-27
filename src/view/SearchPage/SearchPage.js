import React, { useState } from 'react'
import SearchAnimeCard from '../../Components/Cards/SearchAnimeCard'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const SearchPage = () => {

    const { keyword } = useParams()

    const [anime, setAnime] = useState([])

    const SearchAnime = async () => {
        const temp = fetch(`https://gogoanime.herokuapp.com/search?keyw=`+keyword)
            .then(response => response.json())
            .then(anime => {
                console.log(anime)
                setAnime(anime)
                // setGenre(anime.genres)
                // setEpisodeUrl(anime.episodesList[0].episodeUrl)
            }).catch(error => { console.log(error) })
    }
    useEffect(()=>{
        SearchAnime()
    },keyword)

    return (
        <>

            <div className="flex flex-col m-auto p-auto ">
                <h1
                    className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
                >
                    Search Results
                </h1>
                <div
                    className="flex overflow-y-scroll pb-10 scrollbar scrollbar-thumb-red-800 scrollbar-track-red-300"
                >
                    <div
                        className="flex flex-wrap lg:ml-40 md:ml-20 ml-10 "
                    >
                        {anime.map((anime, index) =>
                            <div className="mx-3">
                                <SearchAnimeCard key={index} anime={anime} />
                            </div>
                        )}
                    </div>
                </div>
            </div>


        </>
    )
}

export default SearchPage