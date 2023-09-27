"use client";
import React, { createContext, useState } from "react";
export const AppContext = createContext();

export function AppProvider({ children }) {
	const [colors, setColors] = useState([
		"#8b6ce0",
		"#e3f6f5",
		"#bAe8e8",
		"#ffd803",
		"#faebd7",
	]);
	const [isPaletteOpen, setIsPaletteOpen] = useState(false);
	const [isNotificationShown, setIsNotificationShown] = useState(false);
	const [notification, setNotification] = useState("");
	const [isFontListShown, setIsFontListShown] = useState(false);

	return (
		<AppContext.Provider
			value={{
				isPaletteOpen,
				setIsPaletteOpen,
				colors,
				setColors,
				isNotificationShown,
				setIsNotificationShown,
				notification,
				setNotification,
				isFontListShown,
				setIsFontListShown,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
