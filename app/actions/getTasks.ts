import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getTasks() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) return [];

		const tasks = await prisma.task.findMany({
			where: {
				userId: currentUser.id,
			},
		});

		return tasks;
	} catch (error) {
		console.error("Error fetching tasks:", error);
		return { message: "Internal Server Error" };
	}
}
