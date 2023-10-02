import { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import Tooltip from "./Tooltip";
import "@styles/rangeslider.css";

export default function RangeSlider({ editorId, type, isHovered }) {
	const { updateEditorState, editors } = useContext(AppContext);
	const range = {
		min: editorId === "editor1" ? "40" : "12",
		max: editorId === "editor1" ? "80" : "22",
	};
	const [rangeValue, setRangeValue] = useState(range.min);

	const handleChangeRangeValue = (e) => {
		const value = e.target.value;
		setRangeValue(value);

		const editorIndex = editors.findIndex(
			(editor) => editor.id === editorId
		);
		if (editorIndex !== -1) {
			const updatedEditors = [...editors];
			updatedEditors[editorIndex] = {
				...updatedEditors[editorIndex],
				fontSize: `${value}px`,
			};

			updateEditorState({ editors: updatedEditors });
		}
	};

	return (
		<div className="relative ml-3 flex items-center">
			<Tooltip type={type} isVisible={isHovered} />

			<input
				type="range"
				min={range.min}
				max={range.max}
				value={rangeValue}
				onChange={handleChangeRangeValue}
			/>
		</div>
	);
}
