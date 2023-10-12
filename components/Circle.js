"use client";
import React, { useState, useContext, useRef, useEffect } from "react";
import { AppContext } from "@components/AppContext";
import CircleEditor from "./CircleEditor";
import CircleColor from "./CircleColor";

export default function Circle({ color, colorIndex, colorKey }) {
	const { isPaletteOpen } = useContext(AppContext);
	const [circleColor, setCircleColor] = useState(color.value);
	const [showEditor, setShowEditor] = useState(false);
	const circleColorRef = useRef(null);

	const toggleShowEditor = (status) => {
		//Don't toggle the other editors' visibility if a color picker is open.
		if (isPaletteOpen === false) {
			setShowEditor(status);
		}
	};

	useEffect(() => {
		setCircleColor(color.value);
	}, [color.value]);

	return (
		<div
			className="orange__container relative pt-2 w-28 h-32 md:h-30 max-w-32 flex justify-center items-center"
			onMouseEnter={() => {
				toggleShowEditor(true);
			}}
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
					color={color}
					colorIndex={colorIndex}
					colorKey={colorKey}
					setColor={setCircleColor}
					showEditor={showEditor}
					setShowEditor={setShowEditor}
					circleColorRef={circleColorRef}
				/>
			</div>
			<CircleColor
				circleColorRef={circleColorRef}
				color={color}
				colorKey={colorKey}
				showEditor={showEditor}
			/>
		</div>
	);
}
