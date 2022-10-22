module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['error', 'always'],
    indent: ['error', 2],
    'space-before-function-paren': 'off',
    'no-unused-vars': ['warn'],
    eqeqeq: 'off',
    'no-undef': 'off',
    'n/no-path-concat': 'off'
  }
};
