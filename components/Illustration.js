import { useContext } from "react";
import { AppContext } from "@components/AppContext";
import { hexToRgba, generateShade } from "@utils/functions";
import "@styles/illustration.css";
import Image from "next/image";

export default function Illustration() {
	const { colors } = useContext(AppContext);

	const sunRectangleCircle = colors[0];
	const screenCircle = colors[1];
	const rectangle = colors[2];
	const iconsCircle = colors[3];
	const sunOutline = generateShade(hexToRgba(colors[0], 1.0), "lighter");
	return (
		<aside className="w-full px-6 md:px-0">
			<div className="header" style={{ backgroundColor: screenCircle }}>
				<div className="header-buttons button1"></div>
				<div className="header-buttons button2"></div>
				<div className="header-buttons button3"></div>
			</div>
			<div className="screen" style={{ backgroundColor: screenCircle }}>
				<div className="sun">
					<div
						className="sun-outline"
						style={{ backgroundColor: sunRectangleCircle }}
					>
						<div
							className="sun-circle"
							style={{ backgroundColor: sunOutline }}
						></div>
						<div className="eyes"></div>
						<div
							className="cheeks"
							style={{
								backgroundColor: sunRectangleCircle,
								boxShadow: `22px 0px 0px ${sunRectangleCircle}`,
							}}
						></div>
						<div className="smile"></div>
					</div>
				</div>
				{/* .sun */}

				<div className="inner-screen">
					<div className="textbox">
						<div className="textbox-circle circle1"></div>
						<div className="textbox-circle circle2"></div>
						<div className="textbox-circle circle3"></div>
						<div className="textbox-circle circle4"></div>
						<p>Vibe Vision</p>
						<div className="underline"></div>
					</div>
					<div className="color-block"></div>
				</div>
				<div className="panel">
					<div className="colorboxes">
						<div
							className="colorbox colorbox1"
							style={{ backgroundColor: sunRectangleCircle }}
						></div>
						<div
							className="colorbox colorbox2"
							style={{ backgroundColor: rectangle }}
						></div>
					</div>
					{/* .colorboxes */}

					<div className="text-editor">
						<div
							className="icon-container"
							style={{ backgroundColor: iconsCircle }}
						>
							<Image
								src="icons/font.svg"
								alt="Font icon"
								width={24}
								height={24}
							/>
						</div>
						<div
							className="icon-container"
							style={{ backgroundColor: iconsCircle }}
						>
							<div className="icon">
								<Image
									src="icons/align-left.svg"
									alt="Align left icon"
									width={24}
									height={24}
								/>
							</div>
						</div>
						<div
							className="icon-container"
							style={{ backgroundColor: iconsCircle }}
						>
							<div className="icon">
								<Image
									src="icons/align-center.svg"
									alt="Align center icon"
									width={24}
									height={24}
								/>
							</div>
						</div>
						<div
							className="icon-container"
							style={{ backgroundColor: iconsCircle }}
						>
							<div className="icon">
								<Image
									src="icons/align-right.svg"
									alt="Align right icon"
									width={24}
									height={24}
								/>
							</div>
						</div>
					</div>
					{/* .text-editor */}

					<div className="extras">
						<div
							className="circle extras-circle1"
							style={{ backgroundColor: sunRectangleCircle }}
						></div>
						<div
							className="circle extras-circle2"
							style={{ backgroundColor: iconsCircle }}
						></div>
						<div
							className="circle extras-circle3"
							style={{ backgroundColor: screenCircle }}
						></div>
					</div>
					{/* .extras */}
				</div>
			</div>
			{/* .screen */}
		</aside>
	);
}
