import './App.css';
import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Mods from "./components/Mods";
import Datapacks from "./components/Datapacks";
import Rules from "./components/Rules";
import Other from "./components/Other";

function App() {
    return (
        <>
            <div className="links">
                <Link to={"/"} className="link">Home</Link>
                <Link to={"/rules"} className="link">Contact</Link>
                <Link to={"/mods"} className="link">Mods</Link>
                <Link to={"/datapacks"} className="link">Datapacks</Link>
                <Link to={"/other"} className="link">Other</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path={"/mods"} element={<Mods/>} />
                <Route path={"/datapacks"} element={<Datapacks/>} />
                <Route path={"/rules"} element={<Rules/>} />
                <Route path={"/other"} element={<Other/>} />
            </Routes>
        </>
  );
}

export default App;
