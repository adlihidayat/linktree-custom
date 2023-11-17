import React from "react";

function Website() {
  return (
    <div className=" w-[100%] bg-[#E5D6EC] px-10 py-10 flex flex-col space-y-3 rounded-3xl">
      <h2 className=" text-4xl font-bold text-[#212021]">
        My Personal Website
      </h2>
      <a
        href="https://portofolio-adli.vercel.app/"
        className="bg-[#212021] hover:bg-white text-white px-5 py-1 w-max rounded-full text-lg"
      >
        visit
      </a>
    </div>
  );
}

export default Website;
