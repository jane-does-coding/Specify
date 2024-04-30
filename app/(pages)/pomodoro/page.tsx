"use client";
import AnimatedBackground from "@/app/components/AnimatedBackground";
import Timer from "@/app/components/Timer";
import React, { useContext, useEffect, useRef, useState } from "react";

const Page = () => {
	return (
		<>
			<AnimatedBackground value={250} />
			<Timer />
		</>
	);
};

export default Page;
