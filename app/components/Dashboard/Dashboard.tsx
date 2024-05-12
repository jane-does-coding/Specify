"use client";
import React, { useState, useEffect } from "react";
import useTaskModal from "@/app/hooks/useTaskModal";
import AnimatedBackground from "../AnimatedBackground";
import GridItem from "./GridItem";
import Item from "./Item";
import { motion } from "framer-motion";
import DeleteDoneBtn from "./DeleteDoneBtn";

/* Icons */
import { CiGrid41 } from "react-icons/ci";
import { IoList } from "react-icons/io5";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Dashboard = ({ tasks }: { tasks: any }) => {
	const taskModal = useTaskModal();
	const [displayMode, setDisplayMode] = useState("list");
	const [filterVisible, setFilterVisible] = useState(false);
	const [hideDone, setHideDone] = useState(true);
	const [filterByPriority, setFilterByPriority] = useState<string>("");
	const [filterByTag, setFilterByTag] = useState<string>("");
	const [filterByStatus, setFilterByStatus] = useState<string>("");
	const [filterByDeadline, setFilterByDeadline] = useState<string>("");
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [sortedTasks, setSortedTasks] = useState<any[]>([]);

	// Assuming you have an array of tasks named 'tasks'
	const doneTasks = tasks.filter((task: any) => task.status === "Done");

	const saveDisplayModeToLocalStorage = (mode: string) => {
		localStorage.setItem("displayMode", mode);
	};

	useEffect(() => {
		// Load display mode from local storage on component mount
		const savedMode = localStorage.getItem("displayMode");
		if (savedMode) {
			setDisplayMode(savedMode);
		}
	}, []);

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
		const selectedOption = event.target.value;
		setFilterByDeadline(selectedOption);

		// Sorting based on farthest or closest deadlines
		const sorted = [...tasks].sort((a, b) => {
			const dateA = new Date(a.deadline);
			const dateB = new Date(b.deadline);

			// If 'closest' is selected, sort by ascending order
			if (selectedOption === "closest") {
				return dateA.getTime() - dateB.getTime();
			}
			// If 'farthest' is selected, sort by descending order
			else if (selectedOption === "farthest") {
				return dateB.getTime() - dateA.getTime();
			}
			// For other cases, maintain the default sorting
			else {
				return 0;
			}
		});
		setSortedTasks(sorted);
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const filteredTasks = sortedTasks.filter((task: any) => {
		const priorityFilter =
			filterByPriority === "" || task.priority === filterByPriority;
		const tagFilter = filterByTag === "" || task.tag === filterByTag;
		const statusFilter =
			(filterByStatus === "" || task.status === filterByStatus) &&
			(!hideDone || task.status !== "Done");
		const searchFilter =
			searchTerm === "" ||
			task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			task.description.toLowerCase().includes(searchTerm.toLowerCase());
		return priorityFilter && tagFilter && statusFilter && searchFilter;
	});

	const toggleDisplayMode = () => {
		const newMode = displayMode === "list" ? "grid" : "list";
		setDisplayMode(newMode);
		saveDisplayModeToLocalStorage(newMode);
	};

	const calculateCloseDeadline = (deadline: string) => {
		const taskDeadline = new Date(deadline);
		const today = new Date();
		const threeDaysLater = new Date();
		threeDaysLater.setDate(today.getDate() + 0);

		return (
			taskDeadline <= today ||
			(taskDeadline >= today && taskDeadline <= threeDaysLater)
		);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="min-h-screen pb-20 xl:pb-10 z-[5]"
		>
			<div className="w-[95vw] xl:w-[90vw] mx-auto p-4 xl:p-8 rounded-xl bg-black shadow-xl mt-28 z-[5]">
				<div className="mb-4 flex flex-col lg:flex-row justify-between items-center">
					<div className="w-full">
						<input
							type="text"
							placeholder="Search tasks..."
							className="px-6 py-3 rounded-full bg-neutral-800 text-white w-full text-xs xl:text-[1rem]"
							value={searchTerm}
							onChange={handleSearchChange}
						/>
					</div>

					<div className="my-4 md:my-0 min-w-fit">
						<DeleteDoneBtn tasks={tasks} />
					</div>

					<div className="flex gap-2 md:gap-0">
						<button
							className="p-2 xl:p-3 rounded-full bg-neutral-700 text-white ml-4 text-xs xl:text-[1rem]"
							onClick={() => setHideDone(!hideDone)}
						>
							{hideDone ? <RiEyeOffFill size={28} /> : <RiEyeFill size={28} />}
						</button>
						<button
							className="p-2 xl:p-3 rounded-full bg-neutral-700 text-white ml-4 text-xs xl:text-[1rem]"
							onClick={toggleDisplayMode}
						>
							{displayMode === "list" ? (
								<CiGrid41 size={28} />
							) : (
								<IoList size={28} />
							)}
						</button>
					</div>
				</div>

				<div className="w-full flex flex-col lg:flex-row">
					<div className="flex">
						<span className="bg-neutral-800 text-white p-2 px-4 rounded-full mr-2 hidden md:flex">
							Done Tasks: {doneTasks.length}/{tasks.length}
						</span>
						<button
							className="px-4 py-2 rounded-lg bg-neutral-800 text-white mr-2 text-xs xl:text-[1rem]"
							onClick={() => setFilterVisible(!filterVisible)}
						>
							{filterVisible ? "Hide Filters" : "Show Filters"}
						</button>
					</div>
					{filterVisible && (
						<div className="flex flex-wrap gap-2 my-4 md:gap-0 md:my-0">
							<select
								className="px-4 py-2 rounded-lg bg-gray-800 text-white mr-2 text-xs xl:text-[1rem]"
								value={filterByPriority}
								onChange={handlePriorityChange}
							>
								<option value="">Filter by Priority</option>
								<option value="emergency">Emergency</option>
								<option value="extremely high">Extremely High</option>
								<option value="high">High</option>
								<option value="medium">Medium</option>
								<option value="low">Low</option>
							</select>
							<select
								className="px-4 py-2 rounded-lg bg-gray-800 text-white mr-2 text-xs xl:text-[1rem]"
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
								className="px-4 py-2 rounded-lg bg-gray-800 text-white mr-2 text-xs xl:text-[1rem]"
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
								className="px-4 py-2 rounded-lg bg-gray-800 text-white mr-2 text-xs xl:text-[1rem]"
								value={filterByDeadline}
								onChange={handleDeadlineChange}
							>
								<option value="">Filter by Deadline</option>
								<option value="closest">Closest</option>
								<option value="farthest">Farthest</option>
							</select>
						</div>
					)}
				</div>
				<br />

				{filteredTasks.length === 0 ? (
					<h1 className="text-white text-center jura text-[3rem] my-10 mt-18">
						Nothing was found.
					</h1>
				) : displayMode === "list" ? (
					filteredTasks.map((task: any) => (
						<Item
							task={task}
							key={task.id}
							isLast={filteredTasks[filteredTasks.length - 1].id === task.id}
							closeDeadline={calculateCloseDeadline(task.deadline)}
						/>
					))
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{filteredTasks.map((task: any) => (
							<GridItem
								task={task}
								key={task.id}
								isLast={filteredTasks[filteredTasks.length - 1].id === task.id}
								closeDeadline={calculateCloseDeadline(task.deadline)}
							/>
						))}
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default Dashboard;
