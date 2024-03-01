module.exports = {
	globDirectory: 'client/',
	globPatterns: [
		'**/*.{js,html,css}'
	],
	swDest: 'client/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};