/**
 * Находит SVG-файлы независимо от регистра расширения.
 */
export const SVG_FILE_REGEX = /\.svg$/iu

/**
 * Находит generated React-компоненты иконок.
 *
 * Поддерживает:
 *
 * UserIcon.tsx
 * UserFilledIcon.tsx
 * UserOutlineIcon.tsx
 * 123FilledIcon.tsx
 */
export const ICON_COMPONENT_FILE_REGEX = /Icon\.tsx$/u

/**
 * Разбирает имя optimized SVG.
 *
 * Variant (`Filled` / `Outline`) уже является
 * частью публичного имени.
 *
 * @example
 * ```text
 * UserIcon.svg
 * -> User
 *
 * UserFilledIcon.svg
 * -> UserFilled
 *
 * UserOutlineIcon.svg
 * -> UserOutline
 *
 * 123FilledIcon.svg
 * -> 123Filled
 * ```
 */
export const OPTIMIZED_ICON_FILE_REGEX = /^(.+)Icon\.svg$/u

/**
 * Проверяет, начинается ли публичное имя с цифры.
 *
 * Для такого React-компонента используется
 * технический префикс `_`.
 */
export const STARTS_WITH_DIGIT_REGEX = /^\d/u

/**
 * Проверяет валидность JavaScript / TypeScript identifier.
 */
export const JS_IDENTIFIER_REGEX = /^[A-Za-z_$][A-Za-z0-9_$]*$/u

/**
 * Находит XML namespace корневого SVG.
 */
export const SVG_XMLNS_ATTRIBUTE_REGEX = /\s+xmlns="[^"]*"/gu

/**
 * Находит SVG/XML-атрибут с double-quoted значением.
 *
 * До sync SVG уже проходит нормализацию SVGO.
 */
export const SVG_ATTRIBUTE_REGEX = /\b([A-Za-z_:][\w:.-]*)="([^"]*)"/gu

/**
 * Находит paint-атрибуты SVG.
 *
 * Значения могут быть заменены на `color`
 * и `secondaryColor` для `filled` / `outline`.
 */
export const SVG_PAINT_COLOR_REGEX = /\b(?:fill|stroke|stop-color)="([^"]+)"/gu

/**
 * Находит расширение `.tsx`.
 */
export const TSX_EXTENSION_REGEX = /\.tsx$/u
