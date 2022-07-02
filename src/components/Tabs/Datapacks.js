import React from 'react'
import antiendermangrief from '../../images/datapacks/antiendermangrief.png'
import armoredelytra from '../../images/datapacks/armoredelytra.png'
import armorstatues from '../../images/datapacks/armorstatues.png'
import coordinateshud from '../../images/datapacks/coordinateshud.png'
import durabilityping from '../../images/datapacks/durabilityping.png'
import moremobheads from '../../images/datapacks/moremobheads.png'
import playerheaddrops from '../../images/datapacks/playerheaddrops.png'
import silencemobs from '../../images/datapacks/silencemobs.png'
import trackstatistics from '../../images/datapacks/trackstatistics.png'

const Datapacks = () => {
    const datapacks = [
            {
                name: 'Anti Enderman Grief',
                image: antiendermangrief,
                description: 'Prevents enderman from picking up blocks and randomly placing them around the world. Nice QOL datapack to keep the world more clean.',
            },
            {
                name: 'Armored Elytra',
                image: armoredelytra,
                description: 'Drop elytra and a chestplate above an anvil to merge them into one item. Drop the item above a grindstone to separate them again.',
            },
            {
                name: 'Armor Statues',
                image: armorstatues,
                description: 'Adds a unique book that allows you to alter the properties of armor stands in survival. Useful for decoration and bring life to the area.',
            },
            {
                name: 'Coordinate HUD',
                image: coordinateshud,
                description: 'Adds information to your actionbar. XYZ Coords and a 24hr clock. Can trigger this on or off ingame with /ch_toggle' ,
            },
            {
                name: 'Durability Ping',
                image: durabilityping,
                description: 'Get notified when you damage an item with 10% or less durability. Fully customizable per-player with /trigger duraPing',
            },
            {
                name: 'More Mob Heads',
                image: moremobheads,
                description: 'Adds a chance to receive a mob head upon killing it.',
            },
            {
                name: 'Player Head Drops',
                image: playerheaddrops,
                description: 'A player will drop their head when killed by another player. The item displays who the killer is. Once placed will remove custom NBT tags',
            },
            {
                name: 'Silence Mobs',
                image: silencemobs,
                description: 'Adds the ability to silence mobs using a name tag. \'Silence me\'; \'silence me\'; \'silence_me\' are all acceptable names.',
            },
            {
                name: 'Track Statistics',
                image: trackstatistics,
                description: 'Adds statistics that are processed beforehand. E.g. Km swam, Km flown, etc.',
            }
       ]
    return (
        <div>
        <h1 className={"text-2xl pt-5 text-white text-center"}>All Datapack images belong to their respectful owner's</h1>
            <ul className={"m-5"}>
                {datapacks.map((datapack, index) => {
                    return <li key={index} className={"flex flex-col m-8 items-center lg:flex-row bg-slate-900"}>
                        <div className={"flex flex-col text-2xl text-slate-400 items-center bg-slate-700 lg:max-w-xs lg:flex-row w-full p-2 "}>
                            <img src={datapack.image} alt={datapack.name} width={64} height={64} className={"pt-5 lg:pt-0"}/>
                            <p className={"lg:pl-8 text-green-300 "}>{datapack.name}</p>
                        </div>
                        <p className={"text-xl pl-5 pr-5 text-slate-400 text-center m-5 lg:m-0"}>{datapack.description}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default Datapacks;