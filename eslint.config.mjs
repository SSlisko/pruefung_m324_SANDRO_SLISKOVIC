import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser, // Zum Beispiel Browser-Globals, kann bei Bedarf angepasst werden
      ecmaVersion: 2021, // Moderne ECMAScript-Version für ESM
      sourceType: "module" // Wir verwenden ECMAScript Module (ESM)
    },
    rules: {
      "no-unused-vars": "error", // Fehler für ungenutzte Variablen
      "prefer-const": "error", // Erzwinge 'const' anstelle von 'let', wenn keine Zuweisung erfolgt
      "eqeqeq": "error" // Erzwinge '===' anstelle von '=='
    }
  },
  pluginJs.configs.recommended,
];
