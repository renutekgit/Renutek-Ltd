const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/*.png");

  const md = new markdownIt({
    html: true,
  });

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(`<div class="copy">\n${content}</div>`);
  });

  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
  }); 

  // Tailwind stuff
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });
  eleventyConfig.addWatchTarget("./src/css/main.css");
  eleventyConfig.addWatchTarget("./tailwind**");


  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
