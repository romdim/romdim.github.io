const cssnano = require("cssnano")({ preset: "default" });
const tailwindcss = require("tailwindcss");
const autoprefixer = require('autoprefixer')({ overrideBrowserslist: ['last 2 versions'] });

const purgecss = require("@fullhuman/postcss-purgecss")({
    content: [
        "./src/**/*.svelte",
        "./src/**/*.html"
    ],
    variables: true,
    // Included more than the default: :
    // defaultExtractor: content => content.match(/[A-Za-z0-9-_:/.%]+/g) || []
    defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
});

const production = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        // tailwindcss, ...(production ? [autoprefixer, cssnano] : []),
        tailwindcss, ...(production ? [purgecss, autoprefixer, cssnano] : []),
    ]
};