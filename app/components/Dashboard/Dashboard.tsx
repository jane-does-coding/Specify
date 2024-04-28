"use client";
import useTaskModal from "@/app/hooks/useTaskModal";
import AnimatedBackground from "../AnimatedBackground";
import Item from "./Item";
import getTasks from "@/app/actions/getTasks";
import { MovingBorderDemo } from "./NewTask";

const Dashboard = ({ tasks }: { tasks: any }) => {
	const taskModal = useTaskModal();

	if (tasks.length == 0)
		return (
			<>
				<AnimatedBackground value={200} />
				<div className="min-h-screen flex items-center justify-center flex-col">
					<h1 className="text-white text-[5rem] jura translate-y-[-5rem]">
						No tasks yet.
					</h1>
					<MovingBorderDemo />
				</div>
			</>
		);

	return (
		<div className="min-h-screen pb-20 xl:pb-10 z-[5]">
			<div className="w-[95vw] xl:w-[90vw] mx-auto p-4 xl:p-8 rounded-xl bg-black shadow-xl mt-28 z-[5]">
				{tasks.map((task: any) => (
					<Item
						task={task}
						key={task.id}
						isLast={tasks[tasks.length - 1].id == task.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
