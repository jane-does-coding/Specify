"use client";
import AnimatedBackground from "@/app/components/AnimatedBackground";
import Timer from "@/app/components/Timer";
import React, { useContext, useEffect, useRef, useState } from "react";

const Page = () => {
	const [workMinutes, setWorkMinutes] = useState(20);
	const [breakMinutes, setBreakMinutes] = useState(10);

	return (
		<>
			<AnimatedBackground value={250} />
			<Timer
				breakMinutes={breakMinutes}
				setBreakMinutes={setBreakMinutes}
				workMinutes={workMinutes}
				setWorkMinutes={setWorkMinutes}
			/>
		</>
	);
};

export default Page;
