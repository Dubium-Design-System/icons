import styles from "../app.module.css"

import type { TIconTab } from "../types.js"

type TIconTabsProps = {
	activeTab: TIconTab
	onChange: (tab: TIconTab) => void
}

const tabs: Array<{
	label: string
	value: TIconTab
}> = [
	{
		label: "Все",
		value: "all",
	},
	{
		label: "Outline",
		value: "outline",
	},
	{
		label: "Filled",
		value: "filled",
	},
]

/**
 * Фильтр по variant.
 */
export const IconTabs = ({ activeTab, onChange }: TIconTabsProps) => {
	return (
		<div className={styles.tabs} role="tablist" aria-label="Тип иконок">
			{tabs.map(({ label, value }) => (
				<button
					key={value}
					type="button"
					role="tab"
					aria-selected={activeTab === value}
					className={activeTab === value ? `${styles.tab} ${styles.tabActive}` : styles.tab}
					onClick={() => onChange(value)}
				>
					{label}
				</button>
			))}
		</div>
	)
}
