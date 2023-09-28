"use client";
import React, { createContext, useState, useEffect } from "react";
// import WebFont from "webfontloader";

export const AppContext = createContext();

export function AppProvider({ children }) {
	const [colors, setColors] = useState([
		"#8b6ce0",
		"#e3f6f5",
		"#bAe8e8",
		"#ffd803",
		"#faebd7",
	]);
	const [textBoxes, setTextBoxes] = useState([
		{
			isHeader: true,
			font: "Inter",
			value: "Curated colors and paired fonts in context.",
			fontSize: "46px",
			fontWeight: "600",
			lineHeight: "1.1",
		},
		{
			isHeader: false,
			font: "Arial",
			value: "Ever scratched your head trying to pick the perfect colors and fonts for your project? Vibe vision generates combinations for you and updates the site in real-time to show you what it would look like in the real world. Get help generating your color palette and font pairing by chatting with the AI who can help you find what you’re looking for. P.S. All the text in this section is editable so feel free to put your own copy in here.",
			fontSize: "16px",
			fontWeight: "400",
			lineHeight: "1.5",
		},
	]);
	const [isPaletteOpen, setIsPaletteOpen] = useState(false);
	const [isNotificationShown, setIsNotificationShown] = useState(false);
	const [notification, setNotification] = useState("");
	const [isFontListShown, setIsFontListShown] = useState(false);
	const [fonts, setFonts] = useState([]);
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY;

	useEffect(() => {
		//Fetch the fonts from Google Fonts API.
		fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`)
			.then((response) => response.json())
			.then((data) => {
				const fetchedFonts = data.items
					.filter((item) => item.family !== "Molle")
					.map((item) => {
						const file =
							item.files.regular ||
							item.files.italic ||
							item.files[300] ||
							item.files[700];

						return {
							category: item.category,
							family: item.family,
							files: file,
						};
					});

				setFonts(fetchedFonts);
			})
			.catch((error) => console.error("Error fetching fonts:", error));
	}, []);

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
				textBoxes,
				setTextBoxes,
				fonts,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
