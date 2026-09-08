import { memo, Suspense } from "react"

import CopyOutlineIcon from "../../icons/collection/CopyOutlineIcon.js"

import styles from "../app.module.css"

import type { TBuilder, TIconItem } from "../types.js"

import { CopyButton } from "./CopyButton.js"

type TIconCardProps = {
	icon: TIconItem

	builder: TBuilder

	iconSize: number

	primaryColor: string

	secondaryColor: string
}

/**
 * Карточка иконки.
 *
 * Vite:
 *
 * ```tsx
 * <Icon name="AIOutline" />
 * ```
 *
 * Не Vite:
 *
 * ```tsx
 * <Icon name={AIOutlineIcon} />
 * ```
 */
export const IconCard = memo(({ icon, builder, iconSize, primaryColor, secondaryColor }: TIconCardProps) => {
	const { Component, componentName, name } = icon

	const isVite = builder === "vite"

	/**
	 * В режиме Vite показываем публичное имя:
	 *
	 * AIOutline
	 *
	 * Без Vite показываем имя компонента:
	 *
	 * AIOutlineIcon
	 */
	const displayName = isVite ? name : componentName

	/**
	 * Код использования компонента.
	 *
	 * Vite:
	 *
	 * <Icon name="AIOutline" />
	 *
	 * Не Vite:
	 *
	 * <Icon name={AIOutlineIcon} />
	 */
	const usage = isVite ? `<Icon name="${name}" />` : `<Icon name={${componentName}} />`

	return (
		<article className={styles.iconCard}>
			<div className={styles.iconPreview}>
				<div
					className={styles.iconSizeBox}
					style={{
						width: iconSize,
						height: iconSize,
					}}
				>
					<Suspense fallback={<div className={styles.iconLoading} />}>
						<Component color={primaryColor} secondaryColor={secondaryColor} />
					</Suspense>
				</div>
			</div>

			<div className={styles.iconName} title={displayName}>
				{displayName}
			</div>

			<div className={styles.iconActions}>
				<CopyButton value={displayName}>
					<span className={styles.copyButtonContent}>
						<span>Название</span>

						<CopyOutlineIcon className={styles.copyIcon} />
					</span>
				</CopyButton>

				<CopyButton value={usage}>
					<span className={styles.copyButtonContent}>
						<span>Компонент</span>

						<CopyOutlineIcon className={styles.copyIcon} />
					</span>
				</CopyButton>
			</div>
		</article>
	)
})

IconCard.displayName = "IconCard"
