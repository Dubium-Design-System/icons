import type { TIconRegistry } from "./Icon.types.js"

import { Icon, type IconProps } from "./Icon.js"

/**
 * Создаёт типизированную обёртку над компонентом `Icon`
 * с поддержкой автодополнения (autocomplete) для кастомных иконок.
 *
 * @typeParam TCustomIcons - Реестр кастомных иконок (обычно `typeof appIcons`);
 * по умолчанию допускаются любые строковые имена
 *
 * @returns Компонент иконки с пропом `name`, тип которого выводится
 * из ключей `TCustomIcons`. Если generic не передан, допускается любое строковое имя.
 *
 * @example
 * ```ts
 * const appIcons = {
 *   User: () => import("./UserIcon"),
 *   Settings: () => import("./SettingsIcon"),
 * } as const;
 *
 * type TAppIcons = typeof appIcons;
 *
 * const AppIcon = createIcon<TAppIcons>();
 * ```
 *
 * ```tsx
 * <IconProvider icons={appIcons}>
 *   <AppIcon name="User" />      // ✅ ключ из TAppIcons
 *   <AppIcon name="Settings" />  // ✅ ключ из TAppIcons
 *   <AppIcon name="Wrong" />     // ❌ ошибка TypeScript
 * </IconProvider>
 * ```
 *
 * @remarks
 * - Требует использования `IconProvider` для передачи реестра иконок в runtime
 * - Без `IconProvider` кастомные иконки не будут найдены
 * - Runtime-разрешение по-прежнему выполняется в порядке:
 *   `IconProvider` → runtime registry → `virtual:@dubium/icons-registry`
 * - При явном `TCustomIcons` TypeScript ограничивает `name` только ключами этого реестра
 * - Для произвольных compile-time/runtime имён используйте обычный `Icon`
 *   либо `createIcon()` без конкретного generic
 * - Используется для улучшения DX (type safety + autocomplete)
 */
export const createIcon = <TCustomIcons extends TIconRegistry = TIconRegistry>() => {
	const TypedIcon = (props: IconProps<TCustomIcons>) => {
		return <Icon<TCustomIcons> {...props} />
	}

	TypedIcon.displayName = "TypedIcon"

	return TypedIcon
}
