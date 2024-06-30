import Button from "@/elements/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Card = ({ num = "01", title, desc }) => {
  return (
    <div className="w-full h-full">
      {/* TAG */}
      <div className="w-[50px] h-[50px] bg-black bg-opacity-[0.1] rounded-full inline-flex justify-center items-center  font-medium">
        {num}
      </div>
      <article className="my-5 text-2xl font-grotesuqe font-medium">
        {title}
      </article>
      <article>{desc}</article>
    </div>
  );
};

const BestChoice = () => {
  const router = useRouter();
  return (
    <div className="w-full px-[150px] py-[150px]">
      {/* Headline */}
      <div className="w-full flex justify-between items-end mb-20">
        <article className="text-[60px] leading-[75px] font-grotesuqe font-bold drop-shadow-md">
          <span className="text-adaptive-strong opacity-[0.5] font-grotesuqe drop-shadow-md">
            Why me
          </span>{" "}
          is best <br /> choice for you ?
        </article>
        <Button
          stylesheet="font-medium h-[50px]"
          onClick={() => router.push("/contact-us")}
        >
          Book a free call
        </Button>
      </div>
      {/*  grid */}
      <div className="w-full h-[500px] grid grid-cols-[30%,25%,30%] gap-[100px]">
        {/* grid1 */}
        <div className="w-full h-full grid grid-rows-[42%,1%,42%] gap-10 ">
          <Card
            num="01"
            title={"Expertise"}
            desc={`Boasts years of experience and a proven track record in web
              development, ensuring top-notch quality.`}
          />

          <div className="w-full h-[1px] bg-adaptive-strong opacity-[0.5]"></div>
          <Card
            num="02"
            title={"Communication"}
            desc={` Prioritizes clear and open communication throughout the
              development process, ensuring your requirements are understood.`}
          />
        </div>
        <div className="w-full h-full rounded-lg overflow-hidden">
          <Image
            src={
              process.env.NEXT_PUBLIC_BASE_URL + "/assets/images/expertise.jpg"
            }
            alt="expertise"
            width={500}
            height={500}
            className="relative w-full h-full object-cover "
          />
        </div>
        <div className="w-full h-full grid grid-rows-[42%,1%,42%] gap-10 ">
          <Card
            num="03"
            title={"Customization"}
            desc={` You'll benefit from customized solutions tailored to your specific
              needs, coupled with innovative designs.`}
          />

          <div className="w-full h-[1px] bg-adaptive-strong opacity-[0.5]"></div>
          <Card
            num="04"
            title={"Reliability"}
            desc={`Support even after the project is completed, with ongoing
              maintenance and assistance to keep your website running smoothly.`}
          />
        </div>
      </div>
    </div>
  );
};

export default BestChoice;
