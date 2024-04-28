import prisma from "@/app/libs/prismadb";

interface IParams {
	task_id: string;
}

export default async function getTaskById(params: IParams) {
	try {
		const { task_id } = params;

		if (!task_id) return;

		const task = await prisma.task.findUnique({
			where: {
				id: task_id,
			},
			include: {
				user: true,
			},
		});

		if (!task) return null;

		return task;
	} catch (err) {
		console.log(err);
	}
}
