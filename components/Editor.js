import Icon from "./Icon";
import { useState } from "react";

export default function Editor({
	hoveredIcon,
	setHoveredIcon,
	color,
	setColor,
	paletteStatus,
	togglePaletteStatus,
	setShowNotification,
}) {
	const [isLocked, setIsLocked] = useState(false);

	const handleIconClick = (type) => {
		switch (type) {
			case "lock":
				setIsLocked(!isLocked);
				break;
			case "copy":
				copyToClipboard(color);
				setShowNotification(true);
				setTimeout(() => {
					setShowNotification(false);
				}, 2000);
				break;
			case "palette":
				togglePaletteStatus(!paletteStatus);
				break;
		}
	};
	return (
		<div className="editor">
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
						paletteStatus={paletteStatus}
						isLocked={isLocked}
					/>
				);
			})}
		</div>
	);
}
function copyToClipboard(hexValue) {
	navigator.clipboard.writeText(hexValue);
}
