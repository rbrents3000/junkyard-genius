module.exports = function(eleventyConfig) {
  // Sorted collection of all builds (for prev/next navigation)
  eleventyConfig.addCollection("builds", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.layout === "build")
      .sort((a, b) => a.data.build_number - b.data.build_number);
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("app");
  eleventyConfig.addPassthroughCopy("docs");
  eleventyConfig.addPassthroughCopy("sw.js");
  eleventyConfig.addPassthroughCopy("manifest.json");
  eleventyConfig.addPassthroughCopy("robots.txt");

  return {
    templateFormats: ["md", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    }
  };
};
