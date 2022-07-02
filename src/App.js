import './App.css';
import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Tabs/Home";
import Mods from "./components/Tabs/Mods";
import Datapacks from "./components/Tabs/Datapacks";
import Rules from "./components/Tabs/Rules";
import Other from "./components/Tabs/Other";
import Header from "./components/Header";

function App() {
    return (
        <main>
            <Header/>
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
        </main>
  );
}

export default App;
