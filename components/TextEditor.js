import Image from "next/image";
import { useState, useContext } from "react";
import { AppContext } from "@components/AppContext";

export default function TextEditor({ editorId, editor }) {
	const { updateEditorState, updateUiState, isFontListShown } =
		useContext(AppContext);

	const [editorIsHovered, setEditorIsHovered] = useState(false);
	const [hoveredIcon, setHoveredIcon] = useState(null);
	const [isLocked, setIsLocked] = useState(false);

	const icons = {
		lock: isLocked ? "locked" : "unlocked",
		font: "capital-a",
	};

	const toggleEditorVisibility = (status) => {
		setEditorIsHovered(status);
	};

	const toggleLockIcon = () => {
		setIsLocked((prevState) => !prevState);
	};

	const toggleFontListVisibility = (status) => {
		updateUiState({ isFontListShown: status });
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
				className={`blue__container flex ${
					editorIsHovered ? "opacity-100 ml-2" : "opacity-0"
				}`}
			>
				<span className="px-1 md:px-2 cursor-pointer">
					<Image
						src={
							hoveredIcon === "lock"
								? `icons/${icons["lock"]}-hover.svg`
								: `icons/${icons["lock"]}.svg`
						}
						alt="Lock icon"
						width={24}
						height={24}
						onMouseEnter={() => setHoveredIcon("lock")}
						onMouseLeave={() => setHoveredIcon(null)}
						onClick={toggleLockIcon}
					/>
				</span>
				<span className="relative mx-1 d:px-2 cursor-pointer">
					<Image
						src={
							hoveredIcon === "font"
								? "icons/capital-a-hover.svg"
								: "icons/capital-a.svg"
						}
						alt="Font icon"
						width={25}
						height={25}
						onMouseEnter={() => setHoveredIcon("font")}
						onMouseLeave={() => setHoveredIcon(null)}
						onClick={() => {
							updateEditorState({ activeEditor: editorId });
							toggleFontListVisibility(!isFontListShown);
						}}
					/>
				</span>
			</div>
		</div>
	);
}
