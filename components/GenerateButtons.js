import { useContext } from "react";
import { AppContext } from "./AppContext";
import { generateColorPalette } from "@utils/generatePalette";
import Button from "./Button";

export default function GenerateButtons() {
	const { colors, updateEditorState } = useContext(AppContext);

	const generatePalette = () => {
		console.log("generating palette");
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
		console.log("generating fonts");
	};

	return (
		<>
			{["Colors", "Fonts"].map((button) => {
				return (
					<Button
						key={button}
						type={button}
						src="icons/swap-white.svg"
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
