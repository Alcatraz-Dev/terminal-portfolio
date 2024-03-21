import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export default function Contact() {
	const contacts = [
		
		{
			icon:<MdEmail />, 
			value: "Email",
			href: "mailto:alcatrazcontact@gmail.com",
		},
		{
			
			icon:<BsLinkedin />,
			value: "Linkedin",
			href: "https://www.linkedin.com/in/haythem-dhahri-55762b253/",
		},
	];
	return (
		<div className="w-11/12 mx-auto font-mono">
			{contacts.map(({ icon, value, href }, index) => {
				return (
					<div className="flex items-center gap-20  mt-3" key={index}>
						<div className="flex justify-center items-center text-lime-400 w-36"> <span className="mx-2 text-white h-4 w-4">{icon}</span></div>
						<a href={href} className="flex-1 underline text-blue-300 text-sm ">
							{value}
						</a>
					</div>
				);
			})}
		</div>
	);
}
