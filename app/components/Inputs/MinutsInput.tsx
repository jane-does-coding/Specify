import React from "react";

const MinutsInput = ({ label, value, setValue, onChange }: any) => {
	return (
		<div className="w-full relative my-1">
			<input
				placeholder=" "
				minLength={3}
				value={value || ""}
				onChange={onChange}
				className={`peer w-full p-3 pt-8 xl:pt-10 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-lg xl:text-[1.5rem]
        `}
			/>
			<label
				className={`absolute text-sm xl:text-lg duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
        `}
			>
				{label}
			</label>
		</div>
	);
};

export default MinutsInput;

{
	/* <input
			type="number"
			id="workMinutes"
			value={value}
			onChange={onChange}
			className="border p-2 rounded text-black"
		/> */
}
