/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["light"],
					// primary: "",
					// secondary: "",
					// accent: "",
				}
			},
			{
				dark: {
					...require("daisyui/src/theming/themes")["dark"],
					// primary: "",
					// secondary: "",
					// accent: "",
				}
			},
		]
	}
}
