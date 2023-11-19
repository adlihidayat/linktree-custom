import React from "react";

function GithubItem() {
  return (
    <a
      href="https://github.com/adlihidayat/iga-panggang"
      className="w-[100%] py-3 px-5 text-sm bg-[#0D1117] border-2 border-[#2a2a2a] rounded-xl flex justify-between"
    >
      <div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#696969]"></div>
          <span className=" font-semibold text-[#2D7CEE]">iga-panggang</span>
        </div>
        <div className="flex items-center space-x-3 ml-[1px]">
          <div className="w-2 h-2 bg-[#F1E05A] rounded-full"></div>
          <span>iga-panggang</span>
        </div>
      </div>
      <div className=" grid grid-cols-2 h-min mt-1 gap-[2px] ">
        <div className="w-[3px] h-[3px] bg-[#575757] rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-[#575757] rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-[#575757] rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-[#575757] rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-[#575757] rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-[#575757] rounded-full"></div>
      </div>
    </a>
  );
}

export default GithubItem;
