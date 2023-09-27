import React, { useEffect, useRef } from "react";

export default function TextInput({
	defaultValue,
	fontSize,
	fontWeight,
	lineHeight,
}) {
	const textAreaRef = useRef(null);
	const textAreaContainerRef = useRef(null);

	// const initialStyle = {
	// 	fontSize: isHeader ? "43px" : "16px",
	// 	fontWeight: isHeader ? "600" : "400",
	// 	lineHeight: isHeader ? "1.1" : "1.5",
	// };

	const autoResize = () => {
		const textArea = textAreaRef.current;
		const textAreaContainer = textAreaContainerRef.current;

		// Reset the height to 'auto' before calculating the scrollHeight
		textArea.style.height = "auto";
		textArea.style.height = `${textArea.scrollHeight}px`;
		textAreaContainer.style.height = `${textArea.scrollHeight}px`;
	};

	useEffect(() => {
		window.addEventListener("resize", autoResize);
		autoResize(textAreaRef.current, textAreaContainerRef.current); //Initial resize.

		return () => {
			window.removeEventListener("resize", autoResize);
		};
	});

	return (
		<div
			ref={textAreaContainerRef}
			className={`green__container textContainer w-full my-1`}
		>
			<textarea
				ref={textAreaRef}
				style={{
					fontSize: fontSize,
					fontWeight: fontWeight,
					lineHeight: lineHeight,
				}}
				className={`bg-[#faebd7] w-full h-full border-0 p-0 border-none focus:outline-none resize-none`}
				defaultValue={defaultValue}
				onChange={autoResize}
			/>
		</div>
	);
}
