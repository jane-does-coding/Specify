"use client";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import toast from "react-hot-toast";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginModal = () => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		signIn("credentials", {
			...data,
			redirect: false,
		}).then((callback) => {
			setIsLoading(false);

			if (callback?.ok) {
				toast.success("Logged in");
				router.push("/dashboard");
				router.refresh();
				loginModal.onClose();
			}

			if (callback?.error) {
				toast.error(callback.error);
			}
		});
	};

	const switchModal = () => {
		loginModal.onClose();
		registerModal.onOpen();
	};

	const bodyContent = (
		<div className="flex flex-col gap-3 ">
			<Heading title="Login" subtitle="Please sign in" />
			<Input
				id="email"
				label="Email"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
			/>
			<Input
				id="password"
				label="Password"
				type="password"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
			/>
		</div>
	);

	const footerContent = (
		<div className="flex flex-col text-center items-center justify-center py-1 pt-3 relative">
			<p className="flex flex-row gap-2">
				Don&apos;t have an account?
				<span
					onClick={switchModal}
					className="hover:cursor-pointer flex block transition hover:underline"
				>
					Sign up
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title="Login"
			actionLabel="Login"
			onClose={loginModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default LoginModal;
