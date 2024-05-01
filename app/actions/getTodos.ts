import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getTodos() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) return [];

		const todos = await prisma.todo.findMany({
			where: {
				userId: currentUser.id,
			},
		});

		return todos;
	} catch (error) {
		console.error("Error fetching todos:", error);
		return { message: "Internal Server Error" };
	}
}
