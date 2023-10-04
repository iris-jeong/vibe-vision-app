import chroma from "chroma-js";

export function hexToRgba(hex, opacity) {
	console.log("hex", hex);
	hex = hex.replace("#", "");
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return `rgba(${r},${g},${b},${opacity})`;
}

export function generateShade(hexColor, shade) {
	let color;
	if (shade === "lighter") {
		color = chroma(hexColor).brighten(0.8).hex();
	} else {
		color = chroma(hexColor).darken(0.5).hex();
	}
	return color;
}

export function loadFont(fontName) {
	const WebFont = require("webfontloader");
	if (fontName === "Buda") {
		WebFont.load({
			custom: {
				families: ["Buda"],
				urls: [
					"https://fonts.googleapis.com/css2?family=Buda:wght@300",
				],
			},
		});
	} else if (fontName === "Sunflower") {
		WebFont.load({
			custom: {
				families: ["Sunflower"],
				urls: [
					"https://fonts.googleapis.com/css2?family=Sunflower:wght@300",
				],
			},
		});
	} else if (fontName === "UnifrakturCook") {
		WebFont.load({
			custom: {
				families: ["UnifrakturCook"],
				urls: [
					"https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700",
				],
			},
		});
	} else {
		WebFont.load({
			google: {
				families: [fontName],
			},
			fontDisplay: "swap",
		});
	}
}
