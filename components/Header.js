"use client";
import React, { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { AppContext } from "@components/AppContext";
import { hexToRgba } from "@utils/functions";

export default function Header() {
	const { colors } = useContext(AppContext);
	const backgroundColor = hexToRgba(colors.background, 0.9);
	const headerRef = useRef(null);
	let prevScrollPos = useRef(window.pageYOffset);

	const toggleHeaderVisibility = () => {
		const currentScrollPos = window.pageYOffset;
		const header = headerRef.current;

		if (prevScrollPos.current > currentScrollPos) {
			header.style.top = "0";

			if (currentScrollPos > 50) {
				header.classList.remove("move-back-animation");
			} else {
				header.classList.add("move-back-animation");
			}
		} else {
			header.style.top = `-${header.clientHeight}px`;
		}

		prevScrollPos.current = currentScrollPos;
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleHeaderVisibility);

		return () => {
			window.removeEventListener("scroll", toggleHeaderVisibility);
		};
	}, []);

	return (
		<nav
			ref={headerRef}
			style={{
				backgroundColor: backgroundColor,
				boxShadow: `0px 2px 16px ${backgroundColor}`,
			}}
			className={`w-full h-[96px] fixed top-0 left-0 z-10 flex items-center justify-between p-6`}
		>
			<Link className="text-lg font-medium" href="/">
				Vibe Vision
			</Link>
		</nav>
	);
}
