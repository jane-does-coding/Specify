"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../container-scroll-animation";

export function LandingScroll() {
	return (
		<div className="flex flex-col overflow-hidden md:translate-y-[-15rem] xl:translate-y-[-12.5rem]">
			<ContainerScroll
				titleComponent={
					<>
						{/*  <h1 className="text-4xl font-semibold text-black dark:text-white mb-20">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1> */}
					</>
				}
			>
				<Image
					src={`/banner.png`}
					alt="hero"
					height={720}
					width={1400}
					className="mx-auto rounded-2xl object-cover h-full object-left-top"
					draggable={false}
				/>
			</ContainerScroll>
		</div>
	);
}
