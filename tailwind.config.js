/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				// Keep standard colors or defining custom ones used in project if any.
				// For now, removing Shadcn variables.
			},
			boxShadow: {
				'input-inset': 'inset 0 0 0 1px rgb(238, 239, 241)',
				'input-inset-dark': 'inset 0 0 0 1px rgb(39, 40, 43)',
				'input-focus': 'inset 0 0 0 1px rgb(38, 109, 240), 0 0 0 3px rgba(38, 109, 240, 0.2)',
			}
		},
	},
	plugins: [],
};
