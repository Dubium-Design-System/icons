import type { CSSProperties, ReactNode } from "react"

/**
 * Свойства контейнера иконки.
 */
export interface IconContainerProps {
	/** Доступное имя иконки. */
	ariaLabel?: string

	/** Угол поворота иконки в градусах. */
	deg?: number

	/** Высота контейнера. */
	height?: number | string

	/** Размер контейнера по умолчанию. */
	size?: number | string

	/** Дополнительные CSS-стили контейнера. */
	style?: CSSProperties

	/** Ширина контейнера. */
	width?: number | string

	/** Содержимое контейнера. */
	children: ReactNode
}

/**
 * Универсальный контейнер для отображения иконки.
 *
 * @remarks
 * Контейнер управляет размерами, поворотом и доступностью.
 * Не зависит от способа рендера и может использоваться как
 * при клиентском рендеринге, так и при SSR.
 */
export const IconContainer = ({
	ariaLabel,
	children,
	deg = 0,
	height,
	size = 24,
	style,
	width,
}: IconContainerProps) => (
	<span
		aria-label={ariaLabel}
		aria-hidden={ariaLabel ? undefined : true}
		role={ariaLabel ? "img" : undefined}
		style={{
			display: "inline-flex",
			flexShrink: 0,
			height: height ?? size,
			lineHeight: 0,
			transform: deg ? `rotate(${deg}deg)` : undefined,
			width: width ?? size,
			...style,
		}}
	>
		{children}
	</span>
)
