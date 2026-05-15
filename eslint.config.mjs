import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier';

const config = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'coverage/**',
      '.pnpm-data/**',
      '.pnpm-store/**',
    ],
  },
  ...nextCoreWebVitals,
  prettier,
  {
    rules: {
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
      'jsx-a11y/anchor-is-valid': 'off',
      'react/prop-types': 'off',
      'no-underscore-dangle': 'off',
      'import/imports-first': ['error', 'absolute-first'],
      'import/newline-after-import': 'error',
    },
    settings: {
      'import/core-modules': ['@chakra-ui/theme-tools'],
    },
  },
];

export default config;
