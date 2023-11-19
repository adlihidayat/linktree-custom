import Image from "next/image";
import React from "react";

function Tiktok() {
  return (
    <div className=" w-[100%] bg-[#1A181A] text-white flex flex-col space-y-7 px-7 py-10 rounded-3xl">
      <div className="flex justify-between items-center px-3">
        <div className="flex items-center space-x-3">
          <h2 className=" text-3xl font-bold">Tiktok</h2>
          <div className="w-6 h-6 bg-slate-300"></div>
        </div>
        <a
          href="https://www.tiktok.com/@dhiyaadlihidayat"
          className=" h-max bg-[#FE2C55] py-1 px-4 rounded text-sm"
        >
          visit
        </a>
      </div>
      <div className="flex space-x-5 w-[100%] justify-center">
        <div className="w-20 h-20 rounded-full bg-slate-400"></div>
        <div className="">
          <h3 className=" text-lg font-semibold leading-0 mb-2">
            @adlihidayat
          </h3>
          <div className="flex w-[170px] justify-between">
            <div className="flex flex-col items-center">
              <span className=" text-sm font-bold">220K</span>
              <span className=" text-xs">Followers</span>
            </div>
            <div className="flex flex-col items-center border-x border-white px-[13px]">
              <span className=" text-sm font-bold">2.2M</span>
              <span className=" text-xs">Likes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className=" text-sm font-bold">53</span>
              <span className=" text-xs">Posts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tiktok;
