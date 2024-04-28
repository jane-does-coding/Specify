"use client";
import { FaPlay } from "react-icons/fa";

const PlayButton = (props: any) => {
	return (
		<button {...props}>
			Play <FaPlay size={16} />
		</button>
	);
};

export default PlayButton;
