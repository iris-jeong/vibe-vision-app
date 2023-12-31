import { useContext } from "react";
import { AppContext } from "./AppContext";
import { generateColorPalette, hasGoodContrast } from "@utils/generatePalette";
import Button from "./Button";
import generateFontPairing from "@utils/generateFontPairing";

export default function GenerateButtons() {
	const {
		colors,
		editors,
		updateColorValue,
		updateEditorFont,
		fontCategories,
		addNewPaletteToHistory,
		addNewFontPairToHistory,
	} = useContext(AppContext);
	const { primary } = colors;

	const generatePalette = () => {
		//Generate a random color palette.
		const palette = generateColorPalette(colors);

		//Add palette to history.
		addNewPaletteToHistory(palette);

		//Update the app context colors.
		Object.keys(colors).map((colorKey, i) => {
			updateColorValue(colorKey, palette[i]);
		});
		// console.log("updatedcolors: ", updatedColors);
	};

	const generateFonts = () => {
		console.log(editors);
		//Generate a random font pairing.
		const fontPair = generateFontPairing(fontCategories, editors);

		addNewFontPairToHistory(fontPair);

		//Update the app context editor font families.
		editors.forEach((editor, i) => {
			updateEditorFont(editor.id, fontPair[i]);
		});

		console.log(editors);
	};

	const buttonHasGoodContrast = hasGoodContrast(
		primary.value,
		"#383838",
		4.5,
		1,
		4
	);

	return (
		<>
			{["Colors", "Fonts"].map((button) => {
				return (
					<Button
						key={button}
						type={button}
						style={{
							backgroundColor: primary.value,
							color: buttonHasGoodContrast
								? "#383838"
								: "#ffffff",
						}}
						src={
							buttonHasGoodContrast
								? "icons/swap.svg"
								: "icons/swap-white.svg"
						}
						alt={`Swap ${button}`}
						onClick={
							button === "Colors"
								? generatePalette
								: generateFonts
						}
					/>
				);
			})}
		</>
	);
}
