import prisma from "@/app/libs/prismadb"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(
  req: Request
) {
  const body = await req.json()
  const {email, name, password, username} = body

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: {
      email, name, hashedPassword, username
    }
  })

  return NextResponse.json(user)
}