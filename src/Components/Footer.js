import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
    return (
        <>

            <footer className="p-4 bg-[#fbefbc] rounded-lg shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800">
                <span className="text-sm text-center  sm:text-center">© 2022 <NavLink to="/" className="hover:underline text-gray-900 font-semibold ">Anime Inc<span className='font-black text-red-600' >.</span>™</NavLink>.Designed & Developed  by - 
                
                <a href="https://www.anjuman.tech/" className='text-red-600 font-sans font-bold ' >  Anjuman Raj </a>
               
                </span>

            </footer>

        </>
    )
}

export default Footer
