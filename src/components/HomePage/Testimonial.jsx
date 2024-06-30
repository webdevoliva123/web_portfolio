"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { reviewsList } from "@/global_variables/reviews";
import Image from "next/image";
import linkedin from "../../../public/assets/icons/linkedin.png";
import Link from "next/link";

const Testimonial = () => {
  const swiperRef = useRef();

  return (
    <div className="w-full px-[150px] py-[100px] bg-adaptive-strong">
      {/* TITLE */}
      <article className="relative text-center text-[60px] leading-[75px] text-adaptive-weak font-grotesuqe font-bold drop-shadow-md ">
        Peruse the testimonials <br />{" "}
        <span className="text-adaptive-weak opacity-[0.5] font-grotesuqe drop-shadow-md">
          extolling my work !
        </span>
      </article>
      {/* SLIDER */}
      <div className="w-full h-[500px] bg-adaptive-off-black rounded-lg my-10 overflow-hidden">
        <Swiper ref={swiperRef} loop={true} className="mySwiper w-full h-[500px]">
          {reviewsList?.map((review, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className="w-full h-[500px] p-5 overflow-hidden"
              >
                {/* CONTAINER */}
                <div className="flex h-full justify-start items-center gap-16">
                  {/* PROFILE */}
                  <div className="relative w-[400px] h-full rounded-lg overflow-hidden">
                    <Image
                      src={process.env.NEXT_PUBLIC_BASE_URL + review?.image}
                      alt="author profile"
                      width={500}
                      height={500}
                      className="relative w-full h-full object-cover"
                    />
                    {/* LINK */}
                    <Link
                      href={review?.author?.link}
                      target="_blank"
                      className="absolute bottom-10 left-[50%] -translate-x-[50%] w-[80%] py-4 px-8 rounded-full backdrop-blur-xl bg-white bg-opacity-[0.5] flex justify-between items-center"
                    >
                      <div className="flex justify-start items-center gap-3">
                        <Image
                          src={linkedin}
                          alt="linkedin"
                          width={500}
                          height={500}
                          className="relative w-[20px] h-[20px] object-contain -mt-1"
                        />
                        <div className="w-[1px] h-[18px] bg-adaptive-strong"></div>
                        <article className="font-grotesuqe font-semibold text-[16px]">
                          {review?.author?.name}
                        </article>
                      </div>
                      <article className="font-grotesuqe font-semibold text-base ">
                        500+
                      </article>
                    </Link>
                  </div>
                  {/* INFO */}
                  <div className="flex-1 w-full">
                    {/* TAG */}
                    <div className="inline-block px-6  py-3 border border-white border-opacity-[0.1] rounded-full">
                      <article className="text-sm text-adaptive-weak font-medium">
                        {review?.tag}
                      </article>
                    </div>
                    {/* QUOTE */}
                    <article className="my-8 font-grotesuqe text-[24px] leading-[32px] text-adaptive-weak">
                      “{review?.review}„
                    </article>
                    {/* AUTHOR */}
                    <div className="inline-block">
                      <article className="text-adaptive-weak text-xl font-grotesuqe font-medium">
                        {review?.author?.name}
                      </article>
                      <article className="text-adaptive-weak text-sm">
                        {review?.author?.role}
                      </article>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* CONTROLLER */}
      <div className="w-full flex justify-center items-center gap-5">
        {/* PREV BUTTON */}
        <div className="w-[80px] h-[80px] bg-adaptive-off-black rounded-full cursor-pointer flex justify-center items-center select-none" onClick={() => swiperRef?.current?.swiper?.slidePrev()}>
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
        <div className="w-[80px] h-[80px] bg-adaptive-off-black rounded-full cursor-pointer flex justify-center items-center select-none" onClick={() => swiperRef?.current?.swiper?.slideNext()}>
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
  );
};

export default Testimonial;
