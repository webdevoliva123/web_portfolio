import Button from "@/elements/Button";
import React from "react";

const NeedHelp = () => {
  return (
    <div className="relative w-full px-[150px] py-[100px] pb-[200px] flex justify-center items-center">
      {/* CONTAINER */}
      <div className="needhelp_container border border-adaptive-strong">
        <div className="inline-block">
          {/* LABEL */}
          <article className="text-center text-[60px] leading-[75px] font-grotesuqe font-bold drop-shadow-md">
            <span className="text-adaptive-strong opacity-[0.5] font-grotesuqe drop-shadow-md">
              Need any help?
            </span>{" "}
            <br /> Let's do it!
          </article>
          {/* DESCRIPTION */}
          <article className="max-w-[75%] mx-auto text-center my-10 text-lg font-medium">
            Ready for assistance? Let's collaborate and tackle it together,
            ensuring success every step of the way. How can I help?
          </article>
          {/* BUTTONS */}
          <div className="w-full flex justify-center items-center gap-4 ">
                <Button type={1} stylesheet="font-medium h-[45px]" onClick={() => router.push("/contact-me")}>Book a free call</Button>
                <Button type={3} stylesheet="font-medium h-[45px] px-6" onClick={() => router.push("/projects")}>View Work</Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
