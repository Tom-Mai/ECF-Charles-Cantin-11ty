  const Image = require('@11ty/eleventy-img');
  const path = require('path');


  // allows the use of {% image... %} to create responsive, optimised images
  // CHANGE DEFAULT MEDIA QUERIES AND WIDTHS
  async function imageShortcode(src, alt, className, loading, sizes = '(max-width: 600px) 400px, 850px') {
    // don't pass an alt? chuck it out. passing an empty string is okay though
    if (alt === undefined) {
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }

    // create the metadata for an optimised image
    let metadata = await Image(`${src}`, {
      widths: [200, 400, 850, 1920, 2500],
      formats: ['webp', 'jpeg'],
      urlPath: '/image/photo',
      outputDir: './public/image/photo',
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}-${width}w.${format}`;
      },
    });

    // get the smallest and biggest image for picture/image attributes
    let lowsrc = metadata.jpeg[0];
    let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

    // when {% image ... %} is used, this is what's returned
    return `<picture class="${className}">
      ${Object.values(metadata)
        .map((imageFormat) => {
          return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
            .map((entry) => entry.srcset)
            .join(', ')}" sizes="${sizes}">`;
        })
        .join('\n')}
        <img
          src="${lowsrc.url}"
          width="${highsrc.width}"
          height="${highsrc.height}"
          alt="${alt}"
          loading="${loading}"
          decoding="async">
      </picture>`;
  }

  module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/_redirects');
    eleventyConfig.addPassthroughCopy({ './src/robots.txt': '/robots.txt' });
  // get the smallest and biggest image for picture/image attributes
  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  // when {% image ... %} is used, this is what's returned
  return `<picture class="${className}">
    ${Object.values(metadata)
      .map((imageFormat) => {
        return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
          .map((entry) => entry.srcset)
          .join(', ')}" sizes="${sizes}">`;
      })
      .join('\n')}
      <img
        src="${lowsrc.url}"
        width="${highsrc.width}"
        height="${highsrc.height}"
        alt="${alt}"
        loading="${loading}"
        decoding="async">
    </picture>`;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  // allows the {% image %} shortcode to be used for optimised iamges (in webp if possible)
  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);


    return {
      dir: {
        input: "src",
        output: "public"
      },
    };
  };
