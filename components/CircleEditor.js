import Icon from "./Icon";
import { useState, useRef, useEffect } from "react";

export default function Editor({
	hoveredIcon,
	setHoveredIcon,
	color,
	setColor,
	isPaletteOpen,
	setIsPaletteOpen,
	setIsNotificationShown,
	setNotification,
	showEditor,
	setShowEditor,
}) {
	const [isLocked, setIsLocked] = useState(false);
	const sketchPickerRef = useRef(null);
	const editorRef = useRef(null);
	const lockIconRef = useRef(null);

	const handleOutsideClick = (event) => {
		if (showEditor) {
			//If the user clicked inside of the color palette, do nothing.
			if (
				sketchPickerRef.current?.contains(event.target) || //Clicked inside the sketch picker.
				(editorRef.current?.contains(event.target) &&
					!lockIconRef.current?.contains(event.target)) //Clicked on either copy or palette icon.
			) {
				return;
			} else if (lockIconRef.current?.contains(event.target)) {
				//Click inside lock icon.
				setIsPaletteOpen(false);
			} else {
				// Close the color palette and editor.
				setIsPaletteOpen(false);
				setShowEditor(false);
			}
		}
	};

	const displayNotification = (type) => {
		setIsNotificationShown(true);
		setNotification(type);
		setTimeout(() => {
			setIsNotificationShown(false);
		}, 2000);
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [showEditor]);

	const handleIconClick = (type, event) => {
		event?.stopPropagation();
		switch (type) {
			case "lock":
				setIsLocked(!isLocked);
				displayNotification("lock");
				break;
			case "copy":
				copyToClipboard(color);
				displayNotification("copy");
				break;
			case "palette":
				console.log(
					`Palette icon clicked. Setting isPaletteOpen to: ${!isPaletteOpen}`
				);

				setIsPaletteOpen(!isPaletteOpen);
				break;
		}
	};

	return (
		<div ref={editorRef} className="editor ease-in-out">
			{["lock", "copy", "palette"].map((iconType) => {
				return (
					<Icon
						key={iconType}
						type={iconType}
						hoveredIcon={hoveredIcon}
						onMouseEnter={() => setHoveredIcon(iconType)}
						onMouseLeave={() => setHoveredIcon(null)}
						onClick={(event) => handleIconClick(iconType, event)}
						color={color}
						setColor={setColor}
						isPaletteOpen={isPaletteOpen}
						isLocked={isLocked}
						sketchPickerRef={sketchPickerRef}
						lockIconRef={lockIconRef}
					/>
				);
			})}
		</div>
	);
}
function copyToClipboard(hexValue) {
	navigator.clipboard.writeText(hexValue);
}
