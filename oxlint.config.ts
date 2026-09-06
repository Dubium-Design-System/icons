import { defineConfig } from "oxlint"

/**
 * Конфигурация линтера oxlint.
 *
 * @remarks
 * Включён type-aware анализ. `no-console` настроен как предупреждение,
 * чтобы не блокировать сборку, но подсвечивать вызовы `console`.
 */
export default defineConfig({
	options: {
		typeAware: true,
		typeCheck: true,
		maxWarnings: 10,
	},
	rules: {
		"no-console": "warn",
		"no-alert": "error",
		"oxc/approx-constant": "warn",
		"no-plusplus": "off",
		"eslint/prefer-const": ["error", { destructuring: "any" }],
	},
})
