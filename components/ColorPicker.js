import { useContext, useCallback } from "react";
import { AppContext } from "@components/AppContext";
import { SketchPicker } from "react-color";

export default function ColorPicker({ iconRefs, color, colorIndex, setColor }) {
	const { isPaletteOpen, updateEditorState, colors } = useContext(AppContext);

	const handleColorChange = useCallback(
		(color) => {
			setColor(color.hex);
			const keys = Object.keys(colors);

			const updatedColors = { ...colors };
			updatedColors[keys[colorIndex]] = color.hex;

			updateEditorState({ colors: updatedColors });
		},
		[setColor, colorIndex, updateEditorState, colors]
	);

	return (
		<div
			ref={iconRefs.palette}
			className={`.color-picker ${
				isPaletteOpen ? "visible" : "invisible"
			}`}
		>
			<SketchPicker
				className={`absolute ease-in-out z-10 -left-10 top-6 ${
					isPaletteOpen
						? "transition duration-150 opacity-1 ease-in-out"
						: "transition duration-150 opacity-0 ease-in-out"
				}`}
				color={color}
				onChange={handleColorChange}
			/>
		</div>
	);
}
