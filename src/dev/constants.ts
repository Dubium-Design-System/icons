/**
 * Минимальная ширина карточки.
 *
 * Используется для расчёта
 * адаптивного количества колонок.
 */
export const MIN_COLUMN_WIDTH = 240

/**
 * Расстояние между колонками и строками.
 */
export const GRID_GAP = 12

/**
 * Высота одной карточки.
 *
 * Должна соответствовать `.iconCard`
 * в `app.module.css`.
 */
export const CARD_HEIGHT = 250

/**
 * Полная высота virtual row:
 *
 * card + gap.
 */
export const ROW_STRIDE = CARD_HEIGHT + GRID_GAP

/**
 * Количество дополнительных строк,
 * которые рендерятся сверху и снизу viewport.
 */
export const OVERSCAN_ROWS = 3

/**
 * Минимальный размер отображаемой иконки.
 */
export const MIN_ICON_SIZE = 16

/**
 * Максимальный размер отображаемой иконки.
 */
export const MAX_ICON_SIZE = 64

/**
 * Размер иконки по умолчанию.
 */
export const DEFAULT_ICON_SIZE = 48

/**
 * Основной цвет по умолчанию в demo.
 */
export const DEFAULT_PRIMARY_COLOR = "#354052"

/**
 * Дополнительный цвет по умолчанию в demo.
 */
export const DEFAULT_SECONDARY_COLOR = "#8c96a3"

/**
 * Generated-суффикс файла иконки.
 */
export const ICON_FILE_SUFFIX = "Icon.tsx"
