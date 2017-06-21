module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-alert' : 0,
    'no-console': 0,
    "no-unused-vars": [0, {"vars": "all", "args": "none"}],
    "spaced-comment": [0, "always", {"markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!"]}]
  }
}
