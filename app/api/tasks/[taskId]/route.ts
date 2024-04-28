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
