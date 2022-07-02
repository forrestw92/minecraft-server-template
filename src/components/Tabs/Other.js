import React from 'react'

const Other = () => {
    const information = [
        {
            title: 'Community',
            text: 'This is not a straight up "hermit" craft server where you just become a hermit and not interact with others on the server. We will try to bust you out of that gameplay style and try to make you become more involved but if it doesnt work out then well we might have to move on.'
        },
        {
            title: 'Events & MiniGames',
            text: 'Over the season we will hold events,minigames for some good ol\'competition'
        },
        {
            title: 'Shopping District',
            text: 'For shops land cost 1 diamond block per 100 spawning spaces on the x and z coordinate system'
        },
        {
            title: 'Villagers',
            text: 'Villagers like all mobs have AI that the game uses to determine their actions, this includes path finding and collision detection. minimising these traits will minimise the lag they cause. Villager breeders must be equipped with an off switch. This can be achieved by using a sticky piston to block off the drop chute for the babies.'
        },
        {
            title: 'Redstone',
            text: 'Observers, hopper minecarts and various other redstone components can cause lag when there is a large amount of them being loaded in an area. For this reason any farm that has 100+ components should be located away from your base for the sake of ticking block entities which cause server lag. Note that multiple smaller farms are acceptable close to your base, and even though they are smaller they will still produce well as they are constantly loaded when you are in the area.'        },
        {
            title: 'Passive Mobs',
            text: 'Chickens, cows, sheep etc become problematic when you enclose a large number in a pen where they are constantly colliding with each other, as the number of mobs goes up and the pen size goes down this problem gets worse. Please avoid a large number of such mobs in a confined pen, a redstone contraption to breed and kill them for food would be much more lag efficient.'
        }
    ]
    return (
        <div>
            <ul className={"m-5"}>
                {information.map((info, index) => {
                    return <li key={index} className={"flex flex-col m-8 items-center  bg-slate-900"}>
                        <div className={"flex flex-col text-2xl text-slate-400 items-center bg-slate-700  w-full p-5 "}>
                            <p className={"lg:pl-8 text-green-300"}>{info.title}</p>
                        </div>
                        <p className={"text-xl pl-5 pr-5 text-slate-400 text-center m-5"}>{info.text}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default Other;