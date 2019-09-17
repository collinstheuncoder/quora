module.exports = {
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          printWidth: 80,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'es5',
          useTabs: false,
        },
      ],
      'no-console': 0,
      'no-underscore-dangle': 0,
    },
  };
  