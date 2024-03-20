import React from "react";
import { GiClover, GiOpenFolder } from "react-icons/gi";
import { FaApple, FaRegFolderOpen } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";

interface BaseCmdInputProps {
  Children: React.ReactNode;
  CmdStatus?: React.ReactNode;
}
export default function BaseCmdInput({
  Children,
  CmdStatus,
}: BaseCmdInputProps) {
  return (
    <div className="mt-2 mb-2 font-mono text-sm">
      <div className="flex items-center">
        <div className="w-5 h-1 bg-slate-600"></div>

        <div className="flex gap-2 items-center rounded-l-full bg-gradient-to-l from-gray-500 pl-8 pr-2 ">
          <FaApple />
          <span> - </span> <GiOpenFolder />
        </div>
        <div
          className=" w-5 h-5 bg-gray-500 z-20"
          style={{
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
          }}
        ></div>

        <div className="flex items-center">
          <div className=" bg-lime-500 -translate-x-5">
            <div className="flex gap-1 items-center justify-center pl-8 pr-2">
              <FaRegFolderOpen className="text-black" />
              <h1 className="text-black">Haythem</h1>
            </div>
          </div>
          <div
            className="-translate-x-5 w-5 h-5 border-l-2 border-lime-500 bg-lime-500 z-20"
            style={{
              clipPath: "polygon(0 0, 100% 50%, 0 100%)",
            }}
          ></div>
        </div>

		<div className="flex items-center">
          <div className=" bg-blue-500 -translate-x-10">
            <div className="flex gap-1 items-center justify-center pl-8 pr-2">
              <FaRegFolderOpen className="text-black" /> 
              <h1 className="text-black">/portfolio</h1>
            </div>
          </div>
          <div
            className="-translate-x-10 w-5 h-5 border-l-2 border-blue-500 bg-blue-500 z-20"
            style={{
              clipPath: "polygon(0 0, 100% 50%, 0 100%)",
            }}
          ></div>
		   <>{CmdStatus}</>
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-10 w-1 bg-gray-600 -translate-y-3"></div>
        <div className="">
          <div className="h-1 w-4 bg-gray-600 translate-y-2 -translate-x-1"></div>
        </div>
        <div className="translate-y-2 -translate-x-3">
          <GoTriangleRight className="text-2xl text-gray-500" />
        </div>
        <>{Children}</>
      </div>
    </div>
  );
}
