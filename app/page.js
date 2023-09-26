"use client";
import React, { useState, useEffect } from "react";
import Circle from "@components/Circle";
import Illustration from "@components/Illustration";
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

	const handleTextChange = (event) => {
		const textArea = event.target;
		const textAreaContainer = event.target.parentElement;

		autoResize(textArea, textAreaContainer);
	};
	const autoResize = (textarea, textAreaContainer) => {
		// Reset the height to 'auto' before calculating the scrollHeight
		textarea.style.height = "auto";
		textarea.style.height = textarea.scrollHeight + "px";

		// Set the parent's height
		textAreaContainer.style.height = textarea.scrollHeight + "px";
	};
	const handleWindowResize = () => {
		const textAreas = document.querySelectorAll("textarea");
		const textAreaContainers = Array.from(
			document.querySelectorAll(".textContainer")
		);

		textAreas.forEach((textArea, index) => {
			autoResize(textArea, textAreaContainers[index]);
		});
	};

	useEffect(() => {
		setColors(["#8b6ce0", "#e3f6f5", "#bAe8e8", "#ffd803", "#faebd7"]);

		window.addEventListener("resize", handleWindowResize);
	}, []);

	return (
		<>
			<div
				className={`bg-[#00BB51] flex absolute py-4 px-6 rounded text-white ease-in-out duration-300 ${
					isNotificationShown
						? "animate-slide-in-right top-8 right-8 opacity-100"
						: "animate-slide-out-right top-8 -right-[500px] opacity-0"
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
			<section className="home pt-28 px-4 min-h-screen w-3/4 min-w-[500px] max-w-[1000px] flex flex-col justify-center items-center">
				<div className="top__row mb-2 md:mb-7 1028px:mb-10 px-1 w-full h-1/5 min-h-[110px] max-h-28 flex justify-between md:justify-evenly">
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
				<div className="bottom__row red__container w-full flex flex-col 1028px:flex-row">
					<div className="orange__container w-full 1028px:w-3/5 flex order-2 1028px:order-1">
						<div className="yellow__container flex-grow w-full">
							<div className="green__container flex">
								<div className="blue__container w-fit pl-10 pr-3">
									Montserrat
								</div>
								<div className="flex">
									<span className="px-1 md:px-2 cursor-pointer">
										<Image
											src="icons/unlocked.svg"
											alt="Lock icon"
											width={24}
											height={24}
										/>
									</span>
									<span className="mx-1 d:px-2 cursor-pointer">
										<Image
											src="icons/capital-a.svg"
											alt="Font icon"
											width={25}
											height={25}
										/>
									</span>
								</div>
							</div>
							<div
								className={`green__container textContainer h-[10rem] w-full px-8 my-1`}
							>
								<textarea
									className="bg-[#faebd7] w-full h-full text-5xl border-0 p-0 border-none focus:outline-none resize-none"
									onChange={handleTextChange}
								>
									Curated colors and paired fonts in context.
								</textarea>
							</div>
							<div className="green__container flex">
								<div className="blue__container w-fit pl-10 pr-3">
									Montserrat
								</div>
								<div className="blue__container flex w-fit">
									<span className="px-1 md:px-2 cursor-pointer">
										<Image
											src="icons/unlocked.svg"
											alt="Lock icon"
											width={24}
											height={24}
										/>
									</span>
									<span className="px-1 md:px-2 cursor-pointer">
										<Image
											src="icons/capital-a.svg"
											alt="Font icon"
											width={25}
											height={25}
										/>
									</span>
								</div>
							</div>
							<div
								className="green__container textContainer w-full h-52 px-8 my-1"
								onChange={handleTextChange}
							>
								<textarea className="bg-[#faebd7] w-full h-full text-md border-0 p-0 border-none focus:outline-none resize-none">
									Ever scratched your head trying to pick the
									perfect colors and fonts for your project?
									Vibe vision generates combinations for you
									and updates the site in real-time to show
									you what it would look like in the real
									world. Get help generating your color
									palette and font pairing by chatting with
									the AI who can help you find what you’re
									looking for. P.S. All the text in this
									section is editable so feel free to put your
									own copy in here.
								</textarea>
							</div>
						</div>
					</div>
					<div className="orange__container w-full mb-8 1028px:w-1/2 flex order-1 1028px:order-2">
						<Illustration />
					</div>
				</div>
				<div className="yellow__container flex-grow w-full md:w-2/5 "></div>
				<div className="buttons__container w-full flex justify-around md:order-3">
					<div className="button__container">
						<button
							className="bg-[#8b6ce0] px-8 py-4 rounded-md text-white"
							type="button"
						>
							Swap Colors
						</button>
					</div>
					<div className="green__container">
						<button
							className="bg-[#8b6ce0] px-8 py-4 rounded-md text-white"
							type="button"
						>
							Swap Fonts
						</button>
					</div>
				</div>
				{/* .bottom__row */}
			</section>
		</>
	);
}
