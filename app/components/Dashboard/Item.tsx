"use client";
import Link from "next/link";
import React, { useState } from "react";

const Item = ({ task, isLast }: any) => {
	console.log(isLast);
	return (
		<Link
			href={`/dashboard/${task.id}`}
			className={`border-b-[1px] px-4 xl:px-8  py-4 flex gap-4 items-center justify-between ${
				task.status.toLowerCase() == "done"
					? "opacity-[0.25] bg-neutral-500/[40%]"
					: "opacity-1"
			} ${isLast ? "border-transparent" : "border-neutral-700"} `}
		>
			<h2 className="text-[1rem] xl:text-[1.25rem] font-bold text-white jura">
				{task.title}
			</h2>
			<p className="text-neutral-400 text-[0.6rem] xl:text-[1rem]">
				{task.description.length > 20
					? task.description.slice(0, 40) + "..."
					: task.description}
			</p>
			<div className="flex items-center justify-center gap-4 mt-2">
				<span className="text-xs xl:text-sm bg-neutral-800 text-white px-2 xl:px-4 py-1 xl:py-2 rounded-full">
					{task.tag}
				</span>
				<span className="text-xs xl:text-sm bg-purple-300 text-neutral-900 px-2 xl:px-4 py-1 xl:py-2 rounded-full">
					{task.priority}
				</span>
				<span className="text-xs xl:text-sm bg-red-400 text-neutral-900 px-2 xl:px-4 py-1 xl:py-2 rounded-full">
					{task.deadline}
				</span>
				<span className="text-xs xl:text-sm bg-blue-300 text-neutral-900 px-2 xl:px-4 py-1 xl:py-2 rounded-full">
					{task.status}
				</span>
			</div>
		</Link>
	);
};

export default Item;
