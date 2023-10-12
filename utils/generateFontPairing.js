export default function generateFontPairing(fontCategories, editors) {
	// Select two random categories to choose fonts from.
	const categoryIndex1 = Math.floor(Math.random() * fontCategories.length);
	const categoryIndex2 = Math.floor(Math.random() * 2);

	const fontCategory1 = fontCategories[categoryIndex1];
	const fontCategory2 = fontCategories[categoryIndex2];

	const fontIndex1 = Math.floor(Math.random() * fontCategory1.length);
	const fontIndex2 = Math.floor(Math.random() * fontCategory2.length);

	let fontPair = [
		fontCategory1[fontIndex1].family,
		fontCategory2[fontIndex2].family,
	];

	// Replace any fonts if they were locked by user.
	editors.map((editor, i) => {
		if (editor.locked) {
			fontPair[i] = editor.fontFamily;
		}
	});

	return fontPair;
}
