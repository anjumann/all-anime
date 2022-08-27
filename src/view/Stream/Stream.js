import React from 'react'
import { Player, BigPlayButton } from 'video-react';

const Stream = () => {
    return (
        <>

            <div>
                <div className='flex max-w-fit w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
                    <div className="flex flex-col m-5 ">
                        <div className="relative">
                            <Player
                                src="https://streamsss.net/e/84ob4f649y3j"
                            >
                                <BigPlayButton position="center" />
                            </Player>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stream