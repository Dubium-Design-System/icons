import { memo, type MemoExoticComponent, useEffect, useMemo, useState, useSyncExternalStore } from "react"

import { iconRegistry } from "virtual:@dubium/icons-registry"

import type { TIcon, TIconLoader, TIconName, TIconRegistry } from "./Icon.types.js"

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
 * Загруженный компонент иконки вместе с loader, из которого он получен.
 *
 * @internal
 */
interface ILoadedIcon {
	/** Компонент иконки для рендера. */
	Component: TIcon

	/** Loader, из которого был получен компонент. */
	loader: TIconLoader
}

/**
 * Свойства компонента {@link Icon}.
 *
 * @typeParam TCustomIcons - Реестр кастомных иконок приложения;
 * по умолчанию допускаются любые строковые имена.
 */
export interface IconProps<TCustomIcons extends TIconRegistry = TIconRegistry> {
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

	/**
	 * Имя иконки: из compile-time virtual registry, runtime registry
	 * или реестра кастомных иконок приложения.
	 */
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
 * 1. `IconProvider` — кастомный реестр приложения;
 * 2. runtime registry — MF / EventBus;
 * 3. compile-time registry текущего Vite-приложения.
 *
 * Загруженные компоненты кэшируются в {@link iconCache}.
 *
 * Компонент отображается только в том случае, если он был загружен
 * текущим loader. Это предотвращает кратковременный рендер предыдущей
 * иконки при изменении `name`.
 *
 * @typeParam TCustomIcons - Реестр кастомных иконок; по умолчанию допускаются
 * любые строковые имена.
 */
const IconComponentBase = <TCustomIcons extends TIconRegistry = TIconRegistry>({
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
				role="img"
				style={{
					...containerStyle,
					visibility: "hidden",
				}}
			/>
		)
	}

	const LoadedIconComponent = loadedIcon.Component

	return (
		<div aria-label={ariaLabel || iconName} onClick={handleOnClick} role="img" style={containerStyle}>
			<LoadedIconComponent color={color} secondaryColor={secondaryColor} />
		</div>
	)
}

const MemoizedIcon = memo(IconComponentBase) as MemoExoticComponent<typeof IconComponentBase> & typeof IconComponentBase

MemoizedIcon.displayName = "Icon"

export { MemoizedIcon as Icon }
