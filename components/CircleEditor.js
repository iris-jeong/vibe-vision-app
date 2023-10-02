import { useState, useRef, useEffect, useContext, useCallback } from "react";
import { AppContext } from "@components/AppContext";
import IconButton from "./IconButton";

export default function CircleEditor({
	color,
	colorIndex,
	setColor,
	showEditor,
	setShowEditor,
}) {
	const { updateUiState, uiState, isPaletteOpen } = useContext(AppContext);
	const [hoveredIcon, setHoveredIcon] = useState(null);
	const [isLocked, setIsLocked] = useState(false);
	const sketchPickerRef = useRef(null);
	const editorRef = useRef(null);
	const lockIconRef = useRef(null);
	const iconRefs = {
		lock: lockIconRef,
		palette: sketchPickerRef,
	};
	const iconPositions = {
		lock: "-left-1 top-1 md:top-0",
		copy: "-top-2 md:-top-4 left-1/2 transform -translate-x-1/2 z-20",
		palette: "-right-1 top-1 md:top-0",
	};
	const handleOutsideClick = useCallback(
		(event) => {
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
					updateUiState({ isPaletteOpen: false });
				} else {
					// Close the color palette and editor.
					updateUiState({ isPaletteOpen: false });
					setShowEditor(false);
				}
			}
		},
		[setShowEditor, updateUiState, showEditor]
	);

	const displayNotification = useCallback((type, item) => {
		updateUiState({
			isNotificationShown: true,
			notification: { type: type, item: item },
		});
		setTimeout(() => {
			updateUiState({ isNotificationShown: false });
		}, 2000);
	});

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [showEditor, isPaletteOpen, handleOutsideClick]);

	const handleIconClick = (type) => {
		switch (type) {
			case "lock":
				setIsLocked((prevState) => !prevState);
				break;
			case "copy":
				copyToClipboard(color);
				displayNotification(type, "color");
				break;
			case "palette":
				updateUiState({ isPaletteOpen: !uiState.isPaletteOpen });
				break;
			default:
				break;
		}
	};

	return (
		<div ref={editorRef} className="editor ease-in-out">
			{["lock", "copy", "palette"].map((iconType) => {
				return (
					<div
						className={`icon__container cursor-pointer absolute ${iconPositions[iconType]} `}
						onMouseEnter={() => setHoveredIcon(iconType)}
						onMouseLeave={() => setHoveredIcon(null)}
					>
						<IconButton
							key={iconType}
							type={iconType}
							isHovered={hoveredIcon === iconType}
							onClick={() => handleIconClick(iconType)}
							color={color}
							colorIndex={colorIndex}
							setColor={setColor}
							isLocked={isLocked}
							iconRefs={iconRefs}
						/>
					</div>
				);
			})}
		</div>
	);
}
function copyToClipboard(hexValue) {
	navigator.clipboard.writeText(hexValue);
}
