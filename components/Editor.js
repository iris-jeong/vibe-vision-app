import Icon from "./Icon";
import { useState } from "react";

export default function Editor({
	sketchPickerRef,
	hoveredIcon,
	setHoveredIcon,
	color,
	setColor,
	paletteStatus,
	togglePaletteStatus,
}) {
	const [isLocked, setIsLocked] = useState(false);

	const handleIconClick = (type, event) => {
		event?.stopPropagation();
		switch (type) {
			case "lock":
				setIsLocked(!isLocked);
				break;
			case "copy":
				copyToClipboard(color);
				break;
			case "palette":
				togglePaletteStatus(!paletteStatus);
				break;
		}
	};
	return (
		<>
			{["lock", "copy", "palette"].map((iconType) => {
				return (
					<Icon
						key={iconType}
						type={iconType}
						hoveredIcon={hoveredIcon}
						onMouseEnter={() => setHoveredIcon(iconType)}
						onMouseLeave={() => setHoveredIcon(null)}
						onClick={(event) => handleIconClick(iconType, event)}
						sketchPickerRef={sketchPickerRef}
						color={color}
						setColor={setColor}
						paletteStatus={paletteStatus}
						isLocked={isLocked}
					/>
				);
			})}
		</>
	);
}
function copyToClipboard(hexValue) {
	navigator.clipboard.writeText(hexValue);
}
