module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', 'never'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': [
      'error',
      {
        objects: 'always-multiline',
        arrays: 'always-multiline',
      },
    ],
    'standard/computed-property-even-spacing': 0,
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'head',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'fetch',
          'asyncData',
          'data',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
          'filters',
          'computed',
          'watch',
        ],
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    // 'space-before-function-paren': 0,
  },
}
