import React, { useState, useEffect } from 'react'
import QuoteCard from './QuoteCard';
import { AiOutlineWarning } from 'react-icons/ai';


function QuoteAnime() {


    const [quote, setQuote] = useState();
    const [anime, setAnime] = useState();
    const [character, setCharacter] = useState();
    const [characterS, setCharacterS] = useState();
    const [error, setError] = useState("");

    const getRandomQuote = async () => {
        const temp = await fetch(`https://animechan.vercel.app/api/random`)
            .then(response => response.json())
            .then(quote => {
                setQuote(quote.quote);
                setAnime(quote.anime);
                setCharacter(quote.character);
            }).catch(error => {
                console.log(error)

            })
    }

    const getCharacterQuote = async (characterS) => {
        const temp = await fetch(`https://animechan.vercel.app/api/quotes/character?name=${characterS}`)
            .then(response => response.json())
            .then(quote => {
                console.log("getcharacter function " + characterS);
                const id = Math.floor(Math.random() * 10);
                setQuote(quote[id].quote);
                setAnime(quote[id].anime);
                setCharacter(quote[id].character);
                // console.log(quote);
            }).catch(error => {
                console.log(error)
                setError("Enter Valid Character Name");
            })
    }

    const getAnimeQuote = async (characterS) => {
        const temp = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${characterS}`)
            .then(response => response.json())
            .then(quote => {
                // console.log("anime function " + characterS);
                const id = Math.floor(Math.random() * 10);
                setQuote(quote[id].quote);
                setAnime(quote[id].anime);
                setCharacter(quote[id].character);
                // console.log(quote);
            }).catch(error => {
                console.log(error)
                setError("Enter Valid Anime/Series Name");

            })
    }

    const getCharInfo = () => {
        getCharacterQuote(characterS);
    }

    const getAnimeInfo = () => {
        getAnimeQuote(characterS);
    }





    return (
        <>
            {/* top anime list */}
            <section className='w-full px-8 bg-red-100 items-center h-[88vh]' >
                <div className="container text-center font-bold text-5xl py-8 max-w-7xlpy-5 mx-auto ">
                    Quotes Generator
                </div>
                <div className='p-4 gap-x-8 flex flex-wrap mx-auto w-full gap-y-10 items-center justify-center ' >
                    <QuoteCard quote={quote} anime={anime} character={character} />
                </div>

                <div className='mx-auto w-fit' >
                    <button
                        onClick={getRandomQuote}
                        type="button" className="container text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-fit  ">Generate New Random Quote</button>
                </div>
                <div className='flex flex-col justify-center items-center ' >
                    {error ? <div className="text-red-600 rounded-md border-2 border-red-700 py-1.5 px-2.5 font-bold  ">
                        <AiOutlineWarning className='inline pr-2' size={30} />{error}
                    </div>
                    :
                    ""
                    }
                    
                    <input type="search" id="default-search" className=" m-5 p-4 w-1/3 text-sm text-gray-900 bg-gray-50 rounded-lg   " placeholder="Search by character/anime name..." onChange={(e) => setCharacterS(e.target.value)} />
                    <div>

                        <button
                            onClick={getCharInfo}
                            type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  w-fit ">Generate Quote by Character Name</button>
                        <button
                            onClick={getAnimeInfo}
                            type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  w-fit ">Generate Quote by Anime Name</button>
                    </div>
                </div>
            </section>


        </>
    )
}

export default QuoteAnime