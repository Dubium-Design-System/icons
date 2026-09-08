import { memo, type ReactNode, useEffect, useRef, useState } from "react"

import styles from "../app.module.css"

type TCopyButtonProps = {
	children: ReactNode

	value: string
}

/**
 * Копирует текст через Clipboard API.
 *
 * @param value Текст для копирования.
 */
const copyText = async (value: string): Promise<void> => {
	if (!navigator.clipboard?.writeText) {
		throw new Error("Clipboard API недоступен")
	}

	await navigator.clipboard.writeText(value)
}

/**
 * Кнопка копирования.
 *
 * После успешного копирования временно
 * показывает состояние `Скопировано`.
 */
export const CopyButton = memo(({ children, value }: TCopyButtonProps) => {
	const [copied, setCopied] = useState(false)

	const timeoutRef = useRef<number | null>(null)

	useEffect(() => {
		return () => {
			if (timeoutRef.current !== null) {
				window.clearTimeout(timeoutRef.current)
			}
		}
	}, [])

	const handleClick = async () => {
		try {
			await copyText(value)

			setCopied(true)

			if (timeoutRef.current !== null) {
				window.clearTimeout(timeoutRef.current)
			}

			timeoutRef.current = window.setTimeout(() => {
				setCopied(false)
			}, 1000)
		} catch (error) {
			console.error("Не удалось скопировать:", error)
		}
	}

	return (
		<button type="button" className={styles.copyButton} onClick={handleClick} title={`Скопировать: ${value}`}>
			{copied ? <span className={styles.copyButtonContent}>Скопировано</span> : children}
		</button>
	)
})

CopyButton.displayName = "CopyButton"
