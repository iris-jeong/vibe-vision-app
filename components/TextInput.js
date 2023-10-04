import React, { useEffect, useRef, useContext } from "react";
import { AppContext } from "@components/AppContext";
import { loadFont } from "@utils/functions";

export default function TextInput({ editor }) {
	const textAreaRef = useRef(null);
	const textAreaContainerRef = useRef(null);
	const { colors } = useContext(AppContext);
	const { content, fontFamily, fontSize, fontWeight, lineHeight } = editor;
	const backgroundColor = colors.background;

	const autoResize = () => {
		const textArea = textAreaRef.current;
		const textAreaContainer = textAreaContainerRef.current;

		// Reset the height to 'auto' before calculating the scrollHeight
		textArea.style.height = "auto";
		textArea.style.height = `${textArea.scrollHeight}px`;
		textAreaContainer.style.height = `${textArea.scrollHeight}px`;
	};

	useEffect(() => {
		loadFont(editor.fontFamily);

		window.addEventListener("resize", autoResize);
		autoResize(textAreaRef.current, textAreaContainerRef.current); //Initial resize.

		return () => {
			window.removeEventListener("resize", autoResize);
		};
	}, [fontFamily, fontSize]);

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
					fontFamily: fontFamily,
				}}
				className={`w-full h-full border-0 py-0 pl-0 lg:pr-2 border-none focus:outline-none resize-none`}
				defaultValue={content}
				onChange={autoResize}
			/>
		</div>
	);
}
