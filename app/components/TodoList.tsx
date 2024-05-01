import React from "react";
import TodoItem from "./Todo";

const TodoList = ({ todos }: any) => {
	return (
		<div className="my-8">
			{todos.map((todo: any) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
