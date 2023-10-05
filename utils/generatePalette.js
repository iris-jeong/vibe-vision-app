export function generateColorPalette() {
	const generators = [
		generateMonochromaticPalette,
		generateAnalogousPalette,
		generateComplementaryPalette,
		generateTriadicPalette,
	];
	// Select a random generator to generate a color palette.
	const randomIndex = Math.floor(Math.random() * generators.length);
	const selectedGenerator = generators[randomIndex];
	let colors = selectedGenerator();

	// Generate a lighter shade appropriate for a background
	const lastColor = colors[colors.length - 1];
	const { h, s } = hexToHsl(lastColor);
	const lighterHex = hslToHex(h, s, 90);

	// Replace the last color with the lighter shade.
	colors.pop();
	colors.push(lighterHex);

	return colors;
}

/*  
  -- Monochromatic Color Palette --
  It uses one color and generates variations of it using different tones, shades, and tints.
*/
function generateMonochromaticPalette() {
	const colors = [];
	const numColors = 5;

	const randomHex = getRandomHexColor();
	const { h, s, l } = hexToHsl(randomHex);

	for (let i = 0; i < numColors; i++) {
		const lightness = l - 20 + i * 10;
		colors.push(hslToHex(h, s, Math.max(0, Math.min(100, lightness))));
	}
	console.log("monochromatic", colors);
	return colors;
}

/*  
  -- Analogous Color Palette --
  It uses three colors next to each other on the color wheel.
*/
function generateAnalogousPalette() {
	const numColors = 5;
	const randomHex = getRandomHexColor();
	const baseH = hexToHsl(randomHex).h;

	const colors = [];
	const step = 30; // Step in degrees; smaller steps for closely related colors

	for (let i = 0; i < numColors; i++) {
		let currentHue = (baseH + i * step) % 360;
		colors.push(hslToHex(currentHue, 100, 50));
	}
	console.log("analogous", colors);

	return colors;
}

/*  
  -- Complementary Color Palette --
  It uses two colors from opposite sides of the color wheel.
*/
function generateComplementaryPalette() {
	const colors = [];
	const step = 20;
	const baseColorHex = getRandomHexColor();
	const baseColorHsl = hexToHsl(baseColorHex);
	let { h, s, l } = baseColorHsl;

	// Base color
	colors.push(baseColorHex);

	// Base shades
	const baseDarker = hslToHex(h, s, Math.min(Math.max(l - step, 20), 80));
	const baseLighter = hslToHex(h, s, Math.max(Math.min(l + step, 20), 80));

	colors.push(baseDarker);
	colors.push(baseLighter);

	// Complementary color
	const complementaryH = (h + 180) % 360;
	const complementary = hslToHex(complementaryH, 100, 20);
	const complementaryLighter = hslToHex(
		complementaryH,
		s,
		Math.max(Math.min(l + step, 20), 80)
	);

	colors.push(complementary);
	colors.push(complementaryLighter);

	console.log("complementary", colors);

	return colors;
}

/*  
  -- Triadic Color Palette --
  It uses three colors from equally spaced distances around the color wheel.
*/
function generateTriadicPalette() {
	const colors = [];
	const baseColorHex = getRandomHexColor();
	const baseColorHsl = hexToHsl(baseColorHex);

	// Base color
	colors.push(hslToHex(baseColorHsl.h, 100, 50));

	// Additional colors
	for (let i = 1; i <= 2; i++) {
		let currentHue = (baseColorHsl.h + i * 120) % 360;
		colors.push(hslToHex(currentHue, 100, 50));
		colors.push(hslToHex(currentHue, 100, 20));
	}
	console.log("triadic", colors);

	return colors;
}

// Calculate luminance for a color
function getLuminance(r, g, b) {
	const gammaCorrectedColors = [r, g, b].map((colorComponent) => {
		colorComponent /= 255;
		return colorComponent <= 0.03928
			? colorComponent / 12.92
			: Math.pow((colorComponent + 0.055) / 1.055, 2.4);
	});

	return (
		gammaCorrectedColors[0] * 0.2126 +
		gammaCorrectedColors[1] * 0.7152 +
		gammaCorrectedColors[2] * 0.0722
	);
}

// Calculate contrast ratio
function getContrastRatio(color1, color2) {
	const lum1 = getLuminance(color1.r, color1.g, color1.b);
	const lum2 = getLuminance(color2.r, color2.g, color2.b);
	return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
}

// Function to check if the contrast is acceptable.
// Minimum contrast of 4.5 is commonly used for normal text.
export function hasGoodContrast(color1, color2, minimumContrast = 3.3) {
	const rgb1 = hexToRgb(color1);
	const rgb2 = hexToRgb(color2);
	return getContrastRatio(rgb1, rgb2) >= minimumContrast;
}

/*
  Function to generate a random hex color.
*/
function getRandomHexColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

/* 
  Function to convert hex to rgb.
*/
function hexToRgb(hex) {
	hex = hex.replace("#", "");
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);
	return { r, g, b };
}

/* 
  Function to convert hsl to hex.
*/
function hslToHex(h, s, l) {
	s /= 100;
	l /= 100;

	const c = (1 - Math.abs(2 * l - 1)) * s;
	const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	const m = l - c / 2;

	let r, g, b;

	if (0 <= h && h < 60) [r, g, b] = [c, x, 0];
	else if (60 <= h && h < 120) [r, g, b] = [x, c, 0];
	else if (120 <= h && h < 180) [r, g, b] = [0, c, x];
	else if (180 <= h && h < 240) [r, g, b] = [0, x, c];
	else if (240 <= h && h < 300) [r, g, b] = [x, 0, c];
	else if (300 <= h && h < 360) [r, g, b] = [c, 0, x];

	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

/* 
  Function to convert hex color to hsl.
*/
function hexToHsl(hex) {
	// Convert hex to RGB first
	let r = 0,
		g = 0,
		b = 0;
	if (hex.length === 4) {
		// 3 digits
		r = "0x" + hex[1] + hex[1];
		g = "0x" + hex[2] + hex[2];
		b = "0x" + hex[3] + hex[3];
	} else if (hex.length === 7) {
		// 6 digits
		r = "0x" + hex[1] + hex[2];
		g = "0x" + hex[3] + hex[4];
		b = "0x" + hex[5] + hex[6];
	}
	// Convert to decimal values
	r = +(r / 255).toFixed(3);
	g = +(g / 255).toFixed(3);
	b = +(b / 255).toFixed(3);

	// Find greatest and smallest channel values
	let cmin = Math.min(r, g, b),
		cmax = Math.max(r, g, b),
		delta = cmax - cmin,
		h = 0,
		s = 0,
		l = 0;

	// Calculate lightness
	l = ((cmax + cmin) / 2).toFixed(3);

	// Calculate saturation
	s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);

	// Calculate hue
	if (delta === 0) {
		h = 0;
	} else {
		if (cmax === r) h = ((g - b) / delta) % 6;
		if (cmax === g) h = (b - r) / delta + 2;
		if (cmax === b) h = (r - g) / delta + 4;
	}

	h = Math.round(h * 60);

	// Ensure hue is non-negative
	if (h < 0) h += 360;

	// Convert lightness value to percentage
	l = +(l * 100).toFixed(1);

	return {
		h: h,
		s: s,
		l: l,
	};
}
