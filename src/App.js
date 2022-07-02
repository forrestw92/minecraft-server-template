import './App.css';
import React from "react";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import Home from "./components/Tabs/Home";
import Mods from "./components/Tabs/Mods";
import Datapacks from "./components/Tabs/Datapacks";
import Rules from "./components/Tabs/Rules";
import Other from "./components/Tabs/Other";
import Header from "./components/Header";

function App() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isMods = location.pathname === '/mods';
    const isDatapacks = location.pathname === '/datapacks';
    const isRules = location.pathname === '/rules';
    const isOther = location.pathname === '/other';

    return (
        <>
            <Header/>
            <main className={"flex flex-col justify-center w-full"}>
                <section className="max-w-screen-xl mt-10 bg-slate-800 rounded-tl-md rounded-tr-md ml-4 mr-4 xl:ml-auto xl:mr-auto xl:w-full relative">
                    <ul className="flex flex-col justify-center text-center text-white transition-all lg:flex-row">
                        <li className={`${isHome ? ' border-t-green-500  bg-slate-700 ' : 'border-t-slate-800'} rounded-tr-md rounded-tl-md lg:rounded-none duration-300 ease-in-out transition-all border-t-4 text-2xl w-full lg:w-40 p-3`}><Link to={"/"}>Home</Link></li>
                        <li className={`${isRules ? ' border-t-green-500 bg-slate-700' : 'border-t-slate-800'} duration-300 ease-in-out transition-all border-t-4 text-2xl w-full lg:w-40 p-3`}><Link to={"/rules"}>Rules</Link></li>
                        <li className={`${isMods ? ' border-t-green-500 bg-slate-700' : 'border-t-slate-800'} duration-300 ease-in-out transition-all border-t-4 text-2xl w-full lg:w-40 p-3`}><Link to={"/mods"}>Mods</Link></li>
                        <li className={`${isDatapacks ? ' border-t-green-500 bg-slate-700' : 'border-t-slate-800'} duration-300 ease-in-out transition-all border-t-4 text-2xl w-full lg:w-40 p-3`}><Link to={"/datapacks"}>Datapacks</Link></li>
                        <li className={`${isOther ? ' border-t-green-500 bg-slate-700' : 'border-t-slate-800'} duration-300 ease-in-out transition-all border-t-4 text-2xl w-full lg:w-40 p-3`}><Link to={"/other"}>Other</Link></li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path={"/mods"} element={<Mods/>} />
                        <Route path={"/datapacks"} element={<Datapacks/>} />
                        <Route path={"/rules"} element={<Rules/>} />
                        <Route path={"/other"} element={<Other/>} />
                    </Routes>
                </section>

            </main>
        </>
  );
}

export default App;
