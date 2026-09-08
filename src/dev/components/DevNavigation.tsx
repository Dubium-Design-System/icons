import styles from "../app.module.css"

import type { TDevView } from "../types.js"

type TDevNavigationProps = {
	activeView: TDevView

	onChange: (view: TDevView) => void
}

const views: Array<{
	label: string
	value: TDevView
}> = [
	{
		label: "Иконки",
		value: "icons",
	},
	{
		label: "Документация",
		value: "documentation",
	},
]

/**
 * Основная навигация dev-приложения.
 */
export const DevNavigation = ({ activeView, onChange }: TDevNavigationProps) => {
	return (
		<div className={styles.viewTabs} role="tablist" aria-label="Раздел">
			{views.map(({ label, value }) => (
				<button
					key={value}
					type="button"
					role="tab"
					aria-selected={activeView === value}
					className={activeView === value ? `${styles.viewTab} ${styles.viewTabActive}` : styles.viewTab}
					onClick={() => onChange(value)}
				>
					{label}
				</button>
			))}
		</div>
	)
}
