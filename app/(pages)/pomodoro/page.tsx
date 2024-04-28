"use client";
import AnimatedBackground from "@/app/components/AnimatedBackground";
import PauseButton from "@/app/components/Pomodoro/PauseButton";
import PlayButton from "@/app/components/Pomodoro/PlayButton";
import SetSettingsButton from "@/app/components/Pomodoro/SetSettingsButton";
import SettingsContext from "@/app/contexts/SettingsContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Page = () => {
	const settingsInfo = useContext(SettingsContext);

	const [isPaused, setIsPaused] = useState(true);
	const [mode, setMode] = useState("work"); // work/break/null
	const [secondsLeft, setSecondsLeft] = useState(0);

	const secondsLeftRef = useRef(secondsLeft);
	const isPausedRef = useRef(isPaused);
	const modeRef = useRef(mode);

	function tick() {
		secondsLeftRef.current--;
		setSecondsLeft(secondsLeftRef.current);
	}

	useEffect(() => {
		function switchMode() {
			const nextMode = modeRef.current === "work" ? "break" : "work";
			const nextSeconds =
				(nextMode === "work"
					? settingsInfo.workMinutes
					: settingsInfo.breakMinutes) * 60;

			setMode(nextMode);
			modeRef.current = nextMode;

			setSecondsLeft(nextSeconds);
			secondsLeftRef.current = nextSeconds;
		}

		secondsLeftRef.current = settingsInfo.workMinutes * 60;
		setSecondsLeft(secondsLeftRef.current);

		const interval = setInterval(() => {
			if (isPausedRef.current) {
				return;
			}
			if (secondsLeftRef.current === 0) {
				return switchMode();
			}

			tick();
		}, 1000);

		return () => clearInterval(interval);
	}, [settingsInfo]);

	const totalSeconds =
		mode === "work"
			? settingsInfo.workMinutes * 60
			: settingsInfo.breakMinutes * 60;
	const percentage = Math.round((secondsLeft / totalSeconds) * 100);

	const minutes = Math.floor(secondsLeft / 60);
	let seconds = secondsLeft % 60;

	return (
		<>
			<AnimatedBackground value={250} />
			<div className="min-h-screen w-full flex items-center justify-center">
				{/* 			<SetSettingsButton className="absolute top-[1rem] left-[1rem] md:left-[2rem] select-none transition-[1s] bg-neutral-900/[60%] hover:bg-neutral-900/[80%] backdrop-blur-md p-4 rounded-full cursor-pointer flex items-center justify-center" />
				 */}{" "}
				<div className="w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] xl:w-[35vw]">
					<CircularProgressbarWithChildren
						className="bg-black/[15%] backdrop-blur-[10px] p-4 xl:p-8 rounded-full relative"
						value={percentage}
						strokeWidth={5}
						styles={buildStyles({
							textColor: "#fff",
							pathColor: "rgb(225, 225, 225)",
							trailColor: "rgb(50, 50, 50, 0.6)",
						})}
					>
						<span className="absolute top-[20%] w-full text-center text-[1.35rem] xl:text-[2rem] jura select-none text-white font-light">
							{mode === "work" ? "Work" : "Break"}
						</span>
						<h1 className="text-[4rem] md:text-[4rem] lg:text-[3.5rem] xl:text-[6.5rem] font-semibold text-white/[90%] select-none jura">
							{minutes}:{seconds < 10 ? "0" : null}
							{seconds}
						</h1>
						{isPaused ? (
							<PlayButton
								onClick={() => {
									setIsPaused(false);
									isPausedRef.current = false;
								}}
								className="select-none text-white text-xl transition-[1s] bg-neutral-800 hover:bg-neutral-700/[80%] backdrop-blur-md py-3 xl:py-3 px-6 xl:px-10 rounded-full overflow-hidden cursor-pointer flex items-center justify-center gap-3"
							/>
						) : (
							<PauseButton
								onClick={() => {
									setIsPaused(true);
									isPausedRef.current = true;
								}}
								className="select-none text-white text-xl transition-[1s] bg-neutral-800 hover:bg-neutral-700/[80%] backdrop-blur-md py-3 xl:py-3 px-6 xl:px-10 rounded-full overflow-hidden cursor-pointer flex items-center justify-center gap-3"
							/>
						)}
					</CircularProgressbarWithChildren>
				</div>
			</div>
		</>
	);
};

export default Page;
