import { useContext } from "react";
import { AppContext } from "@components/AppContext";
import { hexToRgba, generateShade } from "@utils/functions";
import { hasGoodContrast } from "@utils/generatePalette";
import "@styles/illustration.css";
import Image from "next/image";

export default function Illustration() {
	const { colors } = useContext(AppContext);
	const { primary, secondary, accent1, accent2, background } = colors;
	const screenBackground = secondary.value;
	const sunBackground = primary.value;
	const darkerPrimary = generateShade(
		hexToRgba(primary.value, 1.0),
		"darker"
	);
	const darkestPrimary = generateShade(
		hexToRgba(darkerPrimary, 1.0),
		"darker"
	);
	const darkestPrimaryRgba = hexToRgba(darkestPrimary, 1.0);

	const sunFace = generateShade(hexToRgba(primary.value, 1.0), "lighter");
	const sunCheeks = primary.value;
	const sunCheeksDarker = generateShade(
		hexToRgba(primary.value, 1.0),
		"darker"
	);
	const colorBox1 = primary.value;
	const colorBox2 = accent1.value;
	const iconBackground = accent2.value;
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
					borderColor: bordersHasGoodContrast
						? "#383838"
						: darkerPrimary,
				}}
			>
				<div
					className={`header-buttons button1 border border-2`}
					style={{
						borderColor: bordersHasGoodContrast
							? "#383838"
							: darkerPrimary,
					}}
				></div>
				<div
					className={`header-buttons button2 border border-2`}
					style={{
						borderColor: bordersHasGoodContrast
							? "#383838"
							: darkerPrimary,
					}}
				></div>
				<div
					className={`header-buttons button3 border border-2`}
					style={{
						borderColor: bordersHasGoodContrast
							? "#383838"
							: darkerPrimary,
					}}
				></div>
			</div>
			<div
				className={`screen border border-2`}
				style={{
					backgroundColor: screenBackground,
					borderColor: bordersHasGoodContrast
						? "#383838"
						: darkerPrimary,
				}}
			>
				<div className="sun">
					<div
						className={`sun-outline border border-2`}
						style={{
							backgroundColor: sunBackground,
							borderColor: sunBackgroundHasGoodContrast
								? "#383838"
								: darkerPrimary,
						}}
					>
						<div
							className={`sun-circle border border-2`}
							style={{
								backgroundColor: sunFace,
								borderColor: sunBackgroundHasGoodContrast
									? "#383838"
									: darkerPrimary,
							}}
						></div>
						<div
							className="eyes"
							style={{
								backgroundColor: sunBackgroundHasGoodContrast
									? "#383838"
									: darkestPrimaryRgba,
								borderColor: sunBackgroundHasGoodContrast
									? "#383838"
									: darkerPrimary,
								boxShadow: sunBackgroundHasGoodContrast
									? "18px 0 0 0 rgba(0,0,0,1)"
									: `18px 0 0 0 ${darkestPrimaryRgba}`,
							}}
						></div>
						<div
							className="cheeks"
							style={{
								backgroundColor: sunBackgroundHasGoodContrast
									? sunCheeks
									: sunCheeksDarker,
								boxShadow: sunBackgroundHasGoodContrast
									? `22px 0px 0px ${sunCheeks}`
									: `22px 0px 0px ${sunCheeksDarker}`,
							}}
						></div>
						<div
							className={
								sunHasGoodContrast ? "smile" : "smile-light"
							}
							style={{
								borderBottom: sunHasGoodContrast
									? "3px solid #383833"
									: `3px solid ${darkestPrimary}`,
							}}
						></div>
					</div>
				</div>
				{/* .sun */}

				<div
					className={`inner-screen border border-2`}
					style={{
						borderColor: bordersHasGoodContrast
							? "#383838"
							: darkerPrimary,
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
									: darkerPrimary,
							}}
						></div>
						<div
							className={`colorbox colorbox2 border border-2`}
							style={{
								backgroundColor: colorBox2,
								borderColor: bordersHasGoodContrast
									? "#383838"
									: darkerPrimary,
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
									: darkerPrimary,
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
									: darkerPrimary,
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
									: darkerPrimary,
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
									: darkerPrimary,
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
							className={`border-2 ${
								bordersHasGoodContrast
									? "circle"
									: "circle-light"
							} extras-circle1`}
							style={{
								backgroundColor: primary.value,
								borderColor: bordersHasGoodContrast
									? borderColor
									: darkerPrimary,
							}}
						></div>
						<div
							className={`border-2 ${
								bordersHasGoodContrast
									? "circle"
									: "circle-light"
							} extras-circle2`}
							style={{
								backgroundColor: accent1.value,
								borderColor: bordersHasGoodContrast
									? borderColor
									: darkerPrimary,
							}}
						></div>
						<div
							className={`border-2 ${
								bordersHasGoodContrast
									? "circle"
									: "circle-light"
							} extras-circle3`}
							style={{
								backgroundColor: background.value,
								borderColor: bordersHasGoodContrast
									? borderColor
									: darkerPrimary,
							}}
						></div>
					</div>
					{/* .extras */}
				</div>
			</div>
			{/* .screen */}
		</aside>
	);
}
