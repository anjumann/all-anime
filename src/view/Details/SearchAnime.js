import React, { useState, useEffect } from 'react'
import DefaultCard from '../../Components/Cards/DefaultCard'
import axios from 'axios';

function SearchAnime() {

    const [topAnime, setTopAnime] = useState([]);

    //fetching top anime from api
    const getTopAnime = async () => {
        const options = {
            method: 'GET',
            url: 'https://top-anime.p.rapidapi.com/anime/3/5',
            headers: {
                'X-RapidAPI-Key': '5f91c1718bmshffa0f4297773d0ap134107jsncad6dee8af97',
                'X-RapidAPI-Host': 'top-anime.p.rapidapi.com'
            }
        };

        await axios.request(options).then(function (response) {
            setTopAnime(response.data);
            // console.log(response.data[0].title);
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    useEffect(() => {
        getTopAnime();
        
    }, []);
    
    // console.log(topAnime[0].title);
    





    return (
        <>
            {/* top anime list */}
            <section className='w-full px-8 ' >
                <div className="container text-center font-bold text-5xl py-8 items-center  max-w-7xlpy-5 mx-auto ">
                    Top Anime List
                </div>
                <div className='p-4 gap-x-8 flex flex-wrap mx-auto w-full gap-y-10 items-center justify-center ' >
                    {/* <DefaultCard title={topAnime[0]} img="url" link="/" /> */}
                    <DefaultCard title="Name" img="url" link="/" />
                    <DefaultCard title="Name" img="url" link="/" />
                    <DefaultCard title="Name" img="url" link="/" />
                    <DefaultCard title="Name" img="url" link="/" />
                </div>
            </section>

        </>
    )
}

export default SearchAnime