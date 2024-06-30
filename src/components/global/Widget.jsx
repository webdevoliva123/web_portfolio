import Button from "@/elements/Button";
import { widget_links } from "@/global_variables/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Widget = () => {
  return (
    <div className="fixed top-8 left-[50%] -translate-x-[50%] w-[750px] h-[65px] backdrop-blur-lg rounded-lg bg-white bg-opacity-[0.5] px-2 pl-6 z-[999] border border-adaptive-strong ">
      <div className="w-full h-full flex justify-between items-center">
        {/* logo */}
        <div className="flex justify-start items-center gap-2">
            <Image src={process.env.NEXT_PUBLIC_BASE_URL + "/assets/icons/oliva.png"} alt="oliva" width={500} height={500} className="relative w-[30px] h-[30px] object-cover" />
            <h1 className="font-grotesuqe font-extrabold text-xl">OLIVA.</h1>
        </div>
        {/* links */}
       <div className="flex justify-center items-center gap-6">
       {
            widget_links?.map((link,idx) => {
                return (
                    <Link key={idx} href={link?.url} className="widget_link">{link?.label}</Link>
                )
            })
        }
       </div>
        {/* contact us */}
        <Button type={2}>Contact Us</Button>
      </div>
    </div>
  );
};

export default Widget;
