import { cn } from "@/utils/cn";
import React from "react";
import {
	IconArrowWaveRightUp,
	IconBoxAlignRightFilled,
	IconBoxAlignTopLeft,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../bento-grid";

export function BentoGridDemo() {
	return (
		<>
			<h1 className="text-white text-[5rem] mb-[25rem] jura mx-auto text-center mt-[-20rem]">
				About Specify
			</h1>
			<BentoGrid className="max-w-[80vw] mx-auto md:mt-[-30rem] xl:mt-[-20rem]">
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						icon={item.icon}
						className={i === 3 || i === 6 ? "md:col-span-2" : ""}
					/>
				))}
			</BentoGrid>
		</>
	);
}
const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
	{
		title: "Pomodoro Technique",
		description: "Explore how the pomodoro timer can make you more productive",
		header: <img src="/Pomodoro.png" className="h-[65%] rounded-md" />,
		icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "Dashboard",
		description:
			"Learn to use the dashboard of this app and how it can help you.",
		header: <img src="/banner.png" className="h-[65%] rounded-md" />,
		icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "Authentication",
		description: "We value your privacy! Explore how.",
		header: <img src="/Register Form.png" className="h-[65%] rounded-md" />,
		icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "How did it start",
		description: "Learn about how did this start and why this website exists",
		header: <img src="/long-banner.png" className="h-[65%] rounded-md" />,
		icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "What's up next?",
		description: "Plans and updates are coming soon!",
		header: <img src="/404 page.png" className="h-[65%] rounded-md" />,
		icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
	},
];
