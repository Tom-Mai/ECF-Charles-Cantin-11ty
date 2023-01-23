/* Config file */
module.exports = function(eleventyConfig) {

    // Clone the config object in public folder

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/config.js");


    return {
      dir: {
        // Define the input & output folder
          input: "src",
          output: "public"
      }
    }
};

