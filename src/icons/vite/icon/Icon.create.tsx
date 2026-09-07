import type { TIconRegistry } from "./Icon.types.js"

import { Icon, type IconProps } from "./Icon.js"

/**
 * Создаёт типизированную обёртку над компонентом `Icon`
 * с поддержкой автодополнения (autocomplete) для кастомных иконок.
 *
 * @typeParam TCustomIcons - Реестр кастомных иконок (обычно `typeof appIcons`);
 * по умолчанию допускаются любые строковые имена
 *
 * @returns Компонент иконки с типобезопасным пропом `name`, включающим
 * иконки из compile-time virtual registry, runtime registry
 * и кастомные иконки приложения.
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
 *   <AppIcon name="User" />     // ✅ кастомная иконка из IconProvider
 *   <AppIcon name="Close" />    // ✅ из compile-time virtual registry
 *   <AppIcon name="Wrong" />    // ❌ ошибка TypeScript
 * </IconProvider>
 * ```
 *
 * @remarks
 * - Требует использования `IconProvider` для передачи реестра иконок в runtime
 * - Без `IconProvider` кастомные иконки не будут найдены
 * - Иконки разрешаются в порядке: `IconProvider` → runtime registry →
 *   `virtual:@dubium/icons-registry`
 * - Используется для улучшения DX (type safety + autocomplete)
 */
export const createIcon = <TCustomIcons extends TIconRegistry = TIconRegistry>() => {
	const TypedIcon = (props: IconProps<TCustomIcons>) => {
		return <Icon<TCustomIcons> {...props} />
	}

	TypedIcon.displayName = "TypedIcon"

	return TypedIcon
}
