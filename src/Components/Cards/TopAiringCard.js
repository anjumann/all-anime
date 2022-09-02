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

    }, [anime.Title])
    return (
        <>
            <NavLink to={`details/${animeId}`}>
                {/* <Card className="w-64 md:w-96 my-10 shadow-lg shadow-red-400 ">
                    <CardHeader color="red" className="relative h-56">
                        <img
                            src={animeImg}
                            alt="img-blur-shadow"
                            className="h-full w-full overflow-hidden object-cover"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography  className={`mb-2 font-bold text-gray-800  ${xl ? 'text-base' : lg?('text-lg'):'text-xl'} `}>
                            {animeTitle}
                        </Typography>
                        <div className="flex justify-around">

                            <div className='text-left font-serif ' >
                                <Typography>
                                    Latest Episode: {latestEp}
                                </Typography>
                                
                            </div>
                            
                        </div>
                    </CardBody>

                </Card> */}

                <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={animeImg} alt={animeId} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default TopAiringCard