"use client";
import useUpdateTaskModal from "@/app/hooks/useUpdateTaskModal";
import React from "react";
import { FiEdit3 } from "react-icons/fi";

const EditBtn = () => {
	const updateModal = useUpdateTaskModal();
	return (
		<button
			onClick={updateModal.onOpen}
			className="w-full jura flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition py-4 rounded-lg text-white text-[1.25rem]"
		>
			<FiEdit3 size={24} />
			Edit
		</button>
	);
};

export default EditBtn;
