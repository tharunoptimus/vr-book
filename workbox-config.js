module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,mp3,jpg,png,mtl,obj,bin,gltf,txt,glb,jpeg,ico,html,gif}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	maximumFileSizeToCacheInBytes: 22 * 1024 * 1024
};