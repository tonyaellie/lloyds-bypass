/**
 * @type {import('prettier').Options}
 */
module.exports = {
  singleQuote: true,
  plugins: [require.resolve("@plasmohq/prettier-plugin-sort-imports")],
  importOrder: ["^@plasmohq/(.*)$", "^~(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
