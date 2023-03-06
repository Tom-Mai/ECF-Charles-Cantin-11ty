/* Config file */
module.exports = function(eleventyConfig) {

    // Clone the config object in public folder

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/config.js");
    eleventyConfig.addPassthroughCopy('./src/admin');


    return {
      dir: {
        // Define the input & output folder
          input: "src",
          includes: '_includes',
          layouts: "_layouts",
          output: "_site"
      },
          // allows .html files to contain nunjucks templating language
    htmlTemplateEngine: 'njk',
    };
};

