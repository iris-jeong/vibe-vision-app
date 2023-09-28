"use client";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "@components/AppContext";
import CircleEditor from "./CircleEditor";
import CircleColor from "./CircleColor";

export default function Circle({ color: initalColor = "#8b6ce0", colorIndex }) {
	const { isPaletteOpen, colors } = useContext(AppContext);
	const [color, setColor] = useState(colors[colorIndex]);
	const [showEditor, setShowEditor] = useState(false);
	const [hoveredIcon, setHoveredIcon] = useState(null);

	// console.log("color: ", color, "with", colorIndex);

	const toggleShowEditor = (status) => {
		//Don't toggle the other editors' visibility if a color picker is open.
		if (isPaletteOpen === false) {
			setShowEditor(status);
		}
	};

	return (
		<div
			className="color__container flex justify-center items-center relative pt-2 w-28 h-32 md:h-30 max-w-32"
			onMouseEnter={() => toggleShowEditor(true)}
			onMouseLeave={() => toggleShowEditor(false)}
		>
			<div
				className={`editor-container ${
					showEditor
						? "block transition duration-150 opacity-1  ease-in-out"
						: "hidden transition duration-150 opacity-0 ease-in-out"
				}`}
			>
				<CircleEditor
					hoveredIcon={hoveredIcon}
					setHoveredIcon={setHoveredIcon}
					color={color}
					colorIndex={colorIndex}
					setColor={setColor}
					showEditor={showEditor}
					setShowEditor={setShowEditor}
				/>
			</div>
			<CircleColor color={color} showEditor={showEditor} />
		</div>
	);
}
