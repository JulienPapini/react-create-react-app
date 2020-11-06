'use strict';

module.exports = {
  extends: [
    require.resolve('./cra'),
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
  ],

  plugins: ['simple-import-sort', 'module-resolver'],

  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },

  rules: {
    'sort-imports': 'off',
    'import/order': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/prefer-default-export': 'off',
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          // Node.js builtins.
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|' +
              'events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|' +
              'string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|' +
              'async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@app)(/.*|$)'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^(styles)(/.*|$)', '^.+\\.s?css$', '^.+\\.less$'],
        ],
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandLast: true,
        reservedFirst: true,
      },
    ],
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: true,
        sortShapeProp: true,
      },
    ],
    'module-resolver/use-alias': [
      'error',
      {
        ignoreDepth: 2,
        allowDepthMoreOrLessThanEquality: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
  },
};
