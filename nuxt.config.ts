// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },

    future: {
		compatibilityVersion: 4
	},

    modules: ["@nuxtjs/robots", "@nuxtjs/sitemap", "@nuxt/image"],

	robots: {
		disallow: []
	},

	site: {
		url: "https://example.com",
		name: "Example Website",
	},

	image: {
		quality: 75,
		formats: ["avif", "webp", "jpg", "png"],
		screens: {
			'xs': 320,
			'sm': 640,
			'md': 768,
			'lg': 1024,
			'xl': 1280,
			'2xl': 1536
		},
	}
})