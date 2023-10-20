export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  plugins: ['prettier-plugin-embed', 'prettier-plugin-sql'],
  overrides: [
    {
      files: '*.sql',
      options: {
        formatter: 'sql-formatter',
        keywordCase: 'upper',
        language: 'mysql'
      }
    }
  ]
}
