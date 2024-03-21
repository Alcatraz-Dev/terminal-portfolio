
import BackgroundImage from "./components/BackgroundImage";
import TerminalBox from "./components/TerminalBox";

export default function App() {
	return (
		<>
		<div className=" container flex justify-center items-center px-5 lg:pl-32 lg:pr-32 sm:pl-0 sm-pr-0 md:pl-24 md:pr-20 ">
		<div className="h-screen w-full flex justify-center items-center  font-josefin  ">
				<div className="w-full  ">
		
					<div className=" w-full rounded-xl bg-opacity-70  block sm:hidden mb-10 bg-white py-3  text-center text-lg text-black items-center justify-center">
					
					<div className="flex flex-row">

					</div>
						<div className=" flex flex-col justify-center items-center mx-5">
						
						<p>For better experience please try this with pc !</p>
						<p>This is not design for mobile view.</p>
						</div>
					
						<a href="https://haythem-dhahri.vercel.app/" className="block p-2 underline hover:text-blue-500">
							Visit this instead 
						</a>
					</div>
					<TerminalBox />
				</div>
			</div>
		</div>
			
			<BackgroundImage />
		</>
	);
}
