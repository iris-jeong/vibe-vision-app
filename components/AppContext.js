"use client";
import React, { createContext, useState, useEffect } from "react";
// import WebFont from "webfontloader";

export const AppContext = createContext();

export function AppProvider({ children }) {
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY;
	const [fontList, setFontList] = useState([]);
	const [serifFonts, setSerifFonts] = useState([]);
	const [sansSerifFonts, setSansSerifFonts] = useState([]);
	const [displayFonts, setDisplayFonts] = useState([]);
	const [handwritingFonts, setHandwritingFonts] = useState([]);
	const [monospaceFonts, setMonospaceFonts] = useState([]);
	const [fontCategories, setFontCategories] = useState([]);
	const [editorState, setEditorState] = useState({
		colors: {
			primary: { value: "#8b6ce0", locked: false },
			secondary: { value: "#e3f6f5", locked: false },
			accent1: { value: "#bAe8e8", locked: false },
			accent2: { value: "#ffd803", locked: false },
			background: { value: "#faebd7", locked: false },
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
				lineHeight: "110%",
				locked: false,
			},
			{
				id: "editor2",
				isHeader: false,
				content:
					"Ever scratched your head trying to pick the perfect colors and fonts for your project? Vibe vision generates combinations for you and updates the site in real-time to show you what it would look like in the real world. P.S. All the text in this section is editable so feel free to put your own copy in here.",
				fontFamily: "Inter",
				fontSize: "16px",
				fontWeight: "400",
				lineHeight: "normal",
				locked: false,
			},
		],
	});
	const [paletteHistory, setPaletteHistory] = useState([
		{
			primary: { value: "#8b6ce0", locked: false },
			secondary: { value: "#e3f6f5", locked: false },
			accent1: { value: "#bAe8e8", locked: false },
			accent2: { value: "#ffd803", locked: false },
			background: { value: "#faebd7", locked: false },
		},
	]);
	const [fontPairHistory, setFontPairHistory] = useState([
		{
			fontFamily1: "IBM Plex Sans",
			fontFamily2: "Inter",
		},
	]);

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

	const updateColorLockState = (colorKey) => {
		setEditorState((prevState) => {
			const updatedColors = { ...prevState.colors };

			if (updatedColors[colorKey]) {
				updatedColors[colorKey].locked =
					!updatedColors[colorKey].locked;
			}

			return { ...prevState, colors: updatedColors };
		});
	};

	const updateFontLockState = (editorId) => {
		setEditorState((prevState) => {
			console.log("prevState", prevState);
			const updatedEditors = prevState.editors.map((editor) => {
				if (editor.id === editorId) {
					return { ...editor, locked: !editor.locked };
				}
				return editor;
			});

			return { ...prevState, editors: updatedEditors };
		});
	};

	const updateColorValue = (colorKey, newColorValue) => {
		setEditorState((prevState) => {
			const updatedColors = { ...prevState.colors };

			if (updatedColors[colorKey]) {
				updatedColors[colorKey].value = newColorValue;
			}

			return { ...prevState, colors: updatedColors };
		});
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

	const addNewPaletteToHistory = (palette) => {
		// console.log("palette history: ", paletteHistory);
		const newPalette = {
			primary: { value: palette[0], locked: false },
			secondary: { value: palette[1], locked: false },
			accent1: { value: palette[2], locked: false },
			accent2: { value: palette[3], locked: false },
			background: { value: palette[4], locked: false },
		};
		setPaletteHistory((prevHistory) => [...prevHistory, newPalette]);
	};

	const addNewFontPairToHistory = (fontPair) => {
		// console.log("font pair history: ", fontPairHistory);
		const newFontPair = {
			fontFamily1: fontPair[0],
			fontFamily2: fontPair[1],
		};

		setFontPairHistory((prevHistory) => [...prevHistory, newFontPair]);
	};

	useEffect(() => {
		//Fetch the fonts from Google Fonts API.
		fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`)
			.then((response) => response.json())
			.then((data) => {
				let serifs = [];
				let sansSerifs = [];
				let displays = [];
				let handwritings = [];
				let monospaces = [];

				const fetchedFonts = data.items
					.filter(
						(item) =>
							item.family !== "Molle" &&
							item.family !== "Flow Rounded" &&
							item.family !== "Flow Block" &&
							item.family !== "Flow Circular" &&
							item.family !== "Wavefont" &&
							item.family !== "Redacted" &&
							item.family !== "Noto Color Emoji" &&
							item.family !== "Noto Emoji" &&
							item.family !== "Noto Kufi Arabic" &&
							item.family !== "Noto Music" &&
							item.family !== "Noto Naskh Arabic" &&
							item.family !== "Noto Nastaliq Urdu" &&
							item.family !== "Noto Rashi Hebrew" &&
							!item.family.toLowerCase().includes("noto sans") &&
							!item.family.toLowerCase().includes("barcode") &&
							!item.family
								.toLowerCase()
								.includes("material icons")
					)
					.map((item) => {
						switch (item.category) {
							case "serif":
								serifs.push(item);
								break;
							case "sans-serif":
								sansSerifs.push(item);
								break;
							case "display":
								displays.push(item);
								break;
							case "handwriting":
								handwritings.push(item);
								break;
							case "monospace":
								monospaces.push(item);
								break;
							default:
								break;
						}
						return {
							category: item.category,
							family: item.family,
						};
					});
				setSerifFonts(serifs);
				setSansSerifFonts(sansSerifs);
				setDisplayFonts(displays);
				setHandwritingFonts(handwritings);
				setMonospaceFonts(monospaces);
				setFontList(fetchedFonts);
				setFontCategories([
					serifs,
					sansSerifs,
					displays,
					handwritings,
					monospaces,
				]);
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
				updateColorValue,
				updateColorLockState,
				updateFontLockState,
				fontCategories,
				addNewPaletteToHistory,
				addNewFontPairToHistory,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
