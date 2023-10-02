export default function Tooltip({ type, isVisible }) {
	const toolTips = {
		lock: "Toggle lock",
		copy: "Copy HEX",
		palette: "Select color",
		font: "Select font",
		slider: "Resize font ",
	};

	return (
		<div
			className={`tooltip absolute z-20 w-24 -top-9 left-1/2 transform -translate-x-1/2 rounded-full p-2 bg-slate-800 text-white flex justify-center text-center text-xs ${
				isVisible ? "visible" : "hidden"
			}`}
		>
			{toolTips[type]}
		</div>
	);
}
