import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Details = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [anime, setAnime] = useState({});
    const [genre, setGenre] = useState([]);
    const [episodeUrl, setEpisodeUrl] = useState([]);
    const [episode, setEpisode] = useState([]);

    // console.log(episode)

    const getStreamLink = async (animeEpisodeId) => {
        const temp = fetch(`https://gogoanime.herokuapp.com/streamsb/watch/` + animeEpisodeId)
            .then(res => res.json())
            .then(url => {
                window.location.replace(url.headers.Referer);
            }).catch(err => {
                console.log(err)
            })
    }



    const popularAnime = async () => {
        const temp = fetch(`https://gogoanime.herokuapp.com/anime-details/` + id)
            .then(response => response.json())
            .then(anime => {
                setAnime(anime)
                setGenre(anime.genres)
                setEpisode(anime.episodesList)
            }).catch(error => { console.log(error) })
    }

    useEffect(() => {
        popularAnime();
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
                                {/* <a data-scroll-to="episodes"
                                    href="#episode" target='blank' className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Watch now
                                </a> */}


                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <hr />
            {/* table */}
            <div id='episode' className='text-center text-3xl my-4 ' >
                Episodes
            </div>
            <div className="overflow-x-auto md:w-8/12 mx-auto w-10/12 relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="py-3 px-6 text-center">
                                No.
                            </th>
                            <th scope="col" className="py-3 px-6 text-center">
                                Episode
                            </th>
                            <th scope="col" className="py-3 px-6 text-center">
                                Links
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {episode.map((episode, index) => {
                            return (
                                <tr key={index} className="bg-white border-b  border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  text-center">
                                        <Button onClick={() => {
                                            getStreamLink(episode.episodeId)
                                        }} className="font-medium text-blue-600 hover:underline">{episode.episodeNum}</Button>

                                    </th>
                                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  text-center capitalize">
                                        <Button onClick={() => {
                                            getStreamLink(episode.episodeId)
                                        }} className="font-medium text-blue-600 hover:underline">{episode.episodeId.replaceAll('-', ' ')}</Button>

                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <Button onClick={() => {
                                            getStreamLink(episode.episodeId)
                                        }} className="font-medium text-blue-600 hover:underline">Watch/Download</Button>
                                    </td>


                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Details