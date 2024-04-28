import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
	taskId: string;
}

export async function DELETE(
	request: Request,
	{ params }: { params: IParams }
) {
	const currentUser = await getCurrentUser();

	if (!currentUser) return NextResponse.error();

	const { taskId } = params;

	if (!taskId || typeof taskId !== "string") throw new Error("Invalid Id");

	const task = await prisma.task.deleteMany({
		where: {
			id: taskId,
			userId: currentUser.id,
		},
	});

	return NextResponse.json(task);
}

export async function PUT(req: Request, { params }: { params: IParams }) {
	const currentUser = await getCurrentUser();
	const body = await req.json();

	if (!currentUser) return NextResponse.error();

	const { taskId } = params;

	if (!taskId || typeof taskId !== "string") throw new Error("Invalid Id");

	const existingTask = await prisma.task.findFirst({
		where: {
			id: taskId,
			userId: currentUser.id,
		},
	});

	if (!existingTask) throw new Error("Task not found");

	const { title, description, status, tag, deadline, priority } = body;

	const updatedTaskData = {
		title: title || existingTask.title,
		description: description || existingTask.description,
		status: status || existingTask.status,
		tag: tag || existingTask.tag,
		deadline: deadline || existingTask.deadline,
		priority: priority || existingTask.priority,
	};

	const updatedTask = await prisma.task.update({
		where: {
			id: taskId,
		},
		data: updatedTaskData,
	});

	return NextResponse.json(updatedTask);
}
