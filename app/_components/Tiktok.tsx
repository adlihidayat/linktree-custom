import Image from "next/image";
import React from "react";

function Tiktok() {
  return (
    <div className=" w-[100%] bg-[#2F2C2F] text-white flex flex-col space-y-7 px-10 py-7 rounded-3xl">
      <div>
        <h2 className=" text-4xl font-bold">Tiktok</h2>
      </div>
      <div className="w-28 h-28 rounded-full bg-slate-400"></div>
      <h3
        className=" text-2xl font-semibold leading-0
      "
      >
        @adlihidayat
      </h3>
      <div className="flex w-[100%] justify-between">
        <div className="flex flex-col items-center">
          <span className=" text-xl font-bold">220K</span>
          <span className=" text-sm">Followers</span>
        </div>
        <div className="flex flex-col items-center border-x border-white px-[30px]">
          <span className=" text-xl font-bold">2.2M</span>
          <span className=" text-sm">Likes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className=" text-xl font-bold">53</span>
          <span className=" text-sm">Posts</span>
        </div>
      </div>
      <a href="" className=" w-max bg-[#FE2C55] py-1 px-6 rounded-full text-lg">
        visit
      </a>
    </div>
  );
}

export default Tiktok;
