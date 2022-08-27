import { NavLink } from 'react-router-dom'
import {useState} from 'react'
function Navbar() {

    const menu = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Quote",
            link: "/Quote",
        },
        {
            title: "part2",
            link: "/",
        },
        {
            title: "part3",
            link: "/",
        },
    ]

    

    const [keyword, setKeyword] = useState("one piece")

    return (
        <>
            <section className="w-full px-8 text-gray-700 bg-transparent backdrop-blur-lg sticky top-0 drop-shadow-xl ">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="relative flex flex-col md:flex-row">
                        <NavLink to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">Anime Inc<span className="text-red-600">.</span></span>
                        </NavLink>
                        <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">

                            {menu.map((index, key) => {
                                return (
                                    <>
                                        <NavLink to={index.link} key={key} className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">{index.title}</NavLink>
                                    </>
                                )
                            })}

                        </nav>
                    </div>

                    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                        
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  " placeholder="Search"
                    onChange={e => setKeyword(e.target.value)}
                    />


                        <NavLink to={`search/${keyword}`}  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-800 whitespace-nowrap ">
                            Search
                        </NavLink>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Navbar