import Image from "next/image";
import ColorPicker from "./ColorPicker";

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
	const icons = {
		lock: isLocked ? "locked" : "unlocked",
		copy: "copy",
		palette: "color-palette",
		font: "font",
	};

	const srcPath = isHovered
		? `icons/${icons[type]}-hover.svg`
		: `icons/${icons[type]}.svg`;

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
