import { hexToRgba, generateShade } from "@utils/functions";

export default function CircleColor({ color, showEditor }) {
	const lighterColor = generateShade(color, "lighter");
	const darkerColor = generateShade(color, "darker");

	return (
		<div
			className="shadow-[0_1px_10px_-2px_rgba(0,0,0,0.5)] rounded-full w-[80px] h-[80px] sm:w-5/6 sm:h-4/6 md:w-[11vw] md:h-[11vw] max-w-[100px] max-h-[100px] flex justify-center items-center"
			style={{
				backgroundColor: color,
				border: `5px solid ${hexToRgba(darkerColor, 0.1)}`,
			}}
		>
			<div
				className={`rounded text-sm text-slate-700 p-1 ${
					showEditor ? "visible" : "invisible"
				}`}
				style={{ backgroundColor: lighterColor, opacity: 0.8 }}
			>
				{color}
			</div>
		</div>
	);
}
