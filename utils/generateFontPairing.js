import { useContext } from "react";
import { AppContext } from "../components/AppContext";

export default function generateFontPairing(fontCategories) {
	// Select two random categories to choose fonts from.
	const categoryIndex1 = Math.floor(Math.random() * fontCategories.length);
	const categoryIndex2 = Math.floor(Math.random() * 2);
	console.log("font categories:", fontCategories);
	console.log("category index 1: ", categoryIndex1);
	console.log("category index 2: ", categoryIndex2);

	const fontCategory1 = fontCategories[categoryIndex1];
	const fontCategory2 = fontCategories[categoryIndex2];

	const fontIndex1 = Math.floor(Math.random() * fontCategory1.length);
	const fontIndex2 = Math.floor(Math.random() * fontCategory2.length);

	return [fontCategory1[fontIndex1], fontCategory2[fontIndex2]];
}
