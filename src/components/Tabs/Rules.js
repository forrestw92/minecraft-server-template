import React from 'react'

const Rules = () => {
    const rules = [
            "1. No hacking/cheating",
            "2. No real life politics no one cares",
            "3. No racism",
            "4. No stealing",
            "5. Undesirable game play will result in you being removed from the whitelist",
            "6. Any unexcused absence over 2 weeks results in removal from whitelist",
            "7. When building a farm above the nether roof please build at least 1000 blocks from 0,0.",
            "8. When making a shop make sure your shop is somewhat categorized. No convenient stores",
            "9. Must have simple voice chat mod installed",
            "10. Server is not all about the economy. If you just come for shops and farms this is not the server.",
        ]
    return (
        <ul className={"text-slate-100 flex flex-col justify-center items-center w-full p-3"}>
            {rules.map((rule, index) => {
                return <li key={index} className={"bg-slate-700 mb-5 p-4 w-full lg:w-3/5 shadow-slate-500 shadow-sm"}>{rule}</li>
            })}
        </ul>
    )
}
export default Rules;