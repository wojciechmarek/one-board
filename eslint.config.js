import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  }
);

//

// import eslint from "@eslint/js";
// import i18next from "eslint-plugin-i18next";
// import jest from "eslint-plugin-jest";
// import jsxA11y from "eslint-plugin-jsx-a11y";
// import react from "eslint-plugin-react";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import globals from "globals";
// import tseslint from "typescript-eslint";

// export default tseslint.config(
//   { ignores: ["dist", "public"] },
//   {
//     extends: [
//       eslint.configs.recommended,
//       tseslint.configs.recommended,
//       react.configs.flat.recommended,
//       jsxA11y.flatConfigs.recommended,
//       i18next.configs["flat/recommended"],
//       jest.configs["flat/recommended"],
//     ],
//     files: ["**/*.{ts,tsx}"],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//     },
//     plugins: {
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
//     },
//     rules: {
//       "react/react-in-jsx-scope": "off",
//       "react/prop-types": "off",

//       // TODO: rules to remove when code will to be fixed
//       "i18next/no-literal-string": "warn",
//       "jsx-a11y/no-noninteractive-element-interactions": "warn",
//       "jsx-a11y/click-events-have-key-events": "warn",
//       "jsx-a11y/anchor-is-valid": "warn",
//       "jest/no-conditional-expect": "warn",
//     },
//   }
// );
