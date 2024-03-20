import  { useEffect, useState } from "react";
import {  SiReact, SiTailwindcss, SiVercel } from "react-icons/si";

export default function About() {
	const techs = [
		{ Icon: SiReact, color: "text-blue-500", duration: "duration-500" },
		{ Icon: SiTailwindcss, color: "text-blue-300", duration: "duration-700" },
		{ Icon: SiVercel, color: "text-white", duration: "duration-1000" },
	];
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div className="font-mono text-sm">
			<h1 className="text-lg text-lime-400 animate-reveal-0.5 my-2">Why?</h1>
			<p className="text-sm s animate-reveal-0.5 my-3">
				Terminal's Portfolio is a portfolio style that design to let you go
				through the portfolio in the terminal way.
			</p>
			<h1 className="text-lg text-lime-400 animate-reveal-0.7 my-2">
				Tech stack
			</h1>
			<p className="text-sm animate-reveal-0.7 m-3">
				This site is pure written with React and Tailwindcss only. For the
				deployment, We deploy it on Vercel.
			</p>
			<div className="flex gap-6 text-2xl my-3">
				{techs.map(({ Icon, color, duration }, index) => {
					return (
						<Icon
							key={index}
							className={`${color} ${
								animate ? "scale-100" : "scale-0"
							} transform transition-all ${duration}`}
						/>
					);
				})}
			</div>
		</div>
	);
}
