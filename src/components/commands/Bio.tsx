import { GoVerified } from "react-icons/go";
import { SiGithub, SiLinkedin, SiPatreon, SiYoutube } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/Alcatraz-Dev",
			text: "@Haythem_Dhahri",
		},
		{
			title: "Linkedin",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/haythem-dhahri-55762b253/",
			text: "@Haythem_Dhahri",
		},
		// {
		// 	title: "Patreon",
		// 	Icon: SiPatreon,
		// 	href: "https://www.patreon.com/dailywebcoding",
		// 	text: "@Patreon",
		// },
	];
	return (
		<div className="mt-2 mb-5 w-11/12 mx-auto font-mono text-sm">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/76733338?v=4"
					alt="Chensokheng"
					className="w-40 h-40 rounded-full border-2 border-lime-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl font-mono">Haythem Dhahri</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className=" text-sm my-2 text-gray-400">Join the world 5 years ago.</p>
				</div>
			</div>
			<p className="my-5">
				Hi there, I am A passionate game developer and web developer from Sweden 🇸🇪 .
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-2 mt-3" key={index}>
							<div className="text-sm font-mono flex items-center gap-1 text-lime-400">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
