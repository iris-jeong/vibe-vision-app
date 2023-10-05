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
	}, [backgroundColor]);

	return (
		<div
			style={{ backgroundColor: backgroundColor }}
			className="flex w-full justify-center"
		>
			<DynamicFontList />
			<Notification />
			<section className="pink__container home pt-28 px-6 md:px-0 min-h-screen w-3/4 min-w-[500px] max-w-[1200px] flex flex-col justify-center items-center">
				<div className="red__container mb-4 md:mb-7 1028px:mb-12 px-1 w-full min-h-[110px] max-h-30 flex justify-between md:justify-evenly">
					{Object.values(colors).map((color, index) => {
						return (
							<Circle
								// key={`${color}-${index}`}
								key={index}
								colorIndex={index}
								color={color}
							/>
						);
					})}
				</div>
				{/* .top__row */}
				<div className="red__container w-full flex items-center flex-col 1028px:flex-row">
					<div className="orange__container w-full 1028px:w-3/5 flex flex-col order-2 1028px:order-1">
						{editors.map((editor, index) => {
							return (
								<Text
									// key={`${editor}-${index}`}
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
				<div className="red__container mt-10 md:mt-20 w-full flex justify-around md:order-3">
					<GenerateButtons />
				</div>

				{/* .bottom__row */}
			</section>
		</div>
	);
}
