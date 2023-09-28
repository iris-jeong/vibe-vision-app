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
		color = chroma(hexColor).brighten(1).hex();
	} else {
		color = chroma(hexColor).darken(1).hex();
	}
	return color;
}
