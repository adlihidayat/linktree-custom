import React from "react";

function Github() {
  return (
    <div className="rounded-3xl w-[100%] bg-black text-white py-10 px-10 flex flex-col items-start space-y-5 text-center">
      <h2 className=" text-4xl font-bold">Github</h2>
      <div className="flex items-center justify-between w-[100%]">
        <div className="flex flex-col items-start">
          <span className=" text-lg">Dhiya Adli Hidayat</span>
          <span className=" text-sm text-gray-500">adlihidayat</span>
        </div>
        <a
          href=""
          className=" text-black bg-white py-1 px-4 rounded-lg text-lg"
        >
          visit
        </a>
      </div>
      <span className=" text-sm">Repositories</span>
      <div className="w-[100%] flex flex-col space-y-2">
        <div className="w-[100%] h-20 bg-slate-500"></div>
        <div className="w-[100%] h-20 bg-slate-200"></div>
      </div>
    </div>
  );
}

export default Github;
