"use client";
import React, { createContext, useState, useEffect } from "react";
// import WebFont from "webfontloader";

export const AppContext = createContext();

export function AppProvider({ children }) {
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY;
	const [fontList, setFontList] = useState([]);

	const [editorState, setEditorState] = useState({
		colors: {
			primary: "#8b6ce0",
			secondary: "#e3f6f5",
			accent1: "#bAe8e8",
			accent2: "#ffd803",
			background: "#faebd7",
		},
		activeEditor: null,
		editors: [
			{
				id: "editor1",
				isHeader: true,
				content: "Curated colors and paired fonts in context.",
				fontFamily: "IBM Plex Sans",
				fontSize: "46px",
				fontWeight: "700",
				lineHeight: "1.1",
			},
			{
				id: "editor2",
				isHeader: false,
				content:
					"Ever scratched your head trying to pick the perfect colors and fonts for your project? Vibe vision generates combinations for you and updates the site in real-time to show you what it would look like in the real world. Get help generating your color palette and font pairing by chatting with the AI who can help you find what you’re looking for. P.S. All the text in this section is editable so feel free to put your own copy in here.",
				fontFamily: "Inter",
				fontSize: "16px",
				fontWeight: "400",
				lineHeight: "1.5",
			},
		],
	});

	const [uiState, setUiState] = useState({
		isPaletteOpen: false,
		isNotificationShown: false,
		notification: { type: "", item: "" },
		isFontListShown: false,
	});

	const updateEditorState = (updatedProperties) => {
		setEditorState((prevState) => ({
			...prevState,
			...updatedProperties,
		}));
	};

	const updateUiState = (updatedProperties) => {
		setUiState((prevState) => ({
			...prevState,
			...updatedProperties,
		}));
	};

	const updateEditorFont = (editorId, updatedFont) => {
		setEditorState((prevState) => {
			const updatedEditors = prevState.editors.map((editor) => {
				if (editor.id === editorId) {
					return { ...editor, fontFamily: updatedFont };
				}
				return editor;
			});
			return { ...prevState, editors: updatedEditors };
		});
	};

	useEffect(() => {
		//Fetch the fonts from Google Fonts API.
		fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`)
			.then((response) => response.json())
			.then((data) => {
				const fetchedFonts = data.items
					.filter((item) => item.family !== "Molle")
					.map((item) => {
						return {
							category: item.category,
							family: item.family,
						};
					});

				setFontList(fetchedFonts);
			})
			.catch((error) => console.error("Error fetching fonts:", error));
	}, [apiKey]);

	return (
		<AppContext.Provider
			value={{
				fontList,
				...editorState,
				...uiState,
				uiState,
				updateUiState,
				updateEditorState,
				updateEditorFont,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
