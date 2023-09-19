"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import chroma from "chroma-js";
import Editor from "./Editor";

export default function Circle({
	color: initalColor = "#8b6ce0",
	paletteStatus,
	togglePaletteStatus,
}) {
	const [color, setColor] = useState(initalColor);
	const [showEditor, setShowEditor] = useState(false);
	const [hoveredIcon, setHoveredIcon] = useState(null);

	const editorRef = useRef(null);
	const sketchPickerRef = useRef(null);

	const lighterColor = chroma(color).brighten(1).hex();
	const darkerColor = chroma(color).darken(1).hex();

	//Function to hide the color picker if user clicks outside of it.
	const handleClickOutside = (event) => {
		if (
			paletteStatus &&
			sketchPickerRef.current &&
			sketchPickerRef.current.contains(event.target)
		) {
			return; // If the color picker is shown and the click is inside it, do nothing
		}
		if (isClickOutside(event.target, editorRef, sketchPickerRef)) {
			//Otherwise close the editor panel and the color picker.
			setShowEditor(false);
			togglePaletteStatus(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const toggleShowEditor = (status) => {
		if (paletteStatus === false) {
			setShowEditor(status);
		}
	};

	return (
		<div
			ref={editorRef}
			className="color__container flex justify-center items-center relative w-28 h-24 md:h-28 max-w-32"
			onMouseEnter={() => toggleShowEditor(true)}
			onMouseLeave={() => toggleShowEditor(false)}
		>
			<div className={showEditor ? "block" : "hidden"}>
				<Editor
					sketchPickerRef={sketchPickerRef}
					hoveredIcon={hoveredIcon}
					setHoveredIcon={setHoveredIcon}
					color={color}
					setColor={setColor}
					paletteStatus={paletteStatus}
					togglePaletteStatus={togglePaletteStatus}
				/>
			</div>
			<div
				className="rounded-full w-5/6 h-5/6 flex justify-center items-center"
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

function isClickOutside(target, ...refs) {
	return refs.every((ref) => ref.current && !ref.current.contains(target));
}

function hexToRgba(hex, opacity) {
	hex = hex.replace("#", "");
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return `rgba(${r},${g},${b},${opacity})`;
}
