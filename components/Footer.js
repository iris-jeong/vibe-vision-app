"use client";
import React, { useContext } from "react";
import { AppContext } from "@components/AppContext";

export default function Footer() {
	const { colors } = useContext(AppContext);
	const backgroundColor = colors.background;
	return (
		<footer
			style={{ backgroundColor: backgroundColor }}
			className="w-full pt-24 px-6 pb-6 text-center"
		>
			Designed & Developed by Iris Jeong &copy; 2023
		</footer>
	);
}
