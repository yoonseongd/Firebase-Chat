module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parser: 'babel-eslint',
  rules: {
    'no-console': 'off',
    'no-shadow': [2, { builtinGlobals: false, hoist: 'functions', allow: [] }],
    'react/no-unescaped-entities': 0,
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-use-before-define': ['error', { variables: false }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        // trailingComma: 'es5',
        // singleQuote: true,
        // printWidth: 100,
      },
    ],
  },
  plugins: ['prettier'],
};
