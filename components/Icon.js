import Image from "next/image";
import { SketchPicker } from "react-color";

export default function Icon({
	type,
	hoveredIcon,
	onMouseEnter,
	onMouseLeave,
	onClick,
	color,
	setColor,
	paletteStatus,
	isLocked,
}) {
	const icons = {
		lock: isLocked ? "locked" : "unlocked",
		copy: "copy",
		palette: "color-palette",
	};
	const toolTip = {
		lock: "Toggle lock",
		copy: "Copy HEX",
		palette: "Select color",
	};
	const srcPath =
		hoveredIcon === type
			? `icons/${icons[type]}-hover.svg`
			: `icons/${icons[type]}.svg`;

	const getIconPosition = (type) => {
		switch (type) {
			case "lock":
				return "-left-1 -top-1 md:-top-2";
			case "copy":
				return "-top-5 right-[38px] md:-top-6 md:right-[2.8rem]";
			case "palette":
				return "-right-1 -top-1 md:-top-2";
			default:
				return "";
		}
	};

	return (
		<div
			className={`icon__container cursor-pointer absolute ${getIconPosition(
				type
			)} `}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div
				className={`tooltip z-20 rounded-full p-2 bg-slate-800 text-white flex justify-center text-center text-xs absolute inline-block w-24 -top-[36px] -left-[34px] ${
					hoveredIcon === type ? "visible" : "hidden"
				}`}
			>
				{toolTip[type]}
			</div>
			<Image
				className={`${type}-icon`}
				src={srcPath}
				alt={`${type.charAt(0).toUpperCase() + type.slice(1)} Icon`}
				width={24}
				height={24}
				onClick={onClick}
			/>
			{type === "palette" && (
				<div
					className={`.color-picker ${
						paletteStatus ? "visible" : "invisible"
					}`}
				>
					<SketchPicker
						className={`absolute z-10 -left-10 top-6 ${
							paletteStatus ? "visible" : "invisible"
						}`}
						color={color}
						onChange={(color) => {
							setColor(color.hex);
						}}
					/>
				</div>
			)}
		</div>
	);
}
