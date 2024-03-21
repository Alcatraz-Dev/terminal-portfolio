// import { VscTerminalBash } from "react-icons/vsc";
import { IoTerminalOutline } from "react-icons/io5";
import { IoIosClose, IoIosExpand } from "react-icons/io";

export default function Navbar() {
  const boxs = [
    {
      color: "bg-red-500",
    },
    {
      color: "bg-yellow-500",
    },
    {
      color: "bg-green-500",
    },
  ];
  return (
    <div>
      <div className="text-gray-300 max-w-4xl mx-auto border-x-2 border-t-2 border-slate-800 rounded-t-md bg-slate-800 p-2 flex items-center">
        <div className="flex gap-2">
          {boxs.map(({ color }, index) => {
            return (
              <div
                key={index}
                className={`w-3 h-3 ${color} rounded-full`}
              ></div>
            );
          })}
        </div>
        <div className="flex-1 mr-5 flex justify-center items-center lg:ml-5">
          <div className="flex items-center gap-2">
            <IoTerminalOutline />
            <h1 className="flex justify-center text-center items-center text-sm">
              Haythem_Dhahri
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
