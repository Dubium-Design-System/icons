/**
 * СГЕНЕРИРОВАНО АВТОМАТИЧЕСКИ скриптом scripts/sync-icons.mjs.
 * Источник истины: icons/source/*.svg.
 * Не редактировать вручную.
 */

import type { TIconRegistry } from "./Icon.types.js"

export const defaultIcons = {
	Icon123: () => import("../../collection/Icon123Icon.js"),
	Icon24Hours: () => import("../../collection/Icon24HoursIcon.js"),
	Icon2fa: () => import("../../collection/Icon2faIcon.js"),
	Icon360: () => import("../../collection/Icon360Icon.js"),
	Icon360View: () => import("../../collection/Icon360ViewIcon.js"),
} as const satisfies TIconRegistry

export type TDefaultIconName = keyof typeof defaultIcons
