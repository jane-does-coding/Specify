"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState, useEffect, useRef } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useTaskModal from "@/app/hooks/useTaskModal";

const UserMenu = ({ currentUser }: { currentUser?: User | null }) => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const taskModal = useTaskModal();
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	const handleClickOutside = useCallback((event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, handleClickOutside]);

	return (
		<div className="relative text-white" ref={menuRef}>
			<div className="flex flex-row items-center gap-3">
				<div
					className="p-4 md:py-3 md:px-3 transition flex flex-row  items-center gap-3 rounded-full cursor-pointer hover:bg-neutral-600/50 text-neutral-100"
					onClick={toggleOpen}
				>
					<AiOutlineMenu size={28} />
				</div>
			</div>

			{isOpen && (
				<div className="absolute shadow-lg rounded-xl border-[1.5px] border-neutral-700/50 border-t-neutal-600 w-[40vw] md:w-[20vw] bg-black overflow-hidden right-0 top-12 text-sm">
					<div className="flex flex-col cursor-pointer">
						{currentUser ? (
							<>
								<MenuItem onClick={() => router.push("/")} label="Home" />
								<MenuItem
									onClick={() => router.push("/dashboard")}
									label="Dashboard"
								/>
								<MenuItem onClick={taskModal.onOpen} label="New Task" />
								<MenuItem
									onClick={() => router.push("/pomodoro")}
									label="Pomodoro"
								/>
								<MenuItem
									onClick={() => router.push("/todo")}
									label="Brain Dump"
								/>
								<MenuItem
									onClick={() => {
										signOut();
									}}
									label="Logout"
								/>
							</>
						) : (
							<>
								<MenuItem onClick={() => router.push("/")} label="Home" />
								<MenuItem onClick={loginModal.onOpen} label="Login" />
								<MenuItem onClick={registerModal.onOpen} label="Signup" />
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
