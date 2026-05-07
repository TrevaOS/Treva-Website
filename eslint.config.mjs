import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextVitals,
  {
    rules: {
      '@next/next/no-img-element': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      'react/no-unescaped-entities': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**'],
  },
];

export default config;
