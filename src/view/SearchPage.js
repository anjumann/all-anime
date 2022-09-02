import React, { useState } from 'react'
import SearchAnimeCard from '../Components/Cards/SearchAnimeCard'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const SearchPage = () => {

    const { keyword, explore } = useParams()
    const [loading, setLoading] = useState(false)
    const [anime, setAnime] = useState([])


    const exploreAnime = async () => {

        const temp = fetch(`https://gogoanime.herokuapp.com/recent-release`)
    }

    const SearchAnime = async () => {
        setLoading(true)
        const temp = fetch(`https://gogoanime.herokuapp.com/search?keyw=` + keyword)
            .then(response => response.json())
            .then(anime => {
                console.log(anime)
                setAnime(anime)
                setLoading(false)
            }).catch(error => { console.log(error) })
    }
    useEffect(() => {
        SearchAnime()
    }, [])



    return (
        <>
            {loading ? (<div className="h-[78vh] w-full flex justify-center items-center bg-[#c0eafa]  ">
                <img src="/loading.gif" alt="" />
            </div>) : (
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
                            {anime.length === 0 ? <h1>No Results Found</h1> : ""}
                            {anime.map((anime, index) =>
                                <div className="mx-3">
                                    <SearchAnimeCard key={index} anime={anime} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SearchPage