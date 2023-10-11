import { useContext } from "react";
import { AppContext } from "./AppContext";
import { generateColorPalette, hasGoodContrast } from "@utils/generatePalette";
import Button from "./Button";
import generateFontPairing from "@utils/generateFontPairing";

export default function GenerateButtons() {
	const { colors, editors, updateEditorState, fontCategories } =
		useContext(AppContext);

	const generatePalette = () => {
		//Generate a random color palette.
		const palette = generateColorPalette();

		//Update the app context colors.
		let updatedColors = { ...colors };
		Object.keys(updatedColors).map((color, i) => {
			updatedColors[color] = palette[i];
		});
		updateEditorState({ colors: updatedColors });
	};

	const generateFonts = () => {
		//Generate a random font pairing.
		const fontPair = generateFontPairing(fontCategories);
		console.log(fontPair);
		//Update the app context editor font families.
		let updatedEditors = editors;
		updatedEditors.forEach((editor, i) => {
			editor["fontFamily"] = fontPair[i].family;
		});
		console.log("updated editors", updatedEditors);
		updateEditorState({ editors: updatedEditors });
	};

	const buttonHasGoodContrast = hasGoodContrast(
		colors.primary,
		"#383838",
		4.5,
		1,
		4
	);
	console.log("button has good contrast????", buttonHasGoodContrast);
	return (
		<>
			{["Colors", "Fonts"].map((button) => {
				return (
					<Button
						key={button}
						type={button}
						style={{
							backgroundColor: colors.primary,
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
