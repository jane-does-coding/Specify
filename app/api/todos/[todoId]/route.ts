import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
	todoId: string;
}

export async function DELETE(
	request: Request,
	{ params }: { params: IParams }
) {
	const currentUser = await getCurrentUser();

	if (!currentUser) return NextResponse.error();

	const { todoId } = params;

	if (!todoId || typeof todoId !== "string") throw new Error("Invalid Id");

	const todo = await prisma.todo.delete({
		where: {
			id: todoId,
		},
	});

	return NextResponse.json(todo);
}
