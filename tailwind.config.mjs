/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				russo: ['Russo One', ...defaultTheme.fontFamily.sans],
				dosis: ['Dosis', ...defaultTheme.fontFamily.sans],
				nunito: ['Nunito Sans', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				azulPrincipal: '#1389E4',
				azulSecundario: '#0D78D9',
				azulLogo: '#22456B',
				negroTitulos: '#262B30',
				footer1: '#2D3135',
				footer2: '#22456B',			
			},
			backgroundImage: {
				fondoHome: "url('/img/BackgroundHome.webp')",
				
			}			
		},
		
	},
	plugins: [],
}

