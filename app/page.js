"use client";
import React, { useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import { AppContext } from "@components/AppContext";
import Notification from "@components/Notification";
import Circle from "@components/Circle";
import Text from "@components/Text";
import Illustration from "@components/Illustration";
import GenerateButtons from "@components/GenerateButtons";

const DynamicFontList = dynamic(() => import("@components/FontList"), {
	ssr: false,
});

export default function Home() {
	const { colors, editors } = useContext(AppContext);
	const backgroundColor = colors.background;

	useEffect(() => {
		document.querySelector("body").style.backgroundColor = backgroundColor;
	}, []);

	return (
		<div
			style={{ backgroundColor: backgroundColor }}
			className="flex w-full justify-center"
		>
			<DynamicFontList />
			<Notification />
			<section className="home pt-28 px-4 min-h-screen w-3/4 min-w-[500px] max-w-[1200px] flex flex-col justify-center items-center">
				<div className="top__row mb-6 md:mb-9 1028px:mb-14 px-1 w-full h-1/5 min-h-[110px] max-h-28 flex justify-between md:justify-evenly">
					{Object.values(colors).map((color, index) => {
						return (
							<Circle
								key={index}
								colorIndex={index}
								color={color}
							/>
						);
					})}
				</div>
				{/* .top__row */}
				<div className="bottom__row red__container mb-20 w-full flex items-center flex-col 1028px:flex-row">
					<div className="orange__container w-full 1028px:w-3/5 flex flex-col order-2 1028px:order-1">
						{editors.map((editor, index) => {
							return (
								<Text
									key={index}
									editor={editors[index]}
									{...editor}
								/>
							);
						})}
					</div>
					<div className="orange__container w-full mb-6 1028px:w-1/2 flex order-1 1028px:order-2">
						<Illustration />
					</div>
				</div>
				<div className="yellow__container w-full">
					<GenerateButtons />
				</div>
				{/* .bottom__row */}
			</section>
		</div>
	);
}
