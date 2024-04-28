import React from "react";

const SettingsContext = React.createContext({
	showSettings: false as boolean,
	setShowSettings: null as any,
	workMinutes: 25 as number,
	breakMinutes: 15 as number,
	setWorkMinutes: null as any,
	setBreakMinutes: null as any,
});

export default SettingsContext;
