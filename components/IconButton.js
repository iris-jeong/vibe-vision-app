import Tooltip from "./Tooltip";
import Icon from "./Icon";

export default function IconButton({
	type,
	isHovered,
	onClick,
	color,
	colorIndex,
	setColor,
	isLocked,
	iconRefs,
}) {
	return (
		<>
			<Tooltip type={type} isVisible={isHovered} />
			<Icon
				type={type}
				isHovered={isHovered}
				isLocked={isLocked}
				onClick={onClick}
				iconRefs={iconRefs}
				color={color}
				colorIndex={colorIndex}
				setColor={setColor}
			/>
		</>
	);
}
