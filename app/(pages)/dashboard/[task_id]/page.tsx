import getTaskById from "@/app/actions/getTaskById";
import DeleteBtn from "@/app/components/Dashboard/DeleteBtn";
import EditBtn from "@/app/components/Dashboard/EditBtn";
import EditTask from "@/app/components/Dashboard/EditTask";
import UpdateTaskModal from "@/app/components/Modals/UpdateTaskModal";
import useUpdateTaskModal from "@/app/hooks/useUpdateTaskModal";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit3 } from "react-icons/fi";

const Page = async ({ params }: { params: { task_id: string } }) => {
	console.log(params);
	const task = await getTaskById(params);

	console.log("task: " + task);

	if (!task) return;

	return (
		<>
			<UpdateTaskModal taskId={task.id} task={task} />
			<div className="w-[90vw] min-h-screen md:w-[60vw] mx-auto  py-4 flex flex-col gap-4 items-center justify-center mt-28 pb-28 xl:m-y-0">
				<h1 className="text-[3.25rem] font-bold text-white jura">
					{task.title}
				</h1>
				<p className="text-neutral-400 text-xl">{task.description}</p>
				<div className="border-t-[0px] border-neutral-600 py-2 w-full flex gap-2 mt-8">
					<DeleteBtn taskId={task.id} />
					{/* <button className="w-full jura flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition py-4 rounded-lg text-white text-[1.25rem]">
						<FiEdit3 size={24} />
						Edit
					</button> */}
					<EditBtn />
				</div>
				<div className="w-full py-8 flex flex-col items-start justify-center gap-4 my-2 border-y-[1px] border-neutral-600">
					<span className="text-[1.25rem] xl:text-[1.5rem] w-full flex items-center justify-start gap-2 bg-neutral-800 text-white px-10 jura py-2 rounded-full">
						Tag: <span>{task.tag}</span>
					</span>
					<span className="text-[1.25rem] xl:text-[1.5rem] w-full flex items-center justify-start gap-2 bg-purple-300/75 text-black jura px-10 py-2 rounded-full">
						Priority: <span>{task.priority}</span>
					</span>
					<span className="text-[1.25rem] xl:text-[1.5rem] w-full flex items-center justify-start gap-2 bg-red-400/75 text-black jura px-10 py-2 rounded-full">
						Deadline: <span>{task.deadline}</span>
					</span>
					<span className="text-[1.25rem] xl:text-[1.5rem] w-full flex items-center justify-start gap-2 bg-blue-300/75 text-black jura px-10 py-2 rounded-full">
						Status: <span>{task.status}</span>
					</span>
				</div>
			</div>
		</>
	);
};

export default Page;
