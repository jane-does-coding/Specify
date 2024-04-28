"use client";
import React from "react";
import { SparklesCore } from "../sparkles";
import useLoginModal from "@/app/hooks/useLoginModal";

/* hey */

export function EndText() {
	const loginModal = useLoginModal();

	return (
		<div className="h-[40rem] pt-[10rem] w-full bg-gradient-to-b from-transparent via-black to-black flex flex-col items-center justify-center overflow-hidden rounded-md translate-y-[-5rem] xl:translate-y-0">
			<h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-10 jura translate-y-[-1rem]">
				Get Started
			</h1>
			<div className="w-[40rem] h-40 relative">
				{/* Gradients */}
				<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
				<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
				<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
				<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

				{/* Core component */}
				<SparklesCore
					background="transparent"
					minSize={0.4}
					maxSize={1}
					particleDensity={1200}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>

				{/* Radial Gradient to prevent sharp edges */}
				<div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
			</div>
		</div>
	);
}
