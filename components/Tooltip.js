export default function Tooltip({ type, isVisible }) {
	const toolTips = {
		lock: "Toggle lock",
		copy: "Copy HEX",
		palette: "Select color",
		font: "Select font",
	};

	return (
		<div
			className={`tooltip z-20 rounded-full p-2 bg-slate-800 text-white flex justify-center text-center text-xs absolute inline-block w-24 -top-[36px] -left-[34px] ${
				isVisible ? "visible " : "hidden"
			}`}
		>
			{toolTips[type]}
		</div>
	);
}
