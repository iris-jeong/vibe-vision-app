import { useContext } from "react";
import { AppContext } from "@components/AppContext";
import { hasGoodContrast } from "@utils/generatePalette";
import { hexToRgba, generateShade } from "@utils/functions";

export default function CircleColor({ color, showEditor, circleColorRef }) {
	const { colors } = useContext(AppContext);
	const lighterColor = generateShade(color.value, "lighter");
	const darkerColor = generateShade(color.value, "darker");
	const textHasGoodContrast = hasGoodContrast(color.value, "#1c1c1c");
	const circleHasGoodContrast = hasGoodContrast(
		colors.background.value,
		color.value
	);

	return (
		<div
			ref={circleColorRef}
			className={`${
				circleHasGoodContrast
					? "shadow-[0_0_14px_-2px_rgba(0,0,0,0.7)]"
					: "shadow-[0_0_15px_2px_rgba(255,255,255,0.5)]"
			} rounded-full w-[80px] h-[80px] sm:w-5/6 sm:h-4/6 md:w-[11vw] md:h-[11vw] max-w-[100px] max-h-[100px] flex justify-center items-center`}
			style={{
				backgroundColor: color.value,
				border: `5px solid ${hexToRgba(darkerColor, 0.1)}`,
			}}
		>
			<div
				className={`rounded text-sm text-slate-700 p-1 ${
					showEditor ? "visible" : "invisible"
				}`}
				style={{
					color: textHasGoodContrast ? "#000" : "#fff",
					backgroundColor: lighterColor,
					opacity: 0.8,
				}}
			>
				{color.value}
			</div>
		</div>
	);
}
