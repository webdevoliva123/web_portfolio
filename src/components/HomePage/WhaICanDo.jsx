import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const WhaICanDo = () => {
  const swiperRef = useRef();

  return (
    <div className="whaticando">
      <div className="block w-full">
        <article className="mx-auto text-center relative  text-[60px] leading-[75px] font-grotesuqe font-bold drop-shadow-md">
          Discover what I can <br />{" "}
          <span className="text-adaptive-strong opacity-[0.5] font-grotesuqe drop-shadow-md">
            Develop for you.
          </span>{" "}
        </article>
        {/* div */}
        <div className="relative w-[80%] h-[550px] rounded-md my-10 mx-auto">
          <Swiper
            ref={swiperRef}
            loop={true}
            className="mySwiper w-full h-[550px]"
          >
            {[1, 2]?.map((review, idx) => {
              return (
                <SwiperSlide
                  key={idx}
                  className="w-full h-full p-5 overflow-hidden bg-adaptive-weak-hover"
                >
                  {/* IMAGE CONTAINER */}
                  <div className="w-full h-[350px] rounded-md overflow-hidden mb-8">
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_BASE_URL +
                        "/assets/images/projects/project1.png"
                      }
                      alt="project"
                      width={500}
                      height={500}
                      className="relative w-full h-full object-cover"
                    />
                  </div>
                  {/* IFNO CONTAINER */}
                  <div className="flex justify-start items-start gap-5 mb-5">
                    <div className="px-4 py-2 border border-black inline-block rounded-full text-xs font-medium ">
                      Company Project
                    </div>
                    <div className="px-4 py-2 border border-black inline-block rounded-full text-xs font-medium ">
                      UI/UX Project
                    </div>
                  </div>
                  <article className="text-[30px] font-grotesuqe font-bold">
                    Wyld Planet a ngo project for Earth.
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* PREV BUTTON */}
          <div
            className=" absolute top-[50%] -translate-y-[50%] -left-[120px] w-[80px] h-[80px] bg-adaptive-off-black rounded-full cursor-pointer flex justify-center items-center select-none"
            onClick={() => swiperRef?.current?.swiper?.slidePrev()}
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_BASE_URL + "/assets/icons/cont-prev.svg"
              }
              alt="next-icon"
              width={500}
              height={500}
              className="relative w-[30px] h-[30px] object-contain"
            />
          </div>
          {/* NEXT BUTTON */}
          <div
            className="absolute top-[50%] -translate-y-[50%] -right-[120px] w-[80px] h-[80px] bg-adaptive-off-black rounded-full cursor-pointer flex justify-center items-center select-none"
            onClick={() => swiperRef?.current?.swiper?.slideNext()}
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_BASE_URL + "/assets/icons/cont-next.svg"
              }
              alt="next-icon"
              width={500}
              height={500}
              className="relative w-[30px] h-[30px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhaICanDo;
