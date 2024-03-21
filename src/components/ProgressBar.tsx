import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface ProgressBarProps {
	Icon: IconType;
	percentageValue: string;
	barWidth: string;
	text: string;
}

export default function ProgressBar({
	Icon,
	percentageValue,
	barWidth,
	text,
}: ProgressBarProps) {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div className="w-11/12 mx-auto mt-5 mb-5 text-sm font-mono text-center items-center justify-center">
			<div className={`${barWidth} flex justify-between mb-3`}>
				<div className="flex gap-2 items-center">
					<Icon className="text-2xl" />
					<h1>{text}</h1>
				</div>
				<h1>{percentageValue}</h1>
			</div>
			<div className="w-full bg-gray-800 rounded-md">
				<div
					className={`${
						animate ? barWidth : "w-0"
					} transition-all duration-700 h-2.5 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-md`}
				></div>
			</div>
		</div>
	);
}
