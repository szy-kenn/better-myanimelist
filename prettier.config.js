// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
module.exports = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    jsxSingleQuote: false,
    bracketSpacing: true,
    bracketSameLine: true,
    arrowParens: "always",
    plugins: ["prettier-plugin-tailwindcss"],
};
