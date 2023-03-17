module.exports = function(eleventyConfig) {

    // Clone the config object in public folder
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy({"./_site/images": "/images"});


    return {
      dir: {
        // Define the input & output folder
          input: "src",
          output: "public"
      },
    };
}; 