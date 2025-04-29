import js from "@eslint/js"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import vitestPlugin from "eslint-plugin-vitest"
import globals from "globals"

export default [
  { ignores: ["dist"] },

  // Config general para código de producción
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },

  // Config específica para tests (*.test.js, *.spec.js, etc.)
  {
    files: ["**/*.{test,spec}.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals["vitest/globals"], // añade describe, it, expect, etc.
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      vitest: vitestPlugin,
    },
    extends: [
      // incorpora las reglas recomendadas de ESLint para Vitest
      "plugin:vitest/recommended",
    ],
    rules: {
      // aquí puedes ajustar reglas para tests si lo necesitas
    },
  },
]
