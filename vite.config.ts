import { resolve } from "node:path"
import { fileURLToPath } from "node:url"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { visualizer } from "rollup-plugin-visualizer"

/**
 * Корневая директория пакета.
 */
const ROOT = fileURLToPath(new URL(".", import.meta.url))

/**
 * Директория с исходниками иконок — корень сборки библиотеки.
 */
const ICONS_ROOT = resolve(ROOT, "src/icons")

export default defineConfig({
	plugins: [
		react(),
		visualizer({
			title: "@dubium/icons",
			filename: "stats.html",
			gzipSize: true,
			brotliSize: true,
		}),
	],

	build: {
		emptyOutDir: true,
		minify: "oxc",
		outDir: "dist",
		target: "es2023",
		sourcemap: false,

		rolldownOptions: {
			external: [
				/^react(?:\/.*)?$/u,
				/^react-dom(?:\/.*)?$/u,

				// Node APIs используются нашим Vite plugin.
				/^node:/u,

				// Создаётся plugin'ом уже в consuming application.
				/^virtual:@dubium\/icons-registry$/u,
			],

			output: {
				entryFileNames: "[name].js",
				chunkFileNames: "[name].js",
				preserveModules: true,
				preserveModulesRoot: ICONS_ROOT,
			},
		},

		lib: {
			entry: {
				"collection/index": resolve(ICONS_ROOT, "collection/index.ts"),

				"icon/index": resolve(ICONS_ROOT, "icon/index.ts"),

				"vite/index": resolve(ICONS_ROOT, "vite/index.ts"),
			},

			formats: ["es"],
		},
	},
})
