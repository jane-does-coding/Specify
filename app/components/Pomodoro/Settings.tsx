"use client";
import { useContext } from "react";
import ReactSlider from "react-slider";
import SettingsContext from "../../contexts/SettingsContext";
import SetSettingsButton from "./SetSettingsButton";

const Settings = () => {
	const settingsInfo = useContext(SettingsContext);

	return (
		<main className="fixed text-white bg-black/[15%] h-screen w-full overflow-hidden flex items-center justify-center z-[2]">
			<video
				className="w-full h-screen fixed top-0 left-0 z-[-1] object-cover"
				autoPlay
				loop
				muted
			>
				<source src="/ocean2.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="w-[90vw] md:w-[50vw] lg:w-[40vw] p-4 lg:px-12 lg:py-12 bg-neutral-900/[50%] backdrop-blur-[15px] rounded-lg">
				<h1 className="w-full text-center text-white text-2xl xl:text-[2.5rem] tracking-[2px] my-4 mb-6">
					Settings
				</h1>
				<label className="block text-2xl my-2">
					Work Minutes: {settingsInfo.workMinutes}
				</label>
				<ReactSlider
					className={
						"h-[40px] flex items-center justify-center border-2 border-white rounded-full "
					}
					thumbClassName={
						"bg-white cursor-pointer h-[100%] aspect-square rounded-full focus:border-none focus:outline-none"
					}
					trackClassName={"track"}
					value={settingsInfo.workMinutes}
					min={1}
					max={120}
					onChange={(newValue: any) => settingsInfo.setWorkMinutes(newValue)}
				/>
				<label className="mt-6 block text-2xl my-2">
					Rest Minutes: {settingsInfo.breakMinutes}
				</label>
				<ReactSlider
					className={
						"h-[40px] flex items-center justify-center border-2 border-white rounded-full "
					}
					thumbClassName={
						"bg-white cursor-pointer h-[100%] aspect-square rounded-full focus:border-none focus:outline-none"
					}
					trackClassName={"track"}
					value={settingsInfo.breakMinutes}
					min={1}
					max={120}
					onChange={(newValue: any) => settingsInfo.setBreakMinutes(newValue)}
				/>
				<SetSettingsButton className="w-full my-2 mt-8 select-none transition-[1s] bg-neutral-900/[60%] hover:bg-neutral-900/[80%] backdrop-blur-md py-4 rounded-full overflow-hidden cursor-pointer flex items-center justify-center" />
			</div>
		</main>
	);
};

export default Settings;
