import React from "react";

function LinkedIn() {
  return (
    <div className="rounded-2xl w-[49%] bg-[#0078B5] text-[#f7f7f7] px-4 py-5 flex flex-col items-center space-y-3 text-center">
      <div className=" flex items-center space-x-3">
        <h2 className=" text-xl font-bold">LinkedIn</h2>
        <div className="w-5 h-5 bg-slate-200"></div>
      </div>
      <div className=" w-20 h-20 bg-slate-200 rounded-full"></div>
      <div className=" flex flex-col ">
        <span className=" text-l font-semibold">Dhiya Adli Hidayat</span>
        <span className=" text-[12px] text-gray-200">
          Front End Web Developer
        </span>
      </div>
      <a
        href=""
        className=" w-max bg-[#f7f7f7] text-[#0078B5] py-1 px-4 rounded text-sm font-medium"
      >
        Visit
      </a>
    </div>
  );
}

export default LinkedIn;
