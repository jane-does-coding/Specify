"use client";
import React from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import { Button } from "../moving-border";
import useTaskModal from "@/app/hooks/useTaskModal";

export function MovingBorderDemo() {
	const taskModal = useTaskModal();

	return (
		<div className="translate-y-[-3rem]">
			<Button
				borderRadius="10rem"
				onClick={taskModal.onOpen}
				className="bg-black/75 text-white border-neutral-200 dark:border-slate-800 text-[1.5rem] transition hover:bg-neutral-800"
			>
				New task
			</Button>
		</div>
	);
}
