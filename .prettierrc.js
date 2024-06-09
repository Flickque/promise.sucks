module.exports = {
  singleQuote: true,
  importOrder: [
    '^react(.*)$|^next(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports','prettier-plugin-tailwindcss'],
  tailwindFunctions: ['twMerge'],
};
