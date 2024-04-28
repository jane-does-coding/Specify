import SettingsContext from "@/app/contexts/SettingsContext";
import { useContext } from "react";

const SetSettingsButton = (props: any) => {
	const settingsInfo = useContext(SettingsContext);

	return (
		<button
			{...props}
			onClick={() => settingsInfo.setShowSettings(!settingsInfo.showSettings)}
		>
			Done
		</button>
	);
};

export default SetSettingsButton;
