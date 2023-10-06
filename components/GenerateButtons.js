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

	return (
		<>
			{["Colors", "Fonts"].map((button) => {
				return (
					<Button
						key={button}
						type={button}
						style={{
							backgroundColor: colors.primary,
							color: hasGoodContrast(colors.primary, "#ffffff")
								? "#ffffff"
								: "#383838",
						}}
						src={
							hasGoodContrast(colors.primary, "#ffffff")
								? "icons/swap-white.svg"
								: "icons/swap.svg"
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
