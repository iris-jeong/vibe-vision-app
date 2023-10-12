import chroma from "chroma-js";

export function hexToRgba(hex, opacity) {
	hex = hex.replace("#", "");
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return `rgba(${r},${g},${b},${opacity})`;
}

export function generateShade(hexColor, shade) {
	let color;
	if (shade === "lighter") {
		color = chroma(hexColor).brighten(1.2).hex();
	} else {
		color = chroma(hexColor).darken(0.5).hex();
	}
	return color;
}

export function loadFont(fontName) {
	return new Promise((resolve, reject) => {
		const WebFont = require("webfontloader");

		const config = {
			fontactive: (familyName, fvd) => {
				resolve();
			},
			fontinactive: (familyName, fvd) => {
				reject(new Error(`Font ${familyName} could not be loaded`));
			},
		};

		if (fontName === "Buda") {
			config.custom = {
				families: ["Buda"],
				urls: [
					"https://fonts.googleapis.com/css2?family=Buda:wght@300",
				],
			};
		} else if (fontName === "Sunflower") {
			config.custom = {
				families: ["Sunflower"],
				urls: [
					"https://fonts.googleapis.com/css2?family=Sunflower:wght@300",
				],
			};
		} else if (fontName === "UnifrakturCook") {
			config.custom = {
				families: ["UnifrakturCook"],
				urls: [
					"https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700",
				],
			};
		} else {
			config.google = {
				families: [`${fontName}:400,700`],
			};
			config.fontDisplay = "swap";
		}

		WebFont.load(config);
	});
}
