import React from 'react'

const Card = ({title, description, image, link, className = ''}) => {
	return (
		<li className={className + " rounded-md max-w-xs relative flex w-auto z-10 m-4 border-4 overflow-hidden " }>
			<a href={link} className={'flex flex-col text-center decoration-0 '} >
				<div className="card-title p-2 z-10 text-2xl text-white">
					{title}
				</div>
				<div className="card-image rounded-lg ">
					<img src={image} alt={title}  className={"z-10 relative "}/>
					<img src={image} alt={"Blurred background"} className={"absolute left-0 h-full blur-2xl top-0 z-0 bottom-0"} />
				</div>
				<div className="card-description z-10 text-2xl text-white p-2">
					{description}
				</div>
			</a>
		</li>
	)
}
export default Card;