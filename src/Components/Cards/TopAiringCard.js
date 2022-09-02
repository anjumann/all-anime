import React ,{useState, useEffect} from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

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
                <Card className="w-64 md:w-96 my-10 shadow-lg shadow-red-400 ">
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
                                {/* <Typography >
                                <span className='' > Episode:</span> {anime.episodeNum}
                            </Typography> */}
                            </div>
                            
                        </div>
                    </CardBody>

                </Card>
            </NavLink>
        </>
    )
}

export default TopAiringCard