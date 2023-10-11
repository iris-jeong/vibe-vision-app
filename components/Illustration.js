import { useContext } from "react";
import { AppContext } from "@components/AppContext";
import { hexToRgba, generateShade } from "@utils/functions";
import { hasGoodContrast } from "@utils/generatePalette";
import "@styles/illustration.css";
import Image from "next/image";

export default function Illustration() {
	const { colors } = useContext(AppContext);

	const screenBackground = colors.secondary;
	const sunBackground = colors.primary;
	const sunFace = generateShade(hexToRgba(colors.primary, 1.0), "lighter");
	const sunCheeks = colors.primary;
	const colorBox1 = colors.primary;
	const colorBox2 = colors.accent1;
	const iconBackground = colors.accent2;
	const borderColor = "#383838";
	const bordersHasGoodContrast = hasGoodContrast(
		screenBackground,
		borderColor
	);
	const sunBackgroundHasGoodContrast = hasGoodContrast(
		sunBackground,
		borderColor,
		2
	);
	const sunHasGoodContrast = hasGoodContrast(sunFace, borderColor, 2.4);
	const iconContentHasGoodContrast = hasGoodContrast(
		iconBackground,
		borderColor
	);

	return (
		<aside className="w-full px-6 md:px-0">
			<div
				className={`header border border-2`}
				style={{
					backgroundColor: screenBackground,
					borderColor: bordersHasGoodContrast ? "#383838" : "#ffffff",
				}}
			>
				<div
					className={`header-buttons button1 border border-2`}
					style={{
						borderColor: bordersHasGoodContrast
							? "#383838"
							: "#bebebe",
					}}
				></div>
				<div
					className={`header-buttons button2 border border-2`}
					style={{
						borderColor: bordersHasGoodContrast
							? "#383838"
							: "#bebebe",
					}}
				></div>
				<div
					className={`header-buttons button3 border border-2`}
					style={{
						borderColor: bordersHasGoodContrast
							? "#383838"
							: "#bebebe",
					}}
				></div>
			</div>
			<div
				className={`screen border border-2 border-[${
					bordersHasGoodContrast ? "#383838" : "#ffffff"
				}]`}
				style={{ backgroundColor: screenBackground }}
			>
				{/* <div className="sun">
					<div
						className={`sun-outline border border-2`}
						style={{
							backgroundColor: sunBackground,
							borderColor: sunBackgroundHasGoodContrast
								? "#383838"
								: "#ffffff",
						}}
					>
						<div
							className={`sun-circle border border-2`}
							style={{
								backgroundColor: sunFace,
								borderColor: sunBackgroundHasGoodContrast
									? "#383838"
									: "#ffffff",
							}}
						></div>
						<div
							className={
								sunHasGoodContrast ? "eyes" : "eyes-light"
							}
						></div>
						<div
							className="cheeks"
							style={{
								backgroundColor: sunCheeks,
								boxShadow: `22px 0px 0px ${sunCheeks}`,
							}}
						></div>
						<div
							className={
								sunHasGoodContrast ? "smile" : "smile-light"
							}
						></div>
					</div>
				</div> */}
				{/* .sun */}

				<div
					className={`inner-screen border border-2`}
					style={{
						borderColor: bordersHasGoodContrast
							? "#383838"
							: "#c0c0c0",
					}}
				>
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
							className={`colorbox colorbox1 border border-2`}
							style={{
								backgroundColor: colorBox1,
								borderColor: bordersHasGoodContrast
									? "#383838"
									: "#ffffff",
							}}
						></div>
						<div
							className={`colorbox colorbox2 border border-2`}
							style={{
								backgroundColor: colorBox2,
								borderColor: bordersHasGoodContrast
									? "#383838"
									: "#ffffff",
							}}
						></div>
					</div>
					{/* .colorboxes */}

					<div className="text-editor">
						<div
							className={`icon-container border border-2`}
							style={{
								backgroundColor: iconBackground,
								borderColor: bordersHasGoodContrast
									? "#383838"
									: "#ffffff",
							}}
						>
							<Image
								src={`icons/font${
									iconContentHasGoodContrast ? "" : "-white"
								}.svg`}
								alt="Font icon"
								width={24}
								height={24}
							/>
						</div>
						<div
							className={`icon-container border border-2`}
							style={{
								backgroundColor: iconBackground,
								borderColor: bordersHasGoodContrast
									? "#383838"
									: "#ffffff",
							}}
						>
							<div className="icon">
								<Image
									src={`icons/align-left${
										iconContentHasGoodContrast
											? ""
											: "-white"
									}.svg`}
									alt="Align left icon"
									width={24}
									height={24}
								/>
							</div>
						</div>
						<div
							className={`icon-container border border-2`}
							style={{
								backgroundColor: iconBackground,
								borderColor: bordersHasGoodContrast
									? "#383838"
									: "#ffffff",
							}}
						>
							<div className="icon">
								<Image
									src={`icons/align-center${
										iconContentHasGoodContrast
											? ""
											: "-white"
									}.svg`}
									alt="Align center icon"
									width={24}
									height={24}
								/>
							</div>
						</div>
						<div
							className={`icon-container border border-2`}
							style={{
								backgroundColor: iconBackground,
								borderColor: bordersHasGoodContrast
									? "#383838"
									: "#ffffff",
							}}
						>
							<div className="icon">
								<Image
									src={`icons/align-right${
										iconContentHasGoodContrast
											? ""
											: "-white"
									}.svg`}
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
							className={`${
								bordersHasGoodContrast
									? "circle"
									: "circle-light"
							} extras-circle1`}
							style={{ backgroundColor: colors.primary }}
						></div>
						<div
							className={`${
								bordersHasGoodContrast
									? "circle"
									: "circle-light"
							} extras-circle2`}
							style={{ backgroundColor: colors.accent1 }}
						></div>
						<div
							className={`${
								bordersHasGoodContrast
									? "circle"
									: "circle-light"
							} extras-circle3`}
							style={{ backgroundColor: colors.secondary }}
						></div>
					</div>
					{/* .extras */}
				</div>
			</div>
			{/* .screen */}
		</aside>
	);
}
