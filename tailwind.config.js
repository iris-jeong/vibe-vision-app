/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				"1028px": "1028px",
			},
			keyframes: {
				slideInRight: {
					from: {
						transform: "translateX(100%)",
					},
					to: {
						transform: "translateX(0)",
					},
				},
				slideOutRight: {
					from: {
						transform: "translateX(0)",
					},
					to: {
						transform: "translateX(100%)",
					},
				},
			},
			animation: {
				"slide-in-right": "slideInRight 0.3s ease-in-out forwards",
				"slide-out-right": "slideOutRight 0.3s ease-in-out forwards",
				"spin-slow": "spin 3s linear infinite",
			},
		},
	},
	plugins: [],
};
