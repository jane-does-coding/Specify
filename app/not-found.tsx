import React from "react";
import AnimatedBackground from "./components/AnimatedBackground";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <AnimatedBackground value={300} />
      <h1 className="text-[10rem] text-neutral-800 font-bold leading-[12rem]">
        404
      </h1>
      <p>Looks like you got lost...</p>
    </div>
  );
};

export default NotFound;
