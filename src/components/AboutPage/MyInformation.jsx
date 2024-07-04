import Button from "@/elements/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const MyInformation = () => {
    const router = useRouter();
  return (
    <div className="bg-adaptive-strong py-[100px] px-[150px] my-10">
      {/* CONTENT */}
      <div className="w-full h-auto flex md:flex-row flex-col justify-start items-start gap-10">
        {/* LEFT SECTION */}
        <div className="md:flex-[0.4] flex-[1]">
          {/* AVATAR */}
          <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden ">
            <Image
              src={"/assets/images/about/me1.jpeg"}
              alt="about-me"
              width={500}
              height={500}
              className="relative w-full h-full object-cover scale-1"
            />
          </div>
          {/* TEXT */}
          <article className="text-adaptive-weak my-5 font-grotesuqe text-[28px] font-semibold">
            Hey, I'm Abhishek Yadav. <br />{" "}
            <span className="text-adaptive-off-white">
              A Full Stack Developer.
            </span>
          </article>
          {/* DESCRIPTION */}
          <article className="text-adaptive-weak-hover text-[16px]">
            I am a dedicated full stack developer with over 1.5+ years of
            experience in the industry. Specializing in crafting innovative web
            solutions and delivering high-quality projects, I am eager to
            collaborate and contribute to your team.
          </article>
          {/* BUTTON */}
          <div className="flex justify-start items-center gap-4 my-10">
        <Button
          type={1}
          stylesheet="font-medium h-[45px]"
          onClick={() => router.push("/contact-me")}
        >
          Book a free call
        </Button>
      </div>
        </div>
        {/* RIGTH SECTION */}
        <div className="md:flex-[0.6] flex-[1]">
            
        </div>
      </div>
    </div>
  );
};

export default MyInformation;
