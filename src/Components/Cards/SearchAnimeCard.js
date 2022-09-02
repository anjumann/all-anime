import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom';



const SearchAnimeCard = ({ anime }) => {

    const [lg, setLg] = useState(false)
    const [xl, setXl] = useState(false)
    useEffect(() => {

        if (anime.animeTitle.length > 20) {
            setLg(true)
            if (anime.animeTitle.length > 30) {
                setXl(true);
            }

        }

    }, [anime.animeTitle])
    return (
        <>
            <NavLink to={`/details/${anime.animeId}`}>
                {/* <Card className="w-64 md:w-96 my-10 shadow-lg shadow-red-400 ">
                    <CardHeader color="red" className="relative h-56">
                        <img
                            src={anime.animeImg}
                            alt="img-blur-shadow"
                            className="h-full w-full overflow-hidden object-cover"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                            {anime.animeTitle}
                        </Typography>
                        <div className="flex justify-around">

                            <div className='text-left font-serif ' >
                                <Typography>
                                    {anime.status}
                                </Typography>
                               
                            </div>
                            
                        </div>
                    </CardBody>

                </Card> */}
                <div className="card w-64 md:w-72 bg-base-100 shadow-xl group  ">
                    <figure className="px-10 pt-10">
                        <img src={anime.animeImg} alt={anime.animeId} className="rounded-xl h-64 group-hover:scale-110 overflow-hidden transition-all duration-200 ease-out " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className={`card-title mb-2 font-bold text-gray-800  ${xl ? 'text-base' : lg ? ('text-lg') : 'text-xl'} `} >{anime.animeTitle}</h2>
                        <p>{anime.status}</p>
                    </div>
                </div>
            </NavLink>

        </>
    )
}

export default SearchAnimeCard