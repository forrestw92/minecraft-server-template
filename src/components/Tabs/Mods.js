import React from 'react'
import lithium from '../../images/mods/lithium.png'
import starlight from '../../images/mods/starlight.png'
import voicechat from '../../images/mods/voicechat.png'
import krypton from '../../images/mods/krypton.png'
const Mods = () => {
    const mods = [
            {
                name: 'Lithium',
                image: lithium,
                description: 'Lithium is a optimization mod for Minecraft which works to improve a number of systems without changing any behavior.',
                link: 'https://www.curseforge.com/minecraft/mc-mods/lithium'
            },
            {
                name: 'Starlight',
                image: starlight,
                description: 'Fabric mod for rewriting the light engine to fix lighting performance and lighting errors.',
                link: 'https://www.curseforge.com/minecraft/mc-mods/starlight'
            },
            {
                name: 'Simple Voice Chat',
                image: voicechat,
                description: 'Fabric mod that adds a proximity voice chat to your Minecraft server. Required On Client',
                link: 'https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat'
            },
            {
                name: 'Krypton',
                image: krypton,
                description: 'Fabric mod that attempts to optimize the Minecraft networking stack',
                link: 'https://www.curseforge.com/minecraft/mc-mods/krypton'
            }
        ]
    return (
        <div>
            <h1 className={"text-2xl text-center text-white pt-5"}>All mod images belong to their respectful owner's</h1>
            <ul className={"m-5"}>
                {mods.map((mod, index) => {
                    return <li key={index} className={"flex flex-col m-8 items-center lg:flex-row bg-slate-900"}>
                        <div className={"flex flex-col text-2xl text-slate-400 items-center bg-slate-700 lg:max-w-xs lg:flex-row w-full p-2 "}>
                            <img src={mod.image} alt={mod.name} width={64} height={64} className={"pt-5 lg:pt-0"}/>
                            <a href={mod.link} className={"hover:underline lg:pl-8 text-green-300 "}>{mod.name}</a>
                        </div>
                        <p className={"text-xl pl-5 pr-5 text-slate-400 text-center m-5 lg:m-0"}>{mod.description}</p>
                    </li>
                })}
            </ul>            
        </div>
    )
}
export default Mods;