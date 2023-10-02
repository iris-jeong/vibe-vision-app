import { useState, useContext } from "react";
import { AppContext } from "@components/AppContext";
import IconButton from "./IconButton";
import RangeSlider from "./RangeSlider";

export default function TextEditor({ editor }) {
	const { updateEditorState, updateUiState, isFontListShown } =
		useContext(AppContext);

	const [editorIsHovered, setEditorIsHovered] = useState(false);
	const [hoveredIcon, setHoveredIcon] = useState(null);
	const [isLocked, setIsLocked] = useState(false);
	const iconRefs = {
		lock: null,
		palette: null,
	};

	const toggleEditorVisibility = (status) => {
		setEditorIsHovered(status);
	};

	const handleIconClick = (type) => {
		switch (type) {
			case "lock":
				setIsLocked((prevState) => !prevState);
			case "font":
				updateEditorState({ activeEditor: editor.id });
				updateUiState({ isFontListShown: !isFontListShown });
			default:
				break;
		}
	};

	return (
		<div
			className="green__container flex items-center"
			onMouseEnter={() => toggleEditorVisibility(true)}
			onMouseLeave={() => toggleEditorVisibility(false)}
		>
			<div className="blue__container text-sm w-fit">
				{editor.fontFamily}
			</div>
			<div
				className={`blue__container flex items-center ${
					editorIsHovered ? "opacity-100 ml-2" : "opacity-0"
				}`}
			>
				{["lock", "font"].map((iconType) => {
					return (
						<div
							key={iconType}
							className="relative px-1 md:px-2 cursor-pointer"
							onMouseEnter={() => setHoveredIcon(iconType)}
							onMouseLeave={() => setHoveredIcon(null)}
						>
							<IconButton
								type={iconType}
								isHovered={hoveredIcon === iconType}
								isLocked={isLocked}
								onClick={() => handleIconClick(iconType)}
								iconRefs={iconRefs}
							/>
						</div>
					);
				})}
				<div
					onMouseEnter={() => setHoveredIcon("slider")}
					onMouseLeave={() => setHoveredIcon(null)}
				>
					<RangeSlider
						editorId={editor.id}
						type="slider"
						isHovered={hoveredIcon === "slider"}
					/>
				</div>
			</div>
		</div>
	);
}
