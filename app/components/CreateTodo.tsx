"use client";
// client/pages/todo/create.tsx
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const CreateTodo = () => {
	const [title, setTitle] = useState("");
	const router = useRouter();

	const handleSubmit = async () => {
		if (!title) {
			toast.error("All fields are required");
			return;
		}

		setTitle("");

		try {
			const response = await axios.post("/api/todos", { title });
			const data = response.data;

			console.log(response, data);

			console.log(data);

			console.log("Todo created with ID:", data.id);

			toast.success("Todo Created");
			router.push("/todo");
			router.refresh();
		} catch (error) {
			console.error("Error creating todo:", error);
			toast.error("Error creating todo");
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	return (
		<div className="mt-32">
			<h1 className="text-center text-neutral-100 mb-10 jura text-[3rem]">
				Brain Dump
			</h1>
			<div className=" flex gap-4">
				<input
					type="text"
					value={title}
					onChange={handleChange}
					placeholder="Enter todo title"
					className="px-8 py-3 rounded-full bg-neutral-800 text-white text-[1.5rem] xl:text-[1.75rem] w-2/3"
				/>
				<button
					onClick={handleSubmit}
					className="bg-black text-white w-1/3 flex items-center justify-center rounded-full border-[1px] border-neutral-500"
				>
					Add Todo
				</button>
			</div>
		</div>
	);
};

export default CreateTodo;
