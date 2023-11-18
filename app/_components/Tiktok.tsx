import Image from "next/image";
import React from "react";

function Tiktok() {
  return (
    <div className=" w-[100%] bg-[#2F2C2F] text-white flex flex-col space-y-10 px-10 py-10 rounded-3xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <h2 className=" text-3xl font-bold">Tiktok</h2>
          <div className="w-6 h-6 bg-slate-300"></div>
        </div>
        <a href="" className=" h-max bg-[#FE2C55] py-1 px-4 rounded">
          visit
        </a>
      </div>
      <div className="flex space-x-5 w-[100%] justify-center">
        <div className="w-20 h-20 rounded-full bg-slate-400"></div>
        <div className="">
          <h3 className=" text-xl font-semibold leading-0 mb-2">
            @adlihidayat
          </h3>
          <div className="flex w-[190px] justify-between">
            <div className="flex flex-col items-center">
              <span className=" font-bold">220K</span>
              <span className=" text-xs">Followers</span>
            </div>
            <div className="flex flex-col items-center border-x border-white px-[13px]">
              <span className=" font-bold">2.2M</span>
              <span className=" text-xs">Likes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className=" font-bold">53</span>
              <span className=" text-xs">Posts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tiktok;
