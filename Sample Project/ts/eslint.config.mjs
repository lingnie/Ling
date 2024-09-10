// @ts-check

import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['*.ts', '*.tsx'], // Target TypeScript files
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', // Ensure you have a TypeScript config
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...eslint.configs.recommended.rules, // Spread ESLint recommended rules
      ...tseslint.configs.recommended.rules, // Spread TypeScript recommended rules
    },
  },
];
