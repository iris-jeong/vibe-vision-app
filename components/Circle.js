"use client";
import React, { useState, useContext } from "react";
import { AppContext } from "@components/AppContext";
import chroma from "chroma-js";
import CircleEditor from "./CircleEditor";
import { hexToRgba } from "@utils/functions";

export default function Circle({ color: initalColor = "#8b6ce0" }) {
	const { isPaletteOpen } = useContext(AppContext);
	const [color, setColor] = useState(initalColor);
	const [showEditor, setShowEditor] = useState(false);
	const [hoveredIcon, setHoveredIcon] = useState(null);

	const lighterColor = chroma(color).brighten(1).hex();
	const darkerColor = chroma(color).darken(1).hex();

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
					setColor={setColor}
					showEditor={showEditor}
					setShowEditor={setShowEditor}
				/>
			</div>
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
		</div>
	);
}
