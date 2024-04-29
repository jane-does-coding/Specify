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
		description:
			"Besides being an awesome task manager, it also has a built in pomodoro timer!",
		header: <img src="/Pomodoro.png" className="h-[65%] rounded-md" />,
		/* 		icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
		 */
	},
	{
		title: "Dashboard",
		description: "Beautiful and easy to understand dashboard",
		header: <img src="/banner.png" className="h-[65%] rounded-md" />,
		icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "Authentication",
		description: "We value your privacy! All data is encrypted.",
		header: <img src="/Register Form.png" className="h-[65%] rounded-md" />,
		icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "Design",
		description: "User friendly design, styles, and branding!",
		header: <img src="/long-banner.png" className="h-[65%] rounded-md" />,
		icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "What's up next?",
		description: "Updates are coming soon!",
		header: <img src="/404 page.png" className="h-[65%] rounded-md" />,
		icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
	},
];
