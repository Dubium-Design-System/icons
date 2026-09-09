import { useState } from "react"

import { MAX_ICON_SIZE, MIN_ICON_SIZE } from "../constants.js"

import styles from "../app.module.css"

import type { TBuilder } from "../types.js"

type TIconSettingsProps = {
	builder: TBuilder

	onBuilderChange: (value: TBuilder) => void

	iconSize: number

	onIconSizeChange: (value: number) => void

	primaryColor: string

	onPrimaryColorChange: (value: string) => void

	secondaryColor: string

	onSecondaryColorChange: (value: string) => void

	strokeWidth: number

	onStrokeWidthChange: (value: number) => void
}

export const IconSettings = ({
	builder,
	onBuilderChange,
	iconSize,
	onIconSizeChange,
	primaryColor,
	onPrimaryColorChange,
	secondaryColor,
	onSecondaryColorChange,
	strokeWidth,
	onStrokeWidthChange,
}: TIconSettingsProps) => {
	const [isOpen, setIsOpen] = useState(true)

	const isVite = builder === "vite"

	const handleBuilderChange = () => {
		onBuilderChange(isVite ? "other" : "vite")
	}

	return (
		<div className={styles.settings}>
			{isOpen && (
				<div className={styles.settingsPanel}>
					<div className={styles.settingsHeader}>Настройки</div>

					<div className={styles.settingField}>
						<div className={styles.settingLabel}>
							<button
								type="button"
								role="switch"
								aria-checked={isVite}
								aria-label="Использовать Vite API"
								className={isVite ? `${styles.switch} ${styles.switchActive}` : styles.switch}
								onClick={handleBuilderChange}
							>
								<span className={styles.switchThumb} />
							</button>

							<div>Сборщик</div>

							<div className={styles.settingHint}>{isVite ? "Vite" : "Не Vite"}</div>
						</div>
					</div>

					<label className={styles.settingField}>
						<span>Основной цвет</span>

						<div className={styles.colorControl}>
							<input
								type="color"
								value={primaryColor}
								onChange={(event) => onPrimaryColorChange(event.target.value)}
							/>

							<code>{primaryColor}</code>
						</div>
					</label>

					<label className={styles.settingField}>
						<span>Дополнительный цвет</span>

						<div className={styles.colorControl}>
							<input
								type="color"
								value={secondaryColor}
								onChange={(event) => onSecondaryColorChange(event.target.value)}
							/>

							<code>{secondaryColor}</code>
						</div>
					</label>

					<label className={styles.settingField}>
						<div className={styles.rangeLabel}>
							<span>Толщина обводки</span>
							<strong>{strokeWidth.toFixed(1)}px</strong>
						</div>

						<input
							className={styles.range}
							type="range"
							min={1.2}
							max={3.8}
							step={0.1}
							value={strokeWidth}
							aria-valuetext={`${strokeWidth.toFixed(1)}px`}
							onChange={(event) => onStrokeWidthChange(event.currentTarget.valueAsNumber)}
						/>
					</label>

					<label className={styles.settingField}>
						<div className={styles.rangeLabel}>
							<span>Размер</span>

							<strong>{iconSize}px</strong>
						</div>

						<input
							className={styles.range}
							type="range"
							min={MIN_ICON_SIZE}
							max={MAX_ICON_SIZE}
							value={iconSize}
							onChange={(event) => onIconSizeChange(Number(event.target.value))}
						/>
					</label>
				</div>
			)}

			<button
				type="button"
				className={styles.settingsToggle}
				aria-expanded={isOpen}
				onClick={() => setIsOpen((value) => !value)}
			>
				{isOpen ? "Скрыть настройки" : "Настройки"}
			</button>
		</div>
	)
}
