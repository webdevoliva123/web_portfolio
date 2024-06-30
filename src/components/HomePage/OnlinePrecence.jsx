import Image from "next/image";
import Link from "next/link";
import React from "react";

const OnlinePrecence = () => {
  return (
    <div className=" py-[100px] pt-[175px] px-[150px]">
      {/* TITLE */}
      <article className="relative text-center text-[60px] leading-[75px] font-grotesuqe font-bold drop-shadow-md ">
        Take your <br />{" "}
        <span className="text-adaptive-strong opacity-[0.5] font-grotesuqe drop-shadow-md">
          Online Presence
        </span>{" "}
        to the <br /> next level with me.
      </article>
      {/*  CARD CONTAINER */}
      <div className="mt-20 w-[100%] h-[400px] grid grid-cols-[30%,40%,30%] gap-5">
        <div className="relative w-full h-full rounded-md border border-adaptive-strong  p-5">
          {/* TAG */}
          <div className="px-2 py-1 rounded-full bg-adaptive-weak-hover text-adaptive-strong drop-shadow-md inline-block mb-10">
            {" "}
            <article className="text-xs">No. 1</article>
          </div>
          {/* LABEL */}
          <article className="font-grotesuqe font-medium text-xl">Custom Website</article>
           {/* INFO */}
           <div className="absolute bottom-0 left-0 w-full px-5 py-10">
            <article className="text-sm mb-5">Creates tailored websites to reflect your brand and engage your audience effectively.</article>
            <Link href="/presence?id=1" className="flex justify-start items-center gap-4"><article className="text-sm font-medium ">Learn More</article> <Image src={process.env.NEXT_PUBLIC_BASE_URL + "/assets/icons/right-arrow.png"} alt="right arrow" width={500} height={500} className="relative w-[15px] h-auto object-contain"/></Link>
          </div> 
          {/* STRIP */}
          <div className="absolute top-0 right-5 h-[40%] w-[60px] bg-adaptive-off-white rounded-b-md">
            <div className="absolute bottom-[5px] left-[50%] -translate-x-[50%] w-[50px] h-[50px] rounded-md bg-adaptive-extrastrong flex justify-center items-center">
                <Image src={process.env.NEXT_PUBLIC_BASE_URL+"/assets/icons/custom_website.png"} alt="custom_Website" width={500} height={500} className="relative w-[30px] h-[30px] object-contain" />
            </div>
          </div>
        </div>
        <div className="relative w-full h-full rounded-md border border-adaptive-strong  p-5">
          {/* TAG */}
          <div className="px-2 py-1 rounded-full bg-adaptive-weak-hover text-adaptive-strong drop-shadow-md inline-block mb-10">
            {" "}
            <article className="text-xs">No. 2</article>
          </div>
          {/* LABEL */}
          <article className="font-grotesuqe font-medium text-2xl">Responsive Website</article>
          {/* INFO */}
          <div className="absolute bottom-0 left-0 w-full px-5 py-10">
            <article className="text-sm mb-5 max-w-[60%]">Ensures your website looks great on any device with responsive design expertise for you.</article>
            <Link href="/presence?id=2" className="flex justify-start items-center gap-4"><article className="text-sm font-medium ">Learn More</article> <Image src={process.env.NEXT_PUBLIC_BASE_URL + "/assets/icons/right-arrow.png"} alt="right arrow" width={500} height={500} className="relative w-[15px] h-auto object-contain"/></Link>
          </div> 
           {/* STRIP */}
           <div className="absolute top-0 right-10 h-[80%] w-[120px] bg-adaptive-off-white rounded-b-md">
            <div className="absolute bottom-[10px] left-[50%] -translate-x-[50%] w-[100px] h-[100px] rounded-md bg-adaptive-extrastrong flex justify-center items-center">
                <Image src={process.env.NEXT_PUBLIC_BASE_URL+"/assets/icons/responsive.png"} alt="custom_Website" width={500} height={500} className="relative w-[60px] h-[60px] object-contain" />
            </div>
          </div> 
        </div>
        <div className="relative w-full h-full rounded-md border border-adaptive-strong  p-5">
          {/* TAG */}
          <div className="px-2 py-1 rounded-full bg-adaptive-weak-hover text-adaptive-strong drop-shadow-md inline-block mb-10">
            {" "}
            <article className="text-xs">No. 3</article>
          </div>
          {/* LABEL */}
          <article className="font-grotesuqe font-medium text-2xl">Maintenance</article>
           {/* INFO */}
           <div className="absolute bottom-0 left-0 w-full px-5 py-10">
            <article className="text-sm mb-5">Offers reliable website maintenance services, ensuring your site remains secure, up-to-date.</article>
            <Link href="/presence?id=3" className="flex justify-start items-center gap-4"><article className="text-sm font-medium ">Learn More</article> <Image src={process.env.NEXT_PUBLIC_BASE_URL + "/assets/icons/right-arrow.png"} alt="right arrow" width={500} height={500} className="relative w-[15px] h-auto object-contain"/></Link>
          </div>
          {/* STRIP */}
          <div className="absolute top-0 right-5 h-[40%] w-[60px] bg-adaptive-off-white rounded-b-md">
            <div className="absolute bottom-[5px] left-[50%] -translate-x-[50%] w-[50px] h-[50px] rounded-md bg-adaptive-extrastrong flex justify-center items-center">
                <Image src={process.env.NEXT_PUBLIC_BASE_URL+"/assets/icons/maintaince.png"} alt="custom_Website" width={500} height={500} className="relative w-[30px] h-[30px] object-contain" />
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default OnlinePrecence;
