import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();
	const { title, description, priority, tag, deadline, status } = body;
	const user = await getCurrentUser();

	if (user?.id) {
		const task = await prisma.task.create({
			data: {
				title,
				description,
				priority,
				tag,
				deadline,
				status,
				userId: user?.id,
			},
		});

		return NextResponse.json(task);
	} else {
		return NextResponse.json({ message: "not authorized" });
	}
}
