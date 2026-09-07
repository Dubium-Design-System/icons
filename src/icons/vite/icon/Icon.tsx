import { memo, type MemoExoticComponent, useEffect, useMemo, useState, useSyncExternalStore } from "react"

import { iconRegistry } from "virtual:@dubium/icons-registry"

import type { TEmptyIconRegistry, TIcon, TIconLoader, TIconName, TIconRegistry } from "./Icon.types.js"

import { useIconContext } from "../provider/index.js"
import { getRuntimeIconLoader, getRuntimeIconsVersion, subscribeRuntimeIcons } from "../runtime/index.js"

/**
 * Кэш уже загруженных React-компонентов.
 *
 * Ключом является loader, поэтому разные источники
 * с одинаковым именем не конфликтуют между собой.
 */
const iconCache = new Map<TIconLoader, TIcon>()

/**
 * Загруженный компонент иконки вместе с loader,
 * из которого он был получен.
 */
interface ILoadedIcon {
	Component: TIcon
	loader: TIconLoader
}

/**
 * Props компонента Icon.
 *
 * По умолчанию `name` содержит autocomplete
 * всех встроенных иконок @sg/icons.
 *
 * Если передан custom registry, его ключи также
 * добавляются в autocomplete.
 */
export interface IconProps<TCustomIcons extends TIconRegistry = TEmptyIconRegistry> {
	/**
	 * Accessible label.
	 *
	 * Если не передан, иконка считается декоративной.
	 */
	ariaLabel?: string

	/**
	 * Основной цвет.
	 */
	color?: string

	/**
	 * Вторичный цвет для двухцветных иконок.
	 */
	secondaryColor?: string

	/**
	 * Поворот в градусах.
	 */
	deg?: number

	/**
	 * Высота.
	 *
	 * Имеет приоритет над size.
	 */
	height?: number

	/**
	 * Имя иконки.
	 *
	 * VS Code должен предлагать все имена,
	 * экспортируемые из collection/index.ts.
	 */
	name: TIconName<TCustomIcons>

	/**
	 * Размер иконки.
	 */
	size?: number

	/**
	 * Ширина.
	 *
	 * Имеет приоритет над size.
	 */
	width?: number
}

/**
 * Базовый компонент Icon.
 *
 * Иконка разрешается в следующем порядке:
 *
 * 1. IconProvider;
 * 2. runtime registry;
 * 3. compile-time virtual registry.
 */
const IconComponentBase = <TCustomIcons extends TIconRegistry = TEmptyIconRegistry>({
	name,
	size = 24,
	width: propWidth,
	height: propHeight,
	color = "var(--icon-color, currentColor)",
	secondaryColor = "var(--icon-secondary-color, currentColor)",
	deg = 0,
	ariaLabel,
}: IconProps<TCustomIcons>) => {
	const { icons } = useIconContext<TCustomIcons>()

	const iconName = String(name)

	useSyncExternalStore(subscribeRuntimeIcons, getRuntimeIconsVersion, getRuntimeIconsVersion)

	const currentLoader = icons[name] ?? getRuntimeIconLoader(iconName) ?? iconRegistry[iconName]

	const [loadedIcon, setLoadedIcon] = useState<ILoadedIcon | null>(() => {
		if (!currentLoader) {
			return null
		}

		const cachedIcon = iconCache.get(currentLoader)

		return cachedIcon
			? {
					Component: cachedIcon,
					loader: currentLoader,
				}
			: null
	})

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

		if (!currentLoader) {
			setIsLoading(false)
			setLoadedIcon(null)

			console.warn(`Иконка "${iconName}" не найдена в IconProvider, runtime registry или compile-time registry.`)

			return () => {
				ignore = true
			}
		}

		const cachedIcon = iconCache.get(currentLoader)

		if (cachedIcon) {
			setIsLoading(false)

			setLoadedIcon({
				Component: cachedIcon,
				loader: currentLoader,
			})

			return () => {
				ignore = true
			}
		}

		setIsLoading(true)
		setLoadedIcon(null)

		void currentLoader()
			.then((module) => {
				if (ignore) {
					return
				}

				const Component = module.default

				iconCache.set(currentLoader, Component)

				setLoadedIcon({
					Component,
					loader: currentLoader,
				})
			})
			.catch((error: unknown) => {
				if (ignore) {
					return
				}

				console.error(`Ошибка загрузки иконки "${iconName}":`, error)

				setLoadedIcon(null)
			})
			.finally(() => {
				if (!ignore) {
					setIsLoading(false)
				}
			})

		return () => {
			ignore = true
		}
	}, [currentLoader, iconName])

	const isCurrentIconReady = loadedIcon !== null && loadedIcon.loader === currentLoader

	if (isLoading || !isCurrentIconReady) {
		return (
			<div
				aria-hidden="true"
				style={{
					...containerStyle,
					visibility: "hidden",
				}}
			/>
		)
	}

	const LoadedIconComponent = loadedIcon.Component

	return (
		<div
			aria-hidden={ariaLabel ? undefined : true}
			aria-label={ariaLabel}
			role={ariaLabel ? "img" : undefined}
			style={containerStyle}
		>
			<LoadedIconComponent aria-hidden="true" color={color} focusable="false" secondaryColor={secondaryColor} />
		</div>
	)
}

const MemoizedIcon = memo(IconComponentBase) as MemoExoticComponent<typeof IconComponentBase> & typeof IconComponentBase

MemoizedIcon.displayName = "Icon"

export { MemoizedIcon as Icon }
