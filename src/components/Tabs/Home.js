import React from 'react'
import Card from "../Card";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
const Home = () => {
    return (
        <ul className={"flex flex-row flex-wrap justify-center bg-slate-700 "} id={"cards"}>
            <Card className={'bg-map-plum border-map-plum'} description={"View Our Progress"} image={image1} link={"/map"} title={"Map"} />
            <Card className={'bg-discord-blue border-discord-blue'} description={"Join Our Community"} image={image2} link={"/discord"} title={"Discord"} />
            <Card className={'bg-donate-purple border-donate-purple'} description={"Support The Server"} image={image3} link={"/showcase"} title={"Donate"} />
        </ul>

    )
}
export default Home;