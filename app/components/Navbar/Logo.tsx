"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
	const router = useRouter();
	return (
		<Link href={"/"} className="flex items-center justify-center">
			<img src="/logo.jpg" width={60} height={60} alt="" />
			<h1 className="cursor-pointer text-white font-light text-3xl uppercase jura">
				Specify
			</h1>
		</Link>
	);
};

export default Logo;
