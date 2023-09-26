import Image from "next/image";
import { useState } from "react";

export default function TextEditor({ font }) {
	const [editorIsHovered, setEditorIsHovered] = useState(false);
	const [hoveredIcon, setHoveredIcon] = useState(null);

	const toggleEditorVisibility = (status) => {
		setEditorIsHovered(status);
	};

	return (
		<div
			className="green__container flex items-center"
			onMouseEnter={() => toggleEditorVisibility(true)}
			onMouseLeave={() => toggleEditorVisibility(false)}
		>
			<div className="blue__container text-sm w-fit pl-10 pr-3">
				{font}
			</div>
			<div
				className={`flex ${
					editorIsHovered ? "opacity-100" : "opacity-0"
				}`}
			>
				<span className="px-1 md:px-2 cursor-pointer">
					<Image
						src={
							hoveredIcon === "lock"
								? "icons/unlocked-hover.svg"
								: "icons/unlocked.svg"
						}
						alt="Lock icon"
						width={24}
						height={24}
						onMouseEnter={() => setHoveredIcon("lock")}
						onMouseLeave={() => setHoveredIcon(null)}
					/>
				</span>
				<span className="mx-1 d:px-2 cursor-pointer">
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
					/>
				</span>
			</div>
		</div>
	);
}
