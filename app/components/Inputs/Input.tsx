"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	formatPrice?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const Input = ({
	id,
	label,
	type = "text",
	disabled,
	register,
	required,
	errors,
}: InputProps) => {
	return (
		<div className="w-full relative my-1">
			<input
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=" "
				type={type}
				minLength={3}
				className={`peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative
          ${errors[id] ? "border-rose-400" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-neutral-900"}
        `}
			/>
			<label
				className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
            ${errors[id] ? "text-rose-300 font-semibold" : "text-zinc-400"}
        `}
			>
				{label}
			</label>
		</div>
	);
};

export default Input;
