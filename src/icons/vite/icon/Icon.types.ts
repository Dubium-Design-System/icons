import type { ComponentType } from "react"

import type { IIconComponentProps } from "../../collection/types.js"

/**
 * Тип "пустого" реестра иконок.
 *
 * Используется как значение по умолчанию в generic-параметрах,
 * чтобы избежать использования `{}` (который допускает любые значения).
 *
 * @remarks
 * Обеспечивает корректную типизацию без ослабления type safety.
 */
export type TEmptyIconRegistry = Readonly<Record<never, never>>

/**
 * Тип React-компонента иконки.
 *
 * Каждая иконка должна быть функциональным компонентом,
 * принимающим `IIconComponentProps`.
 */
export type TIcon = ComponentType<IIconComponentProps>

/**
 * Тип модуля, возвращаемого через динамический `import()`.
 *
 * @property default - React-компонент иконки
 */
export type TIconModule = {
	default: TIcon
}

/**
 * Тип функции-лоадера иконки.
 *
 * Используется для lazy loading (code splitting) через `import()`.
 *
 * @example
 * ```ts
 * const loader: TIconLoader = () => import("./CloseIcon");
 * ```
 */
export type TIconLoader = () => Promise<TIconModule>

/**
 * Реестр иконок.
 *
 * Представляет собой словарь, где:
 * - ключ — имя иконки
 * - значение — функция загрузки (lazy import)
 *
 * @example
 * ```ts
 * const icons: TIconRegistry = {
 *   Close: () => import("./CloseIcon"),
 * };
 * ```
 */
export type TIconRegistry = Readonly<Record<string, TIconLoader>>

/**
 * Тип допустимых имён иконок.
 *
 * Объединяет:
 * - кастомные иконки (`TCustomIcons`)
 *
 * @typeParam TCustomIcons - Реестр кастомных иконок
 *
 * @example
 * ```ts
 * type Name = TIconName<typeof appIcons>;
 * // "Close" | "User" | "Settings"
 * ```
 */
export type TIconName<TIcons extends TIconRegistry> = Extract<keyof TIcons, string>

export type { IIconComponentProps }
