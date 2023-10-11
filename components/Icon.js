import Image from "next/image";
import ColorPicker from "./ColorPicker";
import { useContext } from "react";
import { AppContext } from "@components/AppContext";
import { hasGoodContrast } from "@utils/generatePalette";

export default function Icon({
	type,
	isHovered,
	isLocked,
	onClick,
	iconRefs,
	color,
	colorIndex,
	setColor,
}) {
	const { colors } = useContext(AppContext);
	const icons = {
		lock: isLocked ? "locked" : "unlocked",
		copy: "copy",
		palette: "color-palette",
		font: "font",
		download: "download",
	};
	const iconHasGoodContrast = hasGoodContrast(
		colors.background.value,
		"#1c1c1c"
	);

	const srcPath = isHovered
		? iconHasGoodContrast
			? `icons/${icons[type]}-hover.svg`
			: `icons/${icons[type]}-white-hover.svg`
		: iconHasGoodContrast
		? `icons/${icons[type]}.svg`
		: `icons/${icons[type]}-white.svg`;

	return (
		<>
			<span ref={iconRefs[type]}>
				<Image
					className={`${type}-icon`}
					src={srcPath}
					alt={`${type.charAt(0).toUpperCase() + type.slice(1)} Icon`}
					width={26}
					height={26}
					onClick={onClick}
				/>
			</span>
			{type === "palette" && (
				<ColorPicker
					iconRefs={iconRefs}
					color={color}
					colorIndex={colorIndex}
					setColor={setColor}
				/>
			)}
		</>
	);
}
