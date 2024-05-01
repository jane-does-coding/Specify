// server/api/todos.ts
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();
	const { title } = body;
	const user = await getCurrentUser();
	console.log(title, user, body);

	if (user?.id) {
		try {
			const todo = await prisma.todo.create({
				data: {
					title,
					userId: user?.id,
				},
			});

			console.log(todo);
			return NextResponse.json(todo);
		} catch (error) {
			console.error("Error creating todo:", error);
			return NextResponse.json(
				{ message: "Error creating todo" },
				{ status: 500 }
			);
		}
	} else {
		return NextResponse.json({ message: "not authorized" }, { status: 401 });
	}
}
