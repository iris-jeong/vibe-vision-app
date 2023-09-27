"use client";
import React, { useContext, useRef } from "react";
import { AppContext } from "@components/AppContext";
import Image from "next/image";

export default function FontList() {
	const { isFontListShown, setIsFontListShown } = useContext(AppContext);
	const fontListRef = useRef(null);

	const closeFontList = () => {
		setIsFontListShown(false);
	};

	const handleOutsideClick = (e) => {
		if (!fontListRef?.current.contains(e.target)) {
			closeFontList();
		}
	};

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
				<div className="">
					<div className="bg-slate-50 pl-3 py-[5px]">ABeezee</div>
					<div className="bg-slate-50 pl-3 py-[5px]">Abel</div>
					<div className="bg-slate-50 pl-3 py-[5px]">
						Abhaya Libre
					</div>
					<div className="bg-slate-50 pl-3 py-[5px]">
						Abril Fatface
					</div>
					<div className="bg-slate-50 pl-3 py-[5px]">Aclonica</div>
					<div className="bg-slate-50 pl-3 py-[5px]">Acme</div>
					<div className="bg-slate-50 pl-3 py-[5px]">Adamina</div>
					<div className="bg-slate-50 pl-3 py-[5px]">Adobe Blank</div>
					<div className="bg-slate-50 pl-3 py-[5px]">Adobe Pro</div>
					<div className="bg-slate-50 pl-3 py-[5px]">Aguafina</div>
					<div className="bg-slate-50 pl-3 py-[5px]">
						Akaya Kanadaka
					</div>
					<div className="bg-slate-50 pl-3 py-[5px]">Akronim</div>
					<div className="bg-slate-50 pl-3 py-[5px]">Aksara Bali</div>
					<div className="bg-slate-50 pl-3 py-[5px]">Akshar</div>
					<div className="bg-slate-50 pl-3 py-[5px]">Adamina</div>
					<div className="bg-slate-50 pl-3 py-[5px]">Adobe Blank</div>
				</div>
			</div>
		</div>
	);
}
