import type { ComponentType } from "react"

import type { IIconComponentProps } from "../../collection/types.js"

/**
 * Тип пустого реестра иконок.
 *
 * Используется как default generic, чтобы keyof реестра
 * не превращался в обычный string.
 */
export type TEmptyIconRegistry = Readonly<Record<never, never>>

/**
 * React-компонент иконки.
 */
export type TIcon = ComponentType<IIconComponentProps>

/**
 * Модуль динамически загружаемой иконки.
 */
export type TIconModule = {
	default: TIcon
}

/**
 * Lazy loader иконки.
 */
export type TIconLoader = () => Promise<TIconModule>

/**
 * Runtime / custom registry иконок.
 *
 * В runtime ключом может быть любая строка.
 */
export type TIconRegistry = Readonly<Record<string, TIconLoader>>

/**
 * Все runtime-экспорты collection/index.ts.
 *
 * Например:
 *
 * "AB2Icon"
 * "AbacusIcon"
 * "AccessibleIcon"
 */
type TCollectionExportName = Extract<keyof typeof import("../../collection/index.js"), string>

/**
 * Удаляет суффикс "Icon".
 *
 * Например:
 *
 * "AbacusIcon" -> "Abacus"
 * "AccessibleIcon" -> "Accessible"
 */
type TRemoveIconSuffix<TName extends string> = TName extends `${infer TIconName}Icon` ? TIconName : never

/**
 * Все имена встроенных иконок пакета.
 *
 * Автоматически вычисляется из:
 *
 * src/icons/collection/index.ts
 *
 * Поэтому после sync:icons список обновляется автоматически.
 */
export type TPackageIconName = TRemoveIconSuffix<TCollectionExportName>

/**
 * Допустимое имя иконки.
 *
 * Включает:
 *
 * 1. все встроенные иконки @sg/icons;
 * 2. ключи кастомного registry, если он передан.
 *
 * @example
 *
 * ```ts
 * type TName = TIconName
 *
 * // "AB2" | "Abacus" | "Accessible" | ...
 * ```
 *
 * @example
 *
 * ```ts
 * const customIcons = {
 *   CompanyLogo: () => import("./CompanyLogoIcon"),
 * } as const
 *
 * type TName = TIconName<typeof customIcons>
 *
 * // package icons | "CompanyLogo"
 * ```
 */
export type TIconName<TCustomIcons extends TIconRegistry = TEmptyIconRegistry> =
	| TPackageIconName
	| Extract<keyof TCustomIcons, string>

export type { IIconComponentProps }
