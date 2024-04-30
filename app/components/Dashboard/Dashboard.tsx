"use client";
import { useState, useEffect } from "react";
import useTaskModal from "@/app/hooks/useTaskModal";
import AnimatedBackground from "../AnimatedBackground";
import Item from "./Item";
import getTasks from "@/app/actions/getTasks";
import { MovingBorderDemo } from "./NewTask";

const Dashboard = ({ tasks }: { tasks: any }) => {
	const taskModal = useTaskModal();
	const [filterByPriority, setFilterByPriority] = useState<string>("");
	const [filterByTag, setFilterByTag] = useState<string>("");
	const [filterByStatus, setFilterByStatus] = useState<string>("");
	const [filterByDeadline, setFilterByDeadline] = useState<string>("");
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [sortedTasks, setSortedTasks] = useState<any[]>([]);

	useEffect(() => {
		const sorted = [...tasks].sort((a, b) => {
			const dateA = new Date(a.deadline);
			const dateB = new Date(b.deadline);
			return dateA.getTime() - dateB.getTime();
		});
		setSortedTasks(sorted);
	}, [tasks]);

	const handlePriorityChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setFilterByPriority(event.target.value);
	};

	const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterByTag(event.target.value);
	};

	const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterByStatus(event.target.value);
	};

	const handleDeadlineChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setFilterByDeadline(event.target.value);
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const filteredTasks = sortedTasks.filter((task: any) => {
		const priorityFilter =
			filterByPriority === "" || task.priority === filterByPriority;
		const tagFilter = filterByTag === "" || task.tag === filterByTag;
		const statusFilter =
			filterByStatus === "" || task.status === filterByStatus;
		const deadlineFilter =
			filterByDeadline === "" ||
			(filterByDeadline === "closest" &&
				new Date(task.deadline) >= new Date()) ||
			(filterByDeadline === "farthest" && new Date(task.deadline) < new Date());
		const searchFilter =
			searchTerm === "" ||
			task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			task.description.toLowerCase().includes(searchTerm.toLowerCase());
		return (
			priorityFilter &&
			tagFilter &&
			statusFilter &&
			deadlineFilter &&
			searchFilter
		);
	});

	if (tasks.length === 0)
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
				<div className="mb-4 flex justify-between items-center">
					<div className="w-full">
						<select
							className="px-4 py-2 rounded-lg bg-gray-800 text-white mr-4"
							value={filterByPriority}
							onChange={handlePriorityChange}
						>
							<option value="">Filter by Priority</option>
							<option value="extremely high">Extremely High</option>
							<option value="high">High</option>
							<option value="medium">Medium</option>
							<option value="low">Low</option>
						</select>
						<select
							className="px-4 py-2 rounded-lg bg-gray-800 text-white mr-4"
							value={filterByTag}
							onChange={handleTagChange}
						>
							<option value="">Filter by Tag</option>
							<option value="Work">Work</option>
							<option value="School">School</option>
							<option value="Personal">Personal</option>
							<option value="Social">Social</option>
							<option value="Family">Family</option>
							<option value="Health">Health</option>
							<option value="Other">Other</option>
						</select>
						<select
							className="px-4 py-2 rounded-lg bg-gray-800 text-white mr-4"
							value={filterByStatus}
							onChange={handleStatusChange}
						>
							<option value="">Filter by Status</option>
							<option value="Not Done">Not Done</option>
							<option value="In Progress">In Progress</option>
							<option value="Done">Done</option>
							<option value="Abandoned">Abandoned</option>
						</select>
						<select
							className="px-4 py-2 rounded-lg bg-gray-800 text-white mr-4"
							value={filterByDeadline}
							onChange={handleDeadlineChange}
						>
							<option value="">Filter by Deadline</option>
							<option value="closest">Closest</option>
							<option value="farthest">Farthest</option>
						</select>
					</div>
					<div className="w-full">
						<input
							type="text"
							placeholder="Search tasks..."
							className="px-6 py-3 rounded-full bg-neutral-800 text-white w-full"
							value={searchTerm}
							onChange={handleSearchChange}
						/>
					</div>
				</div>
				{filteredTasks.map((task: any) => (
					<Item
						task={task}
						key={task.id}
						isLast={filteredTasks[filteredTasks.length - 1].id === task.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
