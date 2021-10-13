module.exports = function(eleventyConfig) {
	eleventyConfig.setTemplateFormats([
		"css",
		"scss",
		"njk",
		"html"
	]),

	eleventyConfig.addPassthroughCopy("src/assets/images");

	return {
		dir: {
			input: "src",
			output: "_site"
		}
	}
}
