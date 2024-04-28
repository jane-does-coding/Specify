"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";

const DeleteBtn = ({ taskId }: { taskId: string }) => {
	const router = useRouter();

	const onDelete = async () => {
		try {
			const response = await axios.delete(`/api/tasks/${taskId}`);
			const data = response.data;

			toast.success("Task Deleted Successfuly");
			router.push("/dashboard");
			router.refresh();
			console.log("Task deleted:", data);
		} catch (error) {
			console.error("Error deleting task:", error);
		}
	};

	return (
		<button
			onClick={onDelete}
			className="w-full jura flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition py-4 rounded-lg text-white text-[1.25rem]"
		>
			<FiTrash2 size={24} />
			Delete
		</button>
	);
};

export default DeleteBtn;
