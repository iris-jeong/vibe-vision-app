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
						opacity: 0,
					},
					to: {
						transform: "translateX(0)",
						opacity: 100,
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
				slideInLeft: {
					from: {
						transform: "translateX(0)",
					},
					to: {
						transform: "translateX(100%)",
					},
				},
				slideOutLeft: {
					from: {
						transform: "translateX(100%)",
					},
					to: {
						transform: "translateX(0)",
					},
				},
				moveBack: {
					"0%": {
						boxShadow: "0px 2px 16px rgba(175, 179, 215, 0.2)",
						height: "70px",
					},
					"100%": {
						boxShadow: "0px 2px 16px rgba(175, 179, 215, 0.2)",
						height: "80px",
					},
				},
			},
			animation: {
				"move-back": "moveBack 0.3s linear forwards",
				"slide-in-right": "slideInRight 0.3s ease-in-out forwards",
				"slide-out-right": "slideOutRight 0.3s ease-in-out forwards",
				"slide-in-left": "slideInLeft 0.3s ease-in-out forwards",
				"slide-out-left": "slideOutLeft 0.3s ease-in-out forwards",
				"spin-slow": "spin 3s linear infinite",
			},
		},
	},
	plugins: [],
};
