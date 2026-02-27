import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";
import nx from "@nx/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import preferArrow from "eslint-plugin-prefer-arrow";
import parser from "jsonc-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["**/*", "**/node_modules"]), {
    plugins: {
        "@nx": nx,
        prettier,
        "prefer-arrow": preferArrow,
    },

    rules: {},
}, {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],

    rules: {
        "@nx/enforce-module-boundaries": ["error", {
            enforceBuildableLibDependency: true,
            allow: [],

            depConstraints: [{
                sourceTag: "*",
                onlyDependOnLibsWithTags: ["*"],
            }],
        }],
    },
}, {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
        ...compat.extends("plugin:@nx/typescript"),
        ...compat.extends("airbnb"),
        ...compat.extends("airbnb-typescript"),
        ...next,
        ...compat.extends("prettier")
    ],

    rules: {
        "react/prop-types": "off",
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "import/extensions": 0,
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",
    },
}, {
    files: ["**/*.js", "**/*.jsx"],
    extends: [...compat.extends("plugin:@nx/javascript")],
    rules: {},
}, {
    files: ["**/*.json"],

    languageOptions: {
        parser: parser,
    },

    rules: {},
}]);