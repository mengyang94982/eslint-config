// @ts-check
import styleMigrate from '@stylistic/eslint-plugin-migrate'
import dylanjs from './dist/index.js'

export default dylanjs(
  {
    vue: true,
    // react: true,
    typescript: true,
    ignores: [
      'list',
    ],
    formatters: true,
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
  {
    files: ['src/configs/*.ts'],
    plugins: {
      'style-migrate': styleMigrate,
    },
    rules: {
      'style-migrate/migrate': ['error', { namespaceTo: 'style' }],
    },
  },
)
