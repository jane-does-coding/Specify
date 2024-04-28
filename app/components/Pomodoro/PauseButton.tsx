"use client";
import { FaPause } from "react-icons/fa6";

const PauseButton = (props: any) => {
	return (
		<button {...props}>
			Pause <FaPause size={16} />
		</button>
	);
};

export default PauseButton;
