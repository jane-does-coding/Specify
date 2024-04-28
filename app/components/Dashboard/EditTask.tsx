"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const EditTask = ({ taskId }: any) => {
	const [taskData, setTaskData] = useState({ title: "", description: "" });
	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const res = await fetch(`/api/tasks/${taskId}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(taskData),
			});
			if (res.ok) {
				router.push("/dashboard");
				router.refresh();
				toast.success("Task updated successfully");
			} else {
				throw new Error("Failed to update task");
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e: any) => {
		setTaskData({ ...taskData, [e.target.name]: e.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="title" onChange={handleChange} />
			<input type="text" name="description" onChange={handleChange} />
			<button type="submit">Update Task</button>
		</form>
	);
};

export default EditTask;
