export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  plugins: ['prettier-plugin-embed', 'prettier-plugin-sql'],
  // prettier-plugin-sql options
  formatter: 'sql-formatter',
  keywordCase: 'upper',
  language: 'mysql'
}
