import React from "react";
import AnimatedBackground from "./components/AnimatedBackground";

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-full">
			<AnimatedBackground value={300} />
			<h1 className="text-[15rem] text-neutral-100 jura font-bold leading-[12rem]">
				404
			</h1>
			<br />
			<p className="text-neutral-300 text-[1.75rem] jura">
				Looks like you got lost...
			</p>
		</div>
	);
};

export default NotFound;
