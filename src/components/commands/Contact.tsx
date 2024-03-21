import React from "react";

export default function Contact() {
	const contacts = [
		
		{
			text: "Linkedin",
			value: "Contact me via Linkedin",
			href: "https://www.linkedin.com/in/haythem-dhahri-55762b253/",
		},
		{
			text: "Email",
			value: "Contact me via Email",
			href: "mailto:alcatrazcontact@gmail.com",
		},
	];
	return (
		<div className="w-11/12 mx-auto font-mono">
			{contacts.map(({ text, value, href }, index) => {
				return (
					<div className="flex items-center gap-20  mt-3" key={index}>
						<h1 className="text-lime-400 w-36 text-sm">{text}</h1>
						<a href={href} className="flex-1 underline text-blue-300 text-sm ">
							{value}
						</a>
					</div>
				);
			})}
		</div>
	);
}
