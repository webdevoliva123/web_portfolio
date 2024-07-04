import Button from "@/elements/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Landing = () => {
  const router = useRouter();
  return (
    <div className="w-full h-auto px-[150px] py-[50px] pt-[200px] ">
      <div className="relative w-full flex justify-center items-center">
        {/* TITLE */}
        <div className="inline-block mx-auto">
          <article className="text-[60px] leading-[80px] font-extrabold font-grotesuqe mb-2 drop-shadow-md text-center">
            Web Developer:
            <br />
            <span className="text-adaptive-strong opacity-[0.5] font-grotesuqe ">
              Discover Behind Story
            </span>{" "}
          </article>
          <article className="text-[20px] text-center max-w-[75%] mx-auto">
            See how Abhishek Yadav's journey is transforming ideas into powerful
            web applications using his Full Stack Developer skills.
          </article>
        </div>
      </div>
      {/* BUTTONS */}
      <div className="flex justify-center items-center gap-4 my-10">
        <Button
          type={1}
          stylesheet="font-medium h-[45px]"
          onClick={() => router.push("/contact-me")}
        >
          Book a free call
        </Button>
        <Button
          type={2}
          stylesheet="font-medium h-[45px] px-6"
          onClick={() => router.push("/projects")}
        >
          View Work
        </Button>
      </div>
      {/* BANNER */}
      <Image
        src={"/assets/images/about.png"}
        alt="aboutpage"
        width={1000}
        height={1000}
        className="relative w-full h-auto object-contain mx-auto"
      />
      {/* WHAT SKILLS DO I HAVE */}
      <div className="relative w-full">
        <div className="flex justify-center items-center flex-wrap gap-8 text-adaptive-strong font-grotesuqe text-[40px] leading-[50px] font-extrabold">
          <article className="hover:drop-shadow-lg opacity-[0.5] hover:opacity-[0.7] transition-all duration-[0.8s] cursor-default">
            HTML
          </article>
          <article className="hover:drop-shadow-lg opacity-[0.5] hover:opacity-[0.7] transition-all duration-[0.8s] cursor-default">
            CSS
          </article>
          <article className="hover:drop-shadow-lg opacity-[0.5] hover:opacity-[0.7] transition-all duration-[0.8s] cursor-default">
            Javascript
          </article>
          <article className="hover:drop-shadow-lg opacity-[0.5] hover:opacity-[0.7] transition-all duration-[0.8s] cursor-default">
            React Js
          </article>
          <article className="hover:drop-shadow-lg opacity-[0.5] hover:opacity-[0.7] transition-all duration-[0.8s] cursor-default">
            Next Js
          </article>
          <article className="hover:drop-shadow-lg opacity-[0.5] hover:opacity-[0.7] transition-all duration-[0.8s] cursor-default">
            Material UI
          </article>
          <article className="hover:drop-shadow-lg opacity-[0.5] hover:opacity-[0.7] transition-all duration-[0.8s] cursor-default">
            Bootstarp
          </article>
          <article className="hover:drop-shadow-lg opacity-[0.5] hover:opacity-[0.7] transition-all duration-[0.8s] cursor-default">
            Node JS
          </article>
          <article className="hover:drop-shadow-lg opacity-[0.5] hover:opacity-[0.7] transition-all duration-[0.8s] cursor-default">
            Express Js
          </article>
          <article className="hover:drop-shadow-lg  opacity-[0.5] hover:opacity-[0.7] transition-all duration-[0.8] cursor-default">
            MongoDB
          </article>
          <article className="hover:drop-shadow-lg  opacity-[0.5] hover:opacity-[0.7] transition-all duration-[0.8] cursor-default">
            React Native
          </article>
          <article className="hover:drop-shadow-lg  opacity-[0.5] hover:opacity-[0.7] transition-all duration-[0.8] cursor-default"></article>
        </div>
      </div>
    </div>
  );
};

export default Landing;
