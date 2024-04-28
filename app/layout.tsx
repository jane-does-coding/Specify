import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import { usePathname } from "next/navigation";
import TaskModal from "./components/Modals/TaskModal";
import Footbar from "./components/Footbar/Footbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Specify",
	description:
		"A website which is used to organise your home, work or school tasks! Really simple to use and used to help you manage your tasks and deadlines",
	icons: {
		icon: "/1.jpg",
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();

	return (
		<html lang="en" className="dark">
			<head>
				<link rel="icon" href="/logo.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap"
					rel="stylesheet"
				></link>
				<link rel="icon" href="/logo.jpg" type="image/x-icon" />
			</head>
			<body className={`${inter.className} bg-neutral-900 h-fit relative`}>
				<ToasterProvider />
				<RegisterModal />
				<LoginModal />
				<TaskModal />
				<Navbar currentUser={currentUser} />
				{children}
				<Footbar />
			</body>
		</html>
	);
}
