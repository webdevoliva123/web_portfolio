import Button from "@/elements/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const BlogCard = () => {
  return (
    <div className=" w-full h-[500px] border border-adaptive-strong rounded-md p-2 bg-black bg-opacity-[0.01]">
      {/* IMAGE CARD */}
      <div className="blogcard w-full h-[300px] rounded-md overflow-hidden">
        <Image
          src={
            process.env.NEXT_PUBLIC_BASE_URL + "/assets/images/blog-product.jpg"
          }
          alt="blog-product"
          width={500}
          height={500}
          className="blogcard_img relative w-full h-full object-cover"
        />
      </div>
      {/* INFO CONTAINER */}
      <div className=" w-full h-[180px] pt-4 px-2">
        {/* TAG */}
        <div className="px-4 py-2 border border-black inline-block rounded-full text-xs font-medium ">
          March 24, 2024 / Expreince.
        </div>
        {/* TITLE */}
        <article className="my-4 text-[20px] font-grotesuqe font-medium">
          My expreince while doing interships at college time blog.
        </article>
        {/* LINK */}
        <Link
          href={"/my-blogs/1"}
          className="flex justify-start items-center gap-4"
        >
          <article className="text-sm font-medium ">Read Blog</article>{" "}
          <Image
            src={
              process.env.NEXT_PUBLIC_BASE_URL + "/assets/icons/right-arrow.png"
            }
            alt="right arrow"
            width={500}
            height={500}
            className="relative w-[15px] h-auto object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

const MyBlogs = () => {
  const router = useRouter();
  return (
    <div className="w-full px-[150px] py-[100px] ">
      {/* Headline */}
      <div className="w-full flex justify-between items-end mb-20">
        <article className="text-[60px] leading-[75px] font-grotesuqe font-bold drop-shadow-md">
          <span className="text-adaptive-strong opacity-[0.5] font-grotesuqe drop-shadow-md">
            Check out
          </span>{" "}
          <br /> My lastest blog.
        </article>
        <Button
          stylesheet="font-medium h-[50px]"
          onClick={() => router.push("/my-blogs")}
        >
          See more blogs
        </Button>
      </div>
      {/* Blogs Container */}
      <div className="w-full grid grid-cols-3 gap-10">
        {[1, 2, 3]?.map((blog, idx) => {
          return <BlogCard key={idx} content={blog} />;
        })}
      </div>
    </div>
  );
};

export default MyBlogs;
