import Button from "@/elements/Button";
import { socialLink } from "@/global_variables/socialLinks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Landing = () => {
    const router = useRouter()
  return (
    <>
      <div className="main">
        {/* CLIP PATH */}
        <div className="main-clip1"></div>
        <div className="main-clip2"></div>
        {/*  BG IMAGE */}
        <div className="absolute bottom-0 right-20 h-[800px] w-auto">
          <Image
            src={
              process.env.NEXT_PUBLIC_BASE_URL + "/assets/images/onboard.png"
            }
            alt="bg-image"
            width={500}
            height={500}
            className="relative w-full h-full scale-[1.8] drop-shadow-md object-contain"
          />
        </div>
        {/* CONTENT */}
        <div className="absolute top-0 left-0 w-full h-full z-99 px-[150px] py-[50px] flex justify-start items-center ">
          <div className="block">
            {/* TAG */}
            <div className=" backdrop-blur-lg px-4 py-2 rounded-full inline-flex justify-start items-center border border-adaptive-strong gap-2 mb-5 ">
              <Image
                src={
                  process.env.NEXT_PUBLIC_BASE_URL +
                  "/assets/icons/fullstackdeveloper.png"
                }
                alt="full stck tag"
                width={500}
                height={500}
                className="relative w-[18px] h-[18px] object-contain"
              />
              <article className="font-medium text-sm">
                FULL STACK DEVELOPER.
              </article>
            </div>
            {/* TITLE */}
            <div className="mb-8">
              <article className="text-[60px] leading-[80px] font-extrabold font-grotesuqe mb-2 drop-shadow-md">
                Hey, I'm{" "}
                <span className="text-adaptive-strong opacity-[0.5] ">
                  Abhishek Yadav.
                </span>{" "}
                <br /> Nice to meet you.
              </article>
              <article className="max-w-[50%]">
                As a full stack developer, I efficiently transform visions into
                reality, innovatively crafting seamless and dynamic web
                solutions that effectively bring your ideas to life.
              </article>
            </div>
            {/* BUTTONS */}
            <div className="flex justify-start items-center gap-4 mb-10">
                <Button type={1} stylesheet="font-medium h-[45px]" onClick={() => router.push("/contact-me")}>Book a free call</Button>
                <Button type={3} stylesheet="font-medium h-[45px] px-6" onClick={() => router.push("/projects")}>View Work</Button>
            </div>
          </div>
        </div>
        {/* SOCIAL LINKS */}
       <div className="absolute bottom-40  left-[150px]">
        <article className="mb-5 font-semibold">Find me on other social media:</article>
        <div className="flex justify-start items-end gap-5">
            {socialLink?.map((link,idx) => {
                return (
                    <Link key={idx} href={link?.url} title={link?.name} target="_blank">
                        <Image src={link?.icon} alt={link?.name} width={500} height={500} className="relative w-[30px] h-[30px] object-contain"/>
                    </Link>
                )
            })}
        </div>
       </div>
      </div>
    </>
  );
};

export default Landing;
