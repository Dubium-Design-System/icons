import { useDeferredValue, useMemo, useState } from "react"

import { DEFAULT_ICON_SIZE, DEFAULT_PRIMARY_COLOR, DEFAULT_SECONDARY_COLOR } from "./constants.js"

import { icons } from "./icons.catalog.js"

import styles from "./app.module.css"

import type { TBuilder, TDevView, TIconTab } from "./types.js"

import { DevNavigation } from "./components/DevNavigation.js"

import { Documentation } from "./components/Documentation.js"

import { IconSettings } from "./components/IconSettings.js"

import { IconTabs } from "./components/IconTabs.js"

import { VirtualIconGrid } from "./components/VirtualIconGrid.js"

/**
 * Demo библиотеки иконок.
 */
const App = () => {
	const [activeView, setActiveView] = useState<TDevView>("icons")

	const [search, setSearch] = useState("")

	const [activeTab, setActiveTab] = useState<TIconTab>("all")

	const [builder, setBuilder] = useState<TBuilder>("vite")

	const [primaryColor, setPrimaryColor] = useState(DEFAULT_PRIMARY_COLOR)

	const [secondaryColor, setSecondaryColor] = useState(DEFAULT_SECONDARY_COLOR)

	const [iconSize, setIconSize] = useState(DEFAULT_ICON_SIZE)

	/**
	 * Поиск можно вводить без немедленной
	 * фильтрации большого каталога.
	 */
	const deferredSearch = useDeferredValue(search)

	/**
	 * Фильтруем каталог одновременно
	 * по variant и поисковому запросу.
	 */
	const filteredIcons = useMemo(() => {
		const query = deferredSearch.trim().toLowerCase()

		return icons.filter((icon) => {
			const matchesTab = activeTab === "all" || icon.variant === activeTab

			if (!matchesTab) {
				return false
			}

			if (!query) {
				return true
			}

			return icon.searchValue.includes(query)
		})
	}, [activeTab, deferredSearch])

	/**
	 * При переключении All / Outline / Filled
	 * поиск сбрасывается.
	 */
	const handleIconTabChange = (tab: TIconTab) => {
		setActiveTab(tab)
		setSearch("")
	}

	/**
	 * Virtual list использует ключ
	 * для сброса scroll position.
	 */
	const resetKey = `${activeTab}:${deferredSearch}`

	return (
		<main className={styles.page}>
			<header className={styles.header}>
				<div className={styles.titleRow}>
					<div>
						<h1 className={styles.title}>Иконки</h1>

						{activeView === "icons" && (
							<div className={styles.counter}>
								{filteredIcons.length} из {icons.length}
							</div>
						)}
					</div>

					<DevNavigation activeView={activeView} onChange={setActiveView} />
				</div>

				{activeView === "icons" && (
					<>
						<div className={styles.toolbar}>
							<IconTabs activeTab={activeTab} onChange={handleIconTabChange} />

							<input
								className={styles.search}
								type="search"
								value={search}
								onChange={(event) => setSearch(event.target.value)}
								placeholder={`Поиск среди ${icons.length} иконок`}
								autoComplete="off"
								spellCheck={false}
							/>
						</div>
					</>
				)}
			</header>

			{activeView === "documentation" ? (
				<Documentation />
			) : filteredIcons.length > 0 ? (
				<VirtualIconGrid
					icons={filteredIcons}
					builder={builder}
					iconSize={iconSize}
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					resetKey={resetKey}
				/>
			) : (
				<div className={styles.empty}>
					Иконки по запросу &quot;
					{search}&quot; не найдены
				</div>
			)}

			{activeView === "icons" && (
				<IconSettings
					builder={builder}
					onBuilderChange={setBuilder}
					iconSize={iconSize}
					onIconSizeChange={setIconSize}
					primaryColor={primaryColor}
					onPrimaryColorChange={setPrimaryColor}
					secondaryColor={secondaryColor}
					onSecondaryColorChange={setSecondaryColor}
				/>
			)}
		</main>
	)
}

export default App
