"use client";
import React, { useState, useEffect } from "react";
import Circle from "@components/Circle";
import Image from "next/image";

export default function Home() {
	const [isPaletteOpen, setIsPaletteOpen] = useState(false);
	const [colors, setColors] = useState([]);
	const [isNotificationShown, setIsNotificationShown] = useState(false);
	const [notification, setNotification] = useState("");

	const getNotificationText = (type) => {
		if (type === "copy") {
			return "HEX color copied!";
		} else if (type === "lock") {
			return "Color locked!";
		}
	};

	useEffect(() => {
		setColors(["#8b6ce0", "#e3f6f5", "#bAe8e8", "#ffd803", "#faebd7"]);
	}, []);

	return (
		<>
			<div
				className={`bg-[#00BB51] flex absolute py-4 px-6 rounded text-white ease-in-out duration-300 ${
					isNotificationShown
						? "top-8 right-8"
						: "top-8 -right-[500px]"
				}`}
			>
				<Image
					width={24}
					height={24}
					src="icons/approve.svg"
					alt="Success check mark icon"
				/>
				<span className="ml-2">
					{getNotificationText(notification)}
				</span>
			</div>
			<section className="home pt-28 min-h-screen w-3/4 min-w-[500px] max-w-[1000px] flex flex-col justify-center items-center">
				<div className="top__row w-full h-1/5 min-h-[110px] max-h-28 flex justify-between md:justify-around">
					{colors.map((color) => {
						return (
							<Circle
								key={color}
								color={color}
								isPaletteOpen={isPaletteOpen}
								setIsPaletteOpen={setIsPaletteOpen}
								setIsNotificationShown={setIsNotificationShown}
								setNotification={setNotification}
							/>
						);
					})}
				</div>
				{/* .top__row */}
				<div className="bottom__row w-full flex flex-wrap">
					<div className="right-col flex-grow w-full md:w-1/2 md:order-2">
						top section
						<div className="square">square</div>
						<div className="square">square</div>
						<div className="square">square</div>
					</div>
					<div className="left-col flex-grow w-full md:w-1/2 md:order-1">
						bottom section
						<div className="square">square</div>
						<div className="square">square</div>
						<div className="square">square</div>
						<div className="square">square</div>
						<div className="square">square</div>
						<div className="square">square</div>
					</div>
				</div>
				{/* .bottom__row */}
			</section>
		</>
	);
}
