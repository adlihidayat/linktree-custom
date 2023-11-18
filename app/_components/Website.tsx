import React from "react";

function Website() {
  return (
    <div className=" w-[49%] bg-[#E5D6EC] px-4 py-12 flex flex-col justify-center space-y-10  rounded-2xl">
      <h2 className=" text-[31px] font-bold text-[#212021] leading-7">
        My Portofolio Website
      </h2>
      <a
        href="https://portofolio-adli.vercel.app/"
        className="bg-[#212021] hover:bg-white text-white px-4 py-1 w-max rounded"
      >
        visit
      </a>
    </div>
  );
}

export default Website;
