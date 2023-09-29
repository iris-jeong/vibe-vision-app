import React, { useEffect, useRef, useContext } from "react";
import { AppContext } from "@components/AppContext";
import { loadFont } from "@utils/functions";

export default function TextInput({
	defaultValue,
	fontSize,
	fontWeight,
	lineHeight,
	editorId,
}) {
	const textAreaRef = useRef(null);
	const textAreaContainerRef = useRef(null);
	const { colors, fonts } = useContext(AppContext);
	const backgroundColor = colors[4];

	const autoResize = () => {
		const textArea = textAreaRef.current;
		const textAreaContainer = textAreaContainerRef.current;

		// Reset the height to 'auto' before calculating the scrollHeight
		textArea.style.height = "auto";
		textArea.style.height = `${textArea.scrollHeight}px`;
		textAreaContainer.style.height = `${textArea.scrollHeight}px`;
	};

	useEffect(() => {
		console.log(fonts[editorId]);
		loadFont(fonts[editorId]);

		window.addEventListener("resize", autoResize);
		autoResize(textAreaRef.current, textAreaContainerRef.current); //Initial resize.

		return () => {
			window.removeEventListener("resize", autoResize);
		};
	}, [fonts]);

	return (
		<div
			ref={textAreaContainerRef}
			className={`green__container textContainer w-full my-1`}
		>
			<textarea
				ref={textAreaRef}
				style={{
					backgroundColor: backgroundColor,
					fontSize: fontSize,
					fontWeight: fontWeight,
					lineHeight: lineHeight,
					fontFamily: fonts[editorId],
				}}
				className={`w-full h-full border-0 py-0 pl-0 pr-2 border-none focus:outline-none resize-none`}
				defaultValue={defaultValue}
				onChange={autoResize}
			/>
		</div>
	);
}
