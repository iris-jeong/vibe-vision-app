"use client";
import React, { useContext, useRef, useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import { AppContext } from "@components/AppContext";
import Image from "next/image";

export default function FontList() {
	const { fonts, isFontListShown, setIsFontListShown } =
		useContext(AppContext);
	const fontListRef = useRef(null);
	const [height, setHeight] = useState(
		typeof window !== "undefined" ? window.innerHeight : 0
	);

	const closeFontList = () => {
		setIsFontListShown(false);
	};

	const handleOutsideClick = (e) => {
		if (!fontListRef?.current.contains(e.target)) {
			closeFontList();
		}
	};

	const Row = ({ index, style }) => {
		return (
			<div style={style}>
				<p style={{ fontFamily: fonts[index].family }}>
					{fonts[index].family}
				</p>
			</div>
		);
	};

	useEffect(() => {
		const handleResize = () => {
			setHeight(window.innerHeight);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div
			className={`${
				isFontListShown ? "fixed inset-0 z-20" : "invisible"
			}`}
		>
			<div
				className="absolute inset-0 bg-black opacity-50"
				onClick={handleOutsideClick}
			></div>
			<div
				className={`ease-in-out duration-300 ${
					isFontListShown
						? "animate-slide-in-left visible"
						: "animate-slide-out-left invisible"
				} fixed z-30 opacity-100 top-0 -left-[250px] bg-[#fafafa] w-[250px] h-full overflow-hidden overflow-y-auto border-2 border-[#bdbdbd] rounded`}
			>
				<div
					ref={fontListRef}
					className="flex justify-between border-b border-[#bdbdbd] px-3 py-2"
				>
					<span className="font-semibold text-[14px]">Fonts</span>
					<Image
						className="cursor-pointer"
						src="icons/cancel.svg"
						alt="Cancel icon"
						width={20}
						height={20}
						onClick={closeFontList}
					/>
				</div>
				<div className="bg-[#f3f3f3] flex items-center px-3 py-3 border-b border-[#bdbdbd]">
					<Image
						src="icons/search.svg"
						alt="Search icon"
						width={18}
						height={18}
					/>
					<input
						type="text"
						placeholder="Search fonts"
						className="bg-[#f3f3f3] w-full focus:outline-none pl-2 text-[13px]"
					/>
				</div>
				<div className="fontsList">
					<List
						height={height}
						itemCount={fonts.length}
						itemSize={35}
						width={250}
					>
						{Row}
					</List>
				</div>
			</div>
		</div>
	);
}
