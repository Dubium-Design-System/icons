import styles from "../app.module.css"

import type { TBuilder, TIconItem } from "../types.js"

import { useVirtualIconGrid } from "../hooks/useVirtualIconGrid.js"

import { IconCard } from "./IconCard.js"

type TVirtualIconGridProps = {
	icons: TIconItem[]

	builder: TBuilder

	iconSize: number

	primaryColor: string

	secondaryColor: string

	resetKey: string
}

/**
 * Адаптивная виртуализированная сетка иконок.
 *
 * В DOM находятся только элементы,
 * попадающие в текущий viewport и overscan-зону.
 */
export const VirtualIconGrid = ({
	icons,
	builder,
	iconSize,
	primaryColor,
	secondaryColor,
	resetKey,
}: TVirtualIconGridProps) => {
	const { gridStyle, handleScroll, spacerStyle, viewportRef, visibleIcons } = useVirtualIconGrid({
		icons,
		resetKey,
	})

	return (
		<div ref={viewportRef} className={styles.virtualViewport} onScroll={handleScroll}>
			<div className={styles.virtualSpacer} style={spacerStyle}>
				<div className={styles.virtualGrid} style={gridStyle}>
					{visibleIcons.map((icon) => (
						<IconCard
							key={icon.name}
							icon={icon}
							builder={builder}
							iconSize={iconSize}
							primaryColor={primaryColor}
							secondaryColor={secondaryColor}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
