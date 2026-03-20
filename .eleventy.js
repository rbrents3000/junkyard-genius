const taskLists = require('markdown-it-task-lists');

module.exports = function(eleventyConfig) {
  // Render markdown task lists as actual checkboxes
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(taskLists));

  // Sorted collection of all builds (for prev/next navigation)
  eleventyConfig.addCollection("builds", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.layout === "build")
      .sort((a, b) => a.data.build_number - b.data.build_number);
  });

  // Watch Tailwind source for live reload
  eleventyConfig.addWatchTarget("./src/styles/");

  // Prevent template processing of non-content directories
  eleventyConfig.ignores.add("src/**");
  eleventyConfig.ignores.add("public/**");
  eleventyConfig.ignores.add(".github/**");
  eleventyConfig.ignores.add("test-results/**");
  eleventyConfig.ignores.add("tests/**");
  eleventyConfig.ignores.add("docs/**");

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("app");
  eleventyConfig.addPassthroughCopy({"public": "/"});

  // Add loading="lazy" to all images for performance
  eleventyConfig.addTransform("lazyImages", function(content) {
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      return content.replace(/<img(?!\s+loading=)/g, '<img loading="lazy"');
    }
    return content;
  });

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
