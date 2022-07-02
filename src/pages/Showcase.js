import React from 'react';
import Header from "../components/Header";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Showcase = () => {
    const imageCount = 64;
    const images = [];
    const loadImages = () => {
        for(let i = 1; i < imageCount; i++) {
            const image = require(`../images/screenshots/${i}.png`);
            images.push(<LazyLoadImage src={image} alt={`Screenshot ${i}`} className={"transition-all bg-slate-700 drop-shadow-2xl hover:scale-105"} />)
        }
    }
    loadImages();
    return (
        <div>
            <Header/>
            <section className={"flex flex-row flex-wrap items-center justify-center bg-slate-700 m-5 rounded-md bg-bright_squares bg-blend-overlay"}>
            <h1 className={"text-4xl underline text-white text-center w-full p-8"}>Showcase</h1>
            {
                images.map((image, index) => {
                    return <div key={index} className={"p-5 w-full max-w-5xl lg:w-1/2"}>
                        {image}
                    </div>
                })
            }
            </section>
        </div>
    )
}
export default Showcase;