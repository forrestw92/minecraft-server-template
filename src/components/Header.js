import React from 'react'
import Logo from '../images/logo.png'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className="max-w-6xl m-auto mt-32">
            <img src={Logo} alt="logo" className={"w-full"} />
            <nav className="flex justify-between items-center">
                <div className="flex m-auto mt-10 items-center text-center  shadow-slate-800 shadow-md rounded-md ">
                    <Link to="/" className="transition-all hover:scale-105 focus:scale-105 text-slate-800 text-xl font-bold border-2 border-slate-700 hover:border-slate-900 hover:bg-green-500 focus:bg-green-500 focus:outline-0 rounded-l-md w-40 p-2 bg-green-400 bg-bright_squares bg-blend-difference" >Home</Link>
                    <Link to="/members" className="transition-all hover:scale-105 focus:scale-105 text-slate-800 font-bold text-xl border-2 border-slate-700 hover:border-slate-900 hover:bg-green-500 focus:bg-green-500 focus:outline-0 w-40 p-2 bg-green-400 bg-bright_squares bg-blend-difference">Members</Link>
                    <Link to="/showcase" className="transition-all hover:scale-105 focus:scale-105 text-slate-800 font-bold text-xl border-2 border-slate-700 hover:border-slate-900 hover:bg-green-500 focus:bg-green-500 focus:outline-0 rounded-r-md w-40 p-2 bg-green-400 bg-bright_squares bg-blend-difference">Showcase</Link>
                </div>
            </nav>
        </header>
    )
}
export default Header;