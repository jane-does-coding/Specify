import getCurrentUser from "@/app/actions/getCurrentUser";
import getTodos from "@/app/actions/getTodos";
import CreateTodo from "@/app/components/CreateTodo";
import TodoItem from "@/app/components/Todo";
import TodoList from "@/app/components/TodoList";
import React from "react";

const Page = async () => {
	const user = await getCurrentUser();
	const todos = await getTodos();

	return (
		<div className="min-h-[100vh] w-[60vw] mx-auto">
			<CreateTodo />

			<TodoList todos={todos} />
		</div>
	);
};

export default Page;
