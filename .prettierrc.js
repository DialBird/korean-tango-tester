module.exports = {
  arrowParens: "always",
  jsxSingleQuote: false,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  // plugins: [require("prettier-plugin-tailwindcss")],
  // tailwindConfig: "./tailwind.config.js",
  importOrder: ["^components/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
