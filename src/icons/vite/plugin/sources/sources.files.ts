import { readdir } from "node:fs/promises"
import { extname, isAbsolute, join, relative } from "node:path"

/**
 * Расширения файлов, которые плагин считает исходниками и сканирует.
 *
 * @remarks
 * Файлы с другими расширениями игнорируются при рекурсивном обходе проекта.
 */
export const DEFAULT_EXTENSIONS = new Set([".js", ".jsx", ".mjs", ".cjs", ".ts", ".tsx"])

/**
 * Каталоги, которые плагин пропускает при рекурсивном обходе.
 *
 * @remarks
 * Позволяет не сканировать служебные и сборочные директории, такие как
 * `node_modules`, `dist`, `.git` и т.п.
 */
const DEFAULT_IGNORED_DIRECTORIES = new Set([
	".git",
	".next",
	".nuxt",
	".output",
	".turbo",
	"build",
	"coverage",
	"dist",
	"node_modules",
])

/**
 * Приводит пути к Unix-разделителю `/`.
 *
 * @param value - Путь с разделителями текущей операционной системы
 * @returns Путь с разделителями `/`
 */
export const normalizePath = (value: string): string => value.replaceAll("\\", "/")

/**
 * Проверяет, находится ли путь внутри указанной директории.
 *
 * @param directory - Абсолютный путь к родительской директории
 * @param path - Проверяемый путь
 * @returns `true`, если путь лежит внутри директории или совпадает с ней
 */
export const isPathInsideDirectory = (directory: string, path: string): boolean => {
	const relativePath = relative(directory, path)

	const isInsideDirectory = relativePath === "" || (!relativePath.startsWith("..") && !isAbsolute(relativePath))

	return isInsideDirectory
}

/**
 * Рекурсивно собирает исходные файлы в директории.
 *
 * @remarks
 * Игнорирует каталоги из `DEFAULT_IGNORED_DIRECTORIES` и файлы
 * с расширениями вне `DEFAULT_EXTENSIONS`.
 *
 * @param directory - Абсолютный путь к директории
 * @returns Список путей к исходным файлам
 * @throws Если директорию не удалось прочитать (например, она не существует)
 */
export const getSourceFiles = async (directory: string): Promise<string[]> => {
	let entries

	try {
		entries = await readdir(directory, {
			withFileTypes: true,
		})
	} catch (error) {
		throw new Error(
			`[@dubium/icons] Не удалось прочитать директорию: "${directory}".\n` +
				"Проверьте существование пути и права доступа.",
			{
				cause: error,
			},
		)
	}

	const files: string[] = []

	for (const entry of entries) {
		const path = join(directory, entry.name)

		if (entry.isDirectory()) {
			if (!DEFAULT_IGNORED_DIRECTORIES.has(entry.name)) {
				files.push(...(await getSourceFiles(path)))
			}

			continue
		}

		if (entry.isFile() && DEFAULT_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
			files.push(path)
		}
	}

	return files
}
