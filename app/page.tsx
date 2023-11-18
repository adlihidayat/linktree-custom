import Email from "./_components/Email";
import Github from "./_components/Github";
import LinkedIn from "./_components/LinkedIn";
import Tiktok from "./_components/Tiktok";
import Image from "next/image";
import Website from "./_components/Website";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className=" w-[100%] pt-10 px-5 flex flex-col space-y-2 ">
      <h1 className="w-[100%] text-center text-[40px] font-bold leading-tight tracking-tight text-[#2F2C2F] mb-5">
        LINKTREE
      </h1>
      <div className="w-[100%] flex justify-between">
        <Website />
        <LinkedIn />
      </div>
      <Tiktok />
      <Github />
      <Email />
      <Footer />
    </main>
  );
}
