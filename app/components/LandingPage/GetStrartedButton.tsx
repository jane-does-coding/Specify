"use client";
import React from "react";
import { Button } from "../moving-border";
import useLoginModal from "@/app/hooks/useLoginModal";

export function MovingBorderDemo() {
	const loginModal = useLoginModal();

	return (
		<div>
			<Button
				borderRadius="10rem"
				onClick={loginModal.onOpen}
				className="bg-neutral-900/75 text-white border-neutral-200 dark:border-slate-800 text-[1.5rem] transition hover:bg-neutral-800 "
			>
				Start now
			</Button>
		</div>
	);
}
