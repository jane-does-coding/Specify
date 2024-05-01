"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const TodoItem = ({ todo }: { todo: any }) => {
	const [isDone, setIsDone] = useState(false);
	const router = useRouter();

	const toggleDone = async () => {
		setIsDone(!isDone);
		try {
			await axios.delete(`/api/todos/${todo.id}`);
			router.refresh();
		} catch (error) {
			console.error("Error deleting todo:", error);
		} finally {
		}
	};

	return (
		<div
			className={`flex items-center justify-between p-4 relative transition-all `}
		>
			<div>
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						className={`peer relative appearance-none w-7 h-7 border rounded-full border-white cursor-pointer checked:bg-neutral-600`}
						checked={isDone}
						onChange={toggleDone}
					/>
					<span className={`text-white ml-2 ${isDone ? "line-through" : ""}`}>
						{todo.title}
					</span>
				</label>
			</div>
		</div>
	);
};

export default TodoItem;
