"use client";
import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";

const Title = () => {
  useEffect(() => {
    const myText = new SplitType("#banner-text");

    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });

    gsap.to("#banner-text", {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });

    gsap.to(".sub-text", {
      y: 0,
      opacity: 1,
      duration: 0.25,
      delay: 1.25,
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-0 mt-36">
      <h3 className="sub-text opacity-0  text-[1rem] lg:text-[1.5rem] mb-0 text-gray-300">
        Get work done with
      </h3>
      <h1
        id="banner-text"
        className="overflow-hidden opacity-0 text-[2.75rem] jura lg:text-[6rem] xl:text-[8rem] tracking-[0.25rem] lg:tracking-[0.5rem] leading-[3rem] lg:leading-[6rem] my-4 uppercase text-black dark:text-white"
      >
        Specify
      </h1>
    </div>
  );
};

export default Title;
