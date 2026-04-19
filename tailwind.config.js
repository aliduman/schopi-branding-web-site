import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
	mode: "jit",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				trueGray: colors.neutral,
				schopiColor: {
					primary: "#F84B18"
				}
			},
			animation: {
				'float': 'float 4s ease-in-out infinite',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'blob': 'blob 8s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
				'gradient': 'gradient-shift 6s ease infinite',
			},
		},
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
			stock: [defaultTheme.fontFamily.sans],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
export default config;