/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['.eslintrc.js', '*.config.js'],
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'unused-imports',
    'simple-import-sort',
    '@typescript-eslint',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^react', '^next'],
          ['^@?\\w'],
          ['app/*', 'pages/*'],
          ['src/data', 'src/layouts', 'src/components', 'src/*'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css)$'],
        ],
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*'],
      },
    ],
    'import/no-cycle': [2, { maxDepth: 10 }],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-duplicates': ['error'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'linebreak-style': ['error', 'unix'],
    'id-length': ['error', { min: 2, exceptionPatterns: ['[x-z]'] }],
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
  },
};
