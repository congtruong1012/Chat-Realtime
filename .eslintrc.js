const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'jsx-a11y'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-param-reassign': ['error', { props: false }],
    'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
    'react/require-default-props': 0,
    'no-underscore-dangle': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'no-useless-escape': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'global-require': 0,
  },
};
