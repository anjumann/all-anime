import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const TopAiringCard = ({ anime }) => {

    const { animeTitle, animeId, animeImg, latestEp } = anime

    const [lg, setLg] = useState(false)
    const [xl, setXl] = useState(false)
    useEffect(() => {

        if (animeTitle.length > 20) {
            setLg(true)
            if (animeTitle.length > 30) {
                setXl(true);
            }

        }

    }, [animeTitle])
    return (
        <>
            <NavLink to={`details/${animeId}`}>
               <div className="card w-64 md:w-72 bg-base-100 shadow-xl group  ">
                    <figure className="px-10 pt-10">
                        <img src={animeImg} alt={animeId} className="rounded-xl h-64 group-hover:scale-110 overflow-hidden transition-all duration-200 ease-out " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className={`card-title mb-2 font-bold text-gray-800  ${xl ? 'text-base' : lg ? ('text-lg') : 'text-xl'} `} >{animeTitle}</h2>
                        <p>Latest Episode: {latestEp}</p>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default TopAiringCard