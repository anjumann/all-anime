import React from 'react'

function DefaultCard( {title, img, link }) {
    return (
        <>
        
            <div className="max-w-sm bg-none rounded-lg border border-gray-800 shadow-md  h-4/12">
                    <img className="rounded-t-lg w-56 " src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt=""/>
                
                <div className="p-5">
                        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-red-700 ">{title}</h5>
                    
                </div>
            </div>

        </>

    )
}

export default DefaultCard