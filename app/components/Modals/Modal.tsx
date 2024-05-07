"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosDownload } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
}

const Modal = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled,
	secondaryAction,
	secondaryActionLabel,
}: ModalProps) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (disabled) return;

		setShowModal(false);

		setTimeout(() => {
			onClose();
		}, 300);
	}, [disabled, onClose]);

	const handleSubmit = useCallback(() => {
		if (disabled) return;
		onSubmit();
	}, [disabled, onSubmit]);

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) return;

		secondaryAction();
	}, [disabled, secondaryAction]);

	if (!isOpen) return null;

	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 backdrop-blur-md h-screen ">
				<div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-screen lg:h-auto md:h-auto overflow-y-hidden">
					{/* CONTENT */}
					<div
						className={`translate duration-300 h-full ${
							showModal
								? "translate-y-0 opacity-100"
								: "translate-y-full opacity-0"
						}`}
					>
						<div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg relative flex flex-col w-full bg-black/[50%] backdrop-blur-lg outline-none focus:outline-none text-white">
							{/* HEADER */}
							<div className="flex items-center p-6 rounded-t justify-center relative border-b-[1.5px] border-neutral-800/50">
								<button
									className="p-2 text-white rounded-full hover:bg-neutral-800/50 border-0 transition absolute left-9"
									onClick={handleClose}
								>
									<IoMdClose size={24} />
								</button>
								<div className="text-xl text-neutral-100">{title}</div>
							</div>
							{/* BODY */}
							<div className="relative p-6 py-4 flex-auto">{body}</div>
							{/* FOOTER */}
							<div className="flex flex-col gap-2 p-6 py-4 w-full">
								<div className="flex flex-row items-center gap-4 w-full">
									{secondaryAction && secondaryActionLabel && (
										<Button
											disabled={disabled}
											label={secondaryActionLabel}
											onClick={handleSecondaryAction}
											outline
										/>
									)}
									<Button
										disabled={disabled}
										label={actionLabel}
										onClick={handleSubmit}
									/>
								</div>
								{footer}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
