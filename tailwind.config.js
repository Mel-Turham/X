/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				bgUser: "url('./src/assets/images/posts/backgroundProfile.png')",
			},
		},
	},
	plugins: [nextui()],
};
