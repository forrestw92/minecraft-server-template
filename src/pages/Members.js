import React from 'react';
import Header from "../components/Header";
import youtubeIcon from '../images/icons/youtube.png';
import twitchIcon from '../images/icons/twitch.png';
const Members = () => {
    const members = [
        {
            name: "Grian",
            role: "Admin",
            uuid: "5f8eb73b25be4c5aa50fd27d65e30ca0",
            social: [
                {
                    icon: youtubeIcon,
                    url: "https://www.youtube.com/c/Grian"
                },
                {
                    icon: twitchIcon,
                    url: "https://www.twitch.tv/grianmc"
                }
            ]
        },
        {
            name: "Iskall",
            role: "Member",
            uuid: "7ed3587be656468990d608e11daaf907",
            social: [
                {
                    icon: youtubeIcon,
                    url: "https://www.youtube.com/c/iskall85"
                },
                {
                    icon: twitchIcon,
                    url: "https://www.twitch.tv/iskall85"
                }
            ]
        },
        {
            name: "Mumbo",
            role: "Member",
            uuid: "c7da90d56a054217b94a7d427cbbcad8",
            social: [
                {
                    icon: youtubeIcon,
                    url: "https://www.youtube.com/c/MumboJumbo"
                },
                {
                    icon: twitchIcon,
                    url: "https://www.twitch.tv/thatmumbojumbo"
                }
            ]
        },
        {
            name: "Scar",
            role: "Member",
            uuid: "cae9554c31be47e2ba2b4b8867adacc5",
            social: [
                {
                    icon: youtubeIcon,
                    url: "https://www.youtube.com/c/GoodTimesWithScar"
                },
                {
                    icon: twitchIcon,
                    url: "https://www.twitch.tv/goodtimeswithscar"
                }
            ]
        },
        {
            name: "Xisuma",
            role: "Member",
            uuid: "21ef397c3a764eb7aa17a99d3fc658e2",
            social: [
                {
                    icon: youtubeIcon,
                    url: "https://www.youtube.com/c/XisumavoidMC"
                },
                {
                    icon: twitchIcon,
                    url: "https://www.twitch.tv/xisuma"
                }
            ]
        },
    ]
    return (
        <>
            <Header/>
            <main className={"flex flex-col flex-wrap sm:flex-row justify-center w-full mb-10 ml-auto mr-auto mt-10 p-5 "}>
                {
                    members.map((member) => {
                        return (
                            <div className={"bg-slate-700 sm:m-5 mb-5 flex justify-center flex-col w-full sm:w-56 rounded-md pb-8 shadow-md shadow-slate-900 "}>
                                <h1 className={"text-4xl text-slate-400 text-center w-full p-8"}>{member.name}</h1>
                                <p className={`text-center text-xl pb-4 ${member.role === "Admin" ? 'text-green-300' : 'text-white'}`}>{member.role}</p>
                                <img src={`https://crafatar.com/renders/body/${member.uuid}?size=1&overlay`} alt={`${member.name}'s avatar`} className={"w-24 m-auto"} />
                                <div className={"flex flex-row flex-nowrap justify-between m-auto w-24 pt-6 "}>
                                    {
                                        member.social && member.social.map((social) => {
                                            return (
                                                <a href={social.url} target="_blank" rel="noopener noreferrer" className={"w-auto m-auto"}>
                                                    <img src={social.icon} alt={`${member.name}'s ${social.url}`} className={"w-auto m-auto"} />
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}
export default Members;