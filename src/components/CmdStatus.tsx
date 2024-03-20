import React from "react";
import { BiGitBranch } from "react-icons/bi";
interface CmdStatusProp {
  cmd: string;
}
export default function CmdStatus({ cmd }: CmdStatusProp) {
  if (!cmd) {
    return <></>;
  }
  return (
    <div className="flex items-center font-mono">
      <div className=" bg-yellow-200  -translate-x-[60px]">
        <div className="flex gap-1 items-center justify-center pl-8 pr-2">
          <BiGitBranch className="text-black" />
          <h1 className="text-end text-black">{cmd}</h1>
        </div>
      </div>
      <div
        className="-translate-x-[60px] w-5 h-5 border-l-2 border-yellow-200 bg-yellow-200 z-20"
        style={{
          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
        }}
      ></div>
    </div>
  );
}
