"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import banner from "@/public/1.jpg";

const BannerImage = () => {
  useEffect(() => {
    gsap.to("#image-banner", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 1,
    });
  }, []);
  return (
    <div
      id={"image-banner"}
      className="relative select-none w-[90vw] left-[5vw] translate-y-[5rem] opacity-0 bg-black rounded-[2rem]"
    >
      <Image
        src={banner}
        className="select-none w-full h-[75vh] banner-image rounded-[2rem] mt-4 lg:mt-20 opacity-[0.8]"
        width={900}
        height={400}
        alt="image"
      />
      {/* Over image text */}
      <div className="select-none text-[6rem] lg:text-[10rem] absolute mt-4 top-[50%] translate-y-[-50%] text-neutral-100 left-4 font-bold lg:leading-[11rem]">
        Travel
        <br /> Better
      </div>
    </div>
  );
};

export default BannerImage;
