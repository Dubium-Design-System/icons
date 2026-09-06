import { memo, type MemoExoticComponent, useEffect, useMemo, useState, useSyncExternalStore } from "react"

import { iconRegistry } from "virtual:@dubium/icons-registry"

import type { TEmptyIconRegistry, TIcon, TIconLoader, TIconName, TIconRegistry } from "./Icon.types.js"

import { useIconContext } from "../provider/index.js"
import { getRuntimeIconLoader, getRuntimeIconsVersion, subscribeRuntimeIcons } from "../runtime/index.js"

/**
 * Кэш уже загруженных React-компонентов.
 *
 * @remarks
 * Ключом является loader, поэтому разные источники с одинаковым именем
 * не конфликтуют в кэше.
 */
const iconCache = new Map<TIconLoader, TIcon>()

/**
 * Свойства компонента {@link Icon}.
 *
 * @typeParam TCustomIcons - Реестр кастомных иконок, добавляемых к встроенным
 */
export interface IconProps<TCustomIcons extends TIconRegistry = TEmptyIconRegistry> {
	/** Доступное имя иконки (aria-label). */
	ariaLabel?: string
	/** Основной цвет иконки. */
	color?: string
	/** Вторичный цвет для двухцветных иконок. */
	secondaryColor?: string
	/** Угол поворота иконки в градусах. */
	deg?: number
	/** Высота контейнера; переопределяет `size` для высоты. */
	height?: number
	/** Имя иконки: встроенное или из реестра кастомных иконок. */
	name: TIconName<TCustomIcons>
	/** Обработчик клика по контейнеру иконки. */
	onClick?: VoidFunction
	/** Размер контейнера, используется и для ширины, и для высоты. */
	size?: number
	/** Ширина контейнера; переопределяет `size` для ширины. */
	width?: number
}

/**
 * Базовый компонент иконки с поддержкой ленивой загрузки.
 *
 * @remarks
 * Иконка разрешается по следующему порядку:
 * 1. `IconProvider` (кастомный реестр приложения);
 * 2. runtime registry (MF / EventBus);
 * 3. compile-time registry текущего Vite-приложения.
 *
 * Загруженные компоненты кэшируются в {@link iconCache}.
 *
 * @typeParam TCustomIcons - Реестр кастомных иконок
 */
const IconComponentBase = <TCustomIcons extends TIconRegistry = TEmptyIconRegistry>({
	name,
	size = 24,
	width: propWidth,
	height: propHeight,
	color = "var(--icon-color, currentColor)",
	secondaryColor = "var(--icon-secondary-color, currentColor)",
	deg = 0,
	onClick: handleOnClick,
	ariaLabel,
}: IconProps<TCustomIcons>) => {
	const { icons } = useIconContext<TCustomIcons>()
	const iconName = String(name)

	useSyncExternalStore(subscribeRuntimeIcons, getRuntimeIconsVersion, getRuntimeIconsVersion)

	const currentLoader = icons[name] ?? getRuntimeIconLoader(iconName) ?? iconRegistry[iconName]

	const [IconComponent, setIconComponent] = useState<null | TIcon>(() =>
		currentLoader ? (iconCache.get(currentLoader) ?? null) : null,
	)
	const [isLoading, setIsLoading] = useState(false)

	const computedWidth = propWidth ?? size
	const computedHeight = propHeight ?? size

	const containerStyle = useMemo(
		() => ({
			alignItems: "center",
			display: "inline-flex",
			height: computedHeight,
			justifyContent: "center",
			transform: `rotate(${deg}deg)`,
			width: computedWidth,
		}),
		[computedHeight, computedWidth, deg],
	)

	useEffect(() => {
		let ignore = false
		const importIcon = icons[name] ?? getRuntimeIconLoader(iconName) ?? iconRegistry[iconName]

		if (!importIcon) {
			setIsLoading(false)
			setIconComponent(null)
			console.warn(`Иконка "${iconName}" не найдена в IconProvider, runtime registry или compile-time registry.`)

			return () => {
				ignore = true
			}
		}

		const cachedIcon = iconCache.get(importIcon)

		if (cachedIcon) {
			setIsLoading(false)
			setIconComponent(() => cachedIcon)

			return () => {
				ignore = true
			}
		}

		setIsLoading(true)
		setIconComponent(null)

		void importIcon()
			.then((module) => {
				if (ignore) {
					return
				}

				const Component = module.default

				iconCache.set(importIcon, Component)
				setIconComponent(() => Component)
			})
			.catch((error: unknown) => {
				if (ignore) {
					return
				}

				console.error(`Ошибка загрузки иконки "${iconName}":`, error)
				setIconComponent(null)
			})
			.finally(() => {
				if (!ignore) {
					setIsLoading(false)
				}
			})

		return () => {
			ignore = true
		}
	}, [iconName, icons, name, currentLoader])

	if (isLoading || !IconComponent) {
		return <div aria-hidden="true" role="img" style={{ ...containerStyle, visibility: "hidden" }} />
	}

	return (
		<div aria-label={ariaLabel || iconName} onClick={handleOnClick} role="img" style={containerStyle}>
			<IconComponent color={color} secondaryColor={secondaryColor} />
		</div>
	)
}

const MemoizedIcon = memo(IconComponentBase) as MemoExoticComponent<typeof IconComponentBase> & typeof IconComponentBase

MemoizedIcon.displayName = "Icon"

export { MemoizedIcon as Icon }
