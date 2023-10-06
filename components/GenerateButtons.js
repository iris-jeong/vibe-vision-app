import { useContext } from "react";
import { AppContext } from "./AppContext";
import { generateColorPalette, hasGoodContrast } from "@utils/generatePalette";
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
