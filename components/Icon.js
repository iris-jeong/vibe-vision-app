import React, { useContext } from "react";
import { AppContext } from "@components/AppContext";
import { SketchPicker } from "react-color";
import Image from "next/image";

export default function Icon({
	type,
	hoveredIcon,
	onMouseEnter,
	onMouseLeave,
	onClick,
	color,
	setColor,
	isLocked,
	sketchPickerRef,
	lockIconRef,
}) {
	const { isPaletteOpen } = useContext(AppContext);

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
				return "-left-1 top-1 md:top-0";
			case "copy":
				return "-top-2 right-[33px] sm:right-[2.4rem] md:-top-4 md:right-[2.7rem]";
			case "palette":
				return "-right-1 top-1 md:top-0";
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
					hoveredIcon === type ? "visible " : "hidden"
				}`}
			>
				{toolTip[type]}
			</div>
			<span ref={type === "lock" ? lockIconRef : null}>
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
				<div
					ref={sketchPickerRef}
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
						onChange={(color) => {
							setColor(color.hex);
						}}
					/>
				</div>
			)}
		</div>
	);
}
