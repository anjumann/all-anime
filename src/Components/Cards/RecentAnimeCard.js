import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import {BiLinkExternal} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';

const RecentAnimeCard = ({ anime }) => {
    return (
        <>
            <Card className="w-96 my-10 shadow-lg shadow-red-400 ">
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
                                Dub/Sub: {anime.subOrDub}
                            </Typography>
                            <Typography >
                                <span className='' > Episode:</span> {anime.episodeNum}
                            </Typography>
                        </div>
                        <NavLink to={`details/${anime.animeId}`} >
                        <Button variant="outlined" color="red" className="mt-2"  > Watch Now <BiLinkExternal className='inline' /> </Button>
                        </NavLink>
                    </div>
                </CardBody>
                
            </Card>

        </>
    )
}

export default RecentAnimeCard