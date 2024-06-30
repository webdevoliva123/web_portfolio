import { socialLink } from "@/global_variables/socialLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    const links = [
        {
            name : "Homepage",
            link : "/"
        },
        {
            name : "About Me",
            link : "/about-me"
        },
        {
            name : "Blogs",
            link : "/my-blogs"
        },
        {
            name : "Contact Me",
            link : "/contact-me"
        }
    ]
  return (
    <div className="px-[150px] pb-[100px]">
      {/* CONTAINER */}
      <div className="flex justify-between items-start">
        {/* LEFT SECTION */}
        <div className="inline-block">
          <div className="flex justify-start items-center gap-2 mb-14">
            <Image
              src={process.env.NEXT_PUBLIC_BASE_URL + "/assets/icons/oliva.png"}
              alt="oliva"
              width={500}
              height={500}
              className="relative w-[30px] h-[30px] object-cover"
            />
            <h1 className="font-grotesuqe font-extrabold text-xl">OLIVA.</h1>
          </div>
          <article className="max-w-[400px] mb-6">Always available at your service and get the best support ever!</article>
          {/* LINKS */}
          <div className="flex justify-start items-end gap-5">
            {socialLink?.map((link,idx) => {
                return (
                    <Link key={idx} href={link?.url} title={link?.name} target="_blank">
                        <Image src={link?.icon} alt={link?.name} width={500} height={500} className="relative w-[20px] h-[20px] object-contain"/>
                    </Link>
                )
            })}
        </div>
        </div>
        {/* RIGHT SECTION */}
        <div className="flex justify-start items-start gap-10 ">
            {/* SECTION 1 */}
            <div className="inline-block">
            <article className="font-grotesuqe font-medium mb-5">MENU</article>
            <div className="inline-block">
                {
                    links.map((link,idx) => {
                        return (
                            <Link key={idx} href={link?.link} className="block mb-3 text-sm">{link?.name}</Link>
                        )
                    }) 
                }
            </div>
            </div>
        </div>
      </div>
      {/* DIVIDER */}
      <div className="w-full h-[1px] bg-adaptive-off-black my-14"></div>
      {/* COPYRIGHT FREE */}
      <article>Developed by Abhishek Yadav</article>
    </div>
  );
};

export default Footer;
