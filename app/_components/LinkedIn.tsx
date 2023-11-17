import React from "react";

function LinkedIn() {
  return (
    <div className="rounded-3xl w-[100%] bg-[#0078B5] text-[#f7f7f7] py-10 px-10 flex flex-col items-center space-y-5 text-center">
      <div className=" flex items-center space-x-3">
        <h2 className=" text-4xl font-bold">LinkedIn</h2>
        <div className="w-8 h-8 bg-slate-200"></div>
      </div>
      <div className=" w-32 h-32 bg-slate-200 rounded-full"></div>
      <div className=" flex flex-col ">
        <span className=" text-2xl font-bold">Dhiya Adli Hidayat</span>
        <span className=" text-sm text-gray-200">Front End Web Developer</span>
      </div>
      <a
        href=""
        className=" w-max bg-[#f7f7f7] text-[#0078B5] py-1 px-4 rounded-lg"
      >
        Visit
      </a>
    </div>
  );
}

export default LinkedIn;
