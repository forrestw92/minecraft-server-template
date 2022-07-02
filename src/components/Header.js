import React from 'react'
import Logo from '../images/logo.png'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className="max-w-6xl m-auto mt-32">
            <img src={Logo} alt="logo" className={"w-full"} />
            <nav className="flex justify-between items-center">
                <div className="flex ml-5 mr-5 sm:ml-0 sm:mr-0 mt-10 items-center text-center  shadow-slate-800 justify-center sm:rounded-md flex-col sm:flex-row w-full">
                    <Link to="/" className="mb-3 w-full sm:w-40 sm:mb-0 rounded-md sm:rounded-l-md sm:rounded-r-none sm:rounded-br-none transition-all hover:scale-105 focus:scale-105 text-slate-800 text-xl font-bold border-2 border-slate-700 hover:border-slate-900 hover:bg-green-500 focus:bg-green-500 focus:outline-0  p-2 bg-green-400 bg-bright_squares bg-blend-difference" >Home</Link>
                    <Link to="/members" className="mb-3 w-full sm:w-40 sm:mb-0 rounded-md sm:rounded-none transition-all hover:scale-105 focus:scale-105 text-slate-800 font-bold text-xl border-2 border-slate-700 hover:border-slate-900 hover:bg-green-500 focus:bg-green-500 focus:outline-0 p-2 bg-green-400 bg-bright_squares bg-blend-difference">Members</Link>
                    <Link to="/showcase" className="mb-3 w-full sm:w-40 sm:mb-0 rounded-md sm:rounded-tl-none sm:rounded-bl-none transition-all hover:scale-105 focus:scale-105 text-slate-800 font-bold text-xl border-2 border-slate-700 hover:border-slate-900 hover:bg-green-500 focus:bg-green-500 focus:outline-0 rounded-r-md p-2 bg-green-400 bg-bright_squares bg-blend-difference">Showcase</Link>
                </div>
            </nav>
        </header>
    )
}
export default Header;